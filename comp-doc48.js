(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{543:function(t,n,e){"use strict";e.r(n);var a=e(0),s=e.n(a),o={template:'<section class="markdown"><h1 id="space-间距"><span>Space 间距</span><a href="#space-间距" class="anchor">#</a></h1><p>设置组件之间的间距。</p><h2 id="何时使用"><span>何时使用</span><a href="#何时使用" class="anchor">#</a></h2><p>避免组件紧贴在一起，拉开统一的空间。</p><ul><li>可以设置水平和垂直间距。</li><li>可以设置各种对齐方式。</li></ul><h2 id="代码演示"><span>代码演示</span><a href="#代码演示" class="anchor">#</a></h2></section>'},c=e(8),p={initData:()=>({isExpand:!1,code:"\n<pre><code class=\"language-html\">&lt;template>\n  &lt;s-space>\n    &lt;div>Space&lt;/div>\n    &lt;s-button type=\"primary\">Button&lt;/s-button>\n    &lt;s-upload>\n      &lt;s-button>\n        &lt;s-icon type=\"upload\" /> Click to Upload\n      &lt;/s-button>\n    &lt;/s-upload>\n    &lt;s-popconfirm title=\"Are you sure delete this task?\" okText=\"Yes\" cancelText=\"No\">\n      &lt;s-button>Confirm&lt;/s-button>\n    &lt;/s-popconfirm>\n  &lt;/s-space>\n&lt;/template>\n\n&lt;script>\nimport {Space, Upload, Button, Icon, Popconfirm} from 'santd';\n\nexport default {\n    components: {\n        's-space': Space,\n        's-upload': Upload,\n        's-button': Button,\n        's-icon': Icon,\n        's-popconfirm': Popconfirm\n    }\n}\n&lt;/script></code></pre>",text:'\n<h4 id="基本用法"><span>基本用法</span><a href="#基本用法" class="anchor">#</a></h4><p>相邻组件水平间距。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-space":c.V,"s-upload":c.kb,"s-button":c.i,"s-icon":c.z,"s-popconfirm":c.L},template:'<s-space><div>Space</div><s-button type="primary">Button</s-button><s-upload><s-button><s-icon type="upload"></s-icon> Click to Upload</s-button></s-upload><s-popconfirm title="Are you sure delete this task?" okText="Yes" cancelText="No"><s-button>Confirm</s-button></s-popconfirm></s-space>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1616591965544"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},i={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n  &lt;s-space direction="vertical">\n    &lt;s-card title="Card" style="width: 300px;">\n      &lt;p>Card content&lt;/p>\n      &lt;p>Card content&lt;/p>\n    &lt;/s-card>\n    &lt;s-card title="Card" style="width: 300px;">\n      &lt;p>Card content&lt;/p>\n      &lt;p>Card content&lt;/p>\n    &lt;/s-card>\n  &lt;/s-space>\n&lt;/template>\n\n&lt;script>\nimport {Space, Card} from \'santd\';\n\nexport default {\n    components: {\n        \'s-space\': Space,\n        \'s-card\': Card\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="垂直间距"><span>垂直间距</span><a href="#垂直间距" class="anchor">#</a></h4><p>相邻组件垂直间距。</p><p>可以设置 <code>width: 100%</code> 占满一行。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-space":c.V,"s-card":c.k},template:'<s-space direction="vertical"><s-card title="Card" style="width: 300px;"><p>Card content</p><p>Card content</p></s-card><s-card title="Card" style="width: 300px;"><p>Card content</p><p>Card content</p></s-card></s-space>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1616591965536"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},d={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n  &lt;fragment>\n    &lt;s-radio-group name="radiogroup" value={{size}} on-change="handleChange">\n      &lt;s-radio value="small">Small&lt;/s-radio>\n      &lt;s-radio value="middle">Middle&lt;/s-radio>\n      &lt;s-radio value="large">Large&lt;/s-radio>\n    &lt;/s-radio-group>\n    &lt;br>\n    &lt;br>\n    &lt;s-space size={{size}}>\n      &lt;s-button type="primary">Primary&lt;/s-button>\n      &lt;s-button>Default&lt;/s-button>\n      &lt;s-button type="dashed">Dashed&lt;/s-button>\n      &lt;s-button type="link">Link&lt;/s-button>\n    &lt;/s-space>\n  &lt;/fragment>\n&lt;/template>\n\n&lt;script>\nimport {Space, Radio, Button} from \'santd\';\n\nexport default {\n    components: {\n        \'s-space\': Space,\n        \'s-radio\': Radio,\n        \'s-radio-group\': Radio.Group,\n        \'s-button\': Button\n    },\n    initData() {\n        return {\n            size: \'small\'\n        }\n    },\n    handleChange(e) {\n        console.log(\'radio checked\', e.target.value);\n        this.data.set(\'size\', e.target.value);\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="间距大小"><span>间距大小</span><a href="#间距大小" class="anchor">#</a></h4><p>间距预设大、中、小三种大小。</p><p>通过设置 <code>size</code> 为 <code>large</code>、<code>middle</code> 分别把间距设为大、中间距。若不设置 <code>size</code>，则间距为小。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-space":c.V,"s-radio":c.O,"s-radio-group":c.O.Group,"s-button":c.i},initData:()=>({size:"small"}),handleChange(t){console.log("radio checked",t.target.value),this.data.set("size",t.target.value)},template:'<fragment><s-radio-group name="radiogroup" value="{{size}}" on-change="handleChange"><s-radio value="small">Small</s-radio><s-radio value="middle">Middle</s-radio><s-radio value="large">Large</s-radio></s-radio-group><br><br><s-space size="{{size}}"><s-button type="primary">Primary</s-button><s-button>Default</s-button><s-button type="dashed">Dashed</s-button><s-button type="link">Link</s-button></s-space></fragment>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1616591965517"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},l=(e(720),{initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n  &lt;div class="space-align-container">\n    &lt;div class="space-align-block">\n      &lt;s-space align="center">\n        &lt;div>center&lt;/div>\n        &lt;s-button type="primary">Primary&lt;/s-button>\n        &lt;span class="mock-block">Block&lt;/span>\n      &lt;/s-space>\n    &lt;/div>\n    &lt;div class="space-align-block">\n      &lt;s-space align="start">\n        &lt;div>start&lt;/div>\n        &lt;s-button type="primary">Primary&lt;/s-button>\n        &lt;span class="mock-block">Block&lt;/span>\n      &lt;/s-space>\n    &lt;/div>\n    &lt;div class="space-align-block">\n      &lt;s-space align="end">\n        &lt;div>end&lt;/div>\n        &lt;s-button type="primary">Primary&lt;/s-button>\n        &lt;span class="mock-block">Block&lt;/span>\n      &lt;/s-space>\n    &lt;/div>\n    &lt;div class="space-align-block">\n      &lt;s-space align="baseline">\n        &lt;div>baseline&lt;/div>\n        &lt;s-button type="primary">Primary&lt;/s-button>\n        &lt;span class="mock-block">Block&lt;/span>\n      &lt;/s-space>\n    &lt;/div>\n  &lt;/div>\n&lt;/template>\n\n&lt;script>\nimport {Space, Button} from \'santd\';\n\nexport default {\n    components: {\n        \'s-space\': Space,\n        \'s-button\': Button\n    }\n}\n&lt;/script>\n\n&lt;style>\n.space-align-container {\n  display: flex;\n  flex-wrap: wrap;\n}\n.space-align-block {\n  flex: none;\n  margin: 8px 4px;\n  padding: 4px;\n  border: 1px solid #40a9ff;\n}\n.space-align-block .mock-block {\n  display: inline-block;\n  padding: 32px 8px 16px;\n  background: rgba(150, 150, 150, .2);\n}\n&lt;/style></code></pre>',text:'\n<h4 id="对齐"><span>对齐</span><a href="#对齐" class="anchor">#</a></h4><p>设置对齐模式。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-space":c.V,"s-button":c.i},template:'<div class="space-align-container"><div class="space-align-block"><s-space align="center"><div>center</div><s-button type="primary">Primary</s-button><span class="mock-block">Block</span></s-space></div><div class="space-align-block"><s-space align="start"><div>start</div><s-button type="primary">Primary</s-button><span class="mock-block">Block</span></s-space></div><div class="space-align-block"><s-space align="end"><div>end</div><s-button type="primary">Primary</s-button><span class="mock-block">Block</span></s-space></div><div class="space-align-block"><s-space align="baseline"><div>baseline</div><s-button type="primary">Primary</s-button><span class="mock-block">Block</span></s-space></div></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1616591965508"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'}),r={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n  &lt;fragment>\n    &lt;s-silder value="{{size}}" on-change="handleChange">&lt;/s-silder>\n    &lt;br>\n    &lt;s-space size="{{size}}">\n      &lt;s-button type="primary">Primary&lt;/s-button>\n      &lt;s-button>Default&lt;/s-button>\n      &lt;s-button type="dashed">Dashed&lt;/s-button>\n      &lt;s-button type="link">Link&lt;/s-button>\n    &lt;/s-space>\n  &lt;/fragment>\n&lt;/template>\n\n&lt;script>\nimport {Space, Slider, Button} from \'santd\';\n\nexport default {\n    components: {\n        \'s-space\': Space,\n        \'s-silder\': Slider,\n        \'s-button\': Button\n    },\n    initData() {\n        return {\n            size: 8\n        }\n    },\n    handleChange(value) {\n        console.log(\'silder change\', value);\n        this.data.set(\'size\', value);\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="自定义间距大小"><span>自定义间距大小</span><a href="#自定义间距大小" class="anchor">#</a></h4><p>自定义间距大小。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-space":c.V,"s-silder":c.U,"s-button":c.i},initData:()=>({size:8}),handleChange(t){console.log("silder change",t),this.data.set("size",t)},template:'<fragment><s-silder value="{{size}}" on-change="handleChange"></s-silder><br><s-space size="{{size}}"><s-button type="primary">Primary</s-button><s-button>Default</s-button><s-button type="dashed">Dashed</s-button><s-button type="link">Link</s-button></s-space></fragment>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1616591965491"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},m={initData:()=>({isExpand:!1,code:"\n<pre><code class=\"language-html\">&lt;template>\n  &lt;s-space size=\"{{[8, 16]}}\" wrap={{true}}>\n      &lt;s-button s-for=\"_ in buttonNum\">Button&lt;/s-button>\n  &lt;/s-space>\n&lt;/template>\n\n&lt;script>\nimport {Space, Button} from 'santd';\n\nexport default {\n    components: {\n        's-space': Space,\n        's-button': Button\n    },\n    initData() {\n        return {\n            buttonNum: new Array(20)\n        }\n    }\n}\n&lt;/script></code></pre>",text:'\n<h4 id="自动换行"><span>自动换行</span><a href="#自动换行" class="anchor">#</a></h4><p>自动换行。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-space":c.V,"s-button":c.i},initData:()=>({buttonNum:new Array(20)}),template:'<s-space size="{{[8, 16]}}" wrap="{{true}}"><s-button s-for="_ in buttonNum">Button</s-button></s-space>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1616591965484"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},h={template:'<section class="markdown"><h2 id="api"><span>API</span><a href="#api" class="anchor">#</a></h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>align</td><td>对齐方式</td><td>&#39;start&#39; | &#39;end&#39; | &#39;center&#39; | &#39;baseline&#39;</td><td>在 <code>horizontal</code> 时为 &#39;center&#39;， 在 <code>vertical</code> 时为 &#39;start&#39;</td></tr><tr><td>direction</td><td>间距方向</td><td>&#39;horizontal&#39; | &#39;vertical&#39;</td><td>&#39;horizontal&#39;</td></tr><tr><td>size</td><td>间距大小</td><td><a href="#Size">Size</a> | <a href="#Size">Size[]</a></td><td>&#39;small&#39;</td></tr><tr><td>wrap</td><td>是否自动换行，仅在 <code>horizontal</code> 时有效</td><td>boolean</td><td>false</td></tr></tbody></table><h3 id="size"><span>Size</span><a href="#size" class="anchor">#</a></h3><p><code>&#39;small&#39; | &#39;middle&#39; | &#39;large&#39; | number</code></p></section>'};n.default=s.a.defineComponent({components:{desc:o,basic:p,vertical:i,align:l,size:d,customize:r,wrap:m,readme:h},template:"\n        <div>\n            <desc/>\n            <basic/>\n            <vertical/>\n            <size/>\n            <align/>\n            <customize/>\n            <wrap/>\n            <readme/>\n        </div>\n    "})},720:function(t,n,e){var a=e(4),s=e(721);"string"==typeof(s=s.__esModule?s.default:s)&&(s=[[t.i,s,""]]);var o={insert:"head",singleton:!1};a(s,o);t.exports=s.locals||{}},721:function(t,n,e){(n=e(5)(!1)).push([t.i,"\n.space-align-container {\n  display: flex;\n  flex-wrap: wrap;\n}\n.space-align-block {\n  flex: none;\n  margin: 8px 4px;\n  padding: 4px;\n  border: 1px solid #40a9ff;\n}\n.space-align-block .mock-block {\n  display: inline-block;\n  padding: 32px 8px 16px;\n  background: rgba(150, 150, 150, .2);\n}\n",""]),t.exports=n}}]);