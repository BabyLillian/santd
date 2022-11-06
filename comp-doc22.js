(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{563:function(t,e,s){"use strict";s.r(e);var n=s(0),a=s.n(n),o={template:'<section class="markdown"><h2 id="api"><span>API</span><a href="#api" class="anchor">#</a></h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>description</td><td>自定义描述内容</td><td>string | slot | bool</td><td>-</td></tr><tr><td>imageStyle</td><td>图片样式</td><td>string</td><td>-</td></tr><tr><td>image</td><td>设置显示图片，为 string 时表示自定义图片地址。</td><td>string</td><td><code>Empty.PRESENTED_IMAGE_DEFAULT</code></td></tr></tbody></table></section>'},p=s(8),i={initData:()=>({isExpand:!1,code:"\n<pre><code class=\"language-html\">&lt;template>\n    &lt;div>\n        &lt;s-empty/>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport {Empty} from 'santd';\n\nexport default {\n    components: {\n        's-empty': Empty\n    }\n}\n&lt;/script></code></pre>",text:'\n<h4 id="基本"><span>基本</span><a href="#基本" class="anchor">#</a></h4><p>简单的展示。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-empty":p.w},template:"<div><s-empty></s-empty></div>"}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1667753965733"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},d={initData:()=>({isExpand:!1,code:"\n<pre><code class=\"language-html\">&lt;template>\n    &lt;div>\n        &lt;s-empty image=\"{{image}}\" />\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport {Empty} from 'santd';\n\nexport default {\n    initData() {\n        return {\n            image: Empty.PRESENTED_IMAGE_SIMPLE\n        };\n    },\n    components: {\n        's-empty': Empty\n    }\n}\n&lt;/script></code></pre>",text:'\n<h4 id="选择图片"><span>选择图片</span><a href="#选择图片" class="anchor">#</a></h4><p>可以通过设置 image 为 Empty.PRESENTED_IMAGE_SIMPLE 选择另一种风格的图片。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{initData:()=>({image:p.w.PRESENTED_IMAGE_SIMPLE}),components:{"s-empty":p.w},template:'<div><s-empty image="{{image}}"></s-empty></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1667753965724"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},c={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-empty\n            image="https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original"\n            imageStyle="height: 60px;"\n        >\n            &lt;span slot="description">\n                Customize &lt;a href="#API">Description&lt;/a>\n            &lt;/span>\n            &lt;s-button type="primary">Create Now&lt;/s-button>\n        &lt;/s-empty>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport san from \'san\';\nimport {Empty, Button} from \'santd\';\n\nexport default {\n    components: {\n        \'s-empty\': Empty,\n        \'s-button\': Button\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="自定义"><span>自定义</span><a href="#自定义" class="anchor">#</a></h4><p>自定义图片链接、图片大小、描述、附属内容。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-empty":p.w,"s-button":p.i},template:'<div><s-empty image="https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original" imageStyle="height: 60px;"><span slot="description">Customize <a href="#API">Description</a></span><s-button type="primary">Create Now</s-button></s-empty></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1667753965729"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},l={initData:()=>({isExpand:!1,code:"\n<pre><code class=\"language-html\">&lt;template>\n    &lt;div>\n        &lt;s-empty description=\"{{false}}\" />\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport {Empty} from 'santd';\n\nexport default {\n    components: {\n        's-empty': Empty\n    }\n}\n&lt;/script></code></pre>",text:'\n<h4 id="无描述"><span>无描述</span><a href="#无描述" class="anchor">#</a></h4><p>无描述展示。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-empty":p.w},template:'<div><s-empty description="{{false}}"></s-empty></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1667753965718"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},m={template:'<section class="markdown"><h1 id="empty-空状态"><span>Empty 空状态</span><a href="#empty-空状态" class="anchor">#</a></h1><p>空状态时的展示占位图。</p><h2 id="何时使用"><span>何时使用</span><a href="#何时使用" class="anchor">#</a></h2><ul><li>当目前没有数据时，用于显式的用户提示。</li><li>初始化场景时的引导创建流程。</li></ul><h2 id="代码演示"><span>代码演示</span><a href="#代码演示" class="anchor">#</a></h2></section>'};e.default=a.a.defineComponent({components:{readme:o,basic:i,choose:d,custom:c,nodescription:l,head:m},template:"\n        <div>\n            <head/>\n            <basic/>\n            <choose/>\n            <custom/>\n            <nodescription/>\n            <readme/>\n        </div>\n    "})}}]);