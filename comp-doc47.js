(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{555:function(t,e,a){"use strict";a.r(e);var n=a(0),s=a.n(n),o={template:'<section class="markdown"><h1 id="skeleton-骨架屏"><span>Skeleton 骨架屏</span><a href="#skeleton-骨架屏" class="anchor">#</a></h1><p>在需要等待加载内容的位置提供一个占位图形组合。</p><h2 id="何时使用"><span>何时使用</span><a href="#何时使用" class="anchor">#</a></h2><ul><li>网络较慢，需要长时间等待加载处理的情况下。</li><li>图文信息内容较多的列表/卡片中。</li><li>只适合用在第一次加载数据的场景。</li><li>可以被 Spin 完全代替，但是在可用的场景下可以比 Spin 提供更好的视觉效果和用户体验。</li></ul><h2 id="代码演示"><span>代码演示</span><a href="#代码演示" class="anchor">#</a></h2></section>'},i=a(8),l={initData:()=>({isExpand:!1,code:"\n<pre><code class=\"language-html\">&lt;template>\n    &lt;div>\n        &lt;s-skeleton />\n    &lt;/div>\n&lt;/template>\n\n&lt;script>\nimport {Skeleton} from 'santd';\n\nexport default {\n    components: {\n        's-skeleton': Skeleton\n    }\n}\n&lt;/script></code></pre>",text:'\n<h4 id="基本"><span>基本</span><a href="#基本" class="anchor">#</a></h4><p>最简单的占位效果。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-skeleton":i.U},template:"<div><s-skeleton></s-skeleton></div>"}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1667753813121"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},d={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-skeleton avatar="{{true}}" paragraph="{{paragraph}}"/>\n    &lt;/div>\n&lt;/template>\n\n&lt;script>\nimport {Skeleton} from \'santd\';\n\nexport default {\n    components: {\n        \'s-skeleton\': Skeleton\n    },\n    initData() {\n        return {\n            paragraph: {\n                rows: 4\n            }\n        };\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="复杂的组合"><span>复杂的组合</span><a href="#复杂的组合" class="anchor">#</a></h4><p>更复杂的组合。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-skeleton":i.U},initData:()=>({paragraph:{rows:4}}),template:'<div><s-skeleton avatar="{{true}}" paragraph="{{paragraph}}"></s-skeleton></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1667753813115"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},p={initData:()=>({isExpand:!1,code:"\n<pre><code class=\"language-html\">&lt;template>\n    &lt;div>\n        &lt;s-skeleton active=\"{{true}}\"/>\n    &lt;/div>\n&lt;/template>\n\n&lt;script>\nimport {Skeleton} from 'santd';\n\nexport default {\n    components: {\n        's-skeleton': Skeleton\n    }\n}\n&lt;/script></code></pre>",text:'\n<h4 id="动画效果"><span>动画效果</span><a href="#动画效果" class="anchor">#</a></h4><p>显示动画效果。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-skeleton":i.U},template:'<div><s-skeleton active="{{true}}"></s-skeleton></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1667753813098"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},c=(a(724),{initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div class="demo-children">\n        &lt;div class="article">\n            &lt;s-skeleton loading="{=loading=}">\n                &lt;div>\n                    &lt;h4>Ant Design, a design language&lt;/h4>\n                    &lt;p>We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.&lt;/p>\n                &lt;/div>\n            &lt;/s-skeleton>\n            &lt;s-button on-click="showSkeleton" disabled="{{loading}}">\n                Show Skeleton\n            &lt;/s-button>\n        &lt;/div>\n    &lt;/div>\n&lt;/template>\n\n&lt;script>\nimport {Skeleton, Button} from \'santd\';\n\nexport default {\n    components: {\n        \'s-button\': Button,\n        \'s-skeleton\': Skeleton\n    },\n    initData() {\n        return {\n            loading: false\n        };\n    },\n    showSkeleton() {\n        this.data.set(\'loading\', true);\n        setTimeout(() => {\n            this.data.set(\'loading\', false);\n        }, 3000);\n    }\n}\n&lt;/script>\n\n&lt;style>\n.demo-children .article h4 {\n    margin-bottom: 16px;\n}\n.demo-children .article button {\n    margin-top: 16px;\n}\n&lt;/style></code></pre>',text:'\n<h4 id="包含子组件"><span>包含子组件</span><a href="#包含子组件" class="anchor">#</a></h4><p>加载占位图包含子组件。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-button":i.i,"s-skeleton":i.U},initData:()=>({loading:!1}),showSkeleton(){this.data.set("loading",!0),setTimeout(()=>{this.data.set("loading",!1)},3e3)},template:'<div class="demo-children"><div class="article"><s-skeleton loading="{=loading=}"><div><h4>Ant Design, a design language</h4><p>We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.</p></div></s-skeleton><s-button on-click="showSkeleton" disabled="{{loading}}">Show Skeleton</s-button></div></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1667753813103"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'});const r=[];for(let t=0;t<3;t++)r.push({href:"javascript:;",title:"ant design part "+t,avatar:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",description:"Ant Design, a design language for background applications, is refined by Ant UED Team.",content:"We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently."});var h={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div class="demo-list">\n        &lt;s-switcher checked="{{!loading}}" on-change="onChange"/>\n        &lt;s-list itemLayout="vertical" size="large" dataSource="{{listData}}">\n            &lt;s-list-item slot="renderItem" key="{{item.title}}">\n                &lt;s-skeleton loading="{{loading}}" active="{{true}}" avatar="{{true}}"/>\n                &lt;ul slot="actions" class="{{prefixCls}}-item-action" s-if="!loading">\n                    &lt;li>&lt;s-icon type="star-o" style="margin-right: 8px;" />156&lt;/li>\n                    &lt;li>&lt;s-icon type="like-o" style="margin-right: 8px;" />156&lt;/li>\n                    &lt;li>&lt;s-icon type="message" style="margin-right: 8px;" />2&lt;/li>\n                &lt;/ul>\n                &lt;s-list-item-meta s-if="!loading" description="{{item.description}}">\n                    &lt;s-avatar slot="avatar" src="{{item.avatar}}"/>\n                    &lt;a slot="title" href="{{item.href}}">{{item.title}}&lt;/a>\n                &lt;/s-list-item-meta>\n                {{!loading ? item.content : \'\'}}\n                &lt;img s-if="!loading" slot="extra" width="272" alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"/>\n            &lt;/s-list-item>\n        &lt;/s-list>\n    &lt;/div>\n&lt;/template>\n\n&lt;script>\nimport san from \'san\';\nimport {Skeleton, Avatar, Icon, List, Switch} from \'santd\';\n\nconst listData = [];\nfor (let i = 0; i &lt; 3; i++) {\n    listData.push({\n        href: \'javascript:;\',\n        title: &#96;ant design part &#36;&#123;i}&#96;,\n        avatar: \'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png\',\n        description: \'Ant Design, a design language for background applications, is refined by Ant UED Team.\',\n        content: \'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.\'\n    });\n}\n\nexport default {\n    components: {\n        \'s-icon\': Icon,\n        \'s-avatar\': Avatar,\n        \'s-list\': List,\n        \'s-list-item\': List.Item,\n        \'s-list-item-meta\': List.Item.Meta,\n        \'s-skeleton\': Skeleton,\n        \'s-switcher\': Switch\n    },\n    initData() {\n        return {\n            loading: true,\n            listData\n        };\n    },\n    onChange(checked) {\n        this.data.set(\'loading\', !checked);\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="列表"><span>列表</span><a href="#列表" class="anchor">#</a></h4><p>在列表组件中使用加载占位符。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-icon":i.z,"s-avatar":i.e,"s-list":i.E,"s-list-item":i.E.Item,"s-list-item-meta":i.E.Item.Meta,"s-skeleton":i.U,"s-switcher":i.ab},initData:()=>({loading:!0,listData:r}),onChange(t){this.data.set("loading",!t)},template:'<div class="demo-list"><s-switcher checked="{{!loading}}" on-change="onChange"></s-switcher><s-list itemLayout="vertical" size="large" dataSource="{{listData}}"><s-list-item slot="renderItem" key="{{item.title}}"><s-skeleton loading="{{loading}}" active="{{true}}" avatar="{{true}}"></s-skeleton><ul slot="actions" class="{{prefixCls}}-item-action" s-if="!loading"><li><s-icon type="star-o" style="margin-right: 8px;"></s-icon>156</li><li><s-icon type="like-o" style="margin-right: 8px;"></s-icon>156</li><li><s-icon type="message" style="margin-right: 8px;"></s-icon>2</li></ul><s-list-item-meta s-if="!loading" description="{{item.description}}"><s-avatar slot="avatar" src="{{item.avatar}}"></s-avatar><a slot="title" href="{{item.href}}">{{item.title}}</a></s-list-item-meta>{{!loading ? item.content : \'\'}}<img s-if="!loading" slot="extra" width="272" alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"></s-list-item></s-list></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1667753813090"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},m={template:'<section class="markdown"><h2 id="api"><span>API</span><a href="#api" class="anchor">#</a></h2><h3 id="skeleton"><span>Skeleton</span><a href="#skeleton" class="anchor">#</a></h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>active</td><td>是否展示动画效果</td><td>boolean</td><td>false</td></tr><tr><td>avatar</td><td>是否显示头像占位图</td><td>boolean | <a href="#skeletonavatarprops">SkeletonAvatarProps</a></td><td>false</td></tr><tr><td>loading</td><td>为 <code>true</code> 时，显示占位图。反之则直接展示子组件</td><td>boolean</td><td>-</td></tr><tr><td>paragraph</td><td>是否显示段落占位图</td><td>boolean | <a href="#skeletonparagraphprops">SkeletonParagraphProps</a></td><td>true</td></tr><tr><td>title</td><td>是否显示标题占位图</td><td>boolean | <a href="#skeletontitleprops">SkeletonTitleProps</a></td><td>true</td></tr></tbody></table><h3 id="skeletonavatarprops"><span>SkeletonAvatarProps</span><a href="#skeletonavatarprops" class="anchor">#</a></h3><table><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>size</td><td>设置头像占位图的大小</td><td>Enum{ &#39;large&#39;, &#39;small&#39;, &#39;default&#39; }</td><td>-</td></tr><tr><td>shape</td><td>指定头像的形状</td><td>Enum{ &#39;circle&#39;, &#39;square&#39; }</td><td>-</td></tr></tbody></table><h3 id="skeletontitleprops"><span>SkeletonTitleProps</span><a href="#skeletontitleprops" class="anchor">#</a></h3><table><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>width</td><td>设置标题占位图的宽度</td><td>number | string</td><td>-</td></tr></tbody></table><h3 id="skeletonparagraphprops"><span>SkeletonParagraphProps</span><a href="#skeletonparagraphprops" class="anchor">#</a></h3><table><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>rows</td><td>设置段落占位图的行数</td><td>number</td><td>-</td></tr><tr><td>width</td><td>设置段落占位图的宽度，若为数组时则为对应的每行宽度，反之则是最后一行的宽度</td><td>number | string | Array&lt;number | string&gt;</td><td>-</td></tr></tbody></table></section>'};e.default=s.a.defineComponent({template:"\n        <div>\n            <head/>\n            <basic/>\n            <complex/>\n            <active/>\n            <children/>\n            <list/>\n            <readme/>\n        </div>\n    ",components:{head:o,basic:l,complex:d,active:p,children:c,list:h,readme:m}})},724:function(t,e,a){var n=a(4),s=a(725);"string"==typeof(s=s.__esModule?s.default:s)&&(s=[[t.i,s,""]]);var o={insert:"head",singleton:!1};n(s,o);t.exports=s.locals||{}},725:function(t,e,a){(e=a(5)(!1)).push([t.i,"\n.demo-children .article h4 {\n    margin-bottom: 16px;\n}\n.demo-children .article button {\n    margin-top: 16px;\n}\n",""]),t.exports=e}}]);