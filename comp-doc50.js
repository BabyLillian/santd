(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{560:function(t,s,n){"use strict";n.r(s);var e=n(0),a=n.n(e),o={template:'<section class="markdown"><h2 id="api"><span>API</span><a href="#api" class="anchor">#</a></h2><h4 id="statistic"><span>Statistic</span><a href="#statistic" class="anchor">#</a></h4><table><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>decimalSeparator</td><td>设置小数点</td><td>string</td><td>.</td></tr><tr><td>formatter</td><td>自定义数值展示</td><td>(value) =&gt; String</td><td>-</td></tr><tr><td>groupSeparator</td><td>设置千分位标识符</td><td>string</td><td>,</td></tr><tr><td>precision</td><td>数值精度</td><td>number</td><td>-</td></tr><tr><td>prefix</td><td>设置数值的前缀</td><td>string | Slot</td><td>-</td></tr><tr><td>suffix</td><td>设置数值的后缀</td><td>string | Slot</td><td>-</td></tr><tr><td>title</td><td>数值的标题</td><td>string</td><td>-</td></tr><tr><td>value</td><td>数值内容</td><td>string | number</td><td>-</td></tr><tr><td>valueStyle</td><td>设置数值的样式</td><td>style</td><td>-</td></tr></tbody></table><h4 id="statisticcountdown"><span>Statistic.Countdown</span><a href="#statisticcountdown" class="anchor">#</a></h4><table><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>format</td><td>格式化倒计时展示，参考 <a href="https://day.js.org/">dayjs</a></td><td>string</td><td>&#39;HH:mm:ss&#39;</td></tr><tr><td>onFinish</td><td>倒计时完成时触发</td><td>() =&gt; void</td><td>-</td></tr><tr><td>prefix</td><td>设置数值的前缀</td><td>string | Slot</td><td>-</td></tr><tr><td>suffix</td><td>设置数值的后缀</td><td>string | Slot</td><td>-</td></tr><tr><td>title</td><td>数值的标题</td><td>string</td><td>-</td></tr><tr><td>value</td><td>数值内容</td><td>number | dayjs</td><td>-</td></tr><tr><td>valueStyle</td><td>设置数值的样式</td><td>style</td><td>-</td></tr></tbody></table></section>'},i=n(8),d={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n  &lt;div>\n    &lt;s-row gutter="{{16}}">\n        &lt;s-col span="{{12}}">\n            &lt;s-statistic\n                title="Active Users" value="{{112893}}"/>\n        &lt;/s-col>\n        &lt;s-col span="{{12}}">\n            &lt;s-statistic\n                title="Account Balance (CNY)" value="{{112893}}" precision="{{2}}"/>\n        &lt;/s-col>\n    &lt;/s-row>\n  &lt;/div>\n&lt;/template>\n&lt;script>\nimport {Statistic, Col, Row} from \'santd\';\n\nexport default {\n    components: {\n        \'s-statistic\': Statistic,\n        \'s-col\': Col,\n        \'s-row\': Row\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="基本"><span>基本</span><a href="#基本" class="anchor">#</a></h4><p>简单的展示。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-statistic":i.X,"s-col":i.o,"s-row":i.R},template:'<div><s-row gutter="{{16}}"><s-col span="{{12}}"><s-statistic title="Active Users" value="{{112893}}"></s-statistic></s-col><s-col span="{{12}}"><s-statistic title="Account Balance (CNY)" value="{{112893}}" precision="{{2}}"></s-statistic></s-col></s-row></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1619617944317"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},c={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n  &lt;div>\n    &lt;s-row gutter="{{16}}">\n        &lt;s-col span="{{12}}">\n            &lt;s-card>\n                &lt;s-statistic\n                    title="Active"\n                    value="{{11.28}}"\n                    precision="{{2}}"\n                    valueStyle="{{valueStyle}}">\n                    &lt;s-icon type="arrow-up" slot="prefix"/>\n                    &lt;template slot="suffix">%&lt;/template>\n                &lt;/s-statistic>\n            &lt;/s-card>\n        &lt;/s-col>\n        &lt;s-col span="{{12}}">\n            &lt;s-card>\n                &lt;s-statistic\n                    title="Idle"\n                    value="{{9.3}}"\n                    precision="{{2}}"\n                    valueStyle="{{valueStyle2}}">\n                    &lt;s-icon type="arrow-down" slot="prefix"/>\n                    &lt;template slot="suffix">%&lt;/template>\n                &lt;/s-statistic>\n            &lt;/s-card>\n        &lt;/s-col>\n    &lt;/s-row>\n  &lt;/div>\n&lt;/template>\n&lt;script>\nimport {Statistic, Col, Row, Icon, Card} from \'santd\';\n\nexport default {\n    components: {\n        \'s-statistic\': Statistic,\n        \'s-icon\': Icon,\n        \'s-col\': Col,\n        \'s-row\': Row,\n        \'s-card\': Card\n    },\n    initData() {\n        return {\n            valueStyle: {\n                color: \'#3f8600\'\n            },\n            valueStyle2: {\n                color: \'#cf1322\'\n            }\n        };\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="在卡片中使用"><span>在卡片中使用</span><a href="#在卡片中使用" class="anchor">#</a></h4><p>在卡片中展示统计数值。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-statistic":i.X,"s-icon":i.z,"s-col":i.o,"s-row":i.R,"s-card":i.k},initData:()=>({valueStyle:{color:"#3f8600"},valueStyle2:{color:"#cf1322"}}),template:'<div><s-row gutter="{{16}}"><s-col span="{{12}}"><s-card><s-statistic title="Active" value="{{11.28}}" precision="{{2}}" valueStyle="{{valueStyle}}"><s-icon type="arrow-up" slot="prefix"></s-icon><template slot="suffix">%</template></s-statistic></s-card></s-col><s-col span="{{12}}"><s-card><s-statistic title="Idle" value="{{9.3}}" precision="{{2}}" valueStyle="{{valueStyle2}}"><s-icon type="arrow-down" slot="prefix"></s-icon><template slot="suffix">%</template></s-statistic></s-card></s-col></s-row></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1619617944328"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},l={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n  &lt;div>\n    &lt;s-row gutter="{{16}}">\n        &lt;s-col span="{{12}}">\n            &lt;s-statistic\n                title="Feedback"\n                value="{{1128}}">\n                &lt;s-icon type="like" slot="prefix"/>\n            &lt;/s-statistic>\n        &lt;/s-col>\n        &lt;s-col span="{{12}}">\n            &lt;s-statistic\n                title="Unmerged"\n                value="{{93}}">\n                &lt;template slot="suffix">/ 100&lt;/template>\n            &lt;/s-statistic>\n        &lt;/s-col>\n    &lt;/s-row>\n  &lt;/div>\n&lt;/template>\n&lt;script>\nimport {Statistic, Col, Row, Icon} from \'santd\';\n\nexport default {\n    components: {\n        \'s-statistic\': Statistic,\n        \'s-icon\': Icon,\n        \'s-col\': Col,\n        \'s-row\': Row\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="单位"><span>单位</span><a href="#单位" class="anchor">#</a></h4><p>通过前缀和后缀添加单位。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-statistic":i.X,"s-icon":i.z,"s-col":i.o,"s-row":i.R},template:'<div><s-row gutter="{{16}}"><s-col span="{{12}}"><s-statistic title="Feedback" value="{{1128}}"><s-icon type="like" slot="prefix"></s-icon></s-statistic></s-col><s-col span="{{12}}"><s-statistic title="Unmerged" value="{{93}}"><template slot="suffix">/ 100</template></s-statistic></s-col></s-row></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1619617944309"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},p={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n  &lt;div>\n    &lt;s-row gutter="{{16}}">\n        &lt;s-col span="{{12}}">\n            &lt;s-countdown\n                title="Countdown" value="{{deadline}}" on-finish="handleFinish"/>\n        &lt;/s-col>\n        &lt;s-col span="{{12}}">\n            &lt;s-countdown\n                title="Million Seconds" value="{{deadline}}" format="HH:mm:ss:SSS"/>\n        &lt;/s-col>\n        &lt;s-col span="{{24}}" style="margin-top: 32px">\n            &lt;s-countdown\n                title="Day Level" value="{{deadline}}" format="D 天 H 时 m 分 s 秒"/>\n        &lt;/s-col>\n    &lt;/s-row>\n  &lt;/div>\n&lt;/template>\n&lt;script>\nimport {Statistic, Col, Row} from \'santd\';\n\nexport default {\n    components: {\n        \'s-statistic\': Statistic,\n        \'s-countdown\': Statistic.Countdown,\n        \'s-col\': Col,\n        \'s-row\': Row\n    },\n    initData() {\n        return {\n            deadline: Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30\n        };\n    },\n    handleFinish() {\n        console.log(\'on-finish\');\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="倒计时"><span>倒计时</span><a href="#倒计时" class="anchor">#</a></h4><p>倒计时组件。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-statistic":i.X,"s-countdown":i.X.Countdown,"s-col":i.o,"s-row":i.R},initData:()=>({deadline:Date.now()+1728e5+3e4}),handleFinish(){console.log("on-finish")},template:'<div><s-row gutter="{{16}}"><s-col span="{{12}}"><s-countdown title="Countdown" value="{{deadline}}" on-finish="handleFinish"></s-countdown></s-col><s-col span="{{12}}"><s-countdown title="Million Seconds" value="{{deadline}}" format="HH:mm:ss:SSS"></s-countdown></s-col><s-col span="{{24}}" style="margin-top: 32px"><s-countdown title="Day Level" value="{{deadline}}" format="D 天 H 时 m 分 s 秒"></s-countdown></s-col></s-row></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1619617944300"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},r={template:'<section class="markdown"><h1 id="statistic-统计数值"><span>Statistic 统计数值</span><a href="#statistic-统计数值" class="anchor">#</a></h1><p>展示统计数值。</p><h2 id="何时使用"><span>何时使用</span><a href="#何时使用" class="anchor">#</a></h2><ul><li>当需要突出某个或某组数字时。</li><li>当需要展示带描述的统计类数据时使用。</li></ul><h2 id="代码演示"><span>代码演示</span><a href="#代码演示" class="anchor">#</a></h2></section>'};s.default=a.a.defineComponent({components:{readme:o,basic:d,unit:l,card:c,countdown:p,head:r},template:"\n        <div>\n            <head/>\n            <basic/>\n            <card/>\n            <unit/>\n            <countdown/>\n            <readme/>\n        </div>\n    "})}}]);