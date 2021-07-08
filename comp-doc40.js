(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{514:function(n,e,t){"use strict";t.r(e);var s=t(0),o=t.n(s),a={template:'<section class="markdown"><h1 id="progress-进度条"><span>Progress 进度条</span><a href="#progress-进度条" class="anchor">#</a></h1><p>展示操作的当前进度。</p><h2 id="何时使用"><span>何时使用</span><a href="#何时使用" class="anchor">#</a></h2><p>在操作需要较长时间才能完成时，为用户显示该操作的当前进度和状态。</p><ul>\n<li>当一个操作会打断当前界面，或者需要在后台运行，且耗时可能超过2秒时；</li>\n<li>当需要显示一个操作完成的百分比时。</li>\n</ul>\n<h2 id="代码演示"><span>代码演示</span><a href="#代码演示" class="anchor">#</a></h2></section>'},c=t(8),p={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-progress percent="{{30}}"/>\n        &lt;s-progress percent="{{50}}" status="active"/>\n        &lt;s-progress percent="{{70}}" status="exception"/>\n        &lt;s-progress percent="{{100}}"/>\n        &lt;s-progress percent="{{50}}" showInfo="{{false}}"/>\n    &lt;/div>\n&lt;/template>\n\n&lt;script>\nimport {Progress} from \'santd\';\n\nexport default {\n    components: {\n        \'s-progress\': Progress\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="进度条"><span>进度条</span><a href="#进度条" class="anchor">#</a></h4><p>标准的进度条。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-progress":c.N},template:'\n    <div>\n        <s-progress percent="{{30}}"></s-progress>\n        <s-progress percent="{{50}}" status="active"></s-progress>\n        <s-progress percent="{{70}}" status="exception"></s-progress>\n        <s-progress percent="{{100}}"></s-progress>\n        <s-progress percent="{{50}}" showInfo="{{false}}"></s-progress>\n    </div>\n'}},template:'\n    <section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1625728682919">\n        <section class="code-box-demo"><code-preview></code-preview></section>\n        <section class="code-box-meta markdown">\n            {{ text | raw}}\n            <span class="code-expand-icon" on-click="toggleExpand">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}">\n            </span>\n        </section>\n        <section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">\n            {{ code | raw}}\n        </section>\n    </section>\n'},r=(t(701),{initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-progress type="circle" percent="{{75}}"/>\n        &lt;s-progress type="circle" percent="{{70}}" status="exception"/>\n        &lt;s-progress type="circle" percent="{{100}}"/>\n    &lt;/div>\n&lt;/template>\n\n&lt;script>\nimport {Progress} from \'santd\';\n\nexport default {\n    components: {\n        \'s-progress\': Progress\n    }\n}\n&lt;/script>\n\n&lt;style>\n.san-progress-circle-wrap,\n.san-progress-line-wrap {\n    margin-right: 8px;\n    margin-bottom: 5px;\n}\n&lt;/style></code></pre>',text:'\n<h4 id="进度圈"><span>进度圈</span><a href="#进度圈" class="anchor">#</a></h4><p>圈形的进度。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-progress":c.N},template:'\n    <div>\n        <s-progress type="circle" percent="{{75}}"></s-progress>\n        <s-progress type="circle" percent="{{70}}" status="exception"></s-progress>\n        <s-progress type="circle" percent="{{100}}"></s-progress>\n    </div>\n'}},template:'\n    <section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1625728682924">\n        <section class="code-box-demo"><code-preview></code-preview></section>\n        <section class="code-box-meta markdown">\n            {{ text | raw}}\n            <span class="code-expand-icon" on-click="toggleExpand">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}">\n            </span>\n        </section>\n        <section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">\n            {{ code | raw}}\n        </section>\n    </section>\n'}),d={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div style="width: 170px;">\n        &lt;s-progress percent="{{30}}" size="small"/>\n        &lt;s-progress percent="{{50}}" size="small" status="active"/>\n        &lt;s-progress percent="{{70}}" size="small" status="exception"/>\n        &lt;s-progress percent="{{100}}" size="small"/>\n    &lt;/div>\n&lt;/template>\n\n&lt;script>\nimport {Progress} from \'santd\';\n\nexport default {\n    components: {\n        \'s-progress\': Progress\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="小型进度条"><span>小型进度条</span><a href="#小型进度条" class="anchor">#</a></h4><p>适合放在较狭窄的区域内。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-progress":c.N},template:'\n    <div style="width: 170px;">\n        <s-progress percent="{{30}}" size="small"></s-progress>\n        <s-progress percent="{{50}}" size="small" status="active"></s-progress>\n        <s-progress percent="{{70}}" size="small" status="exception"></s-progress>\n        <s-progress percent="{{100}}" size="small"></s-progress>\n    </div>\n'}},template:'\n    <section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1625728682905">\n        <section class="code-box-demo"><code-preview></code-preview></section>\n        <section class="code-box-meta markdown">\n            {{ text | raw}}\n            <span class="code-expand-icon" on-click="toggleExpand">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}">\n            </span>\n        </section>\n        <section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">\n            {{ code | raw}}\n        </section>\n    </section>\n'},i={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-progress type="circle" percent="{{75}}" width="{{80}}"/>\n        &lt;s-progress type="circle" percent="{{70}}" width="{{80}}" status="exception"/>\n        &lt;s-progress type="circle" percent="{{100}}" width="{{80}}"/>\n    &lt;/div>\n&lt;/template>\n\n&lt;script>\nimport {Progress} from \'santd\';\n\nexport default {\n    components: {\n        \'s-progress\': Progress\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="小型进度圈"><span>小型进度圈</span><a href="#小型进度圈" class="anchor">#</a></h4><p>小一号的圈形进度。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-progress":c.N},template:'\n    <div>\n        <s-progress type="circle" percent="{{75}}" width="{{80}}"></s-progress>\n        <s-progress type="circle" percent="{{70}}" width="{{80}}" status="exception"></s-progress>\n        <s-progress type="circle" percent="{{100}}" width="{{80}}"></s-progress>\n    </div>\n'}},template:'\n    <section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1625728682901">\n        <section class="code-box-demo"><code-preview></code-preview></section>\n        <section class="code-box-meta markdown">\n            {{ text | raw}}\n            <span class="code-expand-icon" on-click="toggleExpand">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}">\n            </span>\n        </section>\n        <section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">\n            {{ code | raw}}\n        </section>\n    </section>\n'},l=(t(703),{initData:()=>({isExpand:!1,code:"\n<pre><code class=\"language-html\">&lt;template>\n    &lt;div class=\"demo-dynamic\">\n        &lt;s-progress percent=\"{{percent}}\"/>\n        &lt;s-button-group>\n            &lt;s-button on-click=\"decline\" icon=\"minus\">&lt;/s-button>\n            &lt;s-button on-click=\"increase\" icon=\"plus\">&lt;/s-button>\n        &lt;/s-button-group>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport {Progress, Button} from 'santd';\n\nexport default {\n    components: {\n        's-button': Button,\n        's-button-group': Button.Group,\n        's-progress': Progress\n    },\n    initData() {\n        return {\n            percent: 0\n        };\n    },\n    increase() {\n        let percent = this.data.get('percent') + 10;\n        if (percent > 100) {\n            percent = 100;\n        }\n        this.data.set('percent', percent);\n    },\n    decline() {\n        let percent = this.data.get('percent') - 10;\n        if (percent &lt; 0) {\n            percent = 0;\n        }\n        this.data.set('percent', percent);\n    }\n}\n&lt;/script>\n\n&lt;style>\n.demo-dynamic .san-btn > span {\n    margin-left: 0!important;\n}\n&lt;/style></code></pre>",text:'\n<h4 id="动态展示"><span>动态展示</span><a href="#动态展示" class="anchor">#</a></h4><p>会动的进度条才是好进度条。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-button":c.i,"s-button-group":c.i.Group,"s-progress":c.N},initData:()=>({percent:0}),increase(){let n=this.data.get("percent")+10;n>100&&(n=100),this.data.set("percent",n)},decline(){let n=this.data.get("percent")-10;n<0&&(n=0),this.data.set("percent",n)},template:'\n    <div class="demo-dynamic">\n        <s-progress percent="{{percent}}"></s-progress>\n        <s-button-group>\n            <s-button on-click="decline" icon="minus"></s-button>\n            <s-button on-click="increase" icon="plus"></s-button>\n        </s-button-group>\n    </div>\n'}},template:'\n    <section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1625728682911">\n        <section class="code-box-demo"><code-preview></code-preview></section>\n        <section class="code-box-meta markdown">\n            {{ text | raw}}\n            <span class="code-expand-icon" on-click="toggleExpand">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}">\n            </span>\n        </section>\n        <section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">\n            {{ code | raw}}\n        </section>\n    </section>\n'}),g=(t(705),{initData:()=>({isExpand:!1,code:"\n<pre><code class=\"language-html\">&lt;template>\n    &lt;div class=\"demo-circle-dynamic\">\n        &lt;s-progress type=\"circle\" percent=\"{{percent}}\"/>\n        &lt;s-button-group>\n            &lt;s-button on-click=\"decline\" icon=\"minus\">&lt;/s-button>\n            &lt;s-button on-click=\"increase\" icon=\"plus\">&lt;/s-button>\n        &lt;/s-button-group>\n    &lt;/div>\n&lt;/template>\n\n&lt;script>\nimport {Progress, Button} from 'santd';\n\nexport default {\n    components: {\n        's-button': Button,\n        's-button-group': Button.Group,\n        's-progress': Progress\n    },\n    initData() {\n        return {\n            percent: 0\n        };\n    },\n    increase() {\n        let percent = this.data.get('percent') + 10;\n        if (percent > 100) {\n            percent = 100;\n        }\n        this.data.set('percent', percent);\n    },\n    decline() {\n        let percent = this.data.get('percent') - 10;\n        if (percent &lt; 0) {\n            percent = 0;\n        }\n        this.data.set('percent', percent);\n    }\n}\n&lt;/script>\n\n&lt;style>\n.demo-circle-dynamic .san-btn > span {\n    margin-left: 0!important;\n}\n&lt;/style></code></pre>",text:'\n<h4 id="进度圈动态展示"><span>进度圈动态展示</span><a href="#进度圈动态展示" class="anchor">#</a></h4><p>会动的进度条才是好进度条。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-button":c.i,"s-button-group":c.i.Group,"s-progress":c.N},initData:()=>({percent:0}),increase(){let n=this.data.get("percent")+10;n>100&&(n=100),this.data.set("percent",n)},decline(){let n=this.data.get("percent")-10;n<0&&(n=0),this.data.set("percent",n)},template:'\n    <div class="demo-circle-dynamic">\n        <s-progress type="circle" percent="{{percent}}"></s-progress>\n        <s-button-group>\n            <s-button on-click="decline" icon="minus"></s-button>\n            <s-button on-click="increase" icon="plus"></s-button>\n        </s-button-group>\n    </div>\n'}},template:'\n    <section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1625728682894">\n        <section class="code-box-demo"><code-preview></code-preview></section>\n        <section class="code-box-meta markdown">\n            {{ text | raw}}\n            <span class="code-expand-icon" on-click="toggleExpand">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}">\n            </span>\n        </section>\n        <section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">\n            {{ code | raw}}\n        </section>\n    </section>\n'}),m=(t(707),{initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div class="demo-format">\n        &lt;s-progress type="circle" percent="{{75}}" format="{{format1}}"/>\n        &lt;s-progress type="circle" percent="{{100}}" format="{{format2}}"/>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport {Progress, Button} from \'santd\';\n\nexport default {\n    components: {\n        \'s-button\': Button,\n        \'s-button-group\': Button.Group,\n        \'s-progress\': Progress\n    },\n    initData() {\n        return {\n            format1: percent => &#96;&#36;&#123;percent} Days&#96;,\n            format2: () => \'Done\'\n        };\n    }\n}\n&lt;/script>\n\n&lt;style>\n.demo-format div.san-progress-circle,\n.demo-format div.san-progress-line {\n    margin-right: 8px;\n    margin-bottom: 8px;\n}\n&lt;/style></code></pre>',text:'\n<h4 id="自定义文字格式"><span>自定义文字格式</span><a href="#自定义文字格式" class="anchor">#</a></h4><p><code>format</code> 属性指定格式。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-button":c.i,"s-button-group":c.i.Group,"s-progress":c.N},initData:()=>({format1:n=>n+" Days",format2:()=>"Done"}),template:'\n    <div class="demo-format">\n        <s-progress type="circle" percent="{{75}}" format="{{format1}}"></s-progress>\n        <s-progress type="circle" percent="{{100}}" format="{{format2}}"></s-progress>\n    </div>\n'}},template:'\n    <section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1625728682888">\n        <section class="code-box-demo"><code-preview></code-preview></section>\n        <section class="code-box-meta markdown">\n            {{ text | raw}}\n            <span class="code-expand-icon" on-click="toggleExpand">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}">\n            </span>\n        </section>\n        <section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">\n            {{ code | raw}}\n        </section>\n    </section>\n'}),x={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-progress type="dashboard" percent="{{75}}"/>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport {Progress} from \'santd\';\n\nexport default {\n    components: {\n        \'s-progress\': Progress\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="仪表盘"><span>仪表盘</span><a href="#仪表盘" class="anchor">#</a></h4><p>通过设置 <code>type=dashboard</code>，可以很方便地实现仪表盘样式的进度条。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-progress":c.N},template:'\n    <div>\n        <s-progress type="dashboard" percent="{{75}}"></s-progress>\n    </div>\n'}},template:'\n    <section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1625728682884">\n        <section class="code-box-demo"><code-preview></code-preview></section>\n        <section class="code-box-meta markdown">\n            {{ text | raw}}\n            <span class="code-expand-icon" on-click="toggleExpand">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}">\n            </span>\n        </section>\n        <section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">\n            {{ code | raw}}\n        </section>\n    </section>\n'},h={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-progress percent="{{60}}" successPercent="{{30}}"/>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport {Progress} from \'santd\';\n\nexport default {\n    components: {\n        \'s-progress\': Progress\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="分段进度条"><span>分段进度条</span><a href="#分段进度条" class="anchor">#</a></h4><p>标准的进度条。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-progress":c.N},template:'\n    <div>\n        <s-progress percent="{{60}}" successPercent="{{30}}"></s-progress>\n    </div>\n'}},template:'\n    <section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1625728682877">\n        <section class="code-box-demo"><code-preview></code-preview></section>\n        <section class="code-box-meta markdown">\n            {{ text | raw}}\n            <span class="code-expand-icon" on-click="toggleExpand">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}">\n            </span>\n        </section>\n        <section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">\n            {{ code | raw}}\n        </section>\n    </section>\n'},u={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-progress strokeLinecap="square" percent="{{75}}"/>\n        &lt;s-progress strokeLinecap="square" type="circle" percent="{{75}}"/>\n        &lt;s-progress strokeLinecap="square" type="dashboard" percent="{{75}}"/>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport {Progress} from \'santd\';\n\nexport default {\n    components: {\n        \'s-progress\': Progress\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="圆角方角边缘"><span>圆角/方角边缘</span><a href="#圆角方角边缘" class="anchor">#</a></h4><p>通过设定 <code>strokeLinecap=&quot;square|round&quot;</code> 可以调整进度条边缘的形状。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-progress":c.N},template:'\n    <div>\n        <s-progress strokeLinecap="square" percent="{{75}}"></s-progress>\n        <s-progress strokeLinecap="square" type="circle" percent="{{75}}"></s-progress>\n        <s-progress strokeLinecap="square" type="dashboard" percent="{{75}}"></s-progress>\n    </div>\n'}},template:'\n    <section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1625728682872">\n        <section class="code-box-demo"><code-preview></code-preview></section>\n        <section class="code-box-meta markdown">\n            {{ text | raw}}\n            <span class="code-expand-icon" on-click="toggleExpand">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}">\n            </span>\n        </section>\n        <section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">\n            {{ code | raw}}\n        </section>\n    </section>\n'},w={template:'<section class="markdown"><h2 id="api"><span>API</span><a href="#api" class="anchor">#</a></h2><table>\n<thead>\n<tr>\n<th>属性</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>format</td>\n<td>内容的模板函数</td>\n<td>function(percent, successPercent)</td>\n<td><code>percent =&gt; percent + &#39;%&#39;</code></td>\n</tr>\n<tr>\n<td>gapDegree <code>(type=circle)</code></td>\n<td>圆形进度条缺口角度，可取值 0 ~ 360</td>\n<td>number</td>\n<td>0</td>\n</tr>\n<tr>\n<td>gapPosition <code>(type=circle)</code></td>\n<td>圆形进度条缺口位置</td>\n<td>Enum{ &#39;top&#39;, &#39;bottom&#39;, &#39;left&#39;, &#39;right&#39; }</td>\n<td><code>top</code></td>\n</tr>\n<tr>\n<td>percent</td>\n<td>百分比</td>\n<td>number</td>\n<td>0</td>\n</tr>\n<tr>\n<td>showInfo</td>\n<td>是否显示进度数值或状态图标</td>\n<td>boolean</td>\n<td>true</td>\n</tr>\n<tr>\n<td>status</td>\n<td>状态，可选：<code>success</code> <code>exception</code> <code>active</code></td>\n<td>string</td>\n<td>-</td>\n</tr>\n<tr>\n<td>strokeWidth <code>(type=line)</code></td>\n<td>进度条线的宽度，单位 px</td>\n<td>number</td>\n<td>8</td>\n</tr>\n<tr>\n<td>strokeWidth <code>(type=circle)</code></td>\n<td>圆形进度条线的宽度，单位是进度条画布宽度的百分比</td>\n<td>number</td>\n<td>6</td>\n</tr>\n<tr>\n<td>strokeLinecap</td>\n<td></td>\n<td>Enum{ &#39;round&#39;, &#39;square&#39; }</td>\n<td><code>round</code></td>\n</tr>\n<tr>\n<td>strokeColor</td>\n<td>进度条的色彩</td>\n<td>string</td>\n<td>-</td>\n</tr>\n<tr>\n<td>successPercent</td>\n<td>已完成的分段百分比，<code>type=&quot;line&quot;</code> 时有效</td>\n<td>number</td>\n<td>0</td>\n</tr>\n<tr>\n<td>type</td>\n<td>类型，可选 <code>line</code> <code>circle</code> <code>dashboard</code></td>\n<td>string</td>\n<td><code>line</code></td>\n</tr>\n<tr>\n<td>width <code>(type=circle)</code></td>\n<td>圆形进度条画布宽度，单位 px</td>\n<td>number</td>\n<td>132</td>\n</tr>\n</tbody></table>\n</section>'};e.default=o.a.defineComponent({template:"\n        <div>\n            <head/>\n            <line/>\n            <circle/>\n            <linemini/>\n            <circlemini/>\n            <dynamic/>\n            <circledynamic/>\n            <format/>\n            <dashboard/>\n            <segment/>\n            <linecap/>\n            <readme/>\n        </div>\n    ",components:{head:a,line:p,circle:r,linemini:d,circlemini:i,dynamic:l,circledynamic:g,format:m,dashboard:x,segment:h,linecap:u,readme:w}})},701:function(n,e,t){var s=t(4),o=t(702);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[n.i,o,""]]);var a={insert:"head",singleton:!1};s(o,a);n.exports=o.locals||{}},702:function(n,e,t){(e=t(5)(!1)).push([n.i,"\n.san-progress-circle-wrap,\n.san-progress-line-wrap {\n    margin-right: 8px;\n    margin-bottom: 5px;\n}\n",""]),n.exports=e},703:function(n,e,t){var s=t(4),o=t(704);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[n.i,o,""]]);var a={insert:"head",singleton:!1};s(o,a);n.exports=o.locals||{}},704:function(n,e,t){(e=t(5)(!1)).push([n.i,"\n.demo-dynamic .san-btn > span {\n    margin-left: 0!important;\n}\n",""]),n.exports=e},705:function(n,e,t){var s=t(4),o=t(706);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[n.i,o,""]]);var a={insert:"head",singleton:!1};s(o,a);n.exports=o.locals||{}},706:function(n,e,t){(e=t(5)(!1)).push([n.i,"\n.demo-circle-dynamic .san-btn > span {\n    margin-left: 0!important;\n}\n",""]),n.exports=e},707:function(n,e,t){var s=t(4),o=t(708);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[n.i,o,""]]);var a={insert:"head",singleton:!1};s(o,a);n.exports=o.locals||{}},708:function(n,e,t){(e=t(5)(!1)).push([n.i,"\n.demo-format div.san-progress-circle,\n.demo-format div.san-progress-line {\n    margin-right: 8px;\n    margin-bottom: 8px;\n}\n",""]),n.exports=e}}]);