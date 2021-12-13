(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{546:function(n,t,e){"use strict";e.r(t);var a=e(0),d=e.n(a),s={template:'<section class="markdown"><h2 id="api"><span>API</span><a href="#api" class="anchor">#</a></h2><table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>autoFocus</td>\n<td>自动获取焦点</td>\n<td>boolean</td>\n<td>false</td>\n</tr>\n<tr>\n<td>defaultValue</td>\n<td>初始值</td>\n<td>number</td>\n<td>-</td>\n</tr>\n<tr>\n<td>disabled</td>\n<td>禁用</td>\n<td>boolean</td>\n<td>false</td>\n</tr>\n<tr>\n<td>formatter</td>\n<td>指定输入框展示值的格式</td>\n<td>function(value: number | string): string</td>\n<td>-</td>\n</tr>\n<tr>\n<td>max</td>\n<td>最大值</td>\n<td>number</td>\n<td>-</td>\n</tr>\n<tr>\n<td>min</td>\n<td>最小值</td>\n<td>number</td>\n<td>-</td>\n</tr>\n<tr>\n<td>parser</td>\n<td>指定从 formatter 里转换回数字的方式，和 formatter 搭配使用</td>\n<td>function( string): number</td>\n<td></td>\n</tr>\n<tr>\n<td>precision</td>\n<td>数值精度</td>\n<td>number</td>\n<td>-</td>\n</tr>\n<tr>\n<td>decimalSeparator</td>\n<td>小数点</td>\n<td>string</td>\n<td>-</td>\n</tr>\n<tr>\n<td>size</td>\n<td>输入框大小</td>\n<td>string</td>\n<td>-</td>\n</tr>\n<tr>\n<td>step</td>\n<td>每次改变步数，可以为小数</td>\n<td>number | string</td>\n<td>1</td>\n</tr>\n<tr>\n<td>value</td>\n<td>当前值</td>\n<td>number</td>\n<td>-</td>\n</tr>\n<tr>\n<td>on-change</td>\n<td>当input中的数值发生变化时触发</td>\n<td>function(value: number | string)</td>\n<td></td>\n</tr>\n<tr>\n<td>on-pressEnter</td>\n<td>按下回车的回调</td>\n<td>function(e)</td>\n<td></td>\n</tr>\n</tbody></table>\n<h3 id="方法"><span>方法</span><a href="#方法" class="anchor">#</a></h3><table>\n<thead>\n<tr>\n<th>名称</th>\n<th>描述</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>blur()</td>\n<td>移除焦点</td>\n</tr>\n<tr>\n<td>focus()</td>\n<td>获取焦点</td>\n</tr>\n</tbody></table>\n</section>'},o={template:'<section class="markdown"><h1 id="inputnumber-数字输入框"><span>InputNumber 数字输入框</span><a href="#inputnumber-数字输入框" class="anchor">#</a></h1><p>通过鼠标或键盘，输入范围内的数值。</p><h2 id="何时使用"><span>何时使用</span><a href="#何时使用" class="anchor">#</a></h2><p>当需要获取标准数值时。</p><h2 id="代码演示"><span>代码演示</span><a href="#代码演示" class="anchor">#</a></h2></section>'},p=e(8),i={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-input-number min="1" max="10" defaultValue="3" on-change="onChange">&lt;/s-input-number>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport {InputNumber} from \'santd\';\n\nexport default {\n    components: {\n        \'s-input-number\': InputNumber\n    },\n    onChange(value) {\n        console.log(\'changed: \', value);\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="基本"><span>基本</span><a href="#基本" class="anchor">#</a></h4><p>数字输入框。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-input-number":p.B},onChange(n){console.log("changed: ",n)},template:'\n    <div>\n        <s-input-number min="1" max="10" defaultValue="3" on-change="onChange"></s-input-number>\n    </div>\n'}},template:'\n    <section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1639397094723">\n        <section class="code-box-demo"><code-preview></code-preview></section>\n        <section class="code-box-meta markdown">\n            {{ text | raw}}\n            <span class="code-expand-icon" on-click="toggleExpand">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}">\n            </span>\n        </section>\n        <section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">\n            {{ code | raw}}\n        </section>\n    </section>\n'},c={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-input-number min="1" max="10" defaultValue="3" disabled="{{disabled}}">&lt;/s-input-number>\n        &lt;br/>&lt;br/>\n        &lt;s-button type="primary" on-click="toggle">Toggle disabled&lt;/s-button>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport {InputNumber, Button} from \'santd\';\n\nexport default {\n    components: {\n        \'s-input-number\': InputNumber,\n        \'s-button\': Button\n    },\n    initData() {\n        return {\n            disabled: true\n        }\n    },\n    toggle() {\n        this.data.set(\'disabled\', !this.data.get(\'disabled\'));\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="不可用"><span>不可用</span><a href="#不可用" class="anchor">#</a></h4><p>点击按钮切换可用状态。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-input-number":p.B,"s-button":p.i},initData:()=>({disabled:!0}),toggle(){this.data.set("disabled",!this.data.get("disabled"))},template:'\n    <div>\n        <s-input-number min="1" max="10" defaultValue="3" disabled="{{disabled}}"></s-input-number>\n        <br><br>\n        <s-button type="primary" on-click="toggle">Toggle disabled</s-button>\n    </div>\n'}},template:'\n    <section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1639397094718">\n        <section class="code-box-demo"><code-preview></code-preview></section>\n        <section class="code-box-meta markdown">\n            {{ text | raw}}\n            <span class="code-expand-icon" on-click="toggleExpand">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}">\n            </span>\n        </section>\n        <section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">\n            {{ code | raw}}\n        </section>\n    </section>\n'},r={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-input-number min="1" max="10" defaultValue="3" on-change="onChange" size="large">&lt;/s-input-number>\n        &lt;s-input-number min="1" max="10" defaultValue="3" on-change="onChange">&lt;/s-input-number>\n        &lt;s-input-number min="1" max="10" defaultValue="3" on-change="onChange" size="small">&lt;/s-input-number>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport {InputNumber} from \'santd\';\n\nexport default {\n    components: {\n        \'s-input-number\': InputNumber\n    },\n    onChange(value) {\n        console.log(\'changed: \', value);\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="size"><span>size</span><a href="#size" class="anchor">#</a></h4><p>三种大小的数字输入框，当 size 分别为 <code>large</code> 和 <code>small</code> 时，输入框高度为 <code>40px</code> 和 <code>24px</code> ，默认高度为 <code>32px</code>。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-input-number":p.B},onChange(n){console.log("changed: ",n)},template:'\n    <div>\n        <s-input-number min="1" max="10" defaultValue="3" on-change="onChange" size="large"></s-input-number>\n        <s-input-number min="1" max="10" defaultValue="3" on-change="onChange"></s-input-number>\n        <s-input-number min="1" max="10" defaultValue="3" on-change="onChange" size="small"></s-input-number>\n    </div>\n'}},template:'\n    <section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1639397094714">\n        <section class="code-box-demo"><code-preview></code-preview></section>\n        <section class="code-box-meta markdown">\n            {{ text | raw}}\n            <span class="code-expand-icon" on-click="toggleExpand">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}">\n            </span>\n        </section>\n        <section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">\n            {{ code | raw}}\n        </section>\n    </section>\n'},l={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n  &lt;div>\n    &lt;s-input-number min="0" max="10" step="0.1" on-change="onChange">&lt;/s-input-number>\n  &lt;/div>\n&lt;/template>\n&lt;script>\nimport {InputNumber} from \'santd\';\n\nexport default {\n    components: {\n        \'s-input-number\': InputNumber\n    },\n    onChange(value) {\n        console.log(\'changed: \', value);\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="小数"><span>小数</span><a href="#小数" class="anchor">#</a></h4><p>和原生的数字输入框一样，value 的精度由 step 的小数位数决定。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-input-number":p.B},onChange(n){console.log("changed: ",n)},template:'\n  <div>\n    <s-input-number min="0" max="10" step="0.1" on-change="onChange"></s-input-number>\n  </div>\n'}},template:'\n    <section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1639397094710">\n        <section class="code-box-demo"><code-preview></code-preview></section>\n        <section class="code-box-meta markdown">\n            {{ text | raw}}\n            <span class="code-expand-icon" on-click="toggleExpand">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}">\n            </span>\n        </section>\n        <section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">\n            {{ code | raw}}\n        </section>\n    </section>\n'},m={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-input-number\n            defaultValue="{{1000}}"\n            formatter="{{formatterTwo}}"\n            parser="{{parserTwo}}"\n            on-change="onChange"\n        />\n        &lt;s-input-number\n            defaultValue="{{100}}"\n            min="{{0}}"\n            max="{{100}}"\n            formatter="{{formatter}}"\n            parser="{{parser}}"\n            on-change="onChange"\n        />\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport {InputNumber} from \'santd\';\n\nexport default {\n    components: {\n        \'s-input-number\': InputNumber\n    },\n    initData() {\n        return {\n            formatter(value) {\n                return &#96;&#36;&#123;value}%&#96;;\n            },\n            parser(value) {\n                return value.replace(\'%\', \'\');\n            },\n            formatterTwo(value) {\n                return &#96;$ &#36;&#123;value}&#96;.replace(/B(?=(d{3})+(?!d))/g, \',\');\n            },\n            parserTwo(value) {\n                return value.replace(/$s?|(,*)/g, \'\');\n            }\n        }\n    },\n    onChange(value) {\n        console.log(\'changed: \', value);\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="格式化展示"><span>格式化展示</span><a href="#格式化展示" class="anchor">#</a></h4><p>通过 <code>formatter</code> 格式化数字，以展示具有具体含义的数据，往往需要配合 <code>parser</code> 一起使用。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-input-number":p.B},initData:()=>({formatter:n=>n+"%",parser:n=>n.replace("%",""),formatterTwo:n=>("$ "+n).replace(/\B(?=(\d{3})+(?!\d))/g,","),parserTwo:n=>n.replace(/\$\s?|(,*)/g,"")}),onChange(n){console.log("changed: ",n)},template:'\n    <div>\n        <s-input-number defaultValue="{{1000}}" formatter="{{formatterTwo}}" parser="{{parserTwo}}" on-change="onChange"></s-input-number>\n        <s-input-number defaultValue="{{100}}" min="{{0}}" max="{{100}}" formatter="{{formatter}}" parser="{{parser}}" on-change="onChange"></s-input-number>\n    </div>\n'}},template:'\n    <section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1639397094705">\n        <section class="code-box-demo"><code-preview></code-preview></section>\n        <section class="code-box-meta markdown">\n            {{ text | raw}}\n            <span class="code-expand-icon" on-click="toggleExpand">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}">\n            </span>\n        </section>\n        <section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">\n            {{ code | raw}}\n        </section>\n    </section>\n'};t.default=d.a.defineComponent({components:{readme:s,head:o,basic:i,disable:c,size:r,number:l,format:m},template:"\n        <div>\n            <head/>\n            <basic/>\n            <disable/>\n            <size/>\n            <number/>\n            <format/>\n            <readme/>\n        </div>\n    "})}}]);