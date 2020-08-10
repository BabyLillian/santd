(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{605:function(t,n,e){"use strict";e.r(n);var o=e(0),i=e.n(o),s={template:'<section class="markdown"><h2 id="api"><span>API</span><a href="#api" class="anchor">#</a></h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>cancelText</td><td>取消按钮文字</td><td>string</td><td>取消</td></tr><tr><td>okText</td><td>确认按钮文字</td><td>string</td><td>确定</td></tr><tr><td>okType</td><td>确认按钮类型</td><td>string</td><td>primary</td></tr><tr><td>title</td><td>确认框的描述</td><td>string | slot</td><td>无</td></tr><tr><td>on-cancel</td><td>点击取消的回调</td><td>function(e)</td><td>无</td></tr><tr><td>on-confirm</td><td>点击确认的回调</td><td>function(e)</td><td>无</td></tr><tr><td>icon</td><td>自定义弹出气泡 Icon 图标</td><td>string | slot</td><td>无</td></tr></tbody></table><p>更多属性请参考 <a href="https://ecomfe.github.io/santd/#/components/tooltip">Tooltip</a>。</p></section>'},c=e(119),a=e(96),l={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-popconfirm\n            title="Are you sure delete this task?"\n            okText="Yes"\n            cancelText="No"\n            on-confirm="handleConfirm"\n            on-cancel="handleCancel"\n        >\n            &lt;a href="javascript:void(0);">Delete&lt;/a>\n        &lt;/s-popconfirm>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport popconfirm from \'santd/popconfirm\';\nimport message from \'santd/message\';\nexport default {\n    components: {\n        \'s-popconfirm\': popconfirm\n    },\n    handleConfirm(e) {\n        console.log(e);\n        message.success(\'Click on Yes\');\n    },\n    handleCancel(e) {\n        console.log(e);\n        message.error(\'Click on No\');\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="基本"><span>基本</span><a href="#基本" class="anchor">#</a></h4><p>最简单的用法。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-popconfirm":c.a},handleConfirm(t){console.log(t),a.a.success("Click on Yes")},handleCancel(t){console.log(t),a.a.error("Click on No")},template:'<div><s-popconfirm title="Are you sure delete this task?" okText="Yes" cancelText="No" on-confirm="handleConfirm" on-cancel="handleCancel"><a href="javascript:void(0);">Delete</a></s-popconfirm></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1597048140742"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},p=(e(741),e(10)),d={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div class="demo">\n        &lt;div style="margin-left: 70px; white-space: nowrap">\n            &lt;s-popconfirm title="{{title}}" okText="Yes" cancelText="No" on-confirm="handleConfirm" placement="topLeft">\n                &lt;s-button>TL&lt;/s-button>\n            &lt;/s-popconfirm>\n            &lt;s-popconfirm title="{{title}}" okText="Yes" cancelText="No" on-confirm="handleConfirm" placement="top">\n                &lt;s-button>Top&lt;/s-button>\n            &lt;/s-popconfirm>\n            &lt;s-popconfirm title="{{title}}" okText="Yes" cancelText="No" on-confirm="handleConfirm" placement="topRight">\n                &lt;s-button>TR&lt;/s-button>\n            &lt;/s-popconfirm>\n        &lt;/div>\n        &lt;div style="width: 70px; float: left">\n            &lt;s-popconfirm title="{{title}}" okText="Yes" cancelText="No" on-confirm="handleConfirm" placement="leftTop">\n                &lt;s-button>LT&lt;/s-button>\n            &lt;/s-popconfirm>\n            &lt;s-popconfirm title="{{title}}" okText="Yes" cancelText="No" on-confirm="handleConfirm" placement="left">\n                &lt;s-button>Left&lt;/s-button>\n            &lt;/s-popconfirm>\n            &lt;s-popconfirm title="{{title}}" okText="Yes" cancelText="No" on-confirm="handleConfirm" placement="leftBottom">\n                &lt;s-button>LB&lt;/s-button>\n            &lt;/s-popconfirm>\n        &lt;/div>\n        &lt;div style="width: 70px; margin-left: 304px;">\n            &lt;s-popconfirm title="{{title}}" okText="Yes" cancelText="No" on-confirm="handleConfirm" placement="rightTop">\n                &lt;s-button>RT&lt;/s-button>\n            &lt;/s-popconfirm>\n            &lt;s-popconfirm title="{{title}}" okText="Yes" cancelText="No" on-confirm="handleConfirm" placement="right">\n                &lt;s-button>Right&lt;/s-button>\n            &lt;/s-popconfirm>\n            &lt;s-popconfirm title="{{title}}" okText="Yes" cancelText="No" on-confirm="handleConfirm" placement="rightBottom">\n                &lt;s-button>RB&lt;/s-button>\n            &lt;/s-popconfirm>\n        &lt;/div>\n        &lt;div style="margin-left: 70px; clear: both; white-space: nowrap;">\n            &lt;s-popconfirm title="{{title}}" okText="Yes" cancelText="No" on-confirm="handleConfirm" placement="bottomLeft">\n                &lt;s-button>BL&lt;/s-button>\n            &lt;/s-popconfirm>\n            &lt;s-popconfirm title="{{title}}" okText="Yes" cancelText="No" on-confirm="handleConfirm" placement="bottom">\n                &lt;s-button>Bottom&lt;/s-button>\n            &lt;/s-popconfirm>\n            &lt;s-popconfirm title="{{title}}" okText="Yes" cancelText="No" on-confirm="handleConfirm" placement="bottomRight">\n                &lt;s-button>BR&lt;/s-button>\n            &lt;/s-popconfirm>\n        &lt;/div>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport popconfirm from \'santd/popconfirm\';\nimport message from \'santd/message\';\nimport button from \'santd/button\';\nexport default {\n    components: {\n        \'s-popconfirm\': popconfirm,\n        \'s-button\': button\n    },\n    initData() {\n        return {\n            title: \'Are you sure delete this task?\'\n        }\n    },\n    handleConfirm(e) {\n        console.log(e);\n        message.success(\'Click on Yes\');\n    },\n    handleCancel(e) {\n        console.log(e);\n        message.error(\'Click on No\');\n    }\n}\n&lt;/script>\n&lt;style>\n    .demo {\n        margin-left: 200px;\n        overflow: hidden;\n    }\n&lt;/style></code></pre>',text:'\n<h4 id="位置"><span>位置</span><a href="#位置" class="anchor">#</a></h4><p>位置有十二个方向。如需箭头指向目标元素中心，可以设置 <code>arrowPointAtCenter</code>。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-popconfirm":c.a,"s-button":p.a},initData:()=>({title:"Are you sure delete this task?"}),handleConfirm(t){console.log(t),a.a.success("Click on Yes")},handleCancel(t){console.log(t),a.a.error("Click on No")},template:'<div class="demo"><div style="margin-left: 70px; white-space: nowrap"><s-popconfirm title="{{title}}" okText="Yes" cancelText="No" on-confirm="handleConfirm" placement="topLeft"><s-button>TL</s-button></s-popconfirm><s-popconfirm title="{{title}}" okText="Yes" cancelText="No" on-confirm="handleConfirm" placement="top"><s-button>Top</s-button></s-popconfirm><s-popconfirm title="{{title}}" okText="Yes" cancelText="No" on-confirm="handleConfirm" placement="topRight"><s-button>TR</s-button></s-popconfirm></div><div style="width: 70px; float: left"><s-popconfirm title="{{title}}" okText="Yes" cancelText="No" on-confirm="handleConfirm" placement="leftTop"><s-button>LT</s-button></s-popconfirm><s-popconfirm title="{{title}}" okText="Yes" cancelText="No" on-confirm="handleConfirm" placement="left"><s-button>Left</s-button></s-popconfirm><s-popconfirm title="{{title}}" okText="Yes" cancelText="No" on-confirm="handleConfirm" placement="leftBottom"><s-button>LB</s-button></s-popconfirm></div><div style="width: 70px; margin-left: 304px;"><s-popconfirm title="{{title}}" okText="Yes" cancelText="No" on-confirm="handleConfirm" placement="rightTop"><s-button>RT</s-button></s-popconfirm><s-popconfirm title="{{title}}" okText="Yes" cancelText="No" on-confirm="handleConfirm" placement="right"><s-button>Right</s-button></s-popconfirm><s-popconfirm title="{{title}}" okText="Yes" cancelText="No" on-confirm="handleConfirm" placement="rightBottom"><s-button>RB</s-button></s-popconfirm></div><div style="margin-left: 70px; clear: both; white-space: nowrap;"><s-popconfirm title="{{title}}" okText="Yes" cancelText="No" on-confirm="handleConfirm" placement="bottomLeft"><s-button>BL</s-button></s-popconfirm><s-popconfirm title="{{title}}" okText="Yes" cancelText="No" on-confirm="handleConfirm" placement="bottom"><s-button>Bottom</s-button></s-popconfirm><s-popconfirm title="{{title}}" okText="Yes" cancelText="No" on-confirm="handleConfirm" placement="bottomRight"><s-button>BR</s-button></s-popconfirm></div></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1597048140733"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},r=e(3),m={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-popconfirm\n            title="Are you sure delete this task?"\n            okText="Yes"\n            cancelText="No"\n            placement="bottomLeft"\n        >\n            &lt;s-icon type="question-circle" style="color: red" themes="filled" slot="icon" />\n            &lt;a href="javascript:void(0);">Delete&lt;/a>\n        &lt;/s-popconfirm>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport Popconfirm from \'santd/popconfirm\';\nimport Icon from \'santd/icon\';\nexport default {\n    components: {\n        \'s-popconfirm\': Popconfirm,\n        \'s-icon\': Icon\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="自定义-icon-图标"><span>自定义 Icon 图标</span><a href="#自定义-icon-图标" class="anchor">#</a></h4><p>使用 <code>icon</code> 自定义提示 <code>icon</code>。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-popconfirm":c.a,"s-icon":r.a},template:'<div><s-popconfirm title="Are you sure delete this task?" okText="Yes" cancelText="No" placement="bottomLeft"><s-icon type="question-circle" style="color: red" themes="filled" slot="icon"></s-icon><a href="javascript:void(0);">Delete</a></s-popconfirm></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1597048140729"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},h=e(94),f={initData:()=>({isExpand:!1,code:"\n<pre><code class=\"language-html\">&lt;template>\n    &lt;div>\n        &lt;s-popconfirm\n            title=\"Are you sure delete this task?\"\n            visible=\"{{visible}}\"\n            on-confirm=\"handleConfirm\"\n            on-cancel=\"handleCancel\"\n            okText=\"Yes\"\n            cancelText=\"No\"\n            on-visibleChange=\"handleVisibleChange\"\n        >\n            &lt;a href=\"javascript:void(0);\">Delete&lt;/a>\n        &lt;/s-popconfirm>\n        &lt;br />\n        Whether directly execute: &lt;s-switch defaultChecked=\"{{true}}\" on-change=\"handleChangeCondition\">&lt;/s-switch>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport popconfirm from 'santd/popconfirm';\nimport button from 'santd/button';\nimport icon from 'santd/icon';\nimport message from 'santd/message';\nimport sanSwitch from 'santd/switch';\n\nexport default {\n    initData() {\n        return {\n            visible: false,\n            condition: true\n        };\n    },\n    components: {\n        's-popconfirm': popconfirm,\n        's-button': button,\n        's-icon': icon,\n        's-switch': sanSwitch\n    },\n    handleConfirm(e) {\n        this.data.set('visible', false);\n        message.success('Next step.');\n    },\n    handleCancel(e) {\n        this.data.set('visible', false);\n        message.error('Click on cancel.');\n    },\n    handleChangeCondition(value) {\n        this.data.set('condition', value);\n    },\n    handleVisibleChange(visible) {\n        if (!visible) {\n            this.data.set('visible', visible);\n            return;\n        }\n        if (this.data.get('condition')) {\n            this.handleConfirm();\n        }\n        else {\n            this.data.set('visible', visible);\n        }\n    }\n}\n&lt;/script></code></pre>",text:'\n<h4 id="条件触发"><span>条件触发</span><a href="#条件触发" class="anchor">#</a></h4><p>可以判断是否需要弹出。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{initData:()=>({visible:!1,condition:!0}),components:{"s-popconfirm":c.a,"s-button":p.a,"s-icon":r.a,"s-switch":h.a},handleConfirm(t){this.data.set("visible",!1),a.a.success("Next step.")},handleCancel(t){this.data.set("visible",!1),a.a.error("Click on cancel.")},handleChangeCondition(t){this.data.set("condition",t)},handleVisibleChange(t){t&&this.data.get("condition")?this.handleConfirm():this.data.set("visible",t)},template:'<div><s-popconfirm title="Are you sure delete this task?" visible="{{visible}}" on-confirm="handleConfirm" on-cancel="handleCancel" okText="Yes" cancelText="No" on-visibleChange="handleVisibleChange"><a href="javascript:void(0);">Delete</a></s-popconfirm><br>Whether directly execute: <s-switch defaultChecked="{{true}}" on-change="handleChangeCondition"></s-switch></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1597048140721"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},x={template:'<section class="markdown"><h1 id="popconfirm-气泡确认框"><span>Popconfirm 气泡确认框</span><a href="#popconfirm-气泡确认框" class="anchor">#</a></h1><p>点击元素，弹出气泡式的确认框。</p><h2 id="何时使用"><span>何时使用</span><a href="#何时使用" class="anchor">#</a></h2><p>目标元素的操作需要用户进一步的确认时，在目标元素附近弹出浮层提示，询问用户。</p><p>和 <code>confirm</code> 弹出的全屏居中模态对话框相比，交互形式更轻量。</p><h2 id="代码演示"><span>代码演示</span><a href="#代码演示" class="anchor">#</a></h2></section>'};n.default=i.a.defineComponent({components:{desc:x,readme:s,basic:l,position:d,icon:m,condition:f},template:"\n        <div>\n            <desc/>\n            <basic/>\n            <position/>\n            <icon/>\n            <condition/>\n            <readme/>\n        </div>\n    "})},741:function(t,n,e){var o=e(4),i=e(742);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[t.i,i,""]]);var s={insert:"head",singleton:!1};o(i,s);t.exports=i.locals||{}},742:function(t,n,e){(n=e(5)(!1)).push([t.i,"\n    .demo {\n        margin-left: 200px;\n        overflow: hidden;\n    }\n",""]),t.exports=n}}]);