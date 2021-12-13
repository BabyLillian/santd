(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{531:function(n,e,a){"use strict";a.r(e);var s=a(0),t=a.n(s),o={template:'<section class="markdown"><h2 id="api"><span>API</span><a href="#api" class="anchor">#</a></h2><h3 id="collapse"><span>Collapse</span><a href="#collapse" class="anchor">#</a></h3><table>\n<thead>\n<tr>\n<th>属性</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>activeKey</td>\n<td>当前激活 tab 面板的 key</td>\n<td>string[]|string</td>\n<td>默认无，accordion模式下默认第一个元素</td>\n</tr>\n<tr>\n<td>defaultActiveKey</td>\n<td>初始化选中面板的 key</td>\n<td>string[]|string</td>\n<td>-</td>\n</tr>\n<tr>\n<td>bordered</td>\n<td>带边框风格的折叠面板</td>\n<td>boolean</td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>accordion</td>\n<td>手风琴模式</td>\n<td>boolean</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>on-change</td>\n<td>切换面板的回调</td>\n<td>Function</td>\n<td>无</td>\n</tr>\n<tr>\n<td>expandIconPosition</td>\n<td>设置图标位置</td>\n<td>left</td>\n<td>right</td>\n</tr>\n<tr>\n<td>destroyInactivePanel</td>\n<td>销毁折叠隐藏的面板</td>\n<td>boolean</td>\n<td><code>false</code></td>\n</tr>\n</tbody></table>\n<h3 id="collapsepanel"><span>Collapse.Panel</span><a href="#collapsepanel" class="anchor">#</a></h3><table>\n<thead>\n<tr>\n<th>属性</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>disabled</td>\n<td>禁用后的面板展开与否将无法通过用户交互改变</td>\n<td>boolean</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>forceRender</td>\n<td>被隐藏时是否渲染 DOM 结构</td>\n<td>boolean</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>header</td>\n<td>面板头内容</td>\n<td>string</td>\n<td>无</td>\n</tr>\n<tr>\n<td>key</td>\n<td>对应 activeKey</td>\n<td>string</td>\n<td>无</td>\n</tr>\n<tr>\n<td>showArrow</td>\n<td>是否展示当前面板上的箭头</td>\n<td>boolean</td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>extra</td>\n<td>自定义渲染每个面板右上角的内容</td>\n<td>slot</td>\n<td>-</td>\n</tr>\n<tr>\n<td>expandIcon</td>\n<td>自定义切换图标</td>\n<td>string</td>\n<td>-</td>\n</tr>\n</tbody></table>\n</section>'},l=a(8),d={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n    &lt;s-collapse accordion="{{true}}" defaultActiveKey="{{[\'1\']}}">\n        &lt;s-panel header="This is panel header 1" key="1">\n            &lt;p>\n                A dog is a type of domesticated animal.\n                Known for its loyalty and faithfulness,\n                it can be found as a welcome guest in many households across the world.\n            &lt;/p>\n        &lt;/s-panel>\n        &lt;s-panel header="This is panel header 2" key="2">\n            &lt;p>\n                A dog is a type of domesticated animal.\n                Known for its loyalty and faithfulness,\n                it can be found as a welcome guest in many households across the world.\n            &lt;/p>\n        &lt;/s-panel>\n        &lt;s-panel header="This is panel header 3" key="3">\n            &lt;p>\n                A dog is a type of domesticated animal.\n                Known for its loyalty and faithfulness,\n                it can be found as a welcome guest in many households across the world.\n            &lt;/p>\n        &lt;/s-panel>\n    &lt;/s-collapse>\n  &lt;/div>\n&lt;/template>\n&lt;script>\nimport {Collapse} from \'santd\';\n\nexport default {\n    components: {\n        \'s-collapse\': Collapse,\n        \'s-panel\': Collapse.Panel\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="手风琴"><span>手风琴</span><a href="#手风琴" class="anchor">#</a></h4><p>手风琴，每次只打开一个tab。默认打开第一个。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-collapse":l.p,"s-panel":l.p.Panel},template:'\n    <div>\n    <s-collapse accordion="{{true}}" defaultActiveKey="{{[\'1\']}}">\n        <s-panel header="This is panel header 1" key="1">\n            <p>\n                A dog is a type of domesticated animal.\n                Known for its loyalty and faithfulness,\n                it can be found as a welcome guest in many households across the world.\n            </p>\n        </s-panel>\n        <s-panel header="This is panel header 2" key="2">\n            <p>\n                A dog is a type of domesticated animal.\n                Known for its loyalty and faithfulness,\n                it can be found as a welcome guest in many households across the world.\n            </p>\n        </s-panel>\n        <s-panel header="This is panel header 3" key="3">\n            <p>\n                A dog is a type of domesticated animal.\n                Known for its loyalty and faithfulness,\n                it can be found as a welcome guest in many households across the world.\n            </p>\n        </s-panel>\n    </s-collapse>\n  </div>\n'}},template:'\n    <section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1639397095613">\n        <section class="code-box-demo"><code-preview></code-preview></section>\n        <section class="code-box-meta markdown">\n            {{ text | raw}}\n            <span class="code-expand-icon" on-click="toggleExpand">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}">\n            </span>\n        </section>\n        <section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">\n            {{ code | raw}}\n        </section>\n    </section>\n'},i={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n    &lt;s-collapse on-change="handleChange" defaultActiveKey="{{[\'1\']}}">\n        &lt;s-panel header="This is panel header 1" key="1">\n            &lt;p>\n                A dog is a type of domesticated animal.\n                Known for its loyalty and faithfulness,\n                it can be found as a welcome guest in many households across the world.\n            &lt;/p>\n        &lt;/s-panel>\n        &lt;s-panel header="This is panel header 2" key="2">\n            &lt;p>\n                A dog is a type of domesticated animal.\n                Known for its loyalty and faithfulness,\n                it can be found as a welcome guest in many households across the world.\n            &lt;/p>\n        &lt;/s-panel>\n        &lt;s-panel header="This is panel header 3" disabled="{{true}}" key="3">\n            &lt;p>\n                A dog is a type of domesticated animal.\n                Known for its loyalty and faithfulness,\n                it can be found as a welcome guest in many households across the world.\n            &lt;/p>\n        &lt;/s-panel>\n    &lt;/s-collapse>\n  &lt;/div>\n&lt;/template>\n&lt;script>\nimport {Collapse} from \'santd\';\n\nexport default {\n    components: {\n        \'s-collapse\': Collapse,\n        \'s-panel\': Collapse.Panel\n    },\n    handleChange(args) {\n        console.log(\'handleChange\', args);\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="折叠面板"><span>折叠面板</span><a href="#折叠面板" class="anchor">#</a></h4><p>可以同时展开多个面板，这个例子默认展开了第一个。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-collapse":l.p,"s-panel":l.p.Panel},handleChange(n){console.log("handleChange",n)},template:'\n    <div>\n    <s-collapse on-change="handleChange" defaultActiveKey="{{[\'1\']}}">\n        <s-panel header="This is panel header 1" key="1">\n            <p>\n                A dog is a type of domesticated animal.\n                Known for its loyalty and faithfulness,\n                it can be found as a welcome guest in many households across the world.\n            </p>\n        </s-panel>\n        <s-panel header="This is panel header 2" key="2">\n            <p>\n                A dog is a type of domesticated animal.\n                Known for its loyalty and faithfulness,\n                it can be found as a welcome guest in many households across the world.\n            </p>\n        </s-panel>\n        <s-panel header="This is panel header 3" disabled="{{true}}" key="3">\n            <p>\n                A dog is a type of domesticated animal.\n                Known for its loyalty and faithfulness,\n                it can be found as a welcome guest in many households across the world.\n            </p>\n        </s-panel>\n    </s-collapse>\n  </div>\n'}},template:'\n    <section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1639397095604">\n        <section class="code-box-demo"><code-preview></code-preview></section>\n        <section class="code-box-meta markdown">\n            {{ text | raw}}\n            <span class="code-expand-icon" on-click="toggleExpand">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}">\n            </span>\n        </section>\n        <section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">\n            {{ code | raw}}\n        </section>\n    </section>\n'},p={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n    &lt;s-collapse on-change="handleChange">\n        &lt;s-panel header="This is panel header 1" key="1">\n            &lt;s-collapse on-change="handleChange" defaultActiveKey="1">\n                &lt;s-panel header="This is panel header 1" key="1">\n                    &lt;p>\n                        A dog is a type of domesticated animal.\n                        Known for its loyalty and faithfulness,\n                        it can be found as a welcome guest in many households across the world.\n                    &lt;/p>\n                &lt;/s-panel>\n            &lt;/s-collapse>\n        &lt;/s-panel>\n        &lt;s-panel header="This is panel header 2" key="2">\n            &lt;p>\n                A dog is a type of domesticated animal.\n                Known for its loyalty and faithfulness,\n                it can be found as a welcome guest in many households across the world.\n            &lt;/p>\n        &lt;/s-panel>\n        &lt;s-panel header="This is panel header 3" key="3">\n            &lt;p>\n                A dog is a type of domesticated animal.\n                Known for its loyalty and faithfulness,\n                it can be found as a welcome guest in many households across the world.\n            &lt;/p>\n        &lt;/s-panel>\n    &lt;/s-collapse>\n  &lt;/div>\n&lt;/template>\n&lt;script>\nimport {Collapse} from \'santd\';\n\nexport default {\n    components: {\n        \'s-collapse\': Collapse,\n        \'s-panel\': Collapse.Panel\n    },\n    handleChange(args) {\n        console.log(\'handleChange\', args);\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="面板嵌套"><span>面板嵌套</span><a href="#面板嵌套" class="anchor">#</a></h4><p>嵌套折叠面板。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-collapse":l.p,"s-panel":l.p.Panel},handleChange(n){console.log("handleChange",n)},template:'\n    <div>\n    <s-collapse on-change="handleChange">\n        <s-panel header="This is panel header 1" key="1">\n            <s-collapse on-change="handleChange" defaultActiveKey="1">\n                <s-panel header="This is panel header 1" key="1">\n                    <p>\n                        A dog is a type of domesticated animal.\n                        Known for its loyalty and faithfulness,\n                        it can be found as a welcome guest in many households across the world.\n                    </p>\n                </s-panel>\n            </s-collapse>\n        </s-panel>\n        <s-panel header="This is panel header 2" key="2">\n            <p>\n                A dog is a type of domesticated animal.\n                Known for its loyalty and faithfulness,\n                it can be found as a welcome guest in many households across the world.\n            </p>\n        </s-panel>\n        <s-panel header="This is panel header 3" key="3">\n            <p>\n                A dog is a type of domesticated animal.\n                Known for its loyalty and faithfulness,\n                it can be found as a welcome guest in many households across the world.\n            </p>\n        </s-panel>\n    </s-collapse>\n  </div>\n'}},template:'\n    <section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1639397095597">\n        <section class="code-box-demo"><code-preview></code-preview></section>\n        <section class="code-box-meta markdown">\n            {{ text | raw}}\n            <span class="code-expand-icon" on-click="toggleExpand">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}">\n            </span>\n        </section>\n        <section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">\n            {{ code | raw}}\n        </section>\n    </section>\n'},c={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n    &lt;s-collapse on-change="handleChange" defaultActiveKey="{{[\'1\']}}">\n        &lt;s-panel header="This is panel header 1" key="1">\n            &lt;p>\n                A dog is a type of domesticated animal.\n                Known for its loyalty and faithfulness,\n                it can be found as a welcome guest in many households across the world.\n            &lt;/p>\n        &lt;/s-panel>\n        &lt;s-panel header="This is panel header 3" showArrow="{{false}}" key="2">\n            &lt;p>\n                A dog is a type of domesticated animal.\n                Known for its loyalty and faithfulness,\n                it can be found as a welcome guest in many households across the world.\n            &lt;/p>\n        &lt;/s-panel>\n    &lt;/s-collapse>\n  &lt;/div>\n&lt;/template>\n&lt;script>\nimport {Collapse} from \'santd\';\n\nexport default {\n    components: {\n        \'s-collapse\': Collapse,\n        \'s-panel\': Collapse.Panel\n    },\n    handleChange(args) {\n        console.log(\'handleChange\', args);\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="隐藏箭头"><span>隐藏箭头</span><a href="#隐藏箭头" class="anchor">#</a></h4><p>你可以通过 <code>showArrow</code> 值为 <code>false</code> , 隐藏 CollapsePanel 组件的箭头图标。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-collapse":l.p,"s-panel":l.p.Panel},handleChange(n){console.log("handleChange",n)},template:'\n    <div>\n    <s-collapse on-change="handleChange" defaultActiveKey="{{[\'1\']}}">\n        <s-panel header="This is panel header 1" key="1">\n            <p>\n                A dog is a type of domesticated animal.\n                Known for its loyalty and faithfulness,\n                it can be found as a welcome guest in many households across the world.\n            </p>\n        </s-panel>\n        <s-panel header="This is panel header 3" showArrow="{{false}}" key="2">\n            <p>\n                A dog is a type of domesticated animal.\n                Known for its loyalty and faithfulness,\n                it can be found as a welcome guest in many households across the world.\n            </p>\n        </s-panel>\n    </s-collapse>\n  </div>\n'}},template:'\n    <section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1639397095600">\n        <section class="code-box-demo"><code-preview></code-preview></section>\n        <section class="code-box-meta markdown">\n            {{ text | raw}}\n            <span class="code-expand-icon" on-click="toggleExpand">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}">\n            </span>\n        </section>\n        <section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">\n            {{ code | raw}}\n        </section>\n    </section>\n'};const r={background:"#f7f7f7","border-radius":"4px","margin-bottom":"24px",border:0,overflow:"hidden"};var h={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n    &lt;s-collapse bordered="{{false}}" defaultActiveKey="{{[\'1\']}}">\n        &lt;s-panel header="This is panel header 1" key="1" style="{{panelStyle}}">\n            &lt;p>\n                A dog is a type of domesticated animal.\n                Known for its loyalty and faithfulness,\n                it can be found as a welcome guest in many households across the world.\n            &lt;/p>\n            &lt;template slot="extra">\n                &lt;s-icon type="setting"/>\n            &lt;/template>\n        &lt;/s-panel>\n        &lt;s-panel header="This is panel header 2" active key="2" style="{{panelStyle}}" expandIcon="double-right">\n            &lt;p>\n                A dog is a type of domesticated animal.\n                Known for its loyalty and faithfulness,\n                it can be found as a welcome guest in many households across the world.\n            &lt;/p>\n        &lt;/s-panel>\n        &lt;s-panel header="This is panel header 3" key="3" style="{{panelStyle}}" expandIcon="expandIcon">\n            &lt;p>\n                A dog is a type of domesticated animal.\n                Known for its loyalty and faithfulness,\n                it can be found as a welcome guest in many households across the world.\n            &lt;/p>\n            &lt;template slot="expandIcon">\n                &lt;span>&lt;s-icon type="caret-right" rotate="{{isActive ? 90 : 0}}" class="{{prefixCls}}-arrow" />&lt;/span>\n            &lt;/template>\n        &lt;/s-panel>\n    &lt;/s-collapse>\n  &lt;/div>\n&lt;/template>\n&lt;script>\nimport san from \'san\';\nimport {Collapse, Icon} from \'santd\';\n\nconst customPanelStyle = {\n    \'background\': \'#f7f7f7\',\n    \'border-radius\': \'4px\',\n    \'margin-bottom\': \'24px\',\n    \'border\': 0,\n    \'overflow\': \'hidden\'\n};\n\nexport default {\n    components: {\n        \'s-collapse\': Collapse,\n        \'s-panel\': Collapse.Panel,\n        \'s-icon\': Icon\n    },\n    initData() {\n        return {\n            panelStyle: customPanelStyle\n        };\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="自定义面板"><span>自定义面板</span><a href="#自定义面板" class="anchor">#</a></h4><p>自定义各个面板的样式。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-collapse":l.p,"s-panel":l.p.Panel,"s-icon":l.z},initData:()=>({panelStyle:r}),template:'\n    <div>\n    <s-collapse bordered="{{false}}" defaultActiveKey="{{[\'1\']}}">\n        <s-panel header="This is panel header 1" key="1" style="{{panelStyle}}">\n            <p>\n                A dog is a type of domesticated animal.\n                Known for its loyalty and faithfulness,\n                it can be found as a welcome guest in many households across the world.\n            </p>\n            <template slot="extra">\n                <s-icon type="setting"></s-icon>\n            </template>\n        </s-panel>\n        <s-panel header="This is panel header 2" active="" key="2" style="{{panelStyle}}" expandIcon="double-right">\n            <p>\n                A dog is a type of domesticated animal.\n                Known for its loyalty and faithfulness,\n                it can be found as a welcome guest in many households across the world.\n            </p>\n        </s-panel>\n        <s-panel header="This is panel header 3" key="3" style="{{panelStyle}}" expandIcon="expandIcon">\n            <p>\n                A dog is a type of domesticated animal.\n                Known for its loyalty and faithfulness,\n                it can be found as a welcome guest in many households across the world.\n            </p>\n            <template slot="expandIcon">\n                <span><s-icon type="caret-right" rotate="{{isActive ? 90 : 0}}" class="{{prefixCls}}-arrow"></s-icon></span>\n            </template>\n        </s-panel>\n    </s-collapse>\n  </div>\n'}},template:'\n    <section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1639397095592">\n        <section class="code-box-demo"><code-preview></code-preview></section>\n        <section class="code-box-meta markdown">\n            {{ text | raw}}\n            <span class="code-expand-icon" on-click="toggleExpand">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}">\n            </span>\n        </section>\n        <section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">\n            {{ code | raw}}\n        </section>\n    </section>\n'},m={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-collapse on-change="handleChange" expandIconPosition="{{expandIconPosition}}">\n            &lt;s-panel header="This is panel header 1" key="1">\n                &lt;p>\n                    A dog is a type of domesticated animal.\n                    Known for its loyalty and faithfulness,\n                    it can be found as a welcome guest in many households across the world.\n                &lt;/p>\n                &lt;template slot="extra">\n                    &lt;s-icon type="setting"/>\n                &lt;/template>\n            &lt;/s-panel>\n            &lt;s-panel header="This is panel header 2" key="2">\n                &lt;p>\n                    A dog is a type of domesticated animal.\n                    Known for its loyalty and faithfulness,\n                    it can be found as a welcome guest in many households across the world.\n                &lt;/p>\n                &lt;template slot="extra">\n                    &lt;s-icon type="setting"/>\n                &lt;/template>\n            &lt;/s-panel>\n            &lt;s-panel header="This is panel header 3" key="3">\n                &lt;p>\n                    A dog is a type of domesticated animal.\n                    Known for its loyalty and faithfulness,\n                    it can be found as a welcome guest in many households across the world.\n                &lt;/p>\n                &lt;template slot="extra">\n                    &lt;s-icon type="setting"/>\n                &lt;/template>\n            &lt;/s-panel>\n        &lt;/s-collapse>\n        &lt;div style="display: flex;align-items: center;margin-top: 10px;">\n            &lt;span style="margin-right: 5px;">Expand Icon Position:&lt;/span>\n            &lt;s-cascader options="{{options}}"  defaultValue="{{[\'left\']}}" on-change="onChange"  />\n       &lt;/div>\n  &lt;/div>\n&lt;/template>\n&lt;script>\nimport {Collapse, Icon, Cascader} from \'santd\';\n\nexport default {\n    components: {\n        \'s-collapse\': Collapse,\n        \'s-panel\': Collapse.Panel,\n        \'s-icon\': Icon,\n        \'s-cascader\': Cascader\n    },\n    initData() {\n        return {\n            options: [{\n                value: \'left\',\n                label: \'left\'\n            }, {\n                value: \'right\',\n                label: \'right\'\n            }],\n            expandIconPosition: \'left\'\n        };\n    },\n    handleChange(args) {\n        console.log(\'handleChange\', args);\n    },\n    onChange(args) {\n        this.data.set(\'expandIconPosition\', args.selectedOptions[0].value);\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="额外节点"><span>额外节点</span><a href="#额外节点" class="anchor">#</a></h4><p>添加 <code>name</code> 值为 extra 的插槽，为header添加自定义额外节点。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-collapse":l.p,"s-panel":l.p.Panel,"s-icon":l.z,"s-cascader":l.m},initData:()=>({options:[{value:"left",label:"left"},{value:"right",label:"right"}],expandIconPosition:"left"}),handleChange(n){console.log("handleChange",n)},onChange(n){this.data.set("expandIconPosition",n.selectedOptions[0].value)},template:'\n    <div>\n        <s-collapse on-change="handleChange" expandIconPosition="{{expandIconPosition}}">\n            <s-panel header="This is panel header 1" key="1">\n                <p>\n                    A dog is a type of domesticated animal.\n                    Known for its loyalty and faithfulness,\n                    it can be found as a welcome guest in many households across the world.\n                </p>\n                <template slot="extra">\n                    <s-icon type="setting"></s-icon>\n                </template>\n            </s-panel>\n            <s-panel header="This is panel header 2" key="2">\n                <p>\n                    A dog is a type of domesticated animal.\n                    Known for its loyalty and faithfulness,\n                    it can be found as a welcome guest in many households across the world.\n                </p>\n                <template slot="extra">\n                    <s-icon type="setting"></s-icon>\n                </template>\n            </s-panel>\n            <s-panel header="This is panel header 3" key="3">\n                <p>\n                    A dog is a type of domesticated animal.\n                    Known for its loyalty and faithfulness,\n                    it can be found as a welcome guest in many households across the world.\n                </p>\n                <template slot="extra">\n                    <s-icon type="setting"></s-icon>\n                </template>\n            </s-panel>\n        </s-collapse>\n        <div style="display: flex;align-items: center;margin-top: 10px;">\n            <span style="margin-right: 5px;">Expand Icon Position:</span>\n            <s-cascader options="{{options}}" defaultValue="{{[\'left\']}}" on-change="onChange"></s-cascader>\n       </div>\n  </div>\n'}},template:'\n    <section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1639397095587">\n        <section class="code-box-demo"><code-preview></code-preview></section>\n        <section class="code-box-meta markdown">\n            {{ text | raw}}\n            <span class="code-expand-icon" on-click="toggleExpand">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}">\n            </span>\n        </section>\n        <section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">\n            {{ code | raw}}\n        </section>\n    </section>\n'},g={template:'<section class="markdown"><h1 id="collapse-折叠面板"><span>Collapse 折叠面板</span><a href="#collapse-折叠面板" class="anchor">#</a></h1><p>可以折叠/展开的内容区域。</p><h2 id="何时使用"><span>何时使用</span><a href="#何时使用" class="anchor">#</a></h2><ul>\n<li>对复杂区域进行分组和隐藏，保持页面的整洁。</li>\n<li>通过控制 Panel 的 <code>active</code> 属性，控制单个内容区域展开或隐藏。</li>\n</ul>\n<h2 id="代码演示"><span>代码演示</span><a href="#代码演示" class="anchor">#</a></h2></section>'},f={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n    &lt;s-collapse bordered="{{false}}" defaultActiveKey="{{[\'1\']}}">\n        &lt;s-panel header="This is panel header 1" key="1">\n            &lt;p style="margin-left: 24px;">\n                A dog is a type of domesticated animal.\n                Known for its loyalty and faithfulness,\n                it can be found as a welcome guest in many households across the world.\n            &lt;/p>\n        &lt;/s-panel>\n        &lt;s-panel header="This is panel header 2" key="2">\n            &lt;p style="margin-left: 24px;">\n                A dog is a type of domesticated animal.\n                Known for its loyalty and faithfulness,\n                it can be found as a welcome guest in many households across the world.\n            &lt;/p>\n        &lt;/s-panel>\n        &lt;s-panel header="This is panel header 3" key="3">\n            &lt;p style="margin-left: 24px;">\n                A dog is a type of domesticated animal.\n                Known for its loyalty and faithfulness,\n                it can be found as a welcome guest in many households across the world.\n            &lt;/p>\n        &lt;/s-panel>\n    &lt;/s-collapse>\n  &lt;/div>\n&lt;/template>\n&lt;script>\nimport {Collapse} from \'santd\';\n\nexport default {\n    components: {\n        \'s-collapse\': Collapse,\n        \'s-panel\': Collapse.Panel\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="简洁风格"><span>简洁风格</span><a href="#简洁风格" class="anchor">#</a></h4><p>一套没有边框的简洁样式。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-collapse":l.p,"s-panel":l.p.Panel},template:'\n    <div>\n    <s-collapse bordered="{{false}}" defaultActiveKey="{{[\'1\']}}">\n        <s-panel header="This is panel header 1" key="1">\n            <p style="margin-left: 24px;">\n                A dog is a type of domesticated animal.\n                Known for its loyalty and faithfulness,\n                it can be found as a welcome guest in many households across the world.\n            </p>\n        </s-panel>\n        <s-panel header="This is panel header 2" key="2">\n            <p style="margin-left: 24px;">\n                A dog is a type of domesticated animal.\n                Known for its loyalty and faithfulness,\n                it can be found as a welcome guest in many households across the world.\n            </p>\n        </s-panel>\n        <s-panel header="This is panel header 3" key="3">\n            <p style="margin-left: 24px;">\n                A dog is a type of domesticated animal.\n                Known for its loyalty and faithfulness,\n                it can be found as a welcome guest in many households across the world.\n            </p>\n        </s-panel>\n    </s-collapse>\n  </div>\n'}},template:'\n    <section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1639397095583">\n        <section class="code-box-demo"><code-preview></code-preview></section>\n        <section class="code-box-meta markdown">\n            {{ text | raw}}\n            <span class="code-expand-icon" on-click="toggleExpand">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}">\n            </span>\n        </section>\n        <section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">\n            {{ code | raw}}\n        </section>\n    </section>\n'};e.default=t.a.defineComponent({components:{readme:o,accordion:d,basic:i,nest:p,simple:f,custom:h,arrow:c,extra:m,head:g},template:"\n        <div>\n            <head/>\n            <basic/>\n            <accordion/>\n            <nest/>\n            <simple/>\n            <custom/>\n            <arrow/>\n            <extra/>\n            <readme/>\n        </div>\n    "})}}]);