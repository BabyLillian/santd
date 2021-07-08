(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{519:function(t,n,e){"use strict";e.r(n);var o=e(0),s=e.n(o),a={template:'<section class="markdown"><h2 id="api"><span>API</span><a href="#api" class="anchor">#</a></h2><p>通过设置 Button 的属性来产生不同的按钮样式，推荐顺序为：<code>type</code> -&gt; <code>shape</code> -&gt; <code>size</code> -&gt; <code>loading</code> -&gt; <code>disabled</code>。</p><p>按钮的属性说明如下：</p><table>\n<thead>\n<tr>\n<th>属性</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>disabled</td>\n<td>按钮失效状态</td>\n<td>boolean</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>ghost</td>\n<td>幽灵属性，使按钮背景透明</td>\n<td>boolean</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>href</td>\n<td>点击跳转的地址，指定此属性 button 的行为和 a 链接一致</td>\n<td>string</td>\n<td>-</td>\n</tr>\n<tr>\n<td>htmlType</td>\n<td>设置 button 原生的 type 值，可选值请参考 <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type">HTML 标准</a></td>\n<td>string</td>\n<td><code>button</code></td>\n</tr>\n<tr>\n<td>icon</td>\n<td>设置按钮的图标类型</td>\n<td>string</td>\n<td>-</td>\n</tr>\n<tr>\n<td>loading</td>\n<td>设置按钮载入状态</td>\n<td>boolean | { delay: number }</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>shape</td>\n<td>设置按钮形状，可选值为 <code>circle</code> <code>round</code> 或者不设</td>\n<td>string</td>\n<td>-</td>\n</tr>\n<tr>\n<td>size</td>\n<td>设置按钮大小，可选值为 <code>small</code> <code>large</code> 或者不设</td>\n<td>string</td>\n<td><code>default</code></td>\n</tr>\n<tr>\n<td>target</td>\n<td>相当于 a 链接的 target 属性，href 存在时生效</td>\n<td>string</td>\n<td>-</td>\n</tr>\n<tr>\n<td>type</td>\n<td>设置按钮类型，可选值为 <code>primary</code> <code>dashed</code> <code>danger</code> 或者不设</td>\n<td>string</td>\n<td>-</td>\n</tr>\n<tr>\n<td>block</td>\n<td>将按钮宽度调整为其父宽度的选项</td>\n<td>boolean</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>on-click</td>\n<td>点击按钮时的回调</td>\n<td>(event) =&gt; void</td>\n<td>-</td>\n</tr>\n</tbody></table>\n<p>支持原生 button 的其他所有属性。</p><p><code>&lt;s-button&gt;Hello world!&lt;/s-button&gt;</code> 最终会被渲染为 <code>&lt;button&gt;&lt;span&gt;Hello world!&lt;/span&gt;&lt;/button&gt;</code>，并且除了上表中的属性，其它HTML标准属性都会直接传到原生 button 上。</p><p>带有href属性的<code>&lt;s-button&gt;</code>并不会被渲染成<code>&lt;a&gt;</code>，只会模拟<code>&lt;a&gt;</code>的动作。</p></section>'},d=e(8),i={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n  &lt;div>\n    &lt;s-button type="primary">Primary&lt;/s-button>\n    &lt;s-button>Default&lt;/s-button>\n    &lt;s-button type="danger">Danger&lt;/s-button>\n    &lt;s-button type="dashed">Dashed&lt;/s-button>\n    &lt;s-button type="link">Link&lt;/s-button>\n  &lt;/div>\n&lt;/template>\n&lt;script>\nimport {Button} from \'santd\';\n\nexport default {\n    components: {\n        \'s-button\': Button\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="按钮类型"><span>按钮类型</span><a href="#按钮类型" class="anchor">#</a></h4><p>按钮有五种类型：主按钮、次按钮、虚线按钮、危险按钮和链接按钮。主按钮在同一个操作区域最多出现一次。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-button":d.i},template:'\n  <div>\n    <s-button type="primary">Primary</s-button>\n    <s-button>Default</s-button>\n    <s-button type="danger">Danger</s-button>\n    <s-button type="dashed">Dashed</s-button>\n    <s-button type="link">Link</s-button>\n  </div>\n'}},template:'\n    <section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1625728685221">\n        <section class="code-box-demo"><code-preview></code-preview></section>\n        <section class="code-box-meta markdown">\n            {{ text | raw}}\n            <span class="code-expand-icon" on-click="toggleExpand">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}">\n            </span>\n        </section>\n        <section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">\n            {{ code | raw}}\n        </section>\n    </section>\n'},c={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-radiogroup value="{{size}}" on-change="handleSizeChange" name="size">\n            &lt;s-radiobutton value="large">Large&lt;/s-radiobutton>\n            &lt;s-radiobutton value="default">Default&lt;/s-radiobutton>\n            &lt;s-radiobutton value="small">Small&lt;/s-radiobutton>\n        &lt;/s-radiogroup>\n        &lt;br />&lt;br/ >\n        &lt;s-button type="primary" size="{{size}}">Primary&lt;/s-button>\n        &lt;s-button size="{{size}}">Normal&lt;/s-button>\n        &lt;s-button type="dashed" size="{{size}}">Dashed&lt;/s-button>\n        &lt;s-button type="danger" size="{{size}}">Danger&lt;/s-button>\n        &lt;s-button type="link" size="{{size}}">Link&lt;/s-button>\n        &lt;br />\n        &lt;s-button type="primary" icon="download" size="{{size}}" />\n        &lt;s-button type="primary" shape="circle" icon="download" size="{{size}}" />\n        &lt;s-button type="primary" shape="round" icon="download" size="{{size}}" />\n        &lt;s-button type="primary" shape="round" icon="download" size="{{size}}">Download&lt;/s-button>\n        &lt;s-button type="primary" icon="download" size="{{size}}">Download&lt;/s-button>\n        &lt;br />\n        &lt;s-buttongroup size="{{size}}">\n          &lt;s-button type="primary">\n            &lt;s-icon type="left" /> Backward\n          &lt;/s-button>\n          &lt;s-button type="primary">\n            Forward &lt;s-icon type="right" />\n          &lt;/s-button>\n        &lt;/s-buttongroup>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport {Button, Radio, Icon} from \'santd\';\n\nexport default {\n    components: {\n        \'s-button\': Button,\n        \'s-buttongroup\': Button.Group,\n        \'s-radiogroup\': Radio.Group,\n        \'s-radiobutton\': Radio.Button,\n        \'s-icon\': Icon\n    },\n    initData() {\n        return {\n            size: \'large\'\n        };\n    },\n    handleSizeChange(e) {\n        this.data.set(\'size\', e.target.value);\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="按钮尺寸"><span>按钮尺寸</span><a href="#按钮尺寸" class="anchor">#</a></h4><p>按钮有大、中、小三种尺寸。\n通过设置 <code>size</code> 为 <code>large</code> <code>small</code> 分别把按钮设为大、小尺寸。若不设置 <code>size</code>，则尺寸为中。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-button":d.i,"s-buttongroup":d.i.Group,"s-radiogroup":d.O.Group,"s-radiobutton":d.O.Button,"s-icon":d.z},initData:()=>({size:"large"}),handleSizeChange(t){this.data.set("size",t.target.value)},template:'\n    <div>\n        <s-radiogroup value="{{size}}" on-change="handleSizeChange" name="size">\n            <s-radiobutton value="large">Large</s-radiobutton>\n            <s-radiobutton value="default">Default</s-radiobutton>\n            <s-radiobutton value="small">Small</s-radiobutton>\n        </s-radiogroup>\n        <br><br>\n        <s-button type="primary" size="{{size}}">Primary</s-button>\n        <s-button size="{{size}}">Normal</s-button>\n        <s-button type="dashed" size="{{size}}">Dashed</s-button>\n        <s-button type="danger" size="{{size}}">Danger</s-button>\n        <s-button type="link" size="{{size}}">Link</s-button>\n        <br>\n        <s-button type="primary" icon="download" size="{{size}}"></s-button>\n        <s-button type="primary" shape="circle" icon="download" size="{{size}}"></s-button>\n        <s-button type="primary" shape="round" icon="download" size="{{size}}"></s-button>\n        <s-button type="primary" shape="round" icon="download" size="{{size}}">Download</s-button>\n        <s-button type="primary" icon="download" size="{{size}}">Download</s-button>\n        <br>\n        <s-buttongroup size="{{size}}">\n          <s-button type="primary">\n            <s-icon type="left"></s-icon> Backward\n          </s-button>\n          <s-button type="primary">\n            Forward <s-icon type="right"></s-icon>\n          </s-button>\n        </s-buttongroup>\n    </div>\n'}},template:'\n    <section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1625728685215">\n        <section class="code-box-demo"><code-preview></code-preview></section>\n        <section class="code-box-meta markdown">\n            {{ text | raw}}\n            <span class="code-expand-icon" on-click="toggleExpand">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}">\n            </span>\n        </section>\n        <section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">\n            {{ code | raw}}\n        </section>\n    </section>\n'},p={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n  &lt;div>\n    &lt;s-button type="primary" shape="circle" icon="search" />\n    &lt;s-button type="primary" shape="circle">A&lt;/s-button>\n    &lt;s-button type="primary" icon="search">Search&lt;/s-button>\n    &lt;s-button shape="circle" icon="search" />\n    &lt;s-button icon="search">Search&lt;/s-button>\n    &lt;br />\n    &lt;s-button shape="circle" icon="search" />\n    &lt;s-button icon="search">Search&lt;/s-button>\n    &lt;s-button type="dashed" shape="circle" icon="search" />\n    &lt;s-button type="dashed" icon="search">Search&lt;/s-button>\n  &lt;/div>\n&lt;/template>\n&lt;script>\nimport {Button} from \'santd\';\n\nexport default {\n    components: {\n        \'s-button\': Button\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="图标按钮"><span>图标按钮</span><a href="#图标按钮" class="anchor">#</a></h4><p>当需要在 <code>Button</code> 内嵌入 <code>Icon</code> 时，可以设置 <code>icon</code> 属性，或者直接在 <code>Button</code> 内使用 <code>Icon</code> 组件。\n如果想控制 <code>Icon</code> 具体的位置，只能直接使用 <code>Icon</code> 组件，而非 <code>icon</code> 属性。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-button":d.i},template:'\n  <div>\n    <s-button type="primary" shape="circle" icon="search"></s-button>\n    <s-button type="primary" shape="circle">A</s-button>\n    <s-button type="primary" icon="search">Search</s-button>\n    <s-button shape="circle" icon="search"></s-button>\n    <s-button icon="search">Search</s-button>\n    <br>\n    <s-button shape="circle" icon="search"></s-button>\n    <s-button icon="search">Search</s-button>\n    <s-button type="dashed" shape="circle" icon="search"></s-button>\n    <s-button type="dashed" icon="search">Search</s-button>\n  </div>\n'}},template:'\n    <section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1625728685210">\n        <section class="code-box-demo"><code-preview></code-preview></section>\n        <section class="code-box-meta markdown">\n            {{ text | raw}}\n            <span class="code-expand-icon" on-click="toggleExpand">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}">\n            </span>\n        </section>\n        <section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">\n            {{ code | raw}}\n        </section>\n    </section>\n'},l={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-button type="primary">Primary&lt;/s-button>\n        &lt;s-button type="primary" disabled="{{true}}">Primary(disabled)&lt;/s-button>\n        &lt;br />\n        &lt;s-button type="default">Default&lt;/s-button>\n        &lt;s-button type="default" disabled="{{true}}">Default(disabled)&lt;/s-button>\n        &lt;br />\n        &lt;s-button type="danger">Danger&lt;/s-button>\n        &lt;s-button type="danger" disabled="{{true}}">Danger(disabled)&lt;/s-button>\n        &lt;br />\n        &lt;s-button type="dashed">Dashed&lt;/s-button>\n        &lt;s-button type="dashed" disabled="{{true}}">Dashed(disabled)&lt;/s-button>\n        &lt;br />\n        &lt;s-button type="link">Link&lt;/s-button>\n        &lt;s-button type="link" disabled="{{true}}">Link(disabled)&lt;/s-button>\n        &lt;br />\n        &lt;div style="padding: 8px 8px 0 8px; background: rgb(190, 200, 200)">\n            &lt;s-button ghost="{{true}}">Ghost&lt;/s-button>\n            &lt;s-button ghost="{{true}}" disabled="{{true}}">Ghost(disabled)&lt;/s-button>\n        &lt;/div>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport {Button} from \'santd\';\n\nexport default {\n    components: {\n        \'s-button\': Button\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="不可用状态"><span>不可用状态</span><a href="#不可用状态" class="anchor">#</a></h4><p>添加 <code>disabled</code> 属性即可让按钮处于不可用状态，同时按钮样式也会改变。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-button":d.i},template:'\n    <div>\n        <s-button type="primary">Primary</s-button>\n        <s-button type="primary" disabled="{{true}}">Primary(disabled)</s-button>\n        <br>\n        <s-button type="default">Default</s-button>\n        <s-button type="default" disabled="{{true}}">Default(disabled)</s-button>\n        <br>\n        <s-button type="danger">Danger</s-button>\n        <s-button type="danger" disabled="{{true}}">Danger(disabled)</s-button>\n        <br>\n        <s-button type="dashed">Dashed</s-button>\n        <s-button type="dashed" disabled="{{true}}">Dashed(disabled)</s-button>\n        <br>\n        <s-button type="link">Link</s-button>\n        <s-button type="link" disabled="{{true}}">Link(disabled)</s-button>\n        <br>\n        <div style="padding: 8px 8px 0 8px; background: rgb(190, 200, 200)">\n            <s-button ghost="{{true}}">Ghost</s-button>\n            <s-button ghost="{{true}}" disabled="{{true}}">Ghost(disabled)</s-button>\n        </div>\n    </div>\n'}},template:'\n    <section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1625728685204">\n        <section class="code-box-demo"><code-preview></code-preview></section>\n        <section class="code-box-meta markdown">\n            {{ text | raw}}\n            <span class="code-expand-icon" on-click="toggleExpand">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}">\n            </span>\n        </section>\n        <section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">\n            {{ code | raw}}\n        </section>\n    </section>\n'},r={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-button type="primary" loading="{{true}}">Loading&lt;/s-button>\n        &lt;s-button type="primary" size="small" loading="{{true}}">Loading&lt;/s-button>\n        &lt;br />\n        &lt;s-button type="primary" loading="{{true}}" />\n        &lt;s-button type="primary" shape="circle" loading="{{true}}" />\n        &lt;s-button type="danger" shape="round" loading="{{true}}" />\n        &lt;br />\n        &lt;s-button type="primary" loading="{{loading}}" on-click="enterLoading">\n          Click me!\n        &lt;/s-button>\n        &lt;s-button type="primary" icon="poweroff" loading="{{iconLoading}}" on-click="enterIconLoading">\n          Click me!\n        &lt;/s-button>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport {Button} from \'santd\';\n\nexport default {\n    components: {\n        \'s-button\': Button\n    },\n    initData() {\n        return {\n            loading: false,\n            iconLoading: false\n        }\n    },\n    enterLoading() {\n        this.data.set(\'loading\', {delay: 1000});\n    },\n    enterIconLoading() {\n        this.data.set(\'iconLoading\', true);\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="加载中状态"><span>加载中状态</span><a href="#加载中状态" class="anchor">#</a></h4><p>添加 <code>loading</code> 属性即可让按钮处于加载状态，最后两个按钮演示点击后进入加载状态。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-button":d.i},initData:()=>({loading:!1,iconLoading:!1}),enterLoading(){this.data.set("loading",{delay:1e3})},enterIconLoading(){this.data.set("iconLoading",!0)},template:'\n    <div>\n        <s-button type="primary" loading="{{true}}">Loading</s-button>\n        <s-button type="primary" size="small" loading="{{true}}">Loading</s-button>\n        <br>\n        <s-button type="primary" loading="{{true}}"></s-button>\n        <s-button type="primary" shape="circle" loading="{{true}}"></s-button>\n        <s-button type="danger" shape="round" loading="{{true}}"></s-button>\n        <br>\n        <s-button type="primary" loading="{{loading}}" on-click="enterLoading">\n          Click me!\n        </s-button>\n        <s-button type="primary" icon="poweroff" loading="{{iconLoading}}" on-click="enterIconLoading">\n          Click me!\n        </s-button>\n    </div>\n'}},template:'\n    <section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1625728685198">\n        <section class="code-box-demo"><code-preview></code-preview></section>\n        <section class="code-box-meta markdown">\n            {{ text | raw}}\n            <span class="code-expand-icon" on-click="toggleExpand">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}">\n            </span>\n        </section>\n        <section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">\n            {{ code | raw}}\n        </section>\n    </section>\n'},u=(e(594),{initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-button type="primary" block="{{true}}">Primary&lt;/s-button>\n        &lt;s-button block="{{true}}">Default&lt;/s-button>\n        &lt;s-button type="danger" block="{{true}}">Danger&lt;/s-button>\n        &lt;s-button type="dashed" block="{{true}}">Dashed&lt;/s-button>\n        &lt;s-button type="link" block="{{true}}">Link&lt;/s-button>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport {Button} from \'santd\';\n\nexport default {\n    components: {\n        \'s-button\': Button\n    }\n}\n&lt;/script>\n&lt;style>\n&lt;/style></code></pre>',text:'\n<h4 id="block-按钮"><span>block 按钮</span><a href="#block-按钮" class="anchor">#</a></h4><p>block属性将使按钮适合其父宽度。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-button":d.i},template:'\n    <div>\n        <s-button type="primary" block="{{true}}">Primary</s-button>\n        <s-button block="{{true}}">Default</s-button>\n        <s-button type="danger" block="{{true}}">Danger</s-button>\n        <s-button type="dashed" block="{{true}}">Dashed</s-button>\n        <s-button type="link" block="{{true}}">Link</s-button>\n    </div>\n'}},template:'\n    <section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1625728685189">\n        <section class="code-box-demo"><code-preview></code-preview></section>\n        <section class="code-box-meta markdown">\n            {{ text | raw}}\n            <span class="code-expand-icon" on-click="toggleExpand">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}">\n            </span>\n        </section>\n        <section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">\n            {{ code | raw}}\n        </section>\n    </section>\n'}),b={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n  &lt;div style="background: rgb(190, 200, 200); padding: 20px 20px 12px;">\n    &lt;s-button type="primary" ghost="{{true}}">Primary&lt;/s-button>\n    &lt;s-button type="default" ghost="{{true}}">Default&lt;/s-button>\n    &lt;s-button type="danger" ghost="{{true}}">Danger&lt;/s-button>\n    &lt;s-button type="dashed" ghost="{{true}}">Dashed&lt;/s-button>\n    &lt;s-button type="link" ghost="{{true}}">Link&lt;/s-button>\n  &lt;/div>\n&lt;/template>\n&lt;script>\nimport {Button} from \'santd\';\n\nexport default {\n    components: {\n        \'s-button\': Button\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="幽灵按钮"><span>幽灵按钮</span><a href="#幽灵按钮" class="anchor">#</a></h4><p>幽灵按钮将按钮的内容反色，背景变为透明，常用在有色背景上。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-button":d.i},template:'\n  <div style="background: rgb(190, 200, 200); padding: 20px 20px 12px;">\n    <s-button type="primary" ghost="{{true}}">Primary</s-button>\n    <s-button type="default" ghost="{{true}}">Default</s-button>\n    <s-button type="danger" ghost="{{true}}">Danger</s-button>\n    <s-button type="dashed" ghost="{{true}}">Dashed</s-button>\n    <s-button type="link" ghost="{{true}}">Link</s-button>\n  </div>\n'}},template:'\n    <section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1625728685184">\n        <section class="code-box-demo"><code-preview></code-preview></section>\n        <section class="code-box-meta markdown">\n            {{ text | raw}}\n            <span class="code-expand-icon" on-click="toggleExpand">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}">\n            </span>\n        </section>\n        <section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">\n            {{ code | raw}}\n        </section>\n    </section>\n'},m={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;h4>Basic&lt;/h4>\n        &lt;s-buttongroup>\n            &lt;s-button>Cancel&lt;/s-button>\n            &lt;s-button>OK&lt;/s-button>\n        &lt;/s-buttongroup>\n        &lt;s-buttongroup>\n            &lt;s-button disabled="{{true}}">L&lt;/s-button>\n            &lt;s-button disabled="{{true}}">M&lt;/s-button>\n            &lt;s-button disabled="{{true}}">R&lt;/s-button>\n        &lt;/s-buttongroup>\n        &lt;s-buttongroup>\n            &lt;s-button>L&lt;/s-button>\n            &lt;s-button>M&lt;/s-button>\n            &lt;s-button>R&lt;/s-button>\n        &lt;/s-buttongroup>\n\n        &lt;h4>With Icon&lt;/h4>\n        &lt;s-buttongroup>\n            &lt;s-button type="primary">\n                &lt;s-icon type="left" /> Go back\n            &lt;/s-button>\n            &lt;s-button type="primary">\n                Go forward &lt;s-icon type="right" />\n            &lt;/s-button>\n        &lt;/s-buttongroup>\n        &lt;s-buttongroup>\n            &lt;s-button type="primary" icon="cloud" />\n            &lt;s-button type="primary" icon="cloud-download" />\n        &lt;/s-buttongroup>\n        &lt;s-buttongroup>\n            &lt;s-button type="primary" icon="cloud" size="small" />\n            &lt;s-button type="primary" icon="cloud-download" size="small" />\n        &lt;/s-buttongroup>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport {Button, Icon} from \'santd\';\n\nexport default {\n    components: {\n        \'s-button\': Button,\n        \'s-buttongroup\': Button.Group,\n        \'s-icon\': Icon\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="按钮组合"><span>按钮组合</span><a href="#按钮组合" class="anchor">#</a></h4><p>可以将多个 <code>Button</code> 放入 <code>Button.Group</code> 的容器中。</p><p>通过设置 <code>size</code> 为 <code>large</code> <code>small</code> 分别把按钮组合设为大、小尺寸。若不设置 <code>size</code>，则尺寸为中。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-button":d.i,"s-buttongroup":d.i.Group,"s-icon":d.z},template:'\n    <div>\n        <h4>Basic</h4>\n        <s-buttongroup>\n            <s-button>Cancel</s-button>\n            <s-button>OK</s-button>\n        </s-buttongroup>\n        <s-buttongroup>\n            <s-button disabled="{{true}}">L</s-button>\n            <s-button disabled="{{true}}">M</s-button>\n            <s-button disabled="{{true}}">R</s-button>\n        </s-buttongroup>\n        <s-buttongroup>\n            <s-button>L</s-button>\n            <s-button>M</s-button>\n            <s-button>R</s-button>\n        </s-buttongroup>\n\n        <h4>With Icon</h4>\n        <s-buttongroup>\n            <s-button type="primary">\n                <s-icon type="left"></s-icon> Go back\n            </s-button>\n            <s-button type="primary">\n                Go forward <s-icon type="right"></s-icon>\n            </s-button>\n        </s-buttongroup>\n        <s-buttongroup>\n            <s-button type="primary" icon="cloud"></s-button>\n            <s-button type="primary" icon="cloud-download"></s-button>\n        </s-buttongroup>\n        <s-buttongroup>\n            <s-button type="primary" icon="cloud" size="small"></s-button>\n            <s-button type="primary" icon="cloud-download" size="small"></s-button>\n        </s-buttongroup>\n    </div>\n'}},template:'\n    <section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1625728685178">\n        <section class="code-box-demo"><code-preview></code-preview></section>\n        <section class="code-box-meta markdown">\n            {{ text | raw}}\n            <span class="code-expand-icon" on-click="toggleExpand">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}">\n            </span>\n        </section>\n        <section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">\n            {{ code | raw}}\n        </section>\n    </section>\n'};s.a.defineComponent({components:{"s-menu":d.G,"s-menuitem":d.G.Item},template:'\n        <div>\n            <s-menu on-click="handleMenuClick" prefixCls="san-dropdown">\n                <s-menuitem key="1">1st item</s-menuitem>\n                <s-menuitem key="2">2nd item</s-menuitem>\n                <s-menuitem key="3">3rd item</s-menuitem>\n            </s-menu>\n        </div>\n    '});var g={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n  &lt;div>\n    &lt;s-button type="primary">Primary&lt;/s-button>\n    &lt;s-button>secondary&lt;/s-button>\n    &lt;s-dropdown trigger="hover">\n        &lt;s-menu prefixCls="{{prefixCls}}" slot="overlay" selectable="{{false}}" on-click="handleMenuClick">\n            &lt;s-menuitem key="1">1st item&lt;/s-menuitem>\n            &lt;s-menuitem key="2">2nd item&lt;/s-menuitem>\n            &lt;s-menuitem key="3">3rd item&lt;/s-menuitem>\n        &lt;/s-menu>\n        &lt;s-button>\n            Actions &lt;s-icon type="down" />\n        &lt;/s-button>\n    &lt;/s-dropdown>\n  &lt;/div>\n&lt;/template>\n&lt;script>\nimport san from \'san\';\nimport {Button, Menu, Dropdown, Icon} from \'santd\';\n\nconst menu = san.defineComponent({\n    components: {\n        \'s-menu\': Menu,\n        \'s-menuitem\': Menu.Item\n    },\n    template: &#96;\n        &lt;div>\n            &lt;s-menu on-click="handleMenuClick" prefixCls="san-dropdown">\n                &lt;s-menuitem key="1">1st item&lt;/s-menuitem>\n                &lt;s-menuitem key="2">2nd item&lt;/s-menuitem>\n                &lt;s-menuitem key="3">3rd item&lt;/s-menuitem>\n            &lt;/s-menu>\n        &lt;/div>\n    &#96;\n});\n\nexport default {\n    components: {\n        \'s-button\': Button,\n        \'s-dropdown\': Dropdown,\n        \'s-icon\': Icon,\n        \'s-menu\': Menu,\n        \'s-menuitem\': Menu.Item\n    },\n    handleMenuClick(e) {\n        console.log(\'click\', e);\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="多个按钮组合"><span>多个按钮组合</span><a href="#多个按钮组合" class="anchor">#</a></h4><p>按钮组合使用时，推荐使用1个主操作 + n 个次操作，3个以上操作时把更多操作放到 <code>Dropdown.Button</code> 中组合使用。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-button":d.i,"s-dropdown":d.v,"s-icon":d.z,"s-menu":d.G,"s-menuitem":d.G.Item},handleMenuClick(t){console.log("click",t)},template:'\n  <div>\n    <s-button type="primary">Primary</s-button>\n    <s-button>secondary</s-button>\n    <s-dropdown trigger="hover">\n        <s-menu prefixCls="{{prefixCls}}" slot="overlay" selectable="{{false}}" on-click="handleMenuClick">\n            <s-menuitem key="1">1st item</s-menuitem>\n            <s-menuitem key="2">2nd item</s-menuitem>\n            <s-menuitem key="3">3rd item</s-menuitem>\n        </s-menu>\n        <s-button>\n            Actions <s-icon type="down"></s-icon>\n        </s-button>\n    </s-dropdown>\n  </div>\n'}},template:'\n    <section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1625728685172">\n        <section class="code-box-demo"><code-preview></code-preview></section>\n        <section class="code-box-meta markdown">\n            {{ text | raw}}\n            <span class="code-expand-icon" on-click="toggleExpand">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}">\n            </span>\n        </section>\n        <section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">\n            {{ code | raw}}\n        </section>\n    </section>\n'},h={template:'<section class="markdown"><h1 id="button-按钮"><span>Button 按钮</span><a href="#button-按钮" class="anchor">#</a></h1><p>按钮用于开始一个即时操作。</p><h2 id="何时使用"><span>何时使用</span><a href="#何时使用" class="anchor">#</a></h2><p>标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。</p><h2 id="代码演示"><span>代码演示</span><a href="#代码演示" class="anchor">#</a></h2></section>'};e(596),n.default=s.a.defineComponent({components:{readme:a,basic:i,size:c,icon:p,disable:l,loading:r,block:u,ghost:b,combo:g,group:m,desc:h},template:"\n        <div>\n            <desc/>\n            <basic/>\n            <icon/>\n            <disable/>\n            <size/>\n            <loading/>\n            <group/>\n            <combo/>\n            <block/>\n            <ghost/>\n            <readme/>\n        </div>\n    "})},594:function(t,n,e){var o=e(4),s=e(595);"string"==typeof(s=s.__esModule?s.default:s)&&(s=[[t.i,s,""]]);var a={insert:"head",singleton:!1};o(s,a);t.exports=s.locals||{}},595:function(t,n,e){(n=e(5)(!1)).push([t.i,"\n",""]),t.exports=n},596:function(t,n,e){var o=e(4),s=e(597);"string"==typeof(s=s.__esModule?s.default:s)&&(s=[[t.i,s,""]]);var a={insert:"head",singleton:!1};o(s,a);t.exports=s.locals||{}},597:function(t,n,e){(n=e(5)(!1)).push([t.i,".santd-btn {\n  margin-right: 8px;\n  margin-bottom: 12px;\n}\n.santd-btn-group {\n  margin-right: 8px;\n}\n.santd-btn-group > .santd-btn {\n  margin-right: 0;\n}\n",""]),t.exports=n}}]);