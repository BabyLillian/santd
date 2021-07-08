(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{537:function(n,t,e){"use strict";e.r(t);var s=e(0),o=e.n(s),a={template:'<section class="markdown"><h2 id="api"><span>API</span><a href="#api" class="anchor">#</a></h2><h3 id="anchor-props"><span>Anchor props</span><a href="#anchor-props" class="anchor">#</a></h3><table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>affix</td>\n<td>固定模式</td>\n<td>boolean</td>\n<td>true</td>\n</tr>\n<tr>\n<td>bounds</td>\n<td>锚点区域边界</td>\n<td>number</td>\n<td>5(px)</td>\n</tr>\n<tr>\n<td>getContainer</td>\n<td>指定滚动的容器</td>\n<td>() =&gt; HTMLElement</td>\n<td>() =&gt; window</td>\n</tr>\n<tr>\n<td>offsetBottom</td>\n<td>距离窗口底部达到指定偏移量后触发</td>\n<td>number</td>\n<td></td>\n</tr>\n<tr>\n<td>offsetTop</td>\n<td>距离窗口顶部达到指定偏移量后触发</td>\n<td>number</td>\n<td></td>\n</tr>\n<tr>\n<td>showInkInFixed</td>\n<td>固定模式是否显示小圆点</td>\n<td>boolean</td>\n<td>false</td>\n</tr>\n<tr>\n<td>wrapperClass</td>\n<td>容器的类名</td>\n<td>string</td>\n<td>-</td>\n</tr>\n<tr>\n<td>wrapperStyle</td>\n<td>容器样式</td>\n<td>string | object</td>\n<td>-</td>\n</tr>\n<tr>\n<td>on-click</td>\n<td><code>click</code> 事件的 handler</td>\n<td>Function(e: Event, link: Object)</td>\n<td></td>\n</tr>\n<tr>\n<td>on-change</td>\n<td>监听锚点链接改变</td>\n<td>Function(currentActiveLink: string)</td>\n<td></td>\n</tr>\n<tr>\n<td>getCurrentAnchor</td>\n<td>自定义高亮的锚点</td>\n<td>() =&gt; string</td>\n<td>-</td>\n</tr>\n<tr>\n<td>targetOffset</td>\n<td>锚点滚动偏移量，默认与 offsetTop 相同</td>\n<td>number</td>\n<td>-</td>\n</tr>\n</tbody></table>\n<h3 id="link-props"><span>Link props</span><a href="#link-props" class="anchor">#</a></h3><table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>href</td>\n<td>锚点链接</td>\n<td>string</td>\n<td></td>\n</tr>\n<tr>\n<td>title</td>\n<td>文字内容</td>\n<td>string</td>\n<td></td>\n</tr>\n<tr>\n<td>target</td>\n<td>该属性指定在何处显示链接的资源</td>\n<td>string</td>\n<td></td>\n</tr>\n</tbody></table>\n</section>'},i={template:'<section class="markdown"><h1 id="anchor-锚点"><span>Anchor 锚点</span><a href="#anchor-锚点" class="anchor">#</a></h1><p>用于跳转到页面指定位置。</p><h2 id="何时使用"><span>何时使用</span><a href="#何时使用" class="anchor">#</a></h2><p>需要展现当前页面上可供跳转的锚点链接，以及快速在锚点之间跳转。</p><h2 id="代码演示"><span>代码演示</span><a href="#代码演示" class="anchor">#</a></h2></section>'},c=e(8),d={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div id="components-anchor-demo-basic">\n        &lt;s-anchor>\n            &lt;s-link href="#components-anchor-demo-basic" title="Basic Demo" />\n            &lt;s-link href="#components-anchor-demo-static" title="Static Demo" />\n            &lt;s-link href="#api" title="API">\n                &lt;s-link href="#anchor-props" title="Anchor Props" />\n                &lt;s-link href="#link-props" title="Link Props" />\n            &lt;/s-link>\n        &lt;/s-anchor>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport {Anchor} from \'santd\';\n\nexport default {\n    components: {\n        \'s-anchor\': Anchor,\n        \'s-link\': Anchor.Link\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="基本"><span>基本</span><a href="#基本" class="anchor">#</a></h4><p>最简单的用法</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-anchor":c.c,"s-link":c.c.Link},template:'\n    <div id="components-anchor-demo-basic">\n        <s-anchor>\n            <s-link href="#components-anchor-demo-basic" title="Basic Demo"></s-link>\n            <s-link href="#components-anchor-demo-static" title="Static Demo"></s-link>\n            <s-link href="#api" title="API">\n                <s-link href="#anchor-props" title="Anchor Props"></s-link>\n                <s-link href="#link-props" title="Link Props"></s-link>\n            </s-link>\n        </s-anchor>\n    </div>\n'}},template:'\n    <section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1625728685484">\n        <section class="code-box-demo"><code-preview></code-preview></section>\n        <section class="code-box-meta markdown">\n            {{ text | raw}}\n            <span class="code-expand-icon" on-click="toggleExpand">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}">\n            </span>\n        </section>\n        <section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">\n            {{ code | raw}}\n        </section>\n    </section>\n'},l={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div id="components-anchor-demo-static">\n        &lt;s-anchor affix="{{false}}">\n            &lt;s-link href="#components-anchor-demo-basic" title="Basic Demo" />\n            &lt;s-link href="#components-anchor-demo-static" title="Static Demo" />\n            &lt;s-link href="#api" title="API">\n                &lt;s-link href="#anchor-props" title="Anchor Props" />\n                &lt;s-link href="#link-props" title="Link Props" />\n            &lt;/s-link>\n        &lt;/s-anchor>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport {Anchor} from \'santd\';\n\nexport default {\n    components: {\n        \'s-anchor\': Anchor,\n        \'s-link\': Anchor.Link\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="静态位置"><span>静态位置</span><a href="#静态位置" class="anchor">#</a></h4><p>不浮动，状态不随页面滚动变化</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-anchor":c.c,"s-link":c.c.Link},template:'\n    <div id="components-anchor-demo-static">\n        <s-anchor affix="{{false}}">\n            <s-link href="#components-anchor-demo-basic" title="Basic Demo"></s-link>\n            <s-link href="#components-anchor-demo-static" title="Static Demo"></s-link>\n            <s-link href="#api" title="API">\n                <s-link href="#anchor-props" title="Anchor Props"></s-link>\n                <s-link href="#link-props" title="Link Props"></s-link>\n            </s-link>\n        </s-anchor>\n    </div>\n'}},template:'\n    <section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1625728685476">\n        <section class="code-box-demo"><code-preview></code-preview></section>\n        <section class="code-box-meta markdown">\n            {{ text | raw}}\n            <span class="code-expand-icon" on-click="toggleExpand">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}">\n            </span>\n        </section>\n        <section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">\n            {{ code | raw}}\n        </section>\n    </section>\n'},r={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-anchor affix="{{false}}" on-click="handleClick">\n            &lt;s-link href="#components-anchor-demo-basic" title="Basic Demo" />\n            &lt;s-link href="#components-anchor-demo-static" title="Static Demo" />\n            &lt;s-link href="#api" title="API">\n                &lt;s-link href="#anchor-props" title="Anchor Props" />\n                &lt;s-link href="#link-props" title="Link Props" />\n            &lt;/s-link>\n        &lt;/s-anchor>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport {Anchor} from \'santd\';\n\nexport default {\n    components: {\n        \'s-anchor\': Anchor,\n        \'s-link\': Anchor.Link\n    },\n    handleClick({e, link}) {\n        e.preventDefault();\n        console.log(link);\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="自定义on-click事件"><span>自定义on-Click事件</span><a href="#自定义on-click事件" class="anchor">#</a></h4><p>点击锚点不记录历史。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-anchor":c.c,"s-link":c.c.Link},handleClick({e:n,link:t}){n.preventDefault(),console.log(t)},template:'\n    <div>\n        <s-anchor affix="{{false}}" on-click="handleClick">\n            <s-link href="#components-anchor-demo-basic" title="Basic Demo"></s-link>\n            <s-link href="#components-anchor-demo-static" title="Static Demo"></s-link>\n            <s-link href="#api" title="API">\n                <s-link href="#anchor-props" title="Anchor Props"></s-link>\n                <s-link href="#link-props" title="Link Props"></s-link>\n            </s-link>\n        </s-anchor>\n    </div>\n'}},template:'\n    <section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1625728685467">\n        <section class="code-box-demo"><code-preview></code-preview></section>\n        <section class="code-box-meta markdown">\n            {{ text | raw}}\n            <span class="code-expand-icon" on-click="toggleExpand">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}">\n            </span>\n        </section>\n        <section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">\n            {{ code | raw}}\n        </section>\n    </section>\n'},p={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-anchor affix="{{false}}" getCurrentAnchor="{{getCurrentAnchor}}">\n            &lt;s-link href="#components-anchor-demo-basic" title="Basic Demo" />\n            &lt;s-link href="#components-anchor-demo-static" title="Static Demo" />\n            &lt;s-link href="#api" title="API">\n                &lt;s-link href="#anchor-props" title="Anchor Props" />\n                &lt;s-link href="#link-props" title="Link Props" />\n            &lt;/s-link>\n        &lt;/s-anchor>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport {Anchor} from \'santd\';\n\nexport default {\n    components: {\n        \'s-anchor\': Anchor,\n        \'s-link\': Anchor.Link\n    },\n    initData() {\n        return {\n            getCurrentAnchor: () => \'#api\'\n        };\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="自定义锚点高亮"><span>自定义锚点高亮</span><a href="#自定义锚点高亮" class="anchor">#</a></h4><p>自定义锚点高亮。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-anchor":c.c,"s-link":c.c.Link},initData:()=>({getCurrentAnchor:()=>"#api"}),template:'\n    <div>\n        <s-anchor affix="{{false}}" getCurrentAnchor="{{getCurrentAnchor}}">\n            <s-link href="#components-anchor-demo-basic" title="Basic Demo"></s-link>\n            <s-link href="#components-anchor-demo-static" title="Static Demo"></s-link>\n            <s-link href="#api" title="API">\n                <s-link href="#anchor-props" title="Anchor Props"></s-link>\n                <s-link href="#link-props" title="Link Props"></s-link>\n            </s-link>\n        </s-anchor>\n    </div>\n'}},template:'\n    <section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1625728685463">\n        <section class="code-box-demo"><code-preview></code-preview></section>\n        <section class="code-box-meta markdown">\n            {{ text | raw}}\n            <span class="code-expand-icon" on-click="toggleExpand">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}">\n            </span>\n        </section>\n        <section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">\n            {{ code | raw}}\n        </section>\n    </section>\n'},h={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-anchor affix="{{false}}" on-change="handleChange">\n            &lt;s-link href="#components-anchor-demo-basic" title="Basic Demo" />\n            &lt;s-link href="#components-anchor-demo-static" title="Static Demo" />\n            &lt;s-link href="#api" title="API">\n                &lt;s-link href="#anchor-props" title="Anchor Props" />\n                &lt;s-link href="#link-props" title="Link Props" />\n            &lt;/s-link>\n        &lt;/s-anchor>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport {Anchor} from \'santd\';\n\nexport default {\n    components: {\n        \'s-anchor\': Anchor,\n        \'s-link\': Anchor.Link\n    },\n    handleChange(link) {\n        console.log(\'Anchor:OnChange\', link);\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="监听锚点链接改变"><span>监听锚点链接改变</span><a href="#监听锚点链接改变" class="anchor">#</a></h4><p>监听锚点链接改变。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-anchor":c.c,"s-link":c.c.Link},handleChange(n){console.log("Anchor:OnChange",n)},template:'\n    <div>\n        <s-anchor affix="{{false}}" on-change="handleChange">\n            <s-link href="#components-anchor-demo-basic" title="Basic Demo"></s-link>\n            <s-link href="#components-anchor-demo-static" title="Static Demo"></s-link>\n            <s-link href="#api" title="API">\n                <s-link href="#anchor-props" title="Anchor Props"></s-link>\n                <s-link href="#link-props" title="Link Props"></s-link>\n            </s-link>\n        </s-anchor>\n    </div>\n'}},template:'\n    <section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1625728685459">\n        <section class="code-box-demo"><code-preview></code-preview></section>\n        <section class="code-box-meta markdown">\n            {{ text | raw}}\n            <span class="code-expand-icon" on-click="toggleExpand">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}">\n            </span>\n        </section>\n        <section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">\n            {{ code | raw}}\n        </section>\n    </section>\n'},m={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-anchor affix="{{false}}" targetOffset="{{targetOffset}}">\n            &lt;s-link href="#components-anchor-demo-basic" title="Basic Demo" />\n            &lt;s-link href="#components-anchor-demo-static" title="Static Demo" />\n            &lt;s-link href="#api" title="API">\n                &lt;s-link href="#anchor-props" title="Anchor Props" />\n                &lt;s-link href="#link-props" title="Link Props" />\n            &lt;/s-link>\n        &lt;/s-anchor>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport {Anchor} from \'santd\';\n\nexport default {\n    components: {\n        \'s-anchor\': Anchor,\n        \'s-link\': Anchor.Link\n    },\n    initData() {\n        return {\n            targetOffset: undefined\n        };\n    },\n    attached() {\n        this.data.set(\'targetOffset\', window.innerHeight / 2);\n    },\n}\n&lt;/script></code></pre>',text:'\n<h4 id="设置锚点滚动偏移量"><span>设置锚点滚动偏移量</span><a href="#设置锚点滚动偏移量" class="anchor">#</a></h4><p>锚点目标滚动到屏幕正中间。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-anchor":c.c,"s-link":c.c.Link},initData:()=>({targetOffset:void 0}),attached(){this.data.set("targetOffset",window.innerHeight/2)},template:'\n    <div>\n        <s-anchor affix="{{false}}" targetOffset="{{targetOffset}}">\n            <s-link href="#components-anchor-demo-basic" title="Basic Demo"></s-link>\n            <s-link href="#components-anchor-demo-static" title="Static Demo"></s-link>\n            <s-link href="#api" title="API">\n                <s-link href="#anchor-props" title="Anchor Props"></s-link>\n                <s-link href="#link-props" title="Link Props"></s-link>\n            </s-link>\n        </s-anchor>\n    </div>\n'}},template:'\n    <section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1625728685454">\n        <section class="code-box-demo"><code-preview></code-preview></section>\n        <section class="code-box-meta markdown">\n            {{ text | raw}}\n            <span class="code-expand-icon" on-click="toggleExpand">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}">\n            </span>\n        </section>\n        <section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">\n            {{ code | raw}}\n        </section>\n    </section>\n'};t.default=o.a.defineComponent({components:{readme:a,head:i,basic:d,static:l,click:r,custom:p,change:h,"target-offset":m},template:"\n        <div>\n            <head/>\n            <basic/>\n            <static/>\n            <click/>\n            <custom/>\n            <change/>\n            <target-offset/>\n            <readme/>\n        </div>\n    "})}}]);