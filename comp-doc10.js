(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{512:function(t,n,e){"use strict";e.r(n);var a=e(0),d=e.n(a),s={template:'<section class="markdown"><h2 id="api"><span>API</span><a href="#api" class="anchor">#</a></h2><h3 id="card"><span>Card</span><a href="#card" class="anchor">#</a></h3><table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>actions</td>\n<td>卡片操作组，位置在卡片底部</td>\n<td>Array</td>\n<td>-</td>\n</tr>\n<tr>\n<td>activeTabKey</td>\n<td>当前激活页签的 key</td>\n<td>string</td>\n<td>-</td>\n</tr>\n<tr>\n<td>headStyle</td>\n<td>自定义标题区域样式</td>\n<td>string</td>\n<td>-</td>\n</tr>\n<tr>\n<td>bodyStyle</td>\n<td>内容区域自定义样式</td>\n<td>string</td>\n<td>-</td>\n</tr>\n<tr>\n<td>bordered</td>\n<td>是否有边框</td>\n<td>boolean</td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>cover</td>\n<td>卡片封面</td>\n<td>slot</td>\n<td>-</td>\n</tr>\n<tr>\n<td>defaultActiveTabKey</td>\n<td>初始化选中页签的 key，如果没有设置 activeTabKey</td>\n<td>string</td>\n<td>第一个页签</td>\n</tr>\n<tr>\n<td>extra</td>\n<td>卡片右上角的操作区域</td>\n<td>slot</td>\n<td>-</td>\n</tr>\n<tr>\n<td>hoverable</td>\n<td>鼠标移过时可浮起</td>\n<td>boolean</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>loading</td>\n<td>当卡片内容还在加载中时，可以用 loading 展示一个占位</td>\n<td>boolean</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>tabList</td>\n<td>页签标题列表</td>\n<td>Array</td>\n<td>-</td>\n</tr>\n<tr>\n<td>size</td>\n<td>card 的尺寸</td>\n<td>default|small</td>\n<td>default</td>\n</tr>\n<tr>\n<td>title</td>\n<td>卡片标题</td>\n<td>string</td>\n<td>-</td>\n</tr>\n<tr>\n<td>type</td>\n<td>卡片类型，可设置为 <code>inner</code> 或 不设置</td>\n<td>string</td>\n<td>-</td>\n</tr>\n<tr>\n<td>on-tabChange</td>\n<td>页签切换的回调</td>\n<td>(key) =&gt; void</td>\n<td>-</td>\n</tr>\n</tbody></table>\n<h3 id="cardmeta"><span>Card.Meta</span><a href="#cardmeta" class="anchor">#</a></h3><table>\n<thead>\n<tr>\n<th>属性</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>avatar</td>\n<td>头像/图标</td>\n<td>slot</td>\n<td>-</td>\n</tr>\n<tr>\n<td>description</td>\n<td>描述内容</td>\n<td>string|slot</td>\n<td>-</td>\n</tr>\n<tr>\n<td>title</td>\n<td>标题内容</td>\n<td>string|slot</td>\n<td>-</td>\n</tr>\n</tbody></table>\n</section>'},o={template:'<section class="markdown"><h1 id="card-卡片"><span>Card 卡片</span><a href="#card-卡片" class="anchor">#</a></h1><p>通用卡片容器。</p><h2 id="何时使用"><span>何时使用</span><a href="#何时使用" class="anchor">#</a></h2><p>最基础的卡片容器，可承载文字、列表、图片、段落，常用于后台概览页面。</p><h2 id="代码演示"><span>代码演示</span><a href="#代码演示" class="anchor">#</a></h2></section>'},c=e(8),i={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-card\n            title="Default size card"\n            style="width: 300px;margin-bottom: 20px;"\n        >\n            &lt;template slot="extra">&lt;a href="#">More&lt;/a>&lt;/template>\n            &lt;p>Card content&lt;/p>\n            &lt;p>Card content&lt;/p>\n            &lt;p>Card content&lt;/p>\n        &lt;/s-card>\n        &lt;s-card\n            title="Small size card"\n            size="small"\n            style="width: 300px"\n        >\n            &lt;template slot="extra">&lt;a href="#">More&lt;/a>&lt;/template>\n            &lt;p>Card content&lt;/p>\n            &lt;p>Card content&lt;/p>\n            &lt;p>Card content&lt;/p>\n        &lt;/s-card>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport {Card} from \'santd\';\n\nexport default {\n    components: {\n        \'s-card\': Card\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="典型卡片"><span>典型卡片</span><a href="#典型卡片" class="anchor">#</a></h4><p>包含标题、内容、操作区域。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-card":c.k},template:'\n    <div>\n        <s-card title="Default size card" style="width: 300px;margin-bottom: 20px;">\n            <template slot="extra"><a href="#">More</a></template>\n            <p>Card content</p>\n            <p>Card content</p>\n            <p>Card content</p>\n        </s-card>\n        <s-card title="Small size card" size="small" style="width: 300px">\n            <template slot="extra"><a href="#">More</a></template>\n            <p>Card content</p>\n            <p>Card content</p>\n            <p>Card content</p>\n        </s-card>\n    </div>\n'}},template:'\n    <section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1627640448976">\n        <section class="code-box-demo"><code-preview></code-preview></section>\n        <section class="code-box-meta markdown">\n            {{ text | raw}}\n            <span class="code-expand-icon" on-click="toggleExpand">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}">\n            </span>\n        </section>\n        <section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">\n            {{ code | raw}}\n        </section>\n    </section>\n'},p={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div style="background: #ECECEC; padding: 30px;">\n        &lt;s-card\n            title="Card title"\n            hoverable="{{true}}"\n            style="width: 300px"\n            bordered="{{false}}"\n        >\n            &lt;template slot="extra">&lt;a href="#">More&lt;/a>&lt;/template>\n            &lt;p>Card content&lt;/p>\n            &lt;p>Card content&lt;/p>\n            &lt;p>Card content&lt;/p>\n        &lt;/s-card>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport {Card} from \'santd\';\n\nexport default {\n    components: {\n        \'s-card\': Card\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="无边框"><span>无边框</span><a href="#无边框" class="anchor">#</a></h4><p>在灰色背景上使用无边框的卡片。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-card":c.k},template:'\n    <div style="background: #ECECEC; padding: 30px;">\n        <s-card title="Card title" hoverable="{{true}}" style="width: 300px" bordered="{{false}}">\n            <template slot="extra"><a href="#">More</a></template>\n            <p>Card content</p>\n            <p>Card content</p>\n            <p>Card content</p>\n        </s-card>\n    </div>\n'}},template:'\n    <section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1627640448963">\n        <section class="code-box-demo"><code-preview></code-preview></section>\n        <section class="code-box-meta markdown">\n            {{ text | raw}}\n            <span class="code-expand-icon" on-click="toggleExpand">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}">\n            </span>\n        </section>\n        <section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">\n            {{ code | raw}}\n        </section>\n    </section>\n'},l={initData:()=>({isExpand:!1,code:"\n<pre><code class=\"language-html\">&lt;template>\n    &lt;div>\n        &lt;s-card style=\"width: 300px\">\n            &lt;p>Card content&lt;/p>\n            &lt;p>Card content&lt;/p>\n            &lt;p>Card content&lt;/p>\n        &lt;/s-card>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport {Card} from 'santd';\n\nexport default {\n    components: {\n        's-card': Card\n    }\n}\n&lt;/script></code></pre>",text:'\n<h4 id="简洁卡片"><span>简洁卡片</span><a href="#简洁卡片" class="anchor">#</a></h4><p>只包含内容区域。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-card":c.k},template:'\n    <div>\n        <s-card style="width: 300px">\n            <p>Card content</p>\n            <p>Card content</p>\n            <p>Card content</p>\n        </s-card>\n    </div>\n'}},template:'\n    <section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1627640448967">\n        <section class="code-box-demo"><code-preview></code-preview></section>\n        <section class="code-box-meta markdown">\n            {{ text | raw}}\n            <span class="code-expand-icon" on-click="toggleExpand">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}">\n            </span>\n        </section>\n        <section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">\n            {{ code | raw}}\n        </section>\n    </section>\n'},r={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-card title="Card title" hoverable="{{true}}" style="width: 240px">\n            &lt;template slot="cover">\n                &lt;img alt="example" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544096030542&di=76297da1f83761c2bdd3741c767f73d8&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3Dc789ae0679f08202399f997c23929198%2F5bafa40f4bfbfbedc1a67c5a72f0f736afc31f13.jpg" />\n            &lt;/template>\n            &lt;s-meta title="Night sky" description="www.instagram.com" />\n        &lt;/s-card>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport {Card} from \'santd\';\n\nexport default {\n    components: {\n        \'s-card\': Card,\n        \'s-meta\': Card.Meta\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="更灵活的内容展示"><span>更灵活的内容展示</span><a href="#更灵活的内容展示" class="anchor">#</a></h4><p>可以利用 <code>Card.Meta</code> 支持更灵活的内容。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-card":c.k,"s-meta":c.k.Meta},template:'\n    <div>\n        <s-card title="Card title" hoverable="{{true}}" style="width: 240px">\n            <template slot="cover">\n                <img alt="example" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544096030542&di=76297da1f83761c2bdd3741c767f73d8&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3Dc789ae0679f08202399f997c23929198%2F5bafa40f4bfbfbedc1a67c5a72f0f736afc31f13.jpg">\n            </template>\n            <s-meta title="Night sky" description="www.instagram.com"></s-meta>\n        </s-card>\n    </div>\n'}},template:'\n    <section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1627640448958">\n        <section class="code-box-demo"><code-preview></code-preview></section>\n        <section class="code-box-meta markdown">\n            {{ text | raw}}\n            <span class="code-expand-icon" on-click="toggleExpand">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}">\n            </span>\n        </section>\n        <section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">\n            {{ code | raw}}\n        </section>\n    </section>\n'},m={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div style="background: #ececec; padding: 30px;">\n        &lt;s-row gutter="16">\n            &lt;s-col span="8">\n                &lt;s-card title="Card Title" bordered="{{false}}">Card Content&lt;/s-card>\n            &lt;/s-col>\n            &lt;s-col span="8">\n                &lt;s-card title="Card Title" bordered="{{false}}">Card Content&lt;/s-card>\n            &lt;/s-col>\n            &lt;s-col span="8">\n                &lt;s-card title="Card Title" bordered="{{false}}">Card Content&lt;/s-card>\n            &lt;/s-col>\n        &lt;/s-row>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport {Card, Grid} from \'santd\';\n\nexport default {\n    components: {\n        \'s-card\': Card,\n        \'s-row\': Grid.Row,\n        \'s-col\': Grid.Col\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="栅格卡片"><span>栅格卡片</span><a href="#栅格卡片" class="anchor">#</a></h4><p>在系统概览页面常常和栅格进行配合。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-card":c.k,"s-row":c.y.Row,"s-col":c.y.Col},template:'\n    <div style="background: #ececec; padding: 30px;">\n        <s-row gutter="16">\n            <s-col span="8">\n                <s-card title="Card Title" bordered="{{false}}">Card Content</s-card>\n            </s-col>\n            <s-col span="8">\n                <s-card title="Card Title" bordered="{{false}}">Card Content</s-card>\n            </s-col>\n            <s-col span="8">\n                <s-card title="Card Title" bordered="{{false}}">Card Content</s-card>\n            </s-col>\n        </s-row>\n    </div>\n'}},template:'\n    <section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1627640448945">\n        <section class="code-box-demo"><code-preview></code-preview></section>\n        <section class="code-box-meta markdown">\n            {{ text | raw}}\n            <span class="code-expand-icon" on-click="toggleExpand">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}">\n            </span>\n        </section>\n        <section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">\n            {{ code | raw}}\n        </section>\n    </section>\n'},h={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-switch on-change=\'onChange\' />\n        &lt;s-card\n            title="Card title"\n            hoverable="{{true}}"\n            style="width: 300px;margin-top: 16px;"\n            loading="{{loading}}"\n        >\n            &lt;template slot="extra">\n                &lt;a href="#">More&lt;/a>\n            &lt;/template>\n            &lt;s-meta title="Europe Street beat" description="www.instagram.com">\n                &lt;template slot="avatar">\n                    &lt;s-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />\n                &lt;/template>\n            &lt;/s-meta>\n        &lt;/s-card>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport {Card, Avatar, Switch} from \'santd\';\n\nexport default {\n    components: {\n        \'s-card\': Card,\n        \'s-meta\': Card.Meta,\n        \'s-avatar\': Avatar,\n        \'s-switch\': Switch\n    },\n    initData() {\n        return {\n            loading: true\n        }\n    },\n    onChange(checked) {\n        this.data.set(\'loading\', !checked);\n        console.log(checked);\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="预加载的卡片"><span>预加载的卡片</span><a href="#预加载的卡片" class="anchor">#</a></h4><p>数据读入前会有文本块样式。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-card":c.k,"s-meta":c.k.Meta,"s-avatar":c.e,"s-switch":c.Z},initData:()=>({loading:!0}),onChange(t){this.data.set("loading",!t),console.log(t)},template:'\n    <div>\n        <s-switch on-change="onChange"></s-switch>\n        <s-card title="Card title" hoverable="{{true}}" style="width: 300px;margin-top: 16px;" loading="{{loading}}">\n            <template slot="extra">\n                <a href="#">More</a>\n            </template>\n            <s-meta title="Europe Street beat" description="www.instagram.com">\n                <template slot="avatar">\n                    <s-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"></s-avatar>\n                </template>\n            </s-meta>\n        </s-card>\n    </div>\n'}},template:'\n    <section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1627640448936">\n        <section class="code-box-demo"><code-preview></code-preview></section>\n        <section class="code-box-meta markdown">\n            {{ text | raw}}\n            <span class="code-expand-icon" on-click="toggleExpand">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}">\n            </span>\n        </section>\n        <section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">\n            {{ code | raw}}\n        </section>\n    </section>\n'},g={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div style="background: #ECECEC; padding: 30px;">\n        &lt;s-card title="Card title">\n            &lt;s-cardgrid style="width: 25%">content&lt;/s-cardgrid>\n            &lt;s-cardgrid style="width: 25%">content&lt;/s-cardgrid>\n            &lt;s-cardgrid style="width: 25%">content&lt;/s-cardgrid>\n            &lt;s-cardgrid style="width: 25%">content&lt;/s-cardgrid>\n            &lt;s-cardgrid style="width: 25%">content&lt;/s-cardgrid>\n            &lt;s-cardgrid style="width: 25%">content&lt;/s-cardgrid>\n        &lt;/s-card>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport {Card} from \'santd\';\n\nexport default {\n    components: {\n        \'s-card\': Card,\n        \'s-cardgrid\': Card.Grid\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="网格型内嵌卡片"><span>网格型内嵌卡片</span><a href="#网格型内嵌卡片" class="anchor">#</a></h4><p>一种常见的卡片内容区隔模式。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-card":c.k,"s-cardgrid":c.k.Grid},template:'\n    <div style="background: #ECECEC; padding: 30px;">\n        <s-card title="Card title">\n            <s-cardgrid style="width: 25%">content</s-cardgrid>\n            <s-cardgrid style="width: 25%">content</s-cardgrid>\n            <s-cardgrid style="width: 25%">content</s-cardgrid>\n            <s-cardgrid style="width: 25%">content</s-cardgrid>\n            <s-cardgrid style="width: 25%">content</s-cardgrid>\n            <s-cardgrid style="width: 25%">content</s-cardgrid>\n        </s-card>\n    </div>\n'}},template:'\n    <section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1627640448931">\n        <section class="code-box-demo"><code-preview></code-preview></section>\n        <section class="code-box-meta markdown">\n            {{ text | raw}}\n            <span class="code-expand-icon" on-click="toggleExpand">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}">\n            </span>\n        </section>\n        <section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">\n            {{ code | raw}}\n        </section>\n    </section>\n'},x={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-card title="Card title">\n            &lt;p>Group title&lt;/p>\n            &lt;s-card type="inner" title="Inner Card title">\n                &lt;template slot="extra">\n                    &lt;a href="#">More&lt;/a>\n                &lt;/template>\n                Inner Card content\n            &lt;/s-card>\n            &lt;s-card type="inner" title="Inner Card title" style="margin-top: 12px;">\n                &lt;template slot="extra">\n                    &lt;a href="#">More&lt;/a>\n                &lt;/template>\n                Inner Card content\n            &lt;/s-card>\n        &lt;/s-card>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport {Card} from \'santd\';\n\nexport default {\n    components: {\n        \'s-card\': Card\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="内部卡片"><span>内部卡片</span><a href="#内部卡片" class="anchor">#</a></h4><p>可以放在普通卡片内部，展示多层级结构的信息。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-card":c.k},template:'\n    <div>\n        <s-card title="Card title">\n            <p>Group title</p>\n            <s-card type="inner" title="Inner Card title">\n                <template slot="extra">\n                    <a href="#">More</a>\n                </template>\n                Inner Card content\n            </s-card>\n            <s-card type="inner" title="Inner Card title" style="margin-top: 12px;">\n                <template slot="extra">\n                    <a href="#">More</a>\n                </template>\n                Inner Card content\n            </s-card>\n        </s-card>\n    </div>\n'}},template:'\n    <section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1627640448917">\n        <section class="code-box-demo"><code-preview></code-preview></section>\n        <section class="code-box-meta markdown">\n            {{ text | raw}}\n            <span class="code-expand-icon" on-click="toggleExpand">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}">\n            </span>\n        </section>\n        <section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">\n            {{ code | raw}}\n        </section>\n    </section>\n'},b={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-card style="width: 300px" actions="{{[\'setting\', \'edit\', \'ellipsis\']}}">\n            &lt;template slot="cover">\n                &lt;img alt="example" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544096030542&di=76297da1f83761c2bdd3741c767f73d8&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3Dc789ae0679f08202399f997c23929198%2F5bafa40f4bfbfbedc1a67c5a72f0f736afc31f13.jpg" />\n            &lt;/template>\n            &lt;s-meta\n                title="Card title"\n                description="This is the description">\n                &lt;template slot="avatar">\n                    &lt;s-avatar src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544096149211&di=2a2a049606dae06d29593fbfb48e5301&imgtype=0&src=http%3A%2F%2Fg.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2F8c1001e93901213fce85790251e736d12e2e95bd.jpg" />\n                &lt;/template>\n            &lt;/s-meta>\n            &lt;template slot="setting">\n                &lt;s-icon type="setting" />\n            &lt;/template>\n            &lt;template slot="edit">\n                &lt;s-icon type="edit" />\n            &lt;/template>\n            &lt;template slot="ellipsis">\n                &lt;s-icon type="ellipsis"/>\n            &lt;/template>\n        &lt;/s-card>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport {Card, Avatar, Icon} from \'santd\';\n\nexport default {\n    components: {\n        \'s-card\': Card,\n        \'s-meta\': Card.Meta,\n        \'s-avatar\': Avatar,\n        \'s-icon\': Icon\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="支持更多内容配置"><span>支持更多内容配置</span><a href="#支持更多内容配置" class="anchor">#</a></h4><p>一种支持封面、头像、标题和描述信息的卡片。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-card":c.k,"s-meta":c.k.Meta,"s-avatar":c.e,"s-icon":c.z},template:'\n    <div>\n        <s-card style="width: 300px" actions="{{[\'setting\', \'edit\', \'ellipsis\']}}">\n            <template slot="cover">\n                <img alt="example" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544096030542&di=76297da1f83761c2bdd3741c767f73d8&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3Dc789ae0679f08202399f997c23929198%2F5bafa40f4bfbfbedc1a67c5a72f0f736afc31f13.jpg">\n            </template>\n            <s-meta title="Card title" description="This is the description">\n                <template slot="avatar">\n                    <s-avatar src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544096149211&di=2a2a049606dae06d29593fbfb48e5301&imgtype=0&src=http%3A%2F%2Fg.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2F8c1001e93901213fce85790251e736d12e2e95bd.jpg"></s-avatar>\n                </template>\n            </s-meta>\n            <template slot="setting">\n                <s-icon type="setting"></s-icon>\n            </template>\n            <template slot="edit">\n                <s-icon type="edit"></s-icon>\n            </template>\n            <template slot="ellipsis">\n                <s-icon type="ellipsis"></s-icon>\n            </template>\n        </s-card>\n    </div>\n'}},template:'\n    <section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1627640448912">\n        <section class="code-box-demo"><code-preview></code-preview></section>\n        <section class="code-box-meta markdown">\n            {{ text | raw}}\n            <span class="code-expand-icon" on-click="toggleExpand">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}">\n            </span>\n        </section>\n        <section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">\n            {{ code | raw}}\n        </section>\n    </section>\n'},w={initData:()=>({isExpand:!1,code:"\n<pre><code class=\"language-html\">&lt;template>\n    &lt;div>\n        &lt;s-card tabList=\"{{tabList}}\" on-tabChange=\"onTabChange\">\n            &lt;p>{{contentList[selectedTab]}}&lt;/p>\n        &lt;/s-card>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport {Card} from 'santd';\n\nexport default {\n    components: {\n        's-card': Card\n    },\n    initData() {\n        return {\n            tabList: [{\n                key: 'tab1',\n                tab: 'tab1',\n            }, {\n                key: 'tab2',\n                tab: 'tab2'\n            }],\n            contentList: {\n                tab1: 'content1',\n                tab2: 'content2',\n            },\n            selectedTab: 'tab1'\n        }\n    },\n    onTabChange(key) {\n        console.log('onTabChange', key);\n        this.data.set('selectedTab', key);\n    }\n}\n&lt;/script></code></pre>",text:'\n<h4 id="带页签的卡片"><span>带页签的卡片</span><a href="#带页签的卡片" class="anchor">#</a></h4><p>可承载更多内容。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-card":c.k},initData:()=>({tabList:[{key:"tab1",tab:"tab1"},{key:"tab2",tab:"tab2"}],contentList:{tab1:"content1",tab2:"content2"},selectedTab:"tab1"}),onTabChange(t){console.log("onTabChange",t),this.data.set("selectedTab",t)},template:'\n    <div>\n        <s-card tabList="{{tabList}}" on-tabChange="onTabChange">\n            <p>{{contentList[selectedTab]}}</p>\n        </s-card>\n    </div>\n'}},template:'\n    <section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1627640448905">\n        <section class="code-box-demo"><code-preview></code-preview></section>\n        <section class="code-box-meta markdown">\n            {{ text | raw}}\n            <span class="code-expand-icon" on-click="toggleExpand">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}">\n            </span>\n        </section>\n        <section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">\n            {{ code | raw}}\n        </section>\n    </section>\n'};n.default=d.a.defineComponent({components:{desc:o,readme:s,basic:i,noborder:p,simple:l,meta:r,column:m,preload:h,grid:g,nest:x,tabs:w,actions:b},template:"\n        <div>\n            <desc/>\n            <basic/>\n            <noborder/>\n            <simple/>\n            <meta/>\n            <column/>\n            <preload/>\n            <grid/>\n            <nest/>\n            <tabs/>\n            <actions/>\n            <readme/>\n        </div>\n    "})}}]);