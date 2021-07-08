(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{515:function(e,n,t){"use strict";t.r(n);var a=t(0),s=t.n(a),d={template:'<section class="markdown"><h2 id="api"><span>API</span><a href="#api" class="anchor">#</a></h2><table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>defaultValue</td>\n<td>设置初始取值。当 <code>range</code> 为 <code>false</code> 时，使用 <code>number</code>，否则用 <code>[number, number]</code></td>\n<td>number|number[]</td>\n<td><code>0</code> or <code>[0, 0]</code></td>\n</tr>\n<tr>\n<td>disabled</td>\n<td>值为 <code>true</code> 时，滑块为禁用状态</td>\n<td>boolean</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>dots</td>\n<td>是否只能拖拽到刻度上</td>\n<td>boolean</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>included</td>\n<td><code>marks</code> 不为空对象时有效，值为 true 时表示值为包含关系，false 表示并列</td>\n<td>boolean</td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>marks</td>\n<td>刻度标记，key 的类型必须为 <code>number</code> 且取值在闭区间 [min, max] 内，每个标签可以单独设置样式</td>\n<td>object</td>\n<td>{ number: string } or { number: { style: string, label: string } }</td>\n</tr>\n<tr>\n<td>max</td>\n<td>最大值</td>\n<td>number</td>\n<td><code>100</code></td>\n</tr>\n<tr>\n<td>min</td>\n<td>最小值</td>\n<td>number</td>\n<td><code>0</code></td>\n</tr>\n<tr>\n<td>range</td>\n<td>双滑块模式</td>\n<td>boolean</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>reverse</td>\n<td>反向坐标轴</td>\n<td>boolean</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>step</td>\n<td>步长，取值必须大于 0，并且可被 (max - min) 整除。当 <code>marks</code> 不为空对象时，可以设置 <code>step</code> 为 <code>null</code>，此时 Slider 的可选值仅有 marks 标出来的部分。</td>\n<td>number|null</td>\n<td>1</td>\n</tr>\n<tr>\n<td>tipFormatter</td>\n<td>Slider 会把当前值传给 <code>tipFormatter</code>，并在 Tooltip 中显示 <code>tipFormatter</code> 的返回值，若为 null，则隐藏 Tooltip。</td>\n<td>function|null</td>\n<td>IDENTITY</td>\n</tr>\n<tr>\n<td>value</td>\n<td>设置当前取值。当 <code>range</code> 为 <code>false</code> 时，使用 <code>number</code>，否则用 <code>[number, number]</code></td>\n<td>number|number[]</td>\n<td></td>\n</tr>\n<tr>\n<td>vertical</td>\n<td>值为 <code>true</code> 时，Slider 为垂直方向</td>\n<td>Boolean</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>tooltipPlacement</td>\n<td>设置 Tooltip 展示位置。<a href="https://ecomfe.github.io/santd/#/components/tooltip">参考 Tooltip</a></td>\n<td>string</td>\n<td></td>\n</tr>\n<tr>\n<td>on-afterChange</td>\n<td>与 <code>onmouseup</code> 触发时机一致，把当前值作为参数传入。</td>\n<td>Function(value)</td>\n<td>NOOP</td>\n</tr>\n<tr>\n<td>on-change</td>\n<td>当 Slider 的值发生改变时，会触发 change 事件，并把改变后的值作为参数传入。</td>\n<td>Function(value)</td>\n<td>NOOP</td>\n</tr>\n<tr>\n<td>tooltipVisible</td>\n<td>值为 <code>true</code> 时，Tooltip 将会始终显示；否则始终不显示，哪怕在拖拽及移入时。</td>\n<td>Boolean</td>\n<td></td>\n</tr>\n<tr>\n<td>getTooltipPopupContainer</td>\n<td>Tooltip 渲染父节点，默认渲染到 body 上</td>\n<td>() =&gt; document.body</td>\n<td></td>\n</tr>\n</tbody></table>\n<h2 id="方法"><span>方法</span><a href="#方法" class="anchor">#</a></h2><table>\n<thead>\n<tr>\n<th>名称</th>\n<th>描述</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>blur()</td>\n<td>移除焦点</td>\n</tr>\n<tr>\n<td>focus()</td>\n<td>获取焦点</td>\n</tr>\n</tbody></table>\n</section>'},o={template:'<section class="markdown"><h1 id="slider-滑动输入条"><span>Slider 滑动输入条</span><a href="#slider-滑动输入条" class="anchor">#</a></h1><p>滑动型输入器，展示当前值和可选范围。</p><h2 id="何时使用"><span>何时使用</span><a href="#何时使用" class="anchor">#</a></h2><p>当用户需要在数值区间/自定义区间内进行选择时，可为连续或离散值。</p><h2 id="代码演示"><span>代码演示</span><a href="#代码演示" class="anchor">#</a></h2></section>'},l=t(8),i={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-slider defaultValue="{{30}}" disabled="{{disabled}}" />\n        &lt;s-slider range="{{true}}" defaultValue="{{[20, 50]}}" disabled="{{disabled}}" />\n        Disabled &lt;s-switch size="small" checked="{{disabled}}" on-change=\'handleDisabledChange\'/>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport {Slider, Switch} from \'santd\';\nexport default {\n    components: {\n        \'s-slider\': Slider,\n        \'s-switch\': Switch\n    },\n    handleDisabledChange(checked)  {\n        this.data.set(\'disabled\', checked);\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="基本"><span>基本</span><a href="#基本" class="anchor">#</a></h4><p>基本滑动条。当 <code>range</code> 为 <code>true</code> 时，渲染为双滑块。当 <code>disabled</code> 为 <code>true</code> 时，滑块处于不可用状态。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-slider":l.U,"s-switch":l.Z},handleDisabledChange(e){this.data.set("disabled",e)},template:'\n    <div>\n        <s-slider defaultValue="{{30}}" disabled="{{disabled}}"></s-slider>\n        <s-slider range="{{true}}" defaultValue="{{[20, 50]}}" disabled="{{disabled}}"></s-slider>\n        Disabled <s-switch size="small" checked="{{disabled}}" on-change="handleDisabledChange"></s-switch>\n    </div>\n'}},template:'\n    <section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1625728682572">\n        <section class="code-box-demo"><code-preview></code-preview></section>\n        <section class="code-box-meta markdown">\n            {{ text | raw}}\n            <span class="code-expand-icon" on-click="toggleExpand">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}">\n            </span>\n        </section>\n        <section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">\n            {{ code | raw}}\n        </section>\n    </section>\n'},c=(t(718),{initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div class="icon-wrapper">\n        &lt;s-icon style="color: {{preColor}}" type="frown-o" />\n        &lt;s-slider disabled="{{disabled}}" on-change="handleChange" value="{{value}}" min="{{0}}" max="{{20}}"/>\n        &lt;s-icon style="color: {{nextColor}}" type="smile-o" />\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport {Slider, Icon} from \'santd\';\n\nexport default {\n    components: {\n        \'s-slider\': Slider,\n        \'s-icon\': Icon\n    },\n    computed: {\n        preColor() {\n            const value = this.data.get(\'value\');\n            return value >= 10 ? \'\' : \'rgba(0, 0, 0, .45)\';\n        },\n        nextColor() {\n            const value = this.data.get(\'value\');\n            return value >= 10 ? \'rgba(0, 0, 0, .45)\' : \'\';\n        }\n    },\n    initData() {\n        return {\n            value: 0\n        };\n    },\n    handleChange(value)  {\n        this.data.set(\'value\', value);\n    }\n}\n&lt;/script>\n&lt;style>\n.icon-wrapper {\n    position: relative;\n    padding: 0px 30px;\n}\n\n.icon-wrapper .santd-icon {\n    position: absolute;\n    top: -2px;\n    width: 16px;\n    height: 16px;\n    line-height: 1;\n    font-size: 16px;\n    color: rgba(0, 0, 0, 0.25);\n}\n\n.icon-wrapper .santd-icon:first-child {\n    left: 0;\n}\n\n.icon-wrapper .santd-icon:last-child {\n    right: 0;\n}\n&lt;/style></code></pre>',text:'\n<h4 id="带-icon-的滑块"><span>带 icon 的滑块</span><a href="#带-icon-的滑块" class="anchor">#</a></h4><p>滑块左右可以设置图标来表达业务含义。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-slider":l.U,"s-icon":l.z},computed:{preColor(){return this.data.get("value")>=10?"":"rgba(0, 0, 0, .45)"},nextColor(){return this.data.get("value")>=10?"rgba(0, 0, 0, .45)":""}},initData:()=>({value:0}),handleChange(e){this.data.set("value",e)},template:'\n    <div class="icon-wrapper">\n        <s-icon style="color: {{preColor}}" type="frown-o"></s-icon>\n        <s-slider disabled="{{disabled}}" on-change="handleChange" value="{{value}}" min="{{0}}" max="{{20}}"></s-slider>\n        <s-icon style="color: {{nextColor}}" type="smile-o"></s-icon>\n    </div>\n'}},template:'\n    <section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1625728682563">\n        <section class="code-box-demo"><code-preview></code-preview></section>\n        <section class="code-box-meta markdown">\n            {{ text | raw}}\n            <span class="code-expand-icon" on-click="toggleExpand">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}">\n            </span>\n        </section>\n        <section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">\n            {{ code | raw}}\n        </section>\n    </section>\n'}),r={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;h4>included=true&lt;/h4>\n        &lt;s-slider marks="{{marks}}" defaultValue="{{37}}" />\n        &lt;s-slider range="{{true}}" marks="{{marks}}" defaultValue="{{[26, 37]}}" />\n        &lt;h4>included=false&lt;/h4>\n        &lt;s-slider marks="{{marks}}" included="{{false}}" defaultValue="{{37}}" />\n        &lt;h4>marks & step&lt;/h4>\n        &lt;s-slider marks="{{marks}}" step="{{10}}" defaultValue="{{37}}" />\n        &lt;h4>step=null&lt;/h4>\n        &lt;s-slider marks="{{marks}}" step="{{noStep}}" defaultValue="{{37}}" />\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport {Slider} from \'santd\';\n\nexport default {\n    components: {\n        \'s-slider\': Slider\n    },\n    initData() {\n        return {\n            noStep: null,\n            marks: {\n                0: \'0°C\',\n                26: \'26°C\',\n                37: \'37°C\',\n                100: {\n                    style: \'color: #f50\',\n                    label: \'100°C\'\n                }\n            }\n        };\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="带标签的滑块"><span>带标签的滑块</span><a href="#带标签的滑块" class="anchor">#</a></h4><p>使用 <code>marks</code> 属性标注分段式滑块，使用 <code>value</code> / <code>defaultValue</code> 指定滑块位置。当 <code>included=false</code>时，表明不同标记间为并列关系。当 <code>step=null</code> 时，Slider 的可选值仅有 <code>marks</code> 标出来的部分。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-slider":l.U},initData:()=>({noStep:null,marks:{0:"0°C",26:"26°C",37:"37°C",100:{style:"color: #f50",label:"100°C"}}}),template:'\n    <div>\n        <h4>included=true</h4>\n        <s-slider marks="{{marks}}" defaultValue="{{37}}"></s-slider>\n        <s-slider range="{{true}}" marks="{{marks}}" defaultValue="{{[26, 37]}}"></s-slider>\n        <h4>included=false</h4>\n        <s-slider marks="{{marks}}" included="{{false}}" defaultValue="{{37}}"></s-slider>\n        <h4>marks & step</h4>\n        <s-slider marks="{{marks}}" step="{{10}}" defaultValue="{{37}}"></s-slider>\n        <h4>step=null</h4>\n        <s-slider marks="{{marks}}" step="{{noStep}}" defaultValue="{{37}}"></s-slider>\n    </div>\n'}},template:'\n    <section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1625728682558">\n        <section class="code-box-demo"><code-preview></code-preview></section>\n        <section class="code-box-meta markdown">\n            {{ text | raw}}\n            <span class="code-expand-icon" on-click="toggleExpand">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}">\n            </span>\n        </section>\n        <section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">\n            {{ code | raw}}\n        </section>\n    </section>\n'},p={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-slider defaultValue="{{30}}" on-change="handleChange" on-afterChange="handleAfterChange" />\n        &lt;s-slider range="{{true}}" step="{{10}}" defaultValue="{{[20, 50]}}" on-change="handleChange" on-afterChange="handleAfterChange" />\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport {Slider, Switch} from \'santd\';\n\nexport default {\n    components: {\n        \'s-slider\': Slider,\n        \'s-switch\': Switch\n    },\n    handleChange(value)  {\n        console.log(\'on-change: \', value);\n    },\n    handleAfterChange(value) {\n        console.log(\'on-afterChange: \', value);\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="事件"><span>事件</span><a href="#事件" class="anchor">#</a></h4><p>当 Slider 的值发生改变时，会触发 <code>on-change</code> 事件，并把改变后的值作为参数传入。在 <code>on-mouseup</code> 时，会触发 <code>on-afterChange</code> 事件，并把当前值作为参数传入。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-slider":l.U,"s-switch":l.Z},handleChange(e){console.log("on-change: ",e)},handleAfterChange(e){console.log("on-afterChange: ",e)},template:'\n    <div>\n        <s-slider defaultValue="{{30}}" on-change="handleChange" on-afterChange="handleAfterChange"></s-slider>\n        <s-slider range="{{true}}" step="{{10}}" defaultValue="{{[20, 50]}}" on-change="handleChange" on-afterChange="handleAfterChange"></s-slider>\n    </div>\n'}},template:'\n    <section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1625728682552">\n        <section class="code-box-demo"><code-preview></code-preview></section>\n        <section class="code-box-meta markdown">\n            {{ text | raw}}\n            <span class="code-expand-icon" on-click="toggleExpand">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}">\n            </span>\n        </section>\n        <section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">\n            {{ code | raw}}\n        </section>\n    </section>\n'},h={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-slider tipFormatter="{{tipFormatter}}" />\n        &lt;s-slider tipFormatter="{{noTip}}" />\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport {Slider} from \'santd\';\n\nexport default {\n    components: {\n        \'s-slider\': Slider\n    },\n    initData() {\n        return {\n            tipFormatter(value) {\n                return &#96;&#36;&#123;value}%&#96;;\n            },\n            noTip: null\n        };\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="自定义提示"><span>自定义提示</span><a href="#自定义提示" class="anchor">#</a></h4><p>使用 <code>tipFormatter</code> 可以格式化 <code>Tooltip</code> 的内容，设置 <code>tipFormatter</code> 为 <code>null</code>，则隐藏 Tooltip。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-slider":l.U},initData:()=>({tipFormatter:e=>e+"%",noTip:null}),template:'\n    <div>\n        <s-slider tipFormatter="{{tipFormatter}}"></s-slider>\n        <s-slider tipFormatter="{{noTip}}"></s-slider>\n    </div>\n'}},template:'\n    <section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1625728682536">\n        <section class="code-box-demo"><code-preview></code-preview></section>\n        <section class="code-box-meta markdown">\n            {{ text | raw}}\n            <span class="code-expand-icon" on-click="toggleExpand">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}">\n            </span>\n        </section>\n        <section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">\n            {{ code | raw}}\n        </section>\n    </section>\n'},m={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div style="height: 300px;">\n        &lt;div style="height: 300px; float: left; margin-left: 70px;">\n            &lt;s-slider vertical="{{true}}" defaultValue="{{30}}" />\n        &lt;/div>\n        &lt;div style="height: 300px; float: left; margin-left: 70px;">\n            &lt;s-slider vertical="{{true}}" range="{{true}}" defaultValue="{{[20,50]}}" step="{{10}}" />\n        &lt;/div>\n        &lt;div style="height: 300px; float: left; margin-left: 70px;">\n            &lt;s-slider vertical="{{true}}" range="{{true}}" defaultValue="{{[26, 37]}}" marks="{{marks}}" />\n        &lt;/div>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport {Slider} from \'santd\';\n\nexport default {\n    components: {\n        \'s-slider\': Slider\n    },\n    initData() {\n        return {\n            marks: {\n                0: \'0°C\',\n                26: \'26°C\',\n                37: \'37°C\',\n                100: {\n                    style: \'color: #f50\',\n                    label: \'100°C\'\n                }\n            }\n        };\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="垂直"><span>垂直</span><a href="#垂直" class="anchor">#</a></h4><p>垂直方向的 Slider。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-slider":l.U},initData:()=>({marks:{0:"0°C",26:"26°C",37:"37°C",100:{style:"color: #f50",label:"100°C"}}}),template:'\n    <div style="height: 300px;">\n        <div style="height: 300px; float: left; margin-left: 70px;">\n            <s-slider vertical="{{true}}" defaultValue="{{30}}"></s-slider>\n        </div>\n        <div style="height: 300px; float: left; margin-left: 70px;">\n            <s-slider vertical="{{true}}" range="{{true}}" defaultValue="{{[20,50]}}" step="{{10}}"></s-slider>\n        </div>\n        <div style="height: 300px; float: left; margin-left: 70px;">\n            <s-slider vertical="{{true}}" range="{{true}}" defaultValue="{{[26, 37]}}" marks="{{marks}}"></s-slider>\n        </div>\n    </div>\n'}},template:'\n    <section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1625728682523">\n        <section class="code-box-demo"><code-preview></code-preview></section>\n        <section class="code-box-meta markdown">\n            {{ text | raw}}\n            <span class="code-expand-icon" on-click="toggleExpand">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}">\n            </span>\n        </section>\n        <section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">\n            {{ code | raw}}\n        </section>\n    </section>\n'},g={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-row>\n            &lt;s-col span="12">\n                &lt;s-slider min="{{1}}" max="{{20}}" on-change="handleIntegerChange" value="{{integerValue}}" />\n            &lt;/s-col>\n            &lt;s-col span="4">\n                &lt;s-inputnumber min="{{1}}" max="{{20}}" value="{{inputIntegerValue}}" on-change="handleIntegerChange" style="margin-left: 16px;" />\n            &lt;/s-col>\n        &lt;/s-row>\n        &lt;s-row>\n            &lt;s-col span="12">\n                &lt;s-slider min="{{0}}" max="{{1}}" on-change="handleDecimalChange" value="{{decimalValue}}" step="{{0.01}}"/>\n            &lt;/s-col>\n            &lt;s-col span="4">\n                &lt;s-inputnumber min="{{0}}" max="{{1}}" step="{{0.01}}" value="{{inputDecimalValue}}" on-change="handleDecimalChange" style="margin-left: 16px;" />\n            &lt;/s-col>\n        &lt;/s-row>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport {Slider, InputNumber, Grid} from \'santd\';\n\nexport default {\n    components: {\n        \'s-slider\': Slider,\n        \'s-inputnumber\': InputNumber,\n        \'s-row\': Grid.Row,\n        \'s-col\': Grid.Col\n    },\n    initData() {\n        return {\n            inputIntegerValue: 1,\n            inputDecimalValue: 0\n        }\n    },\n    computed: {\n        decimalValue() {\n            const inputDecimalValue = this.data.get(\'inputDecimalValue\');\n            return typeof inputDecimalValue === \'number\' ? inputDecimalValue : 0;\n        }\n    },\n    handleIntegerChange(value)  {\n        if (Number.isNaN(value)) {\n            return;\n        }\n        this.data.set(\'inputIntegerValue\', value);\n    },\n    handleDecimalChange(value)  {\n        if (Number.isNaN(value)) {\n            return;\n        }\n        this.data.set(\'inputDecimalValue\', value);\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="带输入框的滑块"><span>带输入框的滑块</span><a href="#带输入框的滑块" class="anchor">#</a></h4><p>和数字输入框组件保持同步。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-slider":l.U,"s-inputnumber":l.B,"s-row":l.y.Row,"s-col":l.y.Col},initData:()=>({inputIntegerValue:1,inputDecimalValue:0}),computed:{decimalValue(){const e=this.data.get("inputDecimalValue");return"number"==typeof e?e:0}},handleIntegerChange(e){Number.isNaN(e)||this.data.set("inputIntegerValue",e)},handleDecimalChange(e){Number.isNaN(e)||this.data.set("inputDecimalValue",e)},template:'\n    <div>\n        <s-row>\n            <s-col span="12">\n                <s-slider min="{{1}}" max="{{20}}" on-change="handleIntegerChange" value="{{integerValue}}"></s-slider>\n            </s-col>\n            <s-col span="4">\n                <s-inputnumber min="{{1}}" max="{{20}}" value="{{inputIntegerValue}}" on-change="handleIntegerChange" style="margin-left: 16px;"></s-inputnumber>\n            </s-col>\n        </s-row>\n        <s-row>\n            <s-col span="12">\n                <s-slider min="{{0}}" max="{{1}}" on-change="handleDecimalChange" value="{{decimalValue}}" step="{{0.01}}"></s-slider>\n            </s-col>\n            <s-col span="4">\n                <s-inputnumber min="{{0}}" max="{{1}}" step="{{0.01}}" value="{{inputDecimalValue}}" on-change="handleDecimalChange" style="margin-left: 16px;"></s-inputnumber>\n            </s-col>\n        </s-row>\n    </div>\n'}},template:'\n    <section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1625728682541">\n        <section class="code-box-demo"><code-preview></code-preview></section>\n        <section class="code-box-meta markdown">\n            {{ text | raw}}\n            <span class="code-expand-icon" on-click="toggleExpand">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}">\n            </span>\n        </section>\n        <section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">\n            {{ code | raw}}\n        </section>\n    </section>\n'},u={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-slider defaultValue="{{30}}" tooltipVisible="{{true}}" />\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport {Slider} from \'santd\';\n\nexport default {\n    components: {\n        \'s-slider\': Slider\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="控制-tooltip-的显示"><span>控制 ToolTip 的显示</span><a href="#控制-tooltip-的显示" class="anchor">#</a></h4><p>当 <code>tooltipVisible</code> 为 <code>true</code> 时，将始终显示 ToolTip；反之则始终不显示，即使在拖动、移入时也是如此。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-slider":l.U},template:'\n    <div>\n        <s-slider defaultValue="{{30}}" tooltipVisible="{{true}}"></s-slider>\n    </div>\n'}},template:'\n    <section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1625728682530">\n        <section class="code-box-demo"><code-preview></code-preview></section>\n        <section class="code-box-meta markdown">\n            {{ text | raw}}\n            <span class="code-expand-icon" on-click="toggleExpand">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}">\n            </span>\n        </section>\n        <section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">\n            {{ code | raw}}\n        </section>\n    </section>\n'},x={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-slider defaultValue="{{30}}" disabled="{{disabled}}" tooltipPlacement="left"/>\n        &lt;s-slider range="{{true}}" defaultValue="{{[20, 50]}}" disabled="{{disabled}}" tooltipPlacement="bottom"/>\n        \n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport {Slider, Switch} from \'santd\';\n\nexport default {\n    components: {\n        \'s-slider\': Slider,\n        \'s-switch\': Switch\n    },\n    handleDisabledChange(checked)  {\n        this.data.set(\'disabled\', checked);\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="气泡框位置"><span>气泡框位置</span><a href="#气泡框位置" class="anchor">#</a></h4><p>tooltip气泡框位置</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-slider":l.U,"s-switch":l.Z},handleDisabledChange(e){this.data.set("disabled",e)},template:'\n    <div>\n        <s-slider defaultValue="{{30}}" disabled="{{disabled}}" tooltipPlacement="left"></s-slider>\n        <s-slider range="{{true}}" defaultValue="{{[20, 50]}}" disabled="{{disabled}}" tooltipPlacement="bottom"></s-slider>\n        \n    </div>\n'}},template:'\n    <section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1625728682505">\n        <section class="code-box-demo"><code-preview></code-preview></section>\n        <section class="code-box-meta markdown">\n            {{ text | raw}}\n            <span class="code-expand-icon" on-click="toggleExpand">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}">\n            </span>\n        </section>\n        <section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">\n            {{ code | raw}}\n        </section>\n    </section>\n'},w={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-slider range="{{true}}" reverse="{{reverse}}"  marks="{{marks}}" defaultValue="{{[26, 37]}}"  tooltipPlacement="bottom"/>\n        &lt;s-slider range="{{true}}" defaultValue="{{[0, 50]}}" reverse="{{reverse}}" tooltipPlacement="bottom"/>\n        Reversed: &lt;s-switch size="small" on-change=\'handleDisabledChange\'/>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport {Slider, Switch} from \'santd\';\n\nexport default {\n    components: {\n        \'s-slider\': Slider,\n        \'s-switch\': Switch\n    },\n    handleDisabledChange(checked)  {\n        this.data.set(\'reverse\', checked);\n    },\n    initData() {\n        return {\n            reverse: false,\n            marks: {\n                0: \'0°C\',\n                26: \'26°C\',\n                37: \'37°C\',\n                100: {\n                    style: \'color: #f50\',\n                    label: \'100°C\'\n                }\n            }\n        };\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="反向"><span>反向</span><a href="#反向" class="anchor">#</a></h4><p>设置 reverse 可以将滑动条置反。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-slider":l.U,"s-switch":l.Z},handleDisabledChange(e){this.data.set("reverse",e)},initData:()=>({reverse:!1,marks:{0:"0°C",26:"26°C",37:"37°C",100:{style:"color: #f50",label:"100°C"}}}),template:'\n    <div>\n        <s-slider range="{{true}}" reverse="{{reverse}}" marks="{{marks}}" defaultValue="{{[26, 37]}}" tooltipPlacement="bottom"></s-slider>\n        <s-slider range="{{true}}" defaultValue="{{[0, 50]}}" reverse="{{reverse}}" tooltipPlacement="bottom"></s-slider>\n        Reversed: <s-switch size="small" on-change="handleDisabledChange"></s-switch>\n    </div>\n'}},template:'\n    <section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1625728682516">\n        <section class="code-box-demo"><code-preview></code-preview></section>\n        <section class="code-box-meta markdown">\n            {{ text | raw}}\n            <span class="code-expand-icon" on-click="toggleExpand">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}">\n            </span>\n        </section>\n        <section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">\n            {{ code | raw}}\n        </section>\n    </section>\n'};n.default=s.a.defineComponent({components:{desc:o,readme:d,basic:i,icon:c,mark:r,event:p,tip:h,vertical:m,input:g,tooltip:u,placement:x,reverse:w},template:"\n        <div>\n            <desc/>\n            <basic/>\n            <icon/>\n            <event/>\n            <vertical/>\n            <input/>\n            <tip/>\n            <mark/>\n            <tooltip/>\n            <placement/>\n            <reverse/>\n            <readme/>\n        </div>\n    "})},718:function(e,n,t){var a=t(4),s=t(719);"string"==typeof(s=s.__esModule?s.default:s)&&(s=[[e.i,s,""]]);var d={insert:"head",singleton:!1};a(s,d);e.exports=s.locals||{}},719:function(e,n,t){(n=t(5)(!1)).push([e.i,"\n.icon-wrapper {\n    position: relative;\n    padding: 0px 30px;\n}\n\n.icon-wrapper .santd-icon {\n    position: absolute;\n    top: -2px;\n    width: 16px;\n    height: 16px;\n    line-height: 1;\n    font-size: 16px;\n    color: rgba(0, 0, 0, 0.25);\n}\n\n.icon-wrapper .santd-icon:first-child {\n    left: 0;\n}\n\n.icon-wrapper .santd-icon:last-child {\n    right: 0;\n}\n",""]),e.exports=n}}]);