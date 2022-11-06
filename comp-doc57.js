(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{536:function(e,t,a){"use strict";a.r(t);var n=a(0),d=a.n(n),s={template:'<section class="markdown"><h2 id="api"><span>API</span><a href="#api" class="anchor">#</a></h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>addon</td><td>选择框底部显示自定义的内容</td><td>slot</td><td>无</td></tr><tr><td>allowClear</td><td>是否展示清除按钮</td><td>boolean</td><td><code>true</code></td></tr><tr><td>autoFocus</td><td>自动获取焦点</td><td>boolean</td><td><code>false</code></td></tr><tr><td>defaultOpenValue</td><td>当 defaultValue/value 不存在时，可以设置面板打开时默认选中的值</td><td><a href="https://day.js.org/">dayjs</a></td><td>dayjs()</td></tr><tr><td>defaultValue</td><td>默认时间</td><td><a href="https://day.js.org/">dayjs</a></td><td>无</td></tr><tr><td>disabled</td><td>禁用全部操作</td><td>boolean</td><td><code>false</code></td></tr><tr><td>disabledHours</td><td>禁止选择部分小时选项</td><td>function()</td><td>无</td></tr><tr><td>disabledMinutes</td><td>禁止选择部分分钟选项</td><td>function(selectedHour)</td><td>无</td></tr><tr><td>disabledSeconds</td><td>禁止选择部分秒选项</td><td>function(selectedHour, selectedMinute)</td><td>无</td></tr><tr><td>format</td><td>展示的时间格式</td><td>string</td><td>&quot;HH:mm:ss&quot;</td></tr><tr><td>getPopupContainer</td><td>定义浮层的容器，默认为 body 上新建 div</td><td>function(trigger)</td><td>无</td></tr><tr><td>hideDisabledOptions</td><td>隐藏禁止选择的选项</td><td>boolean</td><td>false</td></tr><tr><td>hourStep</td><td>小时选项间隔</td><td>number</td><td><code>1</code></td></tr><tr><td>inputReadOnly</td><td>设置输入框为只读（避免在移动设备上打开虚拟键盘）</td><td>boolean</td><td>false</td></tr><tr><td>minuteStep</td><td>分钟选项间隔</td><td>number</td><td>1</td></tr><tr><td>open</td><td>面板是否打开</td><td>boolean</td><td><code>false</code></td></tr><tr><td>placeholder</td><td>没有值的时候显示的内容</td><td>string</td><td>&quot;请选择时间&quot;</td></tr><tr><td>popupClassName</td><td>弹出层类名</td><td>string</td><td>无</td></tr><tr><td>popupStyle</td><td>弹出层样式对象</td><td>string</td><td>无</td></tr><tr><td>secondStep</td><td>秒选项间隔</td><td>number</td><td>1</td></tr><tr><td>suffixIcon</td><td>自定义的选择框后缀图标</td><td>slot</td><td></td></tr><tr><td>clearIcon</td><td>自定义的清除图标</td><td>slot</td><td></td></tr><tr><td>use12Hours</td><td>使用 12 小时制，为 true 时 <code>format</code> 默认为 <code>h:mm:ss a</code></td><td>boolean</td><td><code>false</code></td></tr><tr><td>value</td><td>当前时间</td><td><a href="https://day.js.org/">dayjs</a></td><td>无</td></tr><tr><td>on-hange</td><td>时间发生变化的回调</td><td>function(time: dayjs, timeString: string): void</td><td>无</td></tr><tr><td>on-openChange</td><td>面板打开/关闭时的回调</td><td>(open: boolean): void</td><td>无</td></tr></tbody></table><h2 id="方法"><span>方法</span><a href="#方法" class="anchor">#</a></h2><table><thead><tr><th>名称</th><th>描述</th></tr></thead><tbody><tr><td>blur()</td><td>移除焦点</td></tr><tr><td>focus()</td><td>获取焦点</td></tr></tbody></table></section>'},o=a(2),i=a.n(o),c=a(8);i.a.extend(a(29));var p={initData:()=>({isExpand:!1,code:"\n<pre><code class=\"language-html\">&lt;template>\n    &lt;div>\n        &lt;s-timepicker defaultOpenValue=\"{{defaultOpenValue}}\" on-change=\"handleChange\"/>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport dayjs from 'dayjs';\nimport {TimePicker} from 'santd';\n\ndayjs.extend(require('dayjs/plugin/customParseFormat'));\n\nexport default {\n    components: {\n        's-timepicker': TimePicker\n    },\n    initData() {\n        return {\n            defaultOpenValue: dayjs('00:00:00', 'HH:mm:ss')\n        };\n    },\n    handleChange({time, timeString}) {\n        console.log(time, timeString);\n    }\n}\n&lt;/script></code></pre>",text:'\n<h4 id="基本"><span>基本</span><a href="#基本" class="anchor">#</a></h4><p>点击 TimePicker，然后可以在浮层中选择或者输入某一时间</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-timepicker":c.eb},initData:()=>({defaultOpenValue:i()("00:00:00","HH:mm:ss")}),handleChange({time:e,timeString:t}){console.log(e,t)},template:'<div><s-timepicker defaultOpenValue="{{defaultOpenValue}}" on-change="handleChange"></s-timepicker></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1667753804226"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},l={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-timepicker addon="{{addon}}" open="{{open}}" on-openChange="handleOpenChange">\n            &lt;s-button type="primary" size="small" on-click="handleClose" slot="addon">Ok&lt;/s-button>\n        &lt;/s-timepicker>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport {TimePicker, Button} from \'santd\';\n\nexport default {\n    components: {\n        \'s-timepicker\': TimePicker,\n        \'s-button\': Button\n    },\n    initData() {\n        return {\n            open: false\n        };\n    },\n    handleClose() {\n        this.data.set(\'open\', false);\n    },\n    handleOpenChange(open) {\n        this.data.set(\'open\', open);\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="附加内容"><span>附加内容</span><a href="#附加内容" class="anchor">#</a></h4><p>在 TimePicker 选择框底部显示自定义的内容。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-timepicker":c.eb,"s-button":c.i},initData:()=>({open:!1}),handleClose(){this.data.set("open",!1)},handleOpenChange(e){this.data.set("open",e)},template:'<div><s-timepicker addon="{{addon}}" open="{{open}}" on-openChange="handleOpenChange"><s-button type="primary" size="small" on-click="handleClose" slot="addon">Ok</s-button></s-timepicker></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1667753804218"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'};i.a.extend(a(29));var r={initData:()=>({isExpand:!1,code:"\n<pre><code class=\"language-html\">&lt;template>\n    &lt;div>\n        &lt;s-timepicker defaultValue=\"{{defaultValue}}\" disabled=\"{{true}}\"/>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport dayjs from 'dayjs';\nimport {TimePicker} from 'santd';\n\ndayjs.extend(require('dayjs/plugin/customParseFormat'));\n\nexport default {\n    components: {\n        's-timepicker': TimePicker\n    },\n    initData() {\n        return {\n            defaultValue: dayjs('12:08:23', 'HH:mm:ss'),\n        };\n    }\n}\n&lt;/script></code></pre>",text:'\n<h4 id="禁用"><span>禁用</span><a href="#禁用" class="anchor">#</a></h4><p>禁用时间选择。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-timepicker":c.eb},initData:()=>({defaultValue:i()("12:08:23","HH:mm:ss")}),template:'<div><s-timepicker defaultValue="{{defaultValue}}" disabled="{{true}}"></s-timepicker></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1667753804172"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},m=a(29),h=a.n(m);i.a.extend(h.a);var g={initData:()=>({isExpand:!1,code:"\n<pre><code class=\"language-html\">&lt;template>\n    &lt;div>\n        &lt;s-timepicker format=\"HH:mm\" defaultValue=\"{{defaultValue}}\" on-change=\"handleChange\"/>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport dayjs from 'dayjs';\nimport {TimePicker} from 'santd';\nimport customParseFormat from 'dayjs/plugin/customParseFormat';\n\ndayjs.extend(customParseFormat);\n\nexport default {\n    components: {\n        's-timepicker': TimePicker\n    },\n    initData() {\n        return {\n            defaultValue: dayjs('12:08', 'HH:mm')\n        };\n    },\n    handleChange(param) {\n        console.log('time change', param);\n    }\n}\n&lt;/script></code></pre>",text:'\n<h4 id="选择时分"><span>选择时分</span><a href="#选择时分" class="anchor">#</a></h4><p>TimePicker 浮层中的列会随着 <code>format</code> 变化，当略去 <code>format</code> 中的某部分时，浮层中对应的列也会消失。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-timepicker":c.eb},initData:()=>({defaultValue:i()("12:08","HH:mm")}),handleChange(e){console.log("time change",e)},template:'<div><s-timepicker format="HH:mm" defaultValue="{{defaultValue}}" on-change="handleChange"></s-timepicker></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1667753803872"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},x={template:'<section class="markdown"><h1 id="timepicker-时间选择框"><span>TimePicker 时间选择框</span><a href="#timepicker-时间选择框" class="anchor">#</a></h1><p>输入或选择时间的控件。</p><h2 id="何时使用"><span>何时使用</span><a href="#何时使用" class="anchor">#</a></h2><p>当用户需要输入一个时间，可以点击标准输入框，弹出时间面板进行选择。</p><h2 id="代码演示"><span>代码演示</span><a href="#代码演示" class="anchor">#</a></h2></section>'},u={initData:()=>({isExpand:!1,code:"\n<pre><code class=\"language-html\">&lt;template>\n    &lt;div>\n        &lt;s-timepicker value=\"{{value}}\" on-change=\"handleChange\"/>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport {TimePicker} from 'santd';\n\nexport default {\n    components: {\n        's-timepicker': TimePicker\n    },\n    handleChange({time}) {\n        console.log(time);\n        this.data.set('value', time);\n    }\n}\n&lt;/script></code></pre>",text:'\n<h4 id="受控组件"><span>受控组件</span><a href="#受控组件" class="anchor">#</a></h4><p>value 和 on-change 需要配合使用。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-timepicker":c.eb},handleChange({time:e}){console.log(e),this.data.set("value",e)},template:'<div><s-timepicker value="{{value}}" on-change="handleChange"></s-timepicker></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1667753803819"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'};i.a.extend(a(29));var w={initData:()=>({isExpand:!1,code:"\n<pre><code class=\"language-html\">&lt;template>\n    &lt;div>\n        &lt;s-timepicker defaultValue=\"{{defaultValue}}\" size=\"large\"/>\n        &lt;s-timepicker defaultValue=\"{{defaultValue}}\"/>\n        &lt;s-timepicker defaultValue=\"{{defaultValue}}\" size=\"small\"/>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport dayjs from 'dayjs';\nimport {TimePicker} from 'santd';\n\ndayjs.extend(require('dayjs/plugin/customParseFormat'));\n\nexport default {\n    components: {\n        's-timepicker': TimePicker\n    },\n    initData() {\n        return {\n            defaultValue: dayjs('2:08:23', 'HH:mm:ss')\n        };\n    }\n}\n&lt;/script></code></pre>",text:'\n<h4 id="三种大小"><span>三种大小</span><a href="#三种大小" class="anchor">#</a></h4><p>三种大小的输入框，大的用在表单中，中的为默认。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-timepicker":c.eb},initData:()=>({defaultValue:i()("2:08:23","HH:mm:ss")}),template:'<div><s-timepicker defaultValue="{{defaultValue}}" size="large"></s-timepicker><s-timepicker defaultValue="{{defaultValue}}"></s-timepicker><s-timepicker defaultValue="{{defaultValue}}" size="small"></s-timepicker></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1667753803814"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},k={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-timepicker minuteStep="{{15}}" secondStep="{{10}}"/>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport {TimePicker} from \'santd\';\n\nexport default {\n    components: {\n        \'s-timepicker\': TimePicker\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="步长选项"><span>步长选项</span><a href="#步长选项" class="anchor">#</a></h4><p>可以使用 <code>hourStep</code> <code>minuteStep</code> <code>secondStep</code> 按步长展示可选的时分秒。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-timepicker":c.eb},template:'<div><s-timepicker minuteStep="{{15}}" secondStep="{{10}}"></s-timepicker></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1667753803810"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},f={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-timepicker use12Hours="{{true}}" on-change="handleChange"/>\n        &lt;s-timepicker use12Hours="{{true}}" format="h:mm:ss A" on-change="handleChange"/>\n        &lt;s-timepicker use12Hours="{{true}}" format="h:mm a" on-change="handleChange"/>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport {TimePicker} from \'santd\';\n\nexport default {\n    components: {\n        \'s-timepicker\': TimePicker\n    },\n    handleChange(param) {\n        console.log(param);\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="_12-小时制"><span>12 小时制</span><a href="#_12-小时制" class="anchor">#</a></h4><p>12 小时制的时间选择器，默认的 format 为 <code>h:mm:ss a</code>。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-timepicker":c.eb},handleChange(e){console.log(e)},template:'<div><s-timepicker use12Hours="{{true}}" on-change="handleChange"></s-timepicker><s-timepicker use12Hours="{{true}}" format="h:mm:ss A" on-change="handleChange"></s-timepicker><s-timepicker use12Hours="{{true}}" format="h:mm a" on-change="handleChange"></s-timepicker></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1667753803782"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'};t.default=d.a.defineComponent({components:{readme:s,basic:p,size:w,format:g,addon:l,change:u,disable:r,step:k,use12hours:f,head:x},template:"\n        <div>\n            <head/>\n            <basic/>\n            <size/>\n            <format/>\n            <addon/>\n            <change/>\n            <disable/>\n            <step/>\n            <use12hours/>\n            <readme/>\n        </div>\n    "})}}]);