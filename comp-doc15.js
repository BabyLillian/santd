(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{1290:function(e,a,n){"use strict";n.r(a);var s=n(0),t=n.n(s),o={template:'<section class="markdown"><h2 id="api">API</h2><h3 id="collapse">Collapse</h3><table><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>activeKey</td><td>当前激活 tab 面板的 key</td><td>string[]|string</td><td>默认无，accordion模式下默认第一个元素</td></tr><tr><td>defaultActiveKey</td><td>初始化选中面板的 key</td><td>string[]|string</td><td>-</td></tr><tr><td>bordered</td><td>带边框风格的折叠面板</td><td>boolean</td><td><code>true</code></td></tr><tr><td>accordion</td><td>手风琴模式</td><td>boolean</td><td><code>false</code></td></tr><tr><td>on-change</td><td>切换面板的回调</td><td>Function</td><td>无</td></tr><tr><td>destroyInactivePanel</td><td>销毁折叠隐藏的面板</td><td>boolean</td><td><code>false</code></td></tr></tbody></table><h3 id="collapsepanel">Collapse.Panel</h3><table><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>disabled</td><td>禁用后的面板展开与否将无法通过用户交互改变</td><td>boolean</td><td><code>false</code></td></tr><tr><td>forceRender</td><td>被隐藏时是否渲染 DOM 结构</td><td>boolean</td><td><code>false</code></td></tr><tr><td>header</td><td>面板头内容</td><td>string</td><td>无</td></tr><tr><td>key</td><td>对应 activeKey</td><td>string</td><td>无</td></tr><tr><td>showArrow</td><td>是否展示当前面板上的箭头</td><td>boolean</td><td><code>true</code></td></tr><tr><td>extra</td><td>自定义渲染每个面板右上角的内容</td><td>slot</td><td>-</td></tr><tr><td>expandIcon</td><td>自定义切换图标</td><td>string</td><td>-</td></tr></tbody></table></section>'},l=n(119),d={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n    &lt;s-collapse accordion="{{true}}" defaultActiveKey="{{[\'1\']}}">\n        &lt;s-panel header="This is panel header 1" key="1">\n            &lt;p>\n                A dog is a type of domesticated animal.\n                Known for its loyalty and faithfulness,\n                it can be found as a welcome guest in many households across the world.\n            &lt;/p>\n        &lt;/s-panel>\n        &lt;s-panel header="This is panel header 2" key="2">\n            &lt;p>\n                A dog is a type of domesticated animal.\n                Known for its loyalty and faithfulness,\n                it can be found as a welcome guest in many households across the world.\n            &lt;/p>\n        &lt;/s-panel>\n        &lt;s-panel header="This is panel header 3" key="3">\n            &lt;p>\n                A dog is a type of domesticated animal.\n                Known for its loyalty and faithfulness,\n                it can be found as a welcome guest in many households across the world.\n            &lt;/p>\n        &lt;/s-panel>\n    &lt;/s-collapse>\n  &lt;/div>\n&lt;/template>\n&lt;script>\nimport Collapse from \'santd/collapse\';\nexport default {\n    components: {\n        \'s-collapse\': Collapse,\n        \'s-panel\': Collapse.Panel\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="手风琴">手风琴</h4>\n<p>手风琴，每次只打开一个tab。默认打开第一个。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-collapse":l.a,"s-panel":l.a.Panel},template:'<div><s-collapse accordion="{{true}}" defaultActiveKey="{{[\'1\']}}"><s-panel header="This is panel header 1" key="1"><p>A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.</p></s-panel><s-panel header="This is panel header 2" key="2"><p>A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.</p></s-panel><s-panel header="This is panel header 3" key="3"><p>A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.</p></s-panel></s-collapse></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1576747450761"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},i={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n    &lt;s-collapse on-change="handleChange" defaultActiveKey="{{[\'1\']}}">\n        &lt;s-panel header="This is panel header 1" key="1">\n            &lt;p>\n                A dog is a type of domesticated animal.\n                Known for its loyalty and faithfulness,\n                it can be found as a welcome guest in many households across the world.\n            &lt;/p>\n        &lt;/s-panel>\n        &lt;s-panel header="This is panel header 2" key="2">\n            &lt;p>\n                A dog is a type of domesticated animal.\n                Known for its loyalty and faithfulness,\n                it can be found as a welcome guest in many households across the world.\n            &lt;/p>\n        &lt;/s-panel>\n        &lt;s-panel header="This is panel header 3" disabled="{{true}}" key="3">\n            &lt;p>\n                A dog is a type of domesticated animal.\n                Known for its loyalty and faithfulness,\n                it can be found as a welcome guest in many households across the world.\n            &lt;/p>\n        &lt;/s-panel>\n    &lt;/s-collapse>\n  &lt;/div>\n&lt;/template>\n&lt;script>\nimport Collapse from \'santd/collapse\';\n\nexport default {\n    components: {\n        \'s-collapse\': Collapse,\n        \'s-panel\': Collapse.Panel\n    },\n    handleChange(args) {\n        console.log(\'handleChange\', args);\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="折叠面板">折叠面板</h4>\n<p>可以同时展开多个面板，这个例子默认展开了第一个。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-collapse":l.a,"s-panel":l.a.Panel},handleChange(e){console.log("handleChange",e)},template:'<div><s-collapse on-change="handleChange" defaultActiveKey="{{[\'1\']}}"><s-panel header="This is panel header 1" key="1"><p>A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.</p></s-panel><s-panel header="This is panel header 2" key="2"><p>A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.</p></s-panel><s-panel header="This is panel header 3" disabled="{{true}}" key="3"><p>A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.</p></s-panel></s-collapse></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1576747450752"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},p={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n    &lt;s-collapse on-change="handleChange">\n        &lt;s-panel header="This is panel header 1" key="1">\n            &lt;s-collapse on-change="handleChange" defaultActiveKey="1">\n                &lt;s-panel header="This is panel header 1" key="1">\n                    &lt;p>\n                        A dog is a type of domesticated animal.\n                        Known for its loyalty and faithfulness,\n                        it can be found as a welcome guest in many households across the world.\n                    &lt;/p>\n                &lt;/s-panel>\n            &lt;/s-collapse>\n        &lt;/s-panel>\n        &lt;s-panel header="This is panel header 2" key="2">\n            &lt;p>\n                A dog is a type of domesticated animal.\n                Known for its loyalty and faithfulness,\n                it can be found as a welcome guest in many households across the world.\n            &lt;/p>\n        &lt;/s-panel>\n        &lt;s-panel header="This is panel header 3" key="3">\n            &lt;p>\n                A dog is a type of domesticated animal.\n                Known for its loyalty and faithfulness,\n                it can be found as a welcome guest in many households across the world.\n            &lt;/p>\n        &lt;/s-panel>\n    &lt;/s-collapse>\n  &lt;/div>\n&lt;/template>\n&lt;script>\nimport Collapse from \'santd/collapse\';\nexport default {\n    components: {\n        \'s-collapse\': Collapse,\n        \'s-panel\': Collapse.Panel\n    },\n    handleChange(args) {\n        console.log(\'handleChange\', args);\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="面板嵌套">面板嵌套</h4>\n<p>嵌套折叠面板。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-collapse":l.a,"s-panel":l.a.Panel},handleChange(e){console.log("handleChange",e)},template:'<div><s-collapse on-change="handleChange"><s-panel header="This is panel header 1" key="1"><s-collapse on-change="handleChange" defaultActiveKey="1"><s-panel header="This is panel header 1" key="1"><p>A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.</p></s-panel></s-collapse></s-panel><s-panel header="This is panel header 2" key="2"><p>A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.</p></s-panel><s-panel header="This is panel header 3" key="3"><p>A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.</p></s-panel></s-collapse></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1576747450741"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},c={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n    &lt;s-collapse on-change="handleChange" defaultActiveKey="{{[\'1\']}}">\n        &lt;s-panel header="This is panel header 1" key="1">\n            &lt;p>\n                A dog is a type of domesticated animal.\n                Known for its loyalty and faithfulness,\n                it can be found as a welcome guest in many households across the world.\n            &lt;/p>\n        &lt;/s-panel>\n        &lt;s-panel header="This is panel header 3" showArrow="{{false}}" key="2">\n            &lt;p>\n                A dog is a type of domesticated animal.\n                Known for its loyalty and faithfulness,\n                it can be found as a welcome guest in many households across the world.\n            &lt;/p>\n        &lt;/s-panel>\n    &lt;/s-collapse>\n  &lt;/div>\n&lt;/template>\n&lt;script>\nimport Collapse from \'santd/collapse\';\nexport default {\n    components: {\n        \'s-collapse\': Collapse,\n        \'s-panel\': Collapse.Panel\n    },\n    handleChange(args) {\n        console.log(\'handleChange\', args);\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="隐藏箭头">隐藏箭头</h4>\n<p>你可以通过 <code>showArrow</code> 值为 <code>false</code> , 隐藏 CollapsePanel 组件的箭头图标。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-collapse":l.a,"s-panel":l.a.Panel},handleChange(e){console.log("handleChange",e)},template:'<div><s-collapse on-change="handleChange" defaultActiveKey="{{[\'1\']}}"><s-panel header="This is panel header 1" key="1"><p>A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.</p></s-panel><s-panel header="This is panel header 3" showArrow="{{false}}" key="2"><p>A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.</p></s-panel></s-collapse></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1576747450734"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},r=n(3);const h={background:"#f7f7f7","border-radius":"4px","margin-bottom":"24px",border:0,overflow:"hidden"};var m={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n    &lt;s-collapse bordered="{{false}}" defaultActiveKey="{{[\'1\']}}">\n        &lt;s-panel header="This is panel header 1" key="1" style="{{panelStyle}}">\n            &lt;p>\n                A dog is a type of domesticated animal.\n                Known for its loyalty and faithfulness,\n                it can be found as a welcome guest in many households across the world.\n            &lt;/p>\n            &lt;template slot="extra">\n                &lt;s-icon type="setting"/>\n            &lt;/template>\n        &lt;/s-panel>\n        &lt;s-panel header="This is panel header 2" active key="2" style="{{panelStyle}}" expandIcon="double-right">\n            &lt;p>\n                A dog is a type of domesticated animal.\n                Known for its loyalty and faithfulness,\n                it can be found as a welcome guest in many households across the world.\n            &lt;/p>\n        &lt;/s-panel>\n        &lt;s-panel header="This is panel header 3" key="3" style="{{panelStyle}}" expandIcon="expandIcon">\n            &lt;p>\n                A dog is a type of domesticated animal.\n                Known for its loyalty and faithfulness,\n                it can be found as a welcome guest in many households across the world.\n            &lt;/p>\n            &lt;template slot="expandIcon">\n                &lt;span>&lt;s-icon type="caret-right" rotate="{{isActive ? 90 : 0}}" class="{{prefixCls}}-arrow" />&lt;/span>\n            &lt;/template>\n        &lt;/s-panel>\n    &lt;/s-collapse>\n  &lt;/div>\n&lt;/template>\n&lt;script>\nimport san from \'san\';\nimport Icon from \'santd/icon\';\nimport Collapse from \'santd/collapse\';\n\nconst customPanelStyle = {\n    \'background\': \'#f7f7f7\',\n    \'border-radius\': \'4px\',\n    \'margin-bottom\': \'24px\',\n    \'border\': 0,\n    \'overflow\': \'hidden\'\n};\n\nexport default {\n    components: {\n        \'s-collapse\': Collapse,\n        \'s-panel\': Collapse.Panel,\n        \'s-icon\': Icon\n    },\n    initData() {\n        return {\n            panelStyle: customPanelStyle\n        };\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="自定义面板">自定义面板</h4>\n<p>自定义各个面板的样式。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-collapse":l.a,"s-panel":l.a.Panel,"s-icon":r.a},initData:()=>({panelStyle:h}),template:'<div><s-collapse bordered="{{false}}" defaultActiveKey="{{[\'1\']}}"><s-panel header="This is panel header 1" key="1" style="{{panelStyle}}"><p>A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.</p><template slot="extra"><s-icon type="setting"></s-icon></template></s-panel><s-panel header="This is panel header 2" active="" key="2" style="{{panelStyle}}" expandIcon="double-right"><p>A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.</p></s-panel><s-panel header="This is panel header 3" key="3" style="{{panelStyle}}" expandIcon="expandIcon"><p>A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.</p><template slot="expandIcon"><span><s-icon type="caret-right" rotate="{{isActive ? 90 : 0}}" class="{{prefixCls}}-arrow"></s-icon></span></template></s-panel></s-collapse></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1576747450719"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},g={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n    &lt;s-collapse on-change="handleChange">\n        &lt;s-panel header="This is panel header 1" key="1">\n            &lt;p>\n                A dog is a type of domesticated animal.\n                Known for its loyalty and faithfulness,\n                it can be found as a welcome guest in many households across the world.\n            &lt;/p>\n            &lt;template slot="extra">\n                &lt;s-icon type="setting"/>\n            &lt;/template>\n        &lt;/s-panel>\n        &lt;s-panel header="This is panel header 2" key="2">\n            &lt;p>\n                A dog is a type of domesticated animal.\n                Known for its loyalty and faithfulness,\n                it can be found as a welcome guest in many households across the world.\n            &lt;/p>\n            &lt;template slot="extra">\n                &lt;s-icon type="setting"/>\n            &lt;/template>\n        &lt;/s-panel>\n        &lt;s-panel header="This is panel header 3" key="3">\n            &lt;p>\n                A dog is a type of domesticated animal.\n                Known for its loyalty and faithfulness,\n                it can be found as a welcome guest in many households across the world.\n            &lt;/p>\n            &lt;template slot="extra">\n                &lt;s-icon type="setting"/>\n            &lt;/template>\n        &lt;/s-panel>\n    &lt;/s-collapse>\n  &lt;/div>\n&lt;/template>\n&lt;script>\nimport Collapse from \'santd/collapse\';\nimport Icon from \'santd/icon\';\nexport default {\n    components: {\n        \'s-collapse\': Collapse,\n        \'s-panel\': Collapse.Panel,\n        \'s-icon\': Icon\n    },\n    handleChange(args) {\n        console.log(\'handleChange\', args);\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="额外节点">额外节点</h4>\n<p>添加 <code>name</code> 值为 extra 的插槽，为header添加自定义额外节点。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-collapse":l.a,"s-panel":l.a.Panel,"s-icon":r.a},handleChange(e){console.log("handleChange",e)},template:'<div><s-collapse on-change="handleChange"><s-panel header="This is panel header 1" key="1"><p>A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.</p><template slot="extra"><s-icon type="setting"></s-icon></template></s-panel><s-panel header="This is panel header 2" key="2"><p>A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.</p><template slot="extra"><s-icon type="setting"></s-icon></template></s-panel><s-panel header="This is panel header 3" key="3"><p>A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.</p><template slot="extra"><s-icon type="setting"></s-icon></template></s-panel></s-collapse></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1576747450727"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},y={template:'<section class="markdown"><h1 id="collapse-折叠面板">Collapse 折叠面板</h1><p>可以折叠/展开的内容区域。</p><h2 id="何时使用">何时使用</h2><ul><li>对复杂区域进行分组和隐藏，保持页面的整洁。</li><li>通过控制 Panel 的 <code>active</code> 属性，控制单个内容区域展开或隐藏。</li></ul><h2 id="代码演示">代码演示</h2></section>'},f={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n    &lt;s-collapse bordered="{{false}}" defaultActiveKey="{{[\'1\']}}">\n        &lt;s-panel header="This is panel header 1" key="1">\n            &lt;p style="margin-left: 24px;">\n                A dog is a type of domesticated animal.\n                Known for its loyalty and faithfulness,\n                it can be found as a welcome guest in many households across the world.\n            &lt;/p>\n        &lt;/s-panel>\n        &lt;s-panel header="This is panel header 2" key="2">\n            &lt;p style="margin-left: 24px;">\n                A dog is a type of domesticated animal.\n                Known for its loyalty and faithfulness,\n                it can be found as a welcome guest in many households across the world.\n            &lt;/p>\n        &lt;/s-panel>\n        &lt;s-panel header="This is panel header 3" key="3">\n            &lt;p style="margin-left: 24px;">\n                A dog is a type of domesticated animal.\n                Known for its loyalty and faithfulness,\n                it can be found as a welcome guest in many households across the world.\n            &lt;/p>\n        &lt;/s-panel>\n    &lt;/s-collapse>\n  &lt;/div>\n&lt;/template>\n&lt;script>\nimport Collapse from \'santd/collapse\';\nexport default {\n    components: {\n        \'s-collapse\': Collapse,\n        \'s-panel\': Collapse.Panel\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="简洁风格">简洁风格</h4>\n<p>一套没有边框的简洁样式。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-collapse":l.a,"s-panel":l.a.Panel},template:'<div><s-collapse bordered="{{false}}" defaultActiveKey="{{[\'1\']}}"><s-panel header="This is panel header 1" key="1"><p style="margin-left: 24px;">A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.</p></s-panel><s-panel header="This is panel header 2" key="2"><p style="margin-left: 24px;">A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.</p></s-panel><s-panel header="This is panel header 3" key="3"><p style="margin-left: 24px;">A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.</p></s-panel></s-collapse></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1576747450685"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'};a.default=t.a.defineComponent({components:{readme:o,accordion:d,basic:i,nest:p,simple:f,custom:m,arrow:c,extra:g,head:y},template:"\n        <div>\n            <head/>\n            <basic/>\n            <accordion/>\n            <nest/>\n            <simple/>\n            <custom/>\n            <arrow/>\n            <extra/>\n            <readme/>\n        </div>\n    "})}}]);