(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{529:function(n,e,t){"use strict";t.r(e);var a=t(0),d=t.n(a),s={template:'<section class="markdown"><h2 id="api"><span>API</span><a href="#api" class="anchor">#</a></h2><table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>addon</td>\n<td>选择框底部显示自定义的内容</td>\n<td>slot</td>\n<td>无</td>\n</tr>\n<tr>\n<td>allowClear</td>\n<td>是否展示清除按钮</td>\n<td>boolean</td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>autoFocus</td>\n<td>自动获取焦点</td>\n<td>boolean</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>defaultOpenValue</td>\n<td>当 defaultValue/value 不存在时，可以设置面板打开时默认选中的值</td>\n<td><a href="https://day.js.org/">dayjs</a></td>\n<td>dayjs()</td>\n</tr>\n<tr>\n<td>defaultValue</td>\n<td>默认时间</td>\n<td><a href="https://day.js.org/">dayjs</a></td>\n<td>无</td>\n</tr>\n<tr>\n<td>disabled</td>\n<td>禁用全部操作</td>\n<td>boolean</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>disabledHours</td>\n<td>禁止选择部分小时选项</td>\n<td>function()</td>\n<td>无</td>\n</tr>\n<tr>\n<td>disabledMinutes</td>\n<td>禁止选择部分分钟选项</td>\n<td>function(selectedHour)</td>\n<td>无</td>\n</tr>\n<tr>\n<td>disabledSeconds</td>\n<td>禁止选择部分秒选项</td>\n<td>function(selectedHour, selectedMinute)</td>\n<td>无</td>\n</tr>\n<tr>\n<td>format</td>\n<td>展示的时间格式</td>\n<td>string</td>\n<td>&quot;HH:mm:ss&quot;</td>\n</tr>\n<tr>\n<td>getPopupContainer</td>\n<td>定义浮层的容器，默认为 body 上新建 div</td>\n<td>function(trigger)</td>\n<td>无</td>\n</tr>\n<tr>\n<td>hideDisabledOptions</td>\n<td>隐藏禁止选择的选项</td>\n<td>boolean</td>\n<td>false</td>\n</tr>\n<tr>\n<td>hourStep</td>\n<td>小时选项间隔</td>\n<td>number</td>\n<td><code>1</code></td>\n</tr>\n<tr>\n<td>inputReadOnly</td>\n<td>设置输入框为只读（避免在移动设备上打开虚拟键盘）</td>\n<td>boolean</td>\n<td>false</td>\n</tr>\n<tr>\n<td>minuteStep</td>\n<td>分钟选项间隔</td>\n<td>number</td>\n<td>1</td>\n</tr>\n<tr>\n<td>open</td>\n<td>面板是否打开</td>\n<td>boolean</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>placeholder</td>\n<td>没有值的时候显示的内容</td>\n<td>string</td>\n<td>&quot;请选择时间&quot;</td>\n</tr>\n<tr>\n<td>popupClassName</td>\n<td>弹出层类名</td>\n<td>string</td>\n<td>无</td>\n</tr>\n<tr>\n<td>popupStyle</td>\n<td>弹出层样式对象</td>\n<td>string</td>\n<td>无</td>\n</tr>\n<tr>\n<td>secondStep</td>\n<td>秒选项间隔</td>\n<td>number</td>\n<td>1</td>\n</tr>\n<tr>\n<td>suffixIcon</td>\n<td>自定义的选择框后缀图标</td>\n<td>slot</td>\n<td></td>\n</tr>\n<tr>\n<td>clearIcon</td>\n<td>自定义的清除图标</td>\n<td>slot</td>\n<td></td>\n</tr>\n<tr>\n<td>use12Hours</td>\n<td>使用 12 小时制，为 true 时 <code>format</code> 默认为 <code>h:mm:ss a</code></td>\n<td>boolean</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>value</td>\n<td>当前时间</td>\n<td><a href="https://day.js.org/">dayjs</a></td>\n<td>无</td>\n</tr>\n<tr>\n<td>on-hange</td>\n<td>时间发生变化的回调</td>\n<td>function(time: dayjs, timeString: string): void</td>\n<td>无</td>\n</tr>\n<tr>\n<td>on-openChange</td>\n<td>面板打开/关闭时的回调</td>\n<td>(open: boolean): void</td>\n<td>无</td>\n</tr>\n</tbody></table>\n<h2 id="方法"><span>方法</span><a href="#方法" class="anchor">#</a></h2><table>\n<thead>\n<tr>\n<th>名称</th>\n<th>描述</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>blur()</td>\n<td>移除焦点</td>\n</tr>\n<tr>\n<td>focus()</td>\n<td>获取焦点</td>\n</tr>\n</tbody></table>\n</section>'},o=t(2),i=t.n(o),c=t(8);i.a.extend(t(29));var p={initData:()=>({isExpand:!1,code:"\n<pre><code class=\"language-html\">&lt;template>\n    &lt;div>\n        &lt;s-timepicker defaultOpenValue=\"{{defaultOpenValue}}\" on-change=\"handleChange\"/>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport dayjs from 'dayjs';\nimport {TimePicker} from 'santd';\n\ndayjs.extend(require('dayjs/plugin/customParseFormat'));\n\nexport default {\n    components: {\n        's-timepicker': TimePicker\n    },\n    initData() {\n        return {\n            defaultOpenValue: dayjs('00:00:00', 'HH:mm:ss')\n        };\n    },\n    handleChange({time, timeString}) {\n        console.log(time, timeString);\n    }\n}\n&lt;/script></code></pre>",text:'\n<h4 id="基本"><span>基本</span><a href="#基本" class="anchor">#</a></h4><p>点击 TimePicker，然后可以在浮层中选择或者输入某一时间</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-timepicker":c.db},initData:()=>({defaultOpenValue:i()("00:00:00","HH:mm:ss")}),handleChange({time:n,timeString:e}){console.log(n,e)},template:'\n    <div>\n        <s-timepicker defaultOpenValue="{{defaultOpenValue}}" on-change="handleChange"></s-timepicker>\n    </div>\n'}},template:'\n    <section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1639397086548">\n        <section class="code-box-demo"><code-preview></code-preview></section>\n        <section class="code-box-meta markdown">\n            {{ text | raw}}\n            <span class="code-expand-icon" on-click="toggleExpand">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}">\n            </span>\n        </section>\n        <section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">\n            {{ code | raw}}\n        </section>\n    </section>\n'},l={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-timepicker addon="{{addon}}" open="{{open}}" on-openChange="handleOpenChange">\n            &lt;s-button type="primary" size="small" on-click="handleClose" slot="addon">Ok&lt;/s-button>\n        &lt;/s-timepicker>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport {TimePicker, Button} from \'santd\';\n\nexport default {\n    components: {\n        \'s-timepicker\': TimePicker,\n        \'s-button\': Button\n    },\n    initData() {\n        return {\n            open: false\n        };\n    },\n    handleClose() {\n        this.data.set(\'open\', false);\n    },\n    handleOpenChange(open) {\n        this.data.set(\'open\', open);\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="附加内容"><span>附加内容</span><a href="#附加内容" class="anchor">#</a></h4><p>在 TimePicker 选择框底部显示自定义的内容。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-timepicker":c.db,"s-button":c.i},initData:()=>({open:!1}),handleClose(){this.data.set("open",!1)},handleOpenChange(n){this.data.set("open",n)},template:'\n    <div>\n        <s-timepicker addon="{{addon}}" open="{{open}}" on-openChange="handleOpenChange">\n            <s-button type="primary" size="small" on-click="handleClose" slot="addon">Ok</s-button>\n        </s-timepicker>\n    </div>\n'}},template:'\n    <section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1639397086540">\n        <section class="code-box-demo"><code-preview></code-preview></section>\n        <section class="code-box-meta markdown">\n            {{ text | raw}}\n            <span class="code-expand-icon" on-click="toggleExpand">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}">\n            </span>\n        </section>\n        <section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">\n            {{ code | raw}}\n        </section>\n    </section>\n'};i.a.extend(t(29));var r={initData:()=>({isExpand:!1,code:"\n<pre><code class=\"language-html\">&lt;template>\n    &lt;div>\n        &lt;s-timepicker defaultValue=\"{{defaultValue}}\" disabled=\"{{true}}\"/>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport dayjs from 'dayjs';\nimport {TimePicker} from 'santd';\n\ndayjs.extend(require('dayjs/plugin/customParseFormat'));\n\nexport default {\n    components: {\n        's-timepicker': TimePicker\n    },\n    initData() {\n        return {\n            defaultValue: dayjs('12:08:23', 'HH:mm:ss'),\n        };\n    }\n}\n&lt;/script></code></pre>",text:'\n<h4 id="禁用"><span>禁用</span><a href="#禁用" class="anchor">#</a></h4><p>禁用时间选择。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-timepicker":c.db},initData:()=>({defaultValue:i()("12:08:23","HH:mm:ss")}),template:'\n    <div>\n        <s-timepicker defaultValue="{{defaultValue}}" disabled="{{true}}"></s-timepicker>\n    </div>\n'}},template:'\n    <section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1639397086543">\n        <section class="code-box-demo"><code-preview></code-preview></section>\n        <section class="code-box-meta markdown">\n            {{ text | raw}}\n            <span class="code-expand-icon" on-click="toggleExpand">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}">\n            </span>\n        </section>\n        <section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">\n            {{ code | raw}}\n        </section>\n    </section>\n'},m=t(29),h=t.n(m);i.a.extend(h.a);var g={initData:()=>({isExpand:!1,code:"\n<pre><code class=\"language-html\">&lt;template>\n    &lt;div>\n        &lt;s-timepicker format=\"HH:mm\" defaultValue=\"{{defaultValue}}\" on-change=\"handleChange\"/>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport dayjs from 'dayjs';\nimport {TimePicker} from 'santd';\nimport customParseFormat from 'dayjs/plugin/customParseFormat';\n\ndayjs.extend(customParseFormat);\n\nexport default {\n    components: {\n        's-timepicker': TimePicker\n    },\n    initData() {\n        return {\n            defaultValue: dayjs('12:08', 'HH:mm')\n        };\n    },\n    handleChange(param) {\n        console.log('time change', param);\n    }\n}\n&lt;/script></code></pre>",text:'\n<h4 id="选择时分"><span>选择时分</span><a href="#选择时分" class="anchor">#</a></h4><p>TimePicker 浮层中的列会随着 <code>format</code> 变化，当略去 <code>format</code> 中的某部分时，浮层中对应的列也会消失。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-timepicker":c.db},initData:()=>({defaultValue:i()("12:08","HH:mm")}),handleChange(n){console.log("time change",n)},template:'\n    <div>\n        <s-timepicker format="HH:mm" defaultValue="{{defaultValue}}" on-change="handleChange"></s-timepicker>\n    </div>\n'}},template:'\n    <section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1639397086531">\n        <section class="code-box-demo"><code-preview></code-preview></section>\n        <section class="code-box-meta markdown">\n            {{ text | raw}}\n            <span class="code-expand-icon" on-click="toggleExpand">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}">\n            </span>\n        </section>\n        <section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">\n            {{ code | raw}}\n        </section>\n    </section>\n'},x={template:'<section class="markdown"><h1 id="timepicker-时间选择框"><span>TimePicker 时间选择框</span><a href="#timepicker-时间选择框" class="anchor">#</a></h1><p>输入或选择时间的控件。</p><h2 id="何时使用"><span>何时使用</span><a href="#何时使用" class="anchor">#</a></h2><p>当用户需要输入一个时间，可以点击标准输入框，弹出时间面板进行选择。</p><h2 id="代码演示"><span>代码演示</span><a href="#代码演示" class="anchor">#</a></h2></section>'},u={initData:()=>({isExpand:!1,code:"\n<pre><code class=\"language-html\">&lt;template>\n    &lt;div>\n        &lt;s-timepicker value=\"{{value}}\" on-change=\"handleChange\"/>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport {TimePicker} from 'santd';\n\nexport default {\n    components: {\n        's-timepicker': TimePicker\n    },\n    handleChange({time}) {\n        console.log(time);\n        this.data.set('value', time);\n    }\n}\n&lt;/script></code></pre>",text:'\n<h4 id="受控组件"><span>受控组件</span><a href="#受控组件" class="anchor">#</a></h4><p>value 和 on-change 需要配合使用。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-timepicker":c.db},handleChange({time:n}){console.log(n),this.data.set("value",n)},template:'\n    <div>\n        <s-timepicker value="{{value}}" on-change="handleChange"></s-timepicker>\n    </div>\n'}},template:'\n    <section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1639397086528">\n        <section class="code-box-demo"><code-preview></code-preview></section>\n        <section class="code-box-meta markdown">\n            {{ text | raw}}\n            <span class="code-expand-icon" on-click="toggleExpand">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}">\n            </span>\n        </section>\n        <section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">\n            {{ code | raw}}\n        </section>\n    </section>\n'};i.a.extend(t(29));var w={initData:()=>({isExpand:!1,code:"\n<pre><code class=\"language-html\">&lt;template>\n    &lt;div>\n        &lt;s-timepicker defaultValue=\"{{defaultValue}}\" size=\"large\"/>\n        &lt;s-timepicker defaultValue=\"{{defaultValue}}\"/>\n        &lt;s-timepicker defaultValue=\"{{defaultValue}}\" size=\"small\"/>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport dayjs from 'dayjs';\nimport {TimePicker} from 'santd';\n\ndayjs.extend(require('dayjs/plugin/customParseFormat'));\n\nexport default {\n    components: {\n        's-timepicker': TimePicker\n    },\n    initData() {\n        return {\n            defaultValue: dayjs('2:08:23', 'HH:mm:ss')\n        };\n    }\n}\n&lt;/script></code></pre>",text:'\n<h4 id="三种大小"><span>三种大小</span><a href="#三种大小" class="anchor">#</a></h4><p>三种大小的输入框，大的用在表单中，中的为默认。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-timepicker":c.db},initData:()=>({defaultValue:i()("2:08:23","HH:mm:ss")}),template:'\n    <div>\n        <s-timepicker defaultValue="{{defaultValue}}" size="large"></s-timepicker>\n        <s-timepicker defaultValue="{{defaultValue}}"></s-timepicker>\n        <s-timepicker defaultValue="{{defaultValue}}" size="small"></s-timepicker>\n    </div>\n'}},template:'\n    <section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1639397086535">\n        <section class="code-box-demo"><code-preview></code-preview></section>\n        <section class="code-box-meta markdown">\n            {{ text | raw}}\n            <span class="code-expand-icon" on-click="toggleExpand">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}">\n            </span>\n        </section>\n        <section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">\n            {{ code | raw}}\n        </section>\n    </section>\n'},k={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-timepicker minuteStep="{{15}}" secondStep="{{10}}"/>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport {TimePicker} from \'santd\';\n\nexport default {\n    components: {\n        \'s-timepicker\': TimePicker\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="步长选项"><span>步长选项</span><a href="#步长选项" class="anchor">#</a></h4><p>可以使用 <code>hourStep</code> <code>minuteStep</code> <code>secondStep</code> 按步长展示可选的时分秒。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-timepicker":c.db},template:'\n    <div>\n        <s-timepicker minuteStep="{{15}}" secondStep="{{10}}"></s-timepicker>\n    </div>\n'}},template:'\n    <section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1639397086521">\n        <section class="code-box-demo"><code-preview></code-preview></section>\n        <section class="code-box-meta markdown">\n            {{ text | raw}}\n            <span class="code-expand-icon" on-click="toggleExpand">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}">\n            </span>\n        </section>\n        <section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">\n            {{ code | raw}}\n        </section>\n    </section>\n'},f={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-timepicker use12Hours="{{true}}" on-change="handleChange"/>\n        &lt;s-timepicker use12Hours="{{true}}" format="h:mm:ss A" on-change="handleChange"/>\n        &lt;s-timepicker use12Hours="{{true}}" format="h:mm a" on-change="handleChange"/>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport {TimePicker} from \'santd\';\n\nexport default {\n    components: {\n        \'s-timepicker\': TimePicker\n    },\n    handleChange(param) {\n        console.log(param);\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="_12-小时制"><span>12 小时制</span><a href="#_12-小时制" class="anchor">#</a></h4><p>12 小时制的时间选择器，默认的 format 为 <code>h:mm:ss a</code>。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-timepicker":c.db},handleChange(n){console.log(n)},template:'\n    <div>\n        <s-timepicker use12Hours="{{true}}" on-change="handleChange"></s-timepicker>\n        <s-timepicker use12Hours="{{true}}" format="h:mm:ss A" on-change="handleChange"></s-timepicker>\n        <s-timepicker use12Hours="{{true}}" format="h:mm a" on-change="handleChange"></s-timepicker>\n    </div>\n'}},template:'\n    <section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1639397086525">\n        <section class="code-box-demo"><code-preview></code-preview></section>\n        <section class="code-box-meta markdown">\n            {{ text | raw}}\n            <span class="code-expand-icon" on-click="toggleExpand">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}">\n            </span>\n        </section>\n        <section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">\n            {{ code | raw}}\n        </section>\n    </section>\n'};e.default=d.a.defineComponent({components:{readme:s,basic:p,size:w,format:g,addon:l,change:u,disable:r,step:k,use12hours:f,head:x},template:"\n        <div>\n            <head/>\n            <basic/>\n            <size/>\n            <format/>\n            <addon/>\n            <change/>\n            <disable/>\n            <step/>\n            <use12hours/>\n            <readme/>\n        </div>\n    "})}}]);