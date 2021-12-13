(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{517:function(n,e,t){"use strict";t.r(e);var s=t(0),o=t.n(s),a={template:'<section class="markdown"><h1 id="alert-警告提示"><span>Alert 警告提示</span><a href="#alert-警告提示" class="anchor">#</a></h1><p>警告提示，展现需要关注的信息。</p><h2 id="何时使用"><span>何时使用</span><a href="#何时使用" class="anchor">#</a></h2><ul>\n<li>当某个页面需要向用户显示警告的信息时。</li>\n<li>非浮层的静态展现形式，始终展现，不会自动消失，用户可以点击关闭。</li>\n</ul>\n<h2 id="代码演示"><span>代码演示</span><a href="#代码演示" class="anchor">#</a></h2></section>'},i=t(8),r={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-alert message="Success Text" type="success"/>\n    &lt;/div>\n&lt;/template>\n\n&lt;script>\nimport {Alert} from \'santd\';\n\nexport default {\n    components: {\n        \'s-alert\': Alert\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="基本"><span>基本</span><a href="#基本" class="anchor">#</a></h4><p>最简单的用法，适用于简短的警告提示。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-alert":i.b},template:'\n    <div>\n        <s-alert message="Success Text" type="success"></s-alert>\n    </div>\n'}},template:'\n    <section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1639397095949">\n        <section class="code-box-demo"><code-preview></code-preview></section>\n        <section class="code-box-meta markdown">\n            {{ text | raw}}\n            <span class="code-expand-icon" on-click="toggleExpand">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}">\n            </span>\n        </section>\n        <section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">\n            {{ code | raw}}\n        </section>\n    </section>\n'},c={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-alert message="Success Text" type="success"/>\n        &lt;s-alert message="Info Text" type="info"/>\n        &lt;s-alert message="Warning Text" type="warning"/>\n        &lt;s-alert message="Error Text" type="error"/>\n    &lt;/div>\n&lt;/template>\n\n&lt;script>\nimport {Alert} from \'santd\';\n\nexport default {\n    components: {\n        \'s-alert\': Alert\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="四种样式"><span>四种样式</span><a href="#四种样式" class="anchor">#</a></h4><p>共有四种样式 <code>success</code>、<code>info</code>、<code>warning</code>、<code>error</code>。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-alert":i.b},template:'\n    <div>\n        <s-alert message="Success Text" type="success"></s-alert>\n        <s-alert message="Info Text" type="info"></s-alert>\n        <s-alert message="Warning Text" type="warning"></s-alert>\n        <s-alert message="Error Text" type="error"></s-alert>\n    </div>\n'}},template:'\n    <section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1639397095942">\n        <section class="code-box-demo"><code-preview></code-preview></section>\n        <section class="code-box-meta markdown">\n            {{ text | raw}}\n            <span class="code-expand-icon" on-click="toggleExpand">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}">\n            </span>\n        </section>\n        <section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">\n            {{ code | raw}}\n        </section>\n    </section>\n'},p={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-alert\n            message="Warning Text Warning Text Warning TextW arning Text Warning Text Warning TextWarning Text"\n            type="warning"\n            closable="{{true}}"\n            on-close="onClose"\n        />\n        &lt;s-alert\n            message="Error Text"\n            description="Error Description Error Description Error Description Error Description Error Description Error Description"\n            type="error"\n            closable="{{true}}"\n            on-close="onClose"\n        />\n    &lt;/div>\n&lt;/template>\n\n&lt;script>\nimport {Alert} from \'santd\';\n\nexport default {\n    components: {\n        \'s-alert\': Alert\n    },\n    onClose(e) {\n        console.log(e, \'I was closed.\');\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="可关闭的警告提示"><span>可关闭的警告提示</span><a href="#可关闭的警告提示" class="anchor">#</a></h4><p>显示关闭按钮，点击可关闭警告提示。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-alert":i.b},onClose(n){console.log(n,"I was closed.")},template:'\n    <div>\n        <s-alert message="Warning Text Warning Text Warning TextW arning Text Warning Text Warning TextWarning Text" type="warning" closable="{{true}}" on-close="onClose"></s-alert>\n        <s-alert message="Error Text" description="Error Description Error Description Error Description Error Description Error Description Error Description" type="error" closable="{{true}}" on-close="onClose"></s-alert>\n    </div>\n'}},template:'\n    <section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1639397095946">\n        <section class="code-box-demo"><code-preview></code-preview></section>\n        <section class="code-box-meta markdown">\n            {{ text | raw}}\n            <span class="code-expand-icon" on-click="toggleExpand">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}">\n            </span>\n        </section>\n        <section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">\n            {{ code | raw}}\n        </section>\n    </section>\n'},l={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-alert\n            message="Success Text"\n            description="Success Description Success Description Success Description"\n            type="success"\n        />\n        &lt;s-alert\n            message="Info Text"\n            description="Info Description Info Description Info Description Info Description"\n            type="info"\n        />\n        &lt;s-alert\n            message="Warning Text"\n            description="Warning Description Warning Description Warning Description Warning Description"\n            type="warning"\n        />\n        &lt;s-alert\n            message="Error Text"\n            description="Error Description Error Description Error Description Error Description"\n            type="error"\n        />\n    &lt;/div>\n&lt;/template>\n\n&lt;script>\nimport {Alert} from \'santd\';\n\nexport default {\n    components: {\n        \'s-alert\': Alert\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="含有辅助性文字介绍"><span>含有辅助性文字介绍</span><a href="#含有辅助性文字介绍" class="anchor">#</a></h4><p>含有辅助性文字介绍的警告提示。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-alert":i.b},template:'\n    <div>\n        <s-alert message="Success Text" description="Success Description Success Description Success Description" type="success"></s-alert>\n        <s-alert message="Info Text" description="Info Description Info Description Info Description Info Description" type="info"></s-alert>\n        <s-alert message="Warning Text" description="Warning Description Warning Description Warning Description Warning Description" type="warning"></s-alert>\n        <s-alert message="Error Text" description="Error Description Error Description Error Description Error Description" type="error"></s-alert>\n    </div>\n'}},template:'\n    <section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1639397095939">\n        <section class="code-box-demo"><code-preview></code-preview></section>\n        <section class="code-box-meta markdown">\n            {{ text | raw}}\n            <span class="code-expand-icon" on-click="toggleExpand">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}">\n            </span>\n        </section>\n        <section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">\n            {{ code | raw}}\n        </section>\n    </section>\n'},d={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-alert\n            message="Success Tips"\n            type="success"\n            showIcon="{{true}}"\n        />\n        &lt;s-alert\n            message="Informational Notes"\n            type="info"\n            showIcon="{{true}}"\n        />\n        &lt;s-alert\n            message="Warning"\n            type="warning"\n            showIcon="{{true}}"\n        />\n        &lt;s-alert\n            message="Error"\n            type="error"\n            showIcon="{{true}}"\n        />\n\n        &lt;s-alert\n            message="Success Tips"\n            description="Detailed description and advices about successful copywriting."\n            type="success"\n            showIcon="{{true}}"\n        />\n        &lt;s-alert\n            message="Informational Notes"\n            description="Additional description and informations about copywriting."\n            type="info"\n            showIcon="{{true}}"\n        />\n        &lt;s-alert\n            message="Warning"\n            description="This is a warning notice about copywriting."\n            type="warning"\n            showIcon="{{true}}"\n        />\n        &lt;s-alert\n            message="Error"\n            description="This is an error message about copywriting."\n            type="error"\n            showIcon="{{true}}"\n        />\n    &lt;/div>\n&lt;/template>\n\n&lt;script>\nimport {Alert, Icon} from \'santd\';\n\nexport default {\n    components: {\n        \'s-alert\': Alert\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="图标"><span>图标</span><a href="#图标" class="anchor">#</a></h4><p>可口的图标让信息类型更加醒目。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-alert":i.b},template:'\n    <div>\n        <s-alert message="Success Tips" type="success" showIcon="{{true}}"></s-alert>\n        <s-alert message="Informational Notes" type="info" showIcon="{{true}}"></s-alert>\n        <s-alert message="Warning" type="warning" showIcon="{{true}}"></s-alert>\n        <s-alert message="Error" type="error" showIcon="{{true}}"></s-alert>\n\n        <s-alert message="Success Tips" description="Detailed description and advices about successful copywriting." type="success" showIcon="{{true}}"></s-alert>\n        <s-alert message="Informational Notes" description="Additional description and informations about copywriting." type="info" showIcon="{{true}}"></s-alert>\n        <s-alert message="Warning" description="This is a warning notice about copywriting." type="warning" showIcon="{{true}}"></s-alert>\n        <s-alert message="Error" description="This is an error message about copywriting." type="error" showIcon="{{true}}"></s-alert>\n    </div>\n'}},template:'\n    <section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1639397095935">\n        <section class="code-box-demo"><code-preview></code-preview></section>\n        <section class="code-box-meta markdown">\n            {{ text | raw}}\n            <span class="code-expand-icon" on-click="toggleExpand">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}">\n            </span>\n        </section>\n        <section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">\n            {{ code | raw}}\n        </section>\n    </section>\n'},g={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-alert message="Info Text" type="info" closeText="Close Now"/>\n    &lt;/div>\n&lt;/template>\n\n&lt;script>\nimport {Alert} from \'santd\';\n\nexport default {\n    components: {\n        \'s-alert\': Alert\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="自定义关闭"><span>自定义关闭</span><a href="#自定义关闭" class="anchor">#</a></h4><p>可以自定义关闭，自定义的文字会替换原先的关闭 <code>Icon</code>。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-alert":i.b},template:'\n    <div>\n        <s-alert message="Info Text" type="info" closeText="Close Now"></s-alert>\n    </div>\n'}},template:'\n    <section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1639397095918">\n        <section class="code-box-demo"><code-preview></code-preview></section>\n        <section class="code-box-meta markdown">\n            {{ text | raw}}\n            <span class="code-expand-icon" on-click="toggleExpand">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}">\n            </span>\n        </section>\n        <section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">\n            {{ code | raw}}\n        </section>\n    </section>\n'},m={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-alert message="Warning text" banner="{{true}}"/>\n        &lt;s-alert message="Very long warning text warning text text text text text text text" banner="{{true}}" closable="{{true}}"/>\n        &lt;s-alert message="Warning text without icon" banner="{{true}}" showIcon="{{false}}"/>\n        &lt;s-alert message="Error text" type="error" banner="{{true}}"/>\n    &lt;/div>\n&lt;/template>\n\n&lt;script>\nimport {Alert} from \'santd\';\n\nexport default {\n    components: {\n        \'s-alert\': Alert\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="顶部公告"><span>顶部公告</span><a href="#顶部公告" class="anchor">#</a></h4><p>页面顶部通告形式，默认有图标且<code>type</code> 为 &#39;warning&#39;。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-alert":i.b},template:'\n    <div>\n        <s-alert message="Warning text" banner="{{true}}"></s-alert>\n        <s-alert message="Very long warning text warning text text text text text text text" banner="{{true}}" closable="{{true}}"></s-alert>\n        <s-alert message="Warning text without icon" banner="{{true}}" showIcon="{{false}}"></s-alert>\n        <s-alert message="Error text" type="error" banner="{{true}}"></s-alert>\n    </div>\n'}},template:'\n    <section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1639397095901">\n        <section class="code-box-demo"><code-preview></code-preview></section>\n        <section class="code-box-meta markdown">\n            {{ text | raw}}\n            <span class="code-expand-icon" on-click="toggleExpand">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}">\n            </span>\n        </section>\n        <section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">\n            {{ code | raw}}\n        </section>\n    </section>\n'},x={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-alert s-if="visible"\n            message="Alert Message Text"\n            type="success"\n            closable="{{true}}"\n            on-afterClose="afterClose"\n        />\n        &lt;p>placeholder text here&lt;/p>\n    &lt;/div>\n&lt;/template>\n\n&lt;script>\nimport {Alert} from \'santd\';\n\nexport default {\n    components: {\n        \'s-alert\': Alert\n    },\n    initData() {\n        return {\n            visible: true\n        };\n    },\n    afterClose() {\n        this.data.set(\'visible\', false);\n        console.log(\'fired: afterClose\');\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="平滑地卸载"><span>平滑地卸载</span><a href="#平滑地卸载" class="anchor">#</a></h4><p>平滑、自然的卸载提示。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-alert":i.b},initData:()=>({visible:!0}),afterClose(){this.data.set("visible",!1),console.log("fired: afterClose")},template:'\n    <div>\n        <s-alert s-if="visible" message="Alert Message Text" type="success" closable="{{true}}" on-afterClose="afterClose"></s-alert>\n        <p>placeholder text here</p>\n    </div>\n'}},template:'\n    <section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1639397095905">\n        <section class="code-box-demo"><code-preview></code-preview></section>\n        <section class="code-box-meta markdown">\n            {{ text | raw}}\n            <span class="code-expand-icon" on-click="toggleExpand">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}">\n            </span>\n        </section>\n        <section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">\n            {{ code | raw}}\n        </section>\n    </section>\n'},h={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-alert\n            message="showIcon = false"\n            type="success"\n            showIcon="{{false}}"\n        >\n            &lt;s-icon type="smile" slot="icon"/>\n        &lt;/s-alert>\n        &lt;s-alert\n            message="Success Tips"\n            type="success"\n            showIcon="{{true}}"\n        >\n            &lt;s-icon type="smile" slot="icon"/>\n        &lt;/s-alert>\n        &lt;s-alert\n            message="Informational Notes"\n            type="info"\n            showIcon="{{true}}"\n        >\n            &lt;s-icon type="smile" slot="icon"/>\n        &lt;/s-alert>\n        &lt;s-alert\n            message="Warning"\n            type="warning"\n            showIcon="{{true}}"\n        >\n            &lt;s-icon type="smile" slot="icon"/>\n        &lt;/s-alert>\n        &lt;s-alert\n            message="Error"\n            type="error"\n            showIcon="{{true}}"\n        >\n            &lt;s-icon type="smile" slot="icon"/>\n        &lt;/s-alert>\n\n        &lt;s-alert\n            message="Success Tips"\n            description="Detailed description and advices about successful copywriting."\n            type="success"\n            showIcon="{{true}}"\n        >\n            &lt;s-icon type="smile" slot="icon"/>\n        &lt;/s-alert>\n        &lt;s-alert\n            message="Informational Notes"\n            description="Additional description and informations about copywriting."\n            type="info"\n            showIcon="{{true}}"\n        >\n            &lt;s-icon type="smile" slot="icon"/>\n        &lt;/s-alert>\n        &lt;s-alert\n            message="Warning"\n            description="This is a warning notice about copywriting."\n            type="warning"\n            showIcon="{{true}}"\n        >\n            &lt;s-icon type="smile" slot="icon"/>\n        &lt;/s-alert>\n        &lt;s-alert\n            message="Error"\n            description="This is an error message about copywriting."\n            type="error"\n            showIcon="{{true}}"\n        >\n            &lt;s-icon type="smile" slot="icon"/>\n        &lt;/s-alert>\n    &lt;/div>\n&lt;/template>\n\n&lt;script>\nimport {Alert, Icon} from \'santd\';\n\nexport default {\n    components: {\n        \'s-alert\': Alert,\n        \'s-icon\': Icon\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="自定义图标"><span>自定义图标</span><a href="#自定义图标" class="anchor">#</a></h4><p>可口的图标让信息类型更加醒目。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-alert":i.b,"s-icon":i.z},template:'\n    <div>\n        <s-alert message="showIcon = false" type="success" showIcon="{{false}}">\n            <s-icon type="smile" slot="icon"></s-icon>\n        </s-alert>\n        <s-alert message="Success Tips" type="success" showIcon="{{true}}">\n            <s-icon type="smile" slot="icon"></s-icon>\n        </s-alert>\n        <s-alert message="Informational Notes" type="info" showIcon="{{true}}">\n            <s-icon type="smile" slot="icon"></s-icon>\n        </s-alert>\n        <s-alert message="Warning" type="warning" showIcon="{{true}}">\n            <s-icon type="smile" slot="icon"></s-icon>\n        </s-alert>\n        <s-alert message="Error" type="error" showIcon="{{true}}">\n            <s-icon type="smile" slot="icon"></s-icon>\n        </s-alert>\n\n        <s-alert message="Success Tips" description="Detailed description and advices about successful copywriting." type="success" showIcon="{{true}}">\n            <s-icon type="smile" slot="icon"></s-icon>\n        </s-alert>\n        <s-alert message="Informational Notes" description="Additional description and informations about copywriting." type="info" showIcon="{{true}}">\n            <s-icon type="smile" slot="icon"></s-icon>\n        </s-alert>\n        <s-alert message="Warning" description="This is a warning notice about copywriting." type="warning" showIcon="{{true}}">\n            <s-icon type="smile" slot="icon"></s-icon>\n        </s-alert>\n        <s-alert message="Error" description="This is an error message about copywriting." type="error" showIcon="{{true}}">\n            <s-icon type="smile" slot="icon"></s-icon>\n        </s-alert>\n    </div>\n'}},template:'\n    <section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1639397095909">\n        <section class="code-box-demo"><code-preview></code-preview></section>\n        <section class="code-box-meta markdown">\n            {{ text | raw}}\n            <span class="code-expand-icon" on-click="toggleExpand">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}">\n            </span>\n        </section>\n        <section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">\n            {{ code | raw}}\n        </section>\n    </section>\n'},w={template:'<section class="markdown"><h2 id="api"><span>API</span><a href="#api" class="anchor">#</a></h2><table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>banner</td>\n<td>是否用作顶部公告</td>\n<td>boolean</td>\n<td>false</td>\n</tr>\n<tr>\n<td>closable</td>\n<td>默认不显示关闭按钮</td>\n<td>boolean</td>\n<td>无</td>\n</tr>\n<tr>\n<td>closeText</td>\n<td>自定义关闭按钮</td>\n<td>string</td>\n<td>无</td>\n</tr>\n<tr>\n<td>description</td>\n<td>警告提示的辅助性文字介绍</td>\n<td>string</td>\n<td>无</td>\n</tr>\n<tr>\n<td>icon</td>\n<td>自定义图标，<code>showIcon</code> 为 <code>true</code> 时有效</td>\n<td>slot</td>\n<td>-</td>\n</tr>\n<tr>\n<td>message</td>\n<td>警告提示内容</td>\n<td>string</td>\n<td>无</td>\n</tr>\n<tr>\n<td>showIcon</td>\n<td>是否显示辅助图标</td>\n<td>boolean</td>\n<td>false，<code>banner</code> 模式下默认值为 true</td>\n</tr>\n<tr>\n<td>type</td>\n<td>指定警告提示的样式，有四种选择 <code>success</code>、<code>info</code>、<code>warning</code>、<code>error</code></td>\n<td>string</td>\n<td><code>info</code>，<code>banner</code> 模式下默认值为 <code>warning</code></td>\n</tr>\n<tr>\n<td>on-afterClose</td>\n<td>关闭动画结束后触发的回调函数</td>\n<td>() =&gt; void</td>\n<td>-</td>\n</tr>\n<tr>\n<td>on-close</td>\n<td>关闭时触发的回调函数</td>\n<td>(e: MouseEvent) =&gt; void</td>\n<td>无</td>\n</tr>\n</tbody></table>\n</section>'};t(582),e.default=o.a.defineComponent({template:"\n        <div>\n            <head/>\n            <basic/>\n            <style/>\n            <closable/>\n            <description/>\n            <icon/>\n            <closetext/>\n            <banner/>\n            <smooth/>\n            <custom/>\n            <readme/>\n        </div>\n    ",components:{head:a,basic:r,style:c,closable:p,description:l,icon:d,closetext:g,banner:m,smooth:x,custom:h,readme:w}})},582:function(n,e,t){var s=t(4),o=t(583);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[n.i,o,""]]);var a={insert:"head",singleton:!1};s(o,a);n.exports=o.locals||{}},583:function(n,e,t){(e=t(5)(!1)).push([n.i,".code-box .santd-alert {\n  margin-bottom: 10px;\n}\n",""]),n.exports=e}}]);