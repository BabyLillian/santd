(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{571:function(e,t,n){"use strict";n.r(t);var o=n(0),s=n.n(o),i={template:'<section class="markdown"><h2 id="api"><span>API</span><a href="#api" class="anchor">#</a></h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>disabled</td><td>菜单是否禁用</td><td>boolean</td><td>-</td></tr><tr><td>getPopupContainer</td><td>菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位。</td><td>Function(triggerNode)</td><td><code>() =&gt; document.body</code></td></tr><tr><td>overlay</td><td>菜单</td><td>slot</td><td>-</td></tr><tr><td>overlayClassName</td><td>下拉根元素的类名称</td><td>string</td><td>-</td></tr><tr><td>overlayStyle</td><td>下拉根元素的样式</td><td>object</td><td>-</td></tr><tr><td>placement</td><td>菜单弹出位置：<code>bottomLeft</code> <code>bottomCenter</code> <code>bottomRight</code> <code>topLeft</code> <code>topCenter</code> <code>topRight</code></td><td>string</td><td><code>bottomLeft</code></td></tr><tr><td>trigger</td><td>触发下拉的行为：<code>hover</code> <code>click</code> <code>contextMenu</code>, 移动端不支持 hover</td><td>string</td><td><code>hover</code></td></tr><tr><td>visible</td><td>菜单是否显示</td><td>boolean</td><td>-</td></tr><tr><td>on-visibleChange</td><td>菜单显示状态改变时调用,参数为 visible</td><td>Function(visible)</td><td>-</td></tr></tbody></table><p><code>overlay</code> 菜单使用 Menu，还包括菜单项 <code>Menu.Item</code>，分割线 <code>Menu.Divider</code>。</p><blockquote><p>注意： Menu.Item 必须设置唯一的 key 属性。</p><p>Dropdown 下的 Menu 默认不可选中。如果需要菜单可选中，可以指定 <code>&lt;Menu selectable&gt;</code>.</p></blockquote><h2 id="dropdownbutton"><span>Dropdown.Button</span><a href="#dropdownbutton" class="anchor">#</a></h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>disabled</td><td>菜单是否禁用</td><td>boolean</td><td>-</td></tr><tr><td>icon</td><td>右侧的 icon 类型</td><td>string</td><td>-</td></tr><tr><td>overlay</td><td>菜单</td><td>同dropdown</td><td>-</td></tr><tr><td>placement</td><td>菜单弹出位置：<code>bottomLeft</code> <code>bottomCenter</code> <code>bottomRight</code> <code>topLeft</code> <code>topCenter</code> <code>topRight</code></td><td>string</td><td><code>bottom-start</code></td></tr><tr><td>size</td><td>按钮大小，和 <code>Button</code> 一致</td><td>string</td><td><code>default</code></td></tr><tr><td>trigger</td><td>触发形式,可选值: <code>hover</code>, <code>click</code></td><td>string</td><td>-</td></tr><tr><td>type</td><td>按钮类型，和 <code>Button</code> 一致</td><td>string</td><td><code>default</code></td></tr><tr><td>visible</td><td>菜单是否显示</td><td>boolean</td><td>-</td></tr><tr><td>on-click</td><td>点击左侧按钮的回调，和 <code>Button</code> 一致</td><td>function</td><td></td></tr><tr><td>on-visibleChange</td><td>菜单显示状态改变时调用</td><td>function</td><td></td></tr></tbody></table></section>'},d={template:'<section class="markdown"><h1 id="dropdown下拉菜单"><span>Dropdown下拉菜单</span><a href="#dropdown下拉菜单" class="anchor">#</a></h1><p>向下弹出的列表。</p><h2 id="何时使用"><span>何时使用</span><a href="#何时使用" class="anchor">#</a></h2><p>当页面上的操作命令过多时，用此组件可以收纳操作元素。点击或移入触点，会出现一个下拉菜单。可在列表中进行选择，并执行相应的命令。</p><h2 id="代码演示"><span>代码演示</span><a href="#代码演示" class="anchor">#</a></h2></section>'},a=n(3),m=n(36),c=n(23),p={initData:()=>({isExpand:!1,code:"\n<pre><code class=\"language-html\">&lt;template>\n    &lt;div>\n        &lt;s-dropdown>\n            &lt;s-menu prefixCls=\"{{prefixCls}}\" slot=\"overlay\">\n                &lt;s-menu-item s-for=\"n,index in data\" key=\"'{{index}}'\">\n                    &lt;a href=\"http://www.baidu.com\" target=\"_blank\">{{n}} menu item&lt;/a>\n                &lt;/s-menu-item>\n            &lt;/s-menu>\n            &lt;a href=\"javascript:;\">Hover me&lt;s-icon type=\"down\" />&lt;/a>\n        &lt;/s-dropdown>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport Icon from 'santd/icon';\nimport DropDown from 'santd/dropdown';\nimport Menu from 'santd/menu';\n\nexport default {\n    components: {\n        's-dropdown': DropDown,\n        's-icon': Icon,\n        's-menu': Menu,\n        's-menu-item': Menu.Item\n    },\n    initData() {\n        return {\n            data: ['1st', '2nd', '3rd']\n        }\n    }\n}\n&lt;/script></code></pre>",text:'\n<h4 id="基本"><span>基本</span><a href="#基本" class="anchor">#</a></h4><p>最简单的下拉菜单。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-dropdown":m.a,"s-icon":a.a,"s-menu":c.a,"s-menu-item":c.a.Item},initData:()=>({data:["1st","2nd","3rd"]}),template:'<div><s-dropdown><s-menu prefixCls="{{prefixCls}}" slot="overlay"><s-menu-item s-for="n,index in data" key="\'{{index}}\'"><a href="http://www.baidu.com" target="_blank">{{n}} menu item</a></s-menu-item></s-menu><a href="javascript:;">Hover me<s-icon type="down"></s-icon></a></s-dropdown></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1603870771325"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},l={initData:()=>({isExpand:!1,code:"\n<pre><code class=\"language-html\">&lt;template>\n    &lt;div>\n        &lt;s-dropdown trigger=\"click\">\n            &lt;s-menu prefixCls=\"{{prefixCls}}\" slot=\"overlay\">\n                &lt;s-menu-item s-for=\"n,index in data\" key=\"'{{index}}'\">\n                    &lt;a href=\"http://www.baidu.com\" target=\"_blank\">{{n}} menu item&lt;/a>\n                &lt;/s-menu-item>\n            &lt;/s-menu>\n            &lt;a href=\"javascript:;\">Click me&lt;s-icon type=\"down\" />&lt;/a>\n        &lt;/s-dropdown>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport Icon from 'santd/icon';\nimport DropDown from 'santd/dropdown';\nimport Menu from 'santd/menu';\n\nexport default {\n    components: {\n        's-dropdown': DropDown,\n        's-icon': Icon,\n        's-menu': Menu,\n        's-menu-item': Menu.Item\n    },\n    initData() {\n        return {\n            data: ['1st', '2nd', '3rd']\n        }\n    }\n}\n&lt;/script></code></pre>",text:'\n<h4 id="触发方式"><span>触发方式</span><a href="#触发方式" class="anchor">#</a></h4><p>默认是移入触发菜单，可以点击触发。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-dropdown":m.a,"s-icon":a.a,"s-menu":c.a,"s-menu-item":c.a.Item},initData:()=>({data:["1st","2nd","3rd"]}),template:'<div><s-dropdown trigger="click"><s-menu prefixCls="{{prefixCls}}" slot="overlay"><s-menu-item s-for="n,index in data" key="\'{{index}}\'"><a href="http://www.baidu.com" target="_blank">{{n}} menu item</a></s-menu-item></s-menu><a href="javascript:;">Click me<s-icon type="down"></s-icon></a></s-dropdown></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1603870771317"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},r=n(11),u=n(97),h={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-dropdownbutton trigger="click" on-click="handleButtonClick" placement="bottomRight">\n            &lt;s-menu prefixCls="{{prefixCls}}" on-click="handleMenuClick" slot="overlay">\n                &lt;s-menu-item key="1">1st menu item&lt;/s-menu-item>\n                &lt;s-menu-item key="2">2nd memu item&lt;/s-menu-item>\n                &lt;s-menu-item key="3">3rd menu item&lt;/s-menu-item>\n            &lt;/s-menu>\n            DropDown\n        &lt;/s-dropdownbutton>\n        &lt;s-dropdownbutton trigger="click" disabled="{{true}}">\n            &lt;s-menu prefixCls="{{prefixCls}}" slot="overlay">\n                &lt;s-menu-item key="1">1st menu item&lt;/s-menu-item>\n                &lt;s-menu-item key="2">2nd memu item&lt;/s-menu-item>\n                &lt;s-menu-item key="3">3rd menu item&lt;/s-menu-item>\n            &lt;/s-menu>\n            DropDown\n        &lt;/s-dropdownbutton>\n        &lt;s-dropdown trigger="click">\n            &lt;s-menu prefixCls="{{prefixCls}}" on-click="handleMenuClick" slot="overlay">\n                &lt;s-menu-item key="1">1st menu item&lt;/s-menu-item>\n                &lt;s-menu-item key="2">2nd memu item&lt;/s-menu-item>\n                &lt;s-menu-item key="3">3rd menu item&lt;/s-menu-item>\n            &lt;/s-menu>\n            &lt;s-button>DropDown &lt;s-icon type="down" />&lt;/s-button>\n        &lt;/s-dropdown>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport Button from \'santd/button\';\nimport DropDown from \'santd/dropdown\';\nimport Menu from \'santd/menu\';\nimport Icon from \'santd/icon\';\nimport message from \'santd/message\';\n\nexport default {\n    components: {\n        \'s-dropdown\': DropDown,\n        \'s-dropdownbutton\': DropDown.Button,\n        \'s-button\': Button,\n        \'s-icon\': Icon,\n        \'s-menu\': Menu,\n        \'s-menu-item\': Menu.Item\n    },\n    handleButtonClick() {\n        message.info(\'Click on left button.\');\n    },\n    handleMenuClick(e) {\n        message.info(\'Click on menu item.\');\n        console.log(\'click\', e);\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="带下拉框的按钮"><span>带下拉框的按钮</span><a href="#带下拉框的按钮" class="anchor">#</a></h4><p>左边是按钮，右边是额外的相关功能菜单。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-dropdown":m.a,"s-dropdownbutton":m.a.Button,"s-button":r.a,"s-icon":a.a,"s-menu":c.a,"s-menu-item":c.a.Item},handleButtonClick(){u.a.info("Click on left button.")},handleMenuClick(e){u.a.info("Click on menu item."),console.log("click",e)},template:'<div><s-dropdownbutton trigger="click" on-click="handleButtonClick" placement="bottomRight"><s-menu prefixCls="{{prefixCls}}" on-click="handleMenuClick" slot="overlay"><s-menu-item key="1">1st menu item</s-menu-item><s-menu-item key="2">2nd memu item</s-menu-item><s-menu-item key="3">3rd menu item</s-menu-item></s-menu>DropDown</s-dropdownbutton><s-dropdownbutton trigger="click" disabled="{{true}}"><s-menu prefixCls="{{prefixCls}}" slot="overlay"><s-menu-item key="1">1st menu item</s-menu-item><s-menu-item key="2">2nd memu item</s-menu-item><s-menu-item key="3">3rd menu item</s-menu-item></s-menu>DropDown</s-dropdownbutton><s-dropdown trigger="click"><s-menu prefixCls="{{prefixCls}}" on-click="handleMenuClick" slot="overlay"><s-menu-item key="1">1st menu item</s-menu-item><s-menu-item key="2">2nd memu item</s-menu-item><s-menu-item key="3">3rd menu item</s-menu-item></s-menu><s-button>DropDown <s-icon type="down"></s-icon></s-button></s-dropdown></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1603870771321"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},w={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-dropdown trigger="hover">\n            &lt;s-menu prefixCls="{{prefixCls}}" slot="overlay">\n                &lt;s-menu-item key="item-1">2nd menu item&lt;/s-menu-item>\n                &lt;s-sub-menu title="Sub-Menu" key="sub1">\n                    &lt;s-menu-item key="1">3rd menu item&lt;/s-menu-item>\n                    &lt;s-menu-item key="2">4th menu item&lt;/s-menu-item>\n                &lt;/s-sub-menu>\n                &lt;s-sub-menu title="disabled sub menu" disabled="{{true}}" key="sub2">\n                    &lt;s-menu-item key="3">5th menu item&lt;/s-menu-item>\n                    &lt;s-menu-item key="4">6th menu item&lt;/s-menu-item>\n                &lt;/s-sub-menu>\n            &lt;/s-menu>\n            &lt;a href="javascript:;">Cascading menu&lt;s-icon type="down" />&lt;/a>\n        &lt;/s-dropdown>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport Menu from \'santd/menu\';\nimport Icon from \'santd/icon\';\nimport Button from \'santd/button\';\nimport DropDown from \'santd/dropdown\';\n\nexport default {\n    components: {\n        \'s-dropdown\': DropDown,\n        \'s-icon\': Icon,\n        \'s-menu\': Menu,\n        \'s-menu-item\': Menu.Item,\n        \'s-sub-menu\': Menu.Sub\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="多级菜单"><span>多级菜单</span><a href="#多级菜单" class="anchor">#</a></h4><p>传入的菜单里有多个层级。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-dropdown":m.a,"s-icon":a.a,"s-menu":c.a,"s-menu-item":c.a.Item,"s-sub-menu":c.a.Sub},template:'<div><s-dropdown trigger="hover"><s-menu prefixCls="{{prefixCls}}" slot="overlay"><s-menu-item key="item-1">2nd menu item</s-menu-item><s-sub-menu title="Sub-Menu" key="sub1"><s-menu-item key="1">3rd menu item</s-menu-item><s-menu-item key="2">4th menu item</s-menu-item></s-sub-menu><s-sub-menu title="disabled sub menu" disabled="{{true}}" key="sub2"><s-menu-item key="3">5th menu item</s-menu-item><s-menu-item key="4">6th menu item</s-menu-item></s-sub-menu></s-menu><a href="javascript:;">Cascading menu<s-icon type="down"></s-icon></a></s-dropdown></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1603870771313"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},x={initData:()=>({isExpand:!1,code:"\n<pre><code class=\"language-html\">&lt;template>\n    &lt;div>\n        &lt;s-dropdown>\n            &lt;s-menu prefixCls=\"{{prefixCls}}\" slot=\"overlay\">\n                &lt;s-menu-item s-for=\"n,index in data\" key=\"{{index}}\">\n                    &lt;a href=\"http://www.baidu.com\" target=\"_blank\">{{n}} menu item&lt;/a>\n                &lt;/s-menu-item>\n                &lt;s-menu-divider />\n                &lt;s-menu-item disabled=\"{{true}}\">3rd menu item（disabled）&lt;/s-menu-item>\n            &lt;/s-menu>\n            &lt;a href=\"javascript:;\">Hover me&lt;s-icon type=\"down\" />&lt;/a>\n        &lt;/s-dropdown>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport Icon from 'santd/icon';\nimport DropDown from 'santd/dropdown';\nimport Menu from 'santd/menu';\n\nexport default {\n    components: {\n        's-dropdown': DropDown,\n        's-icon': Icon,\n        's-menu': Menu,\n        's-menu-item': Menu.Item,\n        's-menu-divider': Menu.MenuDivider\n    },\n    initData() {\n        return {\n            data: ['1st', '2nd']\n        }\n    }\n}\n&lt;/script></code></pre>",text:'\n<h4 id="其它元素"><span>其它元素</span><a href="#其它元素" class="anchor">#</a></h4><p>分割线和不可用菜单项。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-dropdown":m.a,"s-icon":a.a,"s-menu":c.a,"s-menu-item":c.a.Item,"s-menu-divider":c.a.MenuDivider},initData:()=>({data:["1st","2nd"]}),template:'<div><s-dropdown><s-menu prefixCls="{{prefixCls}}" slot="overlay"><s-menu-item s-for="n,index in data" key="{{index}}"><a href="http://www.baidu.com" target="_blank">{{n}} menu item</a></s-menu-item><s-menu-divider></s-menu-divider><s-menu-item disabled="{{true}}">3rd menu item（disabled）</s-menu-item></s-menu><a href="javascript:;">Hover me<s-icon type="down"></s-icon></a></s-dropdown></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1603870771306"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},g={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-dropdown>\n            &lt;s-menu prefixCls="{{prefixCls}}" slot="overlay" on-click="handleClick">\n                &lt;s-menu-item key="1">1st menu item&lt;/s-menu-item>\n                &lt;s-menu-item key="2">2nd memu item&lt;/s-menu-item>\n                &lt;s-menu-item key="3">3rd menu item&lt;/s-menu-item>\n            &lt;/s-menu>\n            &lt;a href="javascript:;">Hover me, Click menu item&lt;s-icon type="down" />&lt;/a>\n        &lt;/s-dropdown>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport Icon from \'santd/icon\';\nimport DropDown from \'santd/dropdown\';\nimport Menu from \'santd/menu\';\nimport message from \'santd/message\'\n\nexport default {\n    components: {\n        \'s-dropdown\': DropDown,\n        \'s-icon\': Icon,\n        \'s-menu\': Menu,\n        \'s-menu-item\': Menu.Item\n    },\n    handleClick({key, value}) {\n        message.info(&#96;Click item is: &#36;&#123;key}&#96;);\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="触发事件"><span>触发事件</span><a href="#触发事件" class="anchor">#</a></h4><p>点击菜单项后会触发事件，用户可以通过相应的菜单项 key 进行不同的操作。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-dropdown":m.a,"s-icon":a.a,"s-menu":c.a,"s-menu-item":c.a.Item},handleClick({key:e,value:t}){u.a.info("Click item is: "+e)},template:'<div><s-dropdown><s-menu prefixCls="{{prefixCls}}" slot="overlay" on-click="handleClick"><s-menu-item key="1">1st menu item</s-menu-item><s-menu-item key="2">2nd memu item</s-menu-item><s-menu-item key="3">3rd menu item</s-menu-item></s-menu><a href="javascript:;">Hover me, Click menu item<s-icon type="down"></s-icon></a></s-dropdown></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1603870771302"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},b={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-dropdown style="display:inline-block;margin-right: 10px;" s-for="placement in placemens" trigger="hover" placement="{{placement}}">\n            &lt;s-menu prefixCls="{{prefixCls}}" slot="overlay">\n                &lt;s-menu-item key="item1">\n                    &lt;a target="_blank" href="http://www.baidu.com">1st menu item&lt;/a>\n                &lt;/s-menu-item>\n                &lt;s-menu-item key="item2">\n                    &lt;a target="_blank" href="http://www.baidu.com">2nd menu item&lt;/a>\n                &lt;/s-menu-item>\n                &lt;s-menu-item key="item3">\n                    &lt;a target="_blank" href="http://www.baidu.com">3rd menu item&lt;/a>\n                &lt;/s-menu-item>\n            &lt;/s-menu>\n            &lt;s-button>{{placement}}&lt;/s-button>\n        &lt;/s-dropdown>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport Menu from \'santd/menu\';\nimport Icon from \'santd/icon\';\nimport Button from \'santd/button\';\nimport DropDown from \'santd/dropdown\';\n\nexport default {\n    components: {\n        \'s-dropdown\': DropDown,\n        \'s-button\': Button,\n        \'s-menu\': Menu,\n        \'s-menu-item\': Menu.Item\n    },\n    initData() {\n        return {\n            placemens: [\'bottomLeft\', \'bottomCenter\', \'bottomRight\', \'topLeft\', \'topCenter\', \'topRight\']\n        }\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="弹出位置"><span>弹出位置</span><a href="#弹出位置" class="anchor">#</a></h4><p>支持 6 个弹出位置。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-dropdown":m.a,"s-button":r.a,"s-menu":c.a,"s-menu-item":c.a.Item},initData:()=>({placemens:["bottomLeft","bottomCenter","bottomRight","topLeft","topCenter","topRight"]}),template:'<div><s-dropdown style="display:inline-block;margin-right: 10px;" s-for="placement in placemens" trigger="hover" placement="{{placement}}"><s-menu prefixCls="{{prefixCls}}" slot="overlay"><s-menu-item key="item1"><a target="_blank" href="http://www.baidu.com">1st menu item</a></s-menu-item><s-menu-item key="item2"><a target="_blank" href="http://www.baidu.com">2nd menu item</a></s-menu-item><s-menu-item key="item3"><a target="_blank" href="http://www.baidu.com">3rd menu item</a></s-menu-item></s-menu><s-button>{{placement}}</s-button></s-dropdown></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1603870771296"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},k={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-dropdown visible="{{visible}}" on-visibleChange="onVisibleChange">\n            &lt;s-menu prefixCls="{{prefixCls}}" on-click="menuClick" slot="overlay">\n                &lt;s-menu-item key="1">Clicking me will not close the menu.&lt;/s-menu-item>\n                &lt;s-menu-item key="2">Clicking me will not close the menu also.&lt;/s-menu-item>\n                &lt;s-menu-item key="3">Clicking me will close the menu.&lt;/s-menu-item>\n            &lt;/s-menu>\n            &lt;a href="javascript:;">Hover me&lt;s-icon type="down" />&lt;/a>\n        &lt;/s-dropdown>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport Icon from \'santd/icon\';\nimport DropDown from \'santd/dropdown\';\nimport Menu from \'santd/menu\';\n\nexport default {\n    components: {\n        \'s-dropdown\': DropDown,\n        \'s-icon\': Icon,\n        \'s-menu\': Menu,\n        \'s-menu-item\': Menu.Item\n    },\n    initData() {\n        return {\n            visible: false\n        }\n    },\n    menuClick({key, value}) {\n        if (key === \'3\') {\n            this.data.set(\'visible\', false);\n        }\n    },\n    onVisibleChange(visible) {\n        this.data.set(\'visible\', visible);\n    }\n\n}\n&lt;/script></code></pre>',text:'\n<h4 id="菜单隐藏方式"><span>菜单隐藏方式</span><a href="#菜单隐藏方式" class="anchor">#</a></h4><p>默认是点击关闭菜单，可以关闭此功能。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-dropdown":m.a,"s-icon":a.a,"s-menu":c.a,"s-menu-item":c.a.Item},initData:()=>({visible:!1}),menuClick({key:e,value:t}){"3"===e&&this.data.set("visible",!1)},onVisibleChange(e){this.data.set("visible",e)},template:'<div><s-dropdown visible="{{visible}}" on-visibleChange="onVisibleChange"><s-menu prefixCls="{{prefixCls}}" on-click="menuClick" slot="overlay"><s-menu-item key="1">Clicking me will not close the menu.</s-menu-item><s-menu-item key="2">Clicking me will not close the menu also.</s-menu-item><s-menu-item key="3">Clicking me will close the menu.</s-menu-item></s-menu><a href="javascript:;">Hover me<s-icon type="down"></s-icon></a></s-dropdown></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1603870771292"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},v={initData:()=>({isExpand:!1,code:"\n<pre><code class=\"language-html\">&lt;template>\n    &lt;div>\n        &lt;s-dropdown trigger=\"contextMenu\">\n            &lt;s-menu prefixCls=\"{{prefixCls}}\" slot=\"overlay\">\n                &lt;s-menu-item s-for=\"n,index in data\" key=\"'{{index}}'\">\n                    &lt;a href=\"http://www.baidu.com\" target=\"_blank\">{{n}} menu item&lt;/a>\n                &lt;/s-menu-item>\n            &lt;/s-menu>\n            &lt;span style=\"user-select: none;\">Right Click on Me&lt;/span>\n        &lt;/s-dropdown>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport Icon from 'santd/icon';\nimport DropDown from 'santd/dropdown';\nimport Menu from 'santd/menu';\n\nexport default {\n    components: {\n        's-dropdown': DropDown,\n        's-icon': Icon,\n        's-menu': Menu,\n        's-menu-item': Menu.Item\n    },\n    initData() {\n        return {\n            data: ['1st', '2nd', '3rd']\n        }\n    }\n}\n&lt;/script></code></pre>",text:'\n<h4 id="右键菜单"><span>右键菜单</span><a href="#右键菜单" class="anchor">#</a></h4><p>默认是移入触发菜单，可以点击鼠标右键触发。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-dropdown":m.a,"s-icon":a.a,"s-menu":c.a,"s-menu-item":c.a.Item},initData:()=>({data:["1st","2nd","3rd"]}),template:'<div><s-dropdown trigger="contextMenu"><s-menu prefixCls="{{prefixCls}}" slot="overlay"><s-menu-item s-for="n,index in data" key="\'{{index}}\'"><a href="http://www.baidu.com" target="_blank">{{n}} menu item</a></s-menu-item></s-menu><span style="user-select: none;">Right Click on Me</span></s-dropdown></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1603870771288"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'};t.default=s.a.defineComponent({components:{readme:i,head:d,basic:p,click:l,button:h,menue:w,contextmenu:v,item:x,event:g,placement:b,visible:k},template:"\n        <div>\n            <head/>\n            <basic/>\n            <item/>\n            <event/>\n            <menue/>\n            <contextmenu/>\n            <placement/>\n            <click/>\n            <button/>\n            <visible/>\n            <readme/>\n        </div>\n    "})}}]);