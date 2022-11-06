(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{551:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),o={template:'<section class="markdown"><h2 id="api"><span>API</span><a href="#api" class="anchor">#</a></h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>dateCellRender</td><td>自定义渲染日期单元格，返回内容会被追加到单元格</td><td>SanNode</td><td>无</td></tr><tr><td>dateFullCellRender</td><td>自定义渲染日期单元格，返回内容覆盖单元格</td><td>SanNode</td><td>无</td></tr><tr><td>defaultValue</td><td>默认展示的日期</td><td><a href="https://day.js.org/">dayjs</a></td><td>默认日期</td></tr><tr><td>disabledDate</td><td>不可选择的日期</td><td>(currentData: dayjs) =&gt; bool</td><td>无</td></tr><tr><td>fullscreen</td><td>是否全屏显示</td><td>boolean</td><td><code>true</code></td></tr><tr><td>mode</td><td>初始模式，<code>month/year</code></td><td>string</td><td><code>month</code></td></tr><tr><td>monthCellRender</td><td>自定义渲染月单元格，返回内容会被追加到单元格</td><td>SanNode</td><td>无</td></tr><tr><td>monthFullCellRender</td><td>自定义渲染月单元格，返回内容覆盖单元格</td><td>SanNode</td><td>无</td></tr><tr><td>validRange</td><td>设置可以显示的日期</td><td>[<a href="https://day.js.org/">dayjs</a>, <a href="https://day.js.org/">dayjs</a>]</td><td>无</td></tr><tr><td>value</td><td>展示日期</td><td><a href="https://day.js.org/">dayjs</a></td><td>当前日期</td></tr><tr><td>on-panelChange</td><td>日期面板变化回调</td><td>function(date: dayjs, mode: string)</td><td>无</td></tr><tr><td>on-select</td><td>点击选择日期回调</td><td>function(date: dayjs）</td><td>无</td></tr><tr><td>on-change</td><td>日期变化回调</td><td>function(date: dayjs）</td><td>无</td></tr><tr><td>headerRender</td><td>自定义头部内容</td><td>SanNode</td><td>无</td></tr></tbody></table></section>'},d=n(8),l={initData:()=>({isExpand:!1,code:"\n<pre><code class=\"language-html\">&lt;template>\n    &lt;div>\n        &lt;s-calendar on-panelChange=\"panelChange\" />\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport {Calendar} from 'santd';\n\nexport default {\n    components: {\n        's-calendar': Calendar\n    },\n    panelChange({value, mode}) {\n        console.log(value, mode);\n    }\n}\n&lt;/script></code></pre>",text:'\n<h4 id="基本"><span>基本</span><a href="#基本" class="anchor">#</a></h4><p>一个通用的日历面板，支持年/月切换。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-calendar":d.j},panelChange({value:e,mode:t}){console.log(e,t)},template:'<div><s-calendar on-panelChange="panelChange"></s-calendar></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1667753815126"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},r=(n(606),n(2)),c=n.n(r);var i={initData:()=>({isExpand:!1,code:"\n<pre><code class=\"language-html\">&lt;template>\n    &lt;div>\n        &lt;s-calendar>\n            &lt;ul class=\"events\" slot=\"dateCellRender\">\n                &lt;li s-for=\"item in getListData(value)\">\n                    &lt;s-badge status=\"{{item.type}}\" text=\"{{item.content}}\" />\n                &lt;/li>\n            &lt;/ul>\n            &lt;template slot=\"monthCellRender\">\n                &lt;div class=\"notes-month\" s-if=\"getMonthData(value)\">\n                    &lt;section>{{getMonthData(value)}}&lt;/section>\n                    &lt;span>Backlog number&lt;/span>\n                &lt;/div>\n            &lt;/template>\n        &lt;/s-calendar>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport dayjs from 'dayjs';\nimport {Calendar, Badge} from 'santd';\n\nfunction getListData(value) {\n    let listData;\n    switch (value.date()) {\n        case 8:\n            listData = [\n                { type: 'warning', content: 'This is warning event.' },\n                { type: 'success', content: 'This is usual event.' }\n            ];\n            break;\n        case 10:\n            listData = [\n                { type: 'warning', content: 'This is warning event.' },\n                { type: 'success', content: 'This is usual event.' },\n                { type: 'error', content: 'This is error event.' }\n            ];\n            break;\n        case 15:\n            listData = [\n                { type: 'warning', content: 'This is warning event' },\n                { type: 'success', content: 'This is very long usual event。。....' },\n                { type: 'error', content: 'This is error event 1.' },\n                { type: 'error', content: 'This is error event 2.' },\n                { type: 'error', content: 'This is error event 3.' },\n                { type: 'error', content: 'This is error event 4.' }\n            ];\n            break;\n        default:\n    }\n    return listData || [];\n}\n\nfunction getMonthData(value) {\n    if (value.month() === 8) {\n        return 1394;\n    }\n}\n\nexport default {\n    components: {\n        's-calendar': Calendar,\n        's-badge': Badge\n    },\n    getListData(value) {\n        return getListData(value);\n    },\n    getMonthData(value) {\n        return getMonthData(value);\n    }\n}\n&lt;/script>\n\n&lt;style>\n.events {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n}\n.events .san-badge-status {\n    overflow: hidden;\n    white-space: nowrap;\n    width: 100%;\n    text-overflow: ellipsis;\n   font-size: 12px;\n}\n.notes-month {\n    text-align: center;\n    font-size: 28px;\n}\n.notes-month section {\n    font-size: 28px;\n}\n&lt;/style></code></pre>",text:'\n<h4 id="通知事项日历"><span>通知事项日历</span><a href="#通知事项日历" class="anchor">#</a></h4><p>一个复杂的应用示例，用插槽 <code>dateCellRender</code> 和 <code>monthCellRender</code> 来自定义需要追加的渲染的数据。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-calendar":d.j,"s-badge":d.g},getListData:e=>function(e){let t;switch(e.date()){case 8:t=[{type:"warning",content:"This is warning event."},{type:"success",content:"This is usual event."}];break;case 10:t=[{type:"warning",content:"This is warning event."},{type:"success",content:"This is usual event."},{type:"error",content:"This is error event."}];break;case 15:t=[{type:"warning",content:"This is warning event"},{type:"success",content:"This is very long usual event。。...."},{type:"error",content:"This is error event 1."},{type:"error",content:"This is error event 2."},{type:"error",content:"This is error event 3."},{type:"error",content:"This is error event 4."}]}return t||[]}(e),getMonthData:e=>function(e){if(8===e.month())return 1394}(e),template:'<div><s-calendar><ul class="events" slot="dateCellRender"><li s-for="item in getListData(value)"><s-badge status="{{item.type}}" text="{{item.content}}"></s-badge></li></ul><template slot="monthCellRender"><div class="notes-month" s-if="getMonthData(value)"><section>{{getMonthData(value)}}</section><span>Backlog number</span></div></template></s-calendar></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1667753815117"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},p={initData:()=>({isExpand:!1,code:"\n<pre><code class=\"language-html\">&lt;template>\n    &lt;div style=\"width: 300px;border: 1px solid #ddd;border-radius: 4px\">\n        &lt;s-calendar fullscreen=\"{{false}}\" on-panelChange=\"panelChange\" />\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport * as dayjs from 'dayjs';\nimport {Calendar} from 'santd';\n\nexport default {\n    components: {\n        's-calendar': Calendar\n    },\n    initData() {\n        return {\n            validRange: [dayjs.default(), dayjs.default().add(10, 'd')]\n        }\n    },\n    getValue(value) {\n        return value.format('YYYY-MM-DD');\n    },\n    selectDate(param) {\n        console.log('on select', param.format('YYYY-MM-DD'));\n    },\n    panelChange(param) {\n        console.log('on panel change', param.value, param.mode);\n    },\n    change(param) {\n        console.log('on change', param);\n    }\n}\n&lt;/script></code></pre>",text:'\n<h4 id="卡片模式"><span>卡片模式</span><a href="#卡片模式" class="anchor">#</a></h4><p>用于嵌套在空间有限的容器中。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-calendar":d.j},initData:()=>({validRange:[c.a(),c.a().add(10,"d")]}),getValue:e=>e.format("YYYY-MM-DD"),selectDate(e){console.log("on select",e.format("YYYY-MM-DD"))},panelChange(e){console.log("on panel change",e.value,e.mode)},change(e){console.log("on change",e)},template:'<div style="width: 300px;border: 1px solid #ddd;border-radius: 4px"><s-calendar fullscreen="{{false}}" on-panelChange="panelChange"></s-calendar></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1667753815112"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},h={template:'<section class="markdown"><h1 id="calendar-日历"><span>Calendar 日历</span><a href="#calendar-日历" class="anchor">#</a></h1><p>按照日历形式展示数据的容器。</p><h2 id="何时使用"><span>何时使用</span><a href="#何时使用" class="anchor">#</a></h2><p>当数据是日期或按照日期划分时，例如日程、课表、价格日历等，农历等。目前支持年/月切换。</p><h2 id="代码演示"><span>代码演示</span><a href="#代码演示" class="anchor">#</a></h2></section>'},g={initData:()=>({isExpand:!1,code:"\n<pre><code class=\"language-html\">&lt;template>\n    &lt;div>\n        &lt;s-alert message=\"You selected date: {{displayDate}}\" />\n        &lt;s-calendar on-panelChange=\"panelChange\" on-select=\"handleSelect\" />\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport dayjs from 'dayjs';\nimport {Calendar, Alert} from 'santd';\n\nexport default {\n    components: {\n        's-calendar': Calendar,\n        's-alert': Alert\n    },\n    computed: {\n        displayDate() {\n            const selectedValue = this.data.get('selectedValue');\n            return selectedValue && selectedValue.format('YYYY-MM-DD');\n        }\n    },\n    initData() {\n        return {\n            value: dayjs('2017-01-25'),\n            selectedValue: dayjs('2017-01-25')\n        }\n    },\n    handleSelect(value) {\n        this.data.set('value', value);\n        this.data.set('selectedValue', value);\n    },\n    panelChange({value}) {\n        this.data.set('value', value);\n    }\n}\n&lt;/script></code></pre>",text:'\n<h4 id="选择功能"><span>选择功能</span><a href="#选择功能" class="anchor">#</a></h4><p>一个通用的日历面板，支持年/月切换。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-calendar":d.j,"s-alert":d.b},computed:{displayDate(){const e=this.data.get("selectedValue");return e&&e.format("YYYY-MM-DD")}},initData:()=>({value:c()("2017-01-25"),selectedValue:c()("2017-01-25")}),handleSelect(e){this.data.set("value",e),this.data.set("selectedValue",e)},panelChange({value:e}){this.data.set("value",e)},template:'<div><s-alert message="You selected date: {{displayDate}}"></s-alert><s-calendar on-panelChange="panelChange" on-select="handleSelect"></s-calendar></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1667753815104"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},u=n(23),m=n.n(u);c.a.extend(m.a);var v={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div style="width: 300px; border: 1px solid #d9d9d9; border-radius: 4px;">\n        &lt;s-calendar on-panelChange="panelChange" headerRender="{{headerRender}}" fullscreen="{{false}}" s-ref="calendar">\n            &lt;div style="padding: 10px;" slot="headerRender">\n                &lt;div style="margin-bottom: 10px;">Custom header&lt;/div>\n                &lt;s-row type="flex" justify="space-between">\n                    &lt;s-col>\n                        &lt;s-group size="small" value="{{type}}" on-change="handleTypeChange" name="customgroup">\n                            &lt;s-radiobutton value="month">Month&lt;/s-radiobutton>\n                            &lt;s-radiobutton value="year">Year&lt;/s-radiobutton>\n                        &lt;/s-group>\n                    &lt;/s-col>\n                    &lt;s-col>\n                        &lt;s-select\n                            size="small"\n                            class="my-year-select"\n                            value="{{getYear(value)}}"\n                            on-change="handleYearChange"\n                        >\n                        &lt;s-option s-for="year in getYears(value)" value="{{year}}">{{year}}&lt;/s-option>\n                        &lt;/s-select>\n                    &lt;/s-col>\n                    &lt;s-col>\n                        &lt;s-select\n                            size="small"\n                            value="{{getMonth(value)}}"\n                            on-change="handleMonthChange"\n                        >\n                            &lt;s-option s-for="month in getMonths(value)" value="{{month.value}}">{{month.label}}&lt;/s-option>\n                        &lt;/s-select>\n                    &lt;/s-col>\n                &lt;/s-row>\n            &lt;/div>\n        &lt;/s-calendar>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport dayjs from \'dayjs\';\nimport {Calendar, Grid, Radio, Select} from \'santd\';\nimport localeData from \'dayjs/plugin/localeData\';\n\ndayjs.extend(localeData);\n\nexport default {\n    components: {\n        \'s-calendar\': Calendar,\n        \'s-row\': Grid.Row,\n        \'s-col\': Grid.Col,\n        \'s-group\': Radio.Group,\n        \'s-radiobutton\': Radio.Button,\n        \'s-select\': Select,\n        \'s-option\': Select.Option\n    },\n    computed: {\n        displayDate() {\n            const selectedValue = this.data.get(\'selectedValue\');\n            return selectedValue && selectedValue.format(\'YYYY-MM-DD\');\n        },\n    },\n    getYear(value) {\n        return value && String(value.year());\n    },\n    getYears(value) {\n        const options = [];\n        const year = value.year();\n        for (let i = year - 10; i &lt; year + 10; i++) {\n            options.push(String(i));\n        }\n        return options;\n    },\n    getMonth(value) {\n        return value && String(value.month());\n    },\n    getMonths(value) {\n        const options = [];\n        const localeData = value.localeData();\n\n        for (let i = 0; i &lt; 12; i++) {\n            options.push({label: localeData.monthsShort(value.month(i)), value: String(i)});\n        }\n        return options;\n    },\n    handleTypeChange(e) {\n        this.ref(\'calendar\').handleHeaderTypeChange(e);\n    },\n    handleYearChange(value) {\n        this.ref(\'calendar\').handleYearChange(value);\n    },\n    handleMonthChange(value) {\n        this.ref(\'calendar\').handleMonthChange(value);\n    },\n    handleSelect(value) {\n        this.data.set(\'value\', value);\n        this.data.set(\'selectedValue\', value);\n    },\n    panelChange(value) {\n        console.log(value);\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="自定义头部"><span>自定义头部</span><a href="#自定义头部" class="anchor">#</a></h4><p>自定义日历头部内容。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-calendar":d.j,"s-row":d.y.Row,"s-col":d.y.Col,"s-group":d.P.Group,"s-radiobutton":d.P.Button,"s-select":d.T,"s-option":d.T.Option},computed:{displayDate(){const e=this.data.get("selectedValue");return e&&e.format("YYYY-MM-DD")}},getYear:e=>e&&String(e.year()),getYears(e){const t=[],n=e.year();for(let e=n-10;e<n+10;e++)t.push(String(e));return t},getMonth:e=>e&&String(e.month()),getMonths(e){const t=[],n=e.localeData();for(let a=0;a<12;a++)t.push({label:n.monthsShort(e.month(a)),value:String(a)});return t},handleTypeChange(e){this.ref("calendar").handleHeaderTypeChange(e)},handleYearChange(e){this.ref("calendar").handleYearChange(e)},handleMonthChange(e){this.ref("calendar").handleMonthChange(e)},handleSelect(e){this.data.set("value",e),this.data.set("selectedValue",e)},panelChange(e){console.log(e)},template:'<div style="width: 300px; border: 1px solid #d9d9d9; border-radius: 4px;"><s-calendar on-panelChange="panelChange" headerRender="{{headerRender}}" fullscreen="{{false}}" s-ref="calendar"><div style="padding: 10px;" slot="headerRender"><div style="margin-bottom: 10px;">Custom header</div><s-row type="flex" justify="space-between"><s-col><s-group size="small" value="{{type}}" on-change="handleTypeChange" name="customgroup"><s-radiobutton value="month">Month</s-radiobutton><s-radiobutton value="year">Year</s-radiobutton></s-group></s-col><s-col><s-select size="small" class="my-year-select" value="{{getYear(value)}}" on-change="handleYearChange"><s-option s-for="year in getYears(value)" value="{{year}}">{{year}}</s-option></s-select></s-col><s-col><s-select size="small" value="{{getMonth(value)}}" on-change="handleMonthChange"><s-option s-for="month in getMonths(value)" value="{{month.value}}">{{month.label}}</s-option></s-select></s-col></s-row></div></s-calendar></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1667753815026"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'};t.default=s.a.defineComponent({components:{readme:o,desc:h,basic:l,customrender:i,small:p,select:g,customheader:v},template:"\n        <div>\n            <desc/>\n            <basic/>\n            <customrender/>\n            <small/>\n            <select/>\n            <customheader/>\n            <readme/>\n        </div>\n    "})},606:function(e,t,n){var a=n(4),s=n(607);"string"==typeof(s=s.__esModule?s.default:s)&&(s=[[e.i,s,""]]);var o={insert:"head",singleton:!1};a(s,o);e.exports=s.locals||{}},607:function(e,t,n){(t=n(5)(!1)).push([e.i,"\n.events {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n}\n.events .san-badge-status {\n    overflow: hidden;\n    white-space: nowrap;\n    width: 100%;\n    text-overflow: ellipsis;\n   font-size: 12px;\n}\n.notes-month {\n    text-align: center;\n    font-size: 28px;\n}\n.notes-month section {\n    font-size: 28px;\n}\n",""]),e.exports=t}}]);