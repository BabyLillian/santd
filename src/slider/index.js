/**
 * @file 组件 slider
 * @author chenkai13 <chenkai13@baidu.com>
 */

import './style/index.less';
import san from 'san';
import Tooltip from '../tooltip';
import Slider from './src/slider';
import Range from './src/range';
import Handle from './src/handle';
import Steps from './src/steps';
import Marks from './src/marks';
import Track from './track';
import * as utils from './src/utils';
import {classCreator} from '../core/util';

const prefixCls = classCreator('slider')();

function tipFormatter(value) {
    return String(value);
}

function ensureValueInRange(val, min, max) {
    if (val < min) {
        return min;
    }

    if (val > max) {
        return max;
    }

    return val;
}


function ensureValuePrecision(val, step, marks, min, max) {
    const points = Object.keys(marks).map(parseFloat);

    if (step !== null) {
        const maxSteps = Math.floor((max - min) / step);
        const steps = Math.min((val - min) / step, maxSteps);

        points.push(Math.round(steps) * step + min);
    }
    const diffs = points.map(point => Math.abs(val - point));

    let closestPoint = points[diffs.indexOf(Math.min(...diffs))];
    if (!isFinite(closestPoint)) {
        closestPoint = 0;
    }

    return step === null ? closestPoint : closestPoint.toFixed(getPrecision(step)) - 0;
}

function getPrecision(step) {
    let stepString = String(step);
    let precision = 0;
    let dotIndex = stepString.indexOf('.');

    if (dotIndex >= 0) {
        precision = stepString.length - dotIndex - 1;
    }

    return precision;
}

function isEventFromHandle(eventTarget, handles) {
    for (let key in handles) {
        let handle = handles[key];
        if (handle && handle.el  === eventTarget) {
            return true;
        }
    }

    return false;
}

function getHandleCenterPosition(vertical, eventTarget) {
    const coords = eventTarget.getBoundingClientRect();
    return vertical
        ? coords.top + (coords.height * 0.5)
        : window.pageXOffset + coords.left + (coords.width * 0.5);
}

export default san.defineComponent({
    template: `<div
        style="{{vertical ? 'height: 100%;' : ''}}"
        class="${prefixCls} {{classes}}"
        on-mousedown="rootMouseDown"
        on-mouseup="rootMouseUp"
        on-focus="rootFocus"
        on-blur="rootBlur"
    >
        <div class="${prefixCls}-rail" />
        <s-track
            s-if="included"
            s-for="track, index in tracks"
            vertical="{{vertical}}"
            included="{{included}}"
            offset="{{trackOffsets[index]}}"
            length="{{trackOffsets[index + 1] - trackOffsets[index]}}"
            index="{{index + 1}}"
        />
        <s-steps
            vertical="{{vertical}}"
            marks="{{marks}}"
            dots="{{dots}}"
            step="{{step}}"
            included="{{included}}"
            max="{{max}}"
            min="{{min}}"
            dotStyle="{{dotStyle}}"
            activeDotStyle="{{activeDotStyle}}"
        />
        <handles s-ref="handles" />
        <s-marks
            vertical="{{vertical}}"
            marks="{{marks}}"
            included="{{included}}"
            max="{{max}}"
            min="{{min}}"
        />
    </div>`,

    components: {
        's-steps': Steps,
        's-marks': Marks,
        's-track': Track
    },

    messages: {
        santd_slider_handle_save(payload) {
            const instance = payload.value;
            const index = instance.data.get('index') || 0;

            this.handlesRefs[index] = instance;
        }
    },

    computed: {
        classes() {
            const disabled = this.data.get('disabled');
            const vertical = this.data.get('vertical');
            const marks = this.data.get('marks');

            let classArr = [];
            Object.keys(marks).length && classArr.push(`${prefixCls}-with-marks`);
            disabled && classArr.push(`${prefixCls}-disabled`);
            vertical && classArr.push(`${prefixCls}-vertical`);
            return classArr;
        },

        bounds() {
            let value = this.data.get('value');
            let min = this.data.get('min');
            let max = this.data.get('max');
            let step = this.data.get('step');
            let marks = this.data.get('marks');

            if (value) {
                return value.map(v => ensureValuePrecision(ensureValueInRange(v, min, max), step, marks, min, max));
            }
        },

        recent() {
            let bounds = this.data.get('bounds');
            let max = this.data.get('max');

            return bounds[0] === max ? 0 : bounds.length - 1;
        },

        tracks() {
            return this.data.get('bounds').slice(0, -1);
        },

        trackOffsets() {
            let min = this.data.get('min');
            let max = this.data.get('max');
            let bounds = this.data.get('bounds');

            return bounds.map(v => (v - min) / (max - min) * 100);
        }
    },

    initData() {
        return {
            min: 0,
            max: 100,
            step: 1,
            marks: {},
            included: true,
            disabled: false,
            dots: false,
            vertical: false,
            trackStyle: [{}],
            handleStyle: [{}],
            railStyle: {},
            dotStyle: {},
            activeDotStyle: {},

            tipFormatter
        };
    },

    inited() {
        this.handlesRefs = {};

        let min = this.data.get('min');
        let value = this.data.get('value');
        if (!value) {
            this.data.set('value', this.data.get('defaultValue') || [min, min]);
        }
    },

    rootBlur(e) {
        if (!this.data.get('disabled')) {
            this.handleEnd();
            this.fire('blur', e);
        }
    },

    rootFocus(e) {
        const disabled = this.data.get('disabled');

        if (!disabled && isEventFromHandle(e.target, this.handlesRefs)) {
            e.stopPropagation();
            e.preventDefault();

            const vertical = this.data.get('vertical');
            const handlePosition = getHandleCenterPosition(vertical, e.target);

            this.dragOffset = 0;
            this.handleStart(handlePosition);
            
            this.fire('focus', e);
        }
    },

    rootMouseDown(e) {
        if (!this.data.get('disabled')) {
            if (e.button !== 0) {
                return;
            }

            let vertical = this.data.get('vertical');
            let position = vertical ? e.clientY : e.pageX;
            if (!isEventFromHandle(e, this.handlesRefs)) {
                this.dragOffset = 0;
            }
            else {
                const handlePosition = getHandleCenterPosition(vertical, e.target);
                this.dragOffset = position - handlePosition;
                position = handlePosition;
            }
            this.removeDocumentEvents();
            this.handleStart(position);
            this.addDocumentMouseEvents();
        }
    },

    rootMouseUp() {
        const disabled = this.data.get('disabled');
        if (!disabled) {
            const prevMovedHandleIndex = this.data.get('prevMovedHandleIndex');
            if (this.handlesRefs[prevMovedHandleIndex]) {
                this.handlesRefs[prevMovedHandleIndex].clickFocus();
            }
        }
    },

    handleStart(position) {
        const bounds = this.data.get('bounds');
        this.fire('beforeChange', bounds);

        const value = this.calcValueByPos(position);
        this.startValue = value;
        this.startPosition = position;

        const closestBound = this.getClosestBound(value);
        this.prevMovedHandleIndex = this.getBoundNeedMoving(value, closestBound);

        this.data.set('handles', this.prevMovedHandleIndex);
        this.data.set('recent', this.prevMovedHandleIndex);

        const nextBounds = [...bounds];
        nextBounds[this.prevMovedHandleIndex] = value;
        this.handleChange({bounds: nextBounds});
    },

    getClosestBound(value) {
        const bounds = this.data.get('bounds');
        let closestBound = 0;
        for (let i = 1; i < bounds.length - 1; ++i) {
            if (value >= bounds[i]) {
                closestBound = i;
            }
        }
        if (Math.abs(bounds[closestBound + 1] - value) < Math.abs(bounds[closestBound] - value)) {
            closestBound += 1;
        }
        return closestBound;
    },

    getBoundNeedMoving(value, closestBound) {
        const {
            bounds,
            recent
        } = this.data.get();
        let boundNeedMoving = closestBound;
        const isAtTheSamePoint = (bounds[closestBound + 1] === bounds[closestBound]);

        if (isAtTheSamePoint && bounds[recent] === bounds[closestBound]) {
            boundNeedMoving = recent;
        }

        if (isAtTheSamePoint && (value !== bounds[closestBound + 1])) {
            boundNeedMoving = value < bounds[closestBound + 1] ? closestBound : closestBound + 1;
        }
        return boundNeedMoving;
    },

    handleMouseMove(e) {
        if (!this.el) {
            this.handleEnd();
            return;
        }

        const position = this.data.get('vertical') ? e.clientY : e.pageX;
        this.handleMove(e, position - this.dragOffset);
    },

    handleMove(e, position) {
        e.stopPropagation();
        e.preventDefault();

        // const oldValue = this.data.get('value');
        const value = this.calcValueByPos(position);
        const handles = this.data.get('handles');
        if (this.data.get('bounds')[handles] !== value) {
            this.moveTo(value);
        }
    },

    moveTo(value) {
        const bounds = this.data.get('bounds');
        const handles = this.data.get('handles');
        const recent = this.data.get('recent');

        const nextBounds = [...bounds];
        const handle = handles === null ? recent : handles;
        nextBounds[handle] = value;
        let nextHandle = handle;
        if (this.data.get('pushable') !== false) {
            this.pushSurroundingHandles(nextBounds, nextHandle);
        }
        else if (this.data.get('allowCross')) {
            nextBounds.sort((a, b) => a - b);
            nextHandle = nextBounds.indexOf(value);
        }
        this.handleChange({
            recent: nextHandle,
            handles: nextHandle,
            bounds: nextBounds
        });
    },

    handleChange(state) {
        ['handles', 'recent'].forEach(item => {
            if (state[item]) {
                this.data.set(item, state[item]);
            }
        });

        const changedValue = state.bounds;
        this.data.set('bounds', state.bounds);

        this.fire('change', changedValue);
    },


    handleEnd() {
        this.removeDocumentEvents();
        if (this.data.get('handles') !== null) {
            this.fire('afterChange', this.data.get('value'));
        }
        this.data.set('handles', null);

        // this.fire('end');
        if (!this.data.get('range')) {
            this.ref('handles').data.set('visible', false);
        }
    },

    addDocumentMouseEvents() {
        if (this.el) {
            this._mouseMoveHandler = this.handleMouseMove.bind(this);
            this._endHandler = this.handleEnd.bind(this);
            this.el.ownerDocument.addEventListener('mousemove', this._mouseMoveHandler);
            this.el.ownerDocument.addEventListener('mouseup', this._endHandler);
        }
    },

    removeDocumentEvents() {
        if (this.el && this._endHandler) {
            this.el.ownerDocument.removeEventListener('mousemove', this._mouseMoveHandler);
            this.el.ownerDocument.removeEventListener('mouseup', this._endHandler);

            this._endHandler = this._mouseMoveHandler = null;
        }
    },

    calcOffset(value) {
        const {
            min,
            max
        } = this.data.get();
        const ratio = (value - min) / (max - min);
        return ratio * 100;
    },

    getSliderStart() {
        const rect = this.el.getBoundingClientRect();

        return this.data.get('vertical') ? rect.top : (rect.left + window.pageXOffset);
    },

    getSliderLength() {
        const slider = this.el;
        if (!slider) {
            return 0;
        }

        const coords = slider.getBoundingClientRect();
        return this.data.get('vertical') ? coords.height : coords.width;
    },

    calcValue(offset) {
        const {
            vertical,
            min,
            max
        } = this.data.get();
        const ratio = Math.abs(Math.max(offset, 0) / this.getSliderLength());
        const value = vertical ? (1 - ratio) * (max - min) + min : ratio * (max - min) + min;
        return value;
    },

    calcValueByPos(position) {
        const pixelOffset = position - this.getSliderStart();
        const nextValue = this.trimAlignValue(this.calcValue(pixelOffset));
        return nextValue;
    }
});



/*

export default san.defineComponent({
    initData() {
        const that = this;
        return {
            tipFormatter(value) {
                return value.toString();
            }
        };
    },
    handleMove(value) {
        const slider = this.ref('slider');
        if (!this.data.get('range')) {
            const handles = slider.ref('handles');
            const tooltip = handles.ref('tooltip');
            tooltip.data.set('title', value);
            this.nextTick(() => {
                tooltip.refresh();
            });
        }
    },
    handleEnd() {
        const slider = this.ref('slider');
        if (!this.data.get('range')) {
            const handles = slider.ref('handles');
            handles.data.set('visible', false);
        }
    },
    handleChange(value) {
        this.fire('change', value);
    },
    handleAfterChange(value) {
        this.fire('afterChange', value);
    },
    focus() {
        this.ref('slider').focus();
    },
    blur() {
        this.ref('slider').blur();
    },
    components: {
        's-slider': Slider,
        's-range': Range
    },
    template: `<div style="{{vertical ? 'height: 100%;' : ''}}">
        <s-range
            s-if="range"
            tipFormatter="{{tipFormatter}}"
            defaultValue="{{defaultValue}}"
            disabled="{{disabled}}"
            min="{{min}}"
            max="{{max}}"
            step="{{step}}"
            vertical="{{vertical}}"
            marks="{{marks}}"
            value="{{value}}"
            included="{{included}}"
            tooltipVisible="{{tooltipVisible}}"
            dots="{{dots}}"
            on-move="handleMove"
            on-end="handleEnd"
            on-change="handleChange"
            on-afterChange="handleAfterChange"
            s-ref="range"
        />
        <s-slider
            s-else
            tipFormatter="{{tipFormatter}}"
            defaultValue="{{defaultValue}}"
            disabled="{{disabled}}"
            min="{{min}}"
            max="{{max}}"
            step="{{step}}"
            vertical="{{vertical}}"
            marks="{{marks}}"
            value="{{value}}"
            included="{{included}}"
            tooltipVisible="{{tooltipVisible}}"
            dots="{{dots}}"
            on-move="handleMove"
            on-end="handleEnd"
            on-change="handleChange"
            on-afterChange="handleAfterChange"
            s-ref="slider"
        />
    </div>`
});
*/