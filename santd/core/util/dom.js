/**
 * @file DOM相关基础库
 */

const {documentElement, body, compatMode} = document;
const viewRoot = compatMode === 'BackCompat' ? body : documentElement;

export function hasClass(elements, cls)  {
    return elements.className
        && typeof elements.className === 'string'
        && elements.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
}

export function addClass(ele, cls) {
    if (!hasClass(ele, cls)) {
        ele.className += ' ' + cls;
    }
}

export function removeClass(ele, cls) {
    if (hasClass(ele, cls)) {
        const reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
        ele.className = ele.className.replace(reg, ' ');
    }
}

/**
 * 获取元素在页面中的位置和尺寸信息
 *
 * @param {HTMLElement} element 目标元素
 * @return {Object} 元素的尺寸和位置信息，
 * 包含`top`、`right`、`bottom`、`left`、`width`和`height`属性
 */
export function getOffset(element) {
    if (!element) {
        return {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            width: 0,
            height: 0
        };
    }

    let rect = element.getBoundingClientRect();
    let offset = {
        top: rect.top,
        right: rect.right,
        bottom: rect.bottom,
        left: rect.left,
        width: rect.right - rect.left,
        height: rect.bottom - rect.top
    };
    let clientTop = document.documentElement.clientTop || document.body.clientTop || 0;
    let clientLeft = document.documentElement.clientLeft || document.body.clientLeft || 0;
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    offset.top = offset.top + scrollTop - clientTop;
    offset.bottom = offset.bottom + scrollTop - clientTop;
    offset.left = offset.left + scrollLeft - clientLeft;
    offset.right = offset.right + scrollLeft - clientLeft;
    return offset;
};

/**
 * 获取页面宽度
 *
 * @return {number} 页面宽度
 */
export function getPageWidth() {
    return Math.max(
        documentElement ? documentElement.scrollWidth : 0,
        body ? body.scrollWidth : 0,
        viewRoot ? viewRoot.clientWidth : 0,
        0
    );
}

/**
 * 获取页面高度
 *
 * @return {number} 页面高度
 */
export function getPageHeight() {
    return Math.max(
        documentElement ? documentElement.scrollHeight : 0,
        body ? body.scrollHeight : 0,
        viewRoot ? viewRoot.clientHeight : 0,
        0
    );
}

export function getScroll(target, top) {
    if (typeof window === 'undefined') {
        return 0;
    }

    const prop = top ? 'pageYOffset' : 'pageXOffset';
    const method = top ? 'scrollTop' : 'scrollLeft';
    const isWindow = target === window;

    let ret = isWindow ? target[prop] : target[method];
    // ie6,7,8 standard mode
    if (isWindow && typeof ret !== 'number') {
        ret = document.documentElement[method];
    }

    return ret;
}

/**
 * 获取页面视觉区域宽度
 *
 * @return {number} 页面视觉区域宽度
 */
export function getViewWidth() {
    return viewRoot ? viewRoot.clientWidth : 0;
}

/**
 * 获取页面视觉区域高度
 *
 * @return {number} 页面视觉区域高度
 */
export function getViewHeight() {
    return viewRoot ? viewRoot.clientHeight : 0
}

/**
 * 获取纵向滚动量
 *
 * @return {number} 纵向滚动量
 */
export function getScrollTop() {
    return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
}

/**
 * 获取横向滚动量
 *
 * @return {number} 横向滚动量
 */
export function getScrollLeft() {
    return window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;
}

/**
 * 获取页面纵向坐标
 *
 * @return {number}
 */
export function getClientTop() {
    return document.documentElement.clientTop || document.body.clientTop || 0;
}

/**
 * 获取页面横向坐标
 *
 * @return {number}
 */
export function getClientLeft() {
    return document.documentElement.clientLeft || document.body.clientLeft || 0;
}

/**
 * 封装addEventListener
 *
 * @return {function}
 */
export let on = document.addEventListener
    ? function(element, event, handler) {
        if (element && event && handler) {
            element.addEventListener(event, handler, false);
        }
    }
    : function(element, event, handler) {
        if (element && event && handler) {
            element.attachEvent('on' + event, handler);
        }
    };

/**
 * 封装removeEventListener
 *
 * @return {function}
 */

export let off = document.removeEventListener
    ? function(element, event, handler) {
        if (element && event) {
            element.removeEventListener(event, handler, false);
        }
    }
    : function(element, event, handler) {
        if (element && event) {
            element.detachEvent('on' + event, handler);
        }
    };

/**
 * 判断某个元素是否在外层元素中
 * @param root 外层元素
 * @param n 被检测的元素
 *
 * @return {boolean}
 */

export function contains(root, n) {
    let node = n;
    while (node) {
        if (node === root) {
            return true;
        }
        node = node.parentNode;
    }
    return false;
}