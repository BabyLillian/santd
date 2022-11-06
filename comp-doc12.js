(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{516:function(e,n,a){"use strict";a.r(n);var t=a(0),o=a.n(t),s={template:'<section class="markdown"><h1 id="cascader-级联选择"><span>Cascader 级联选择</span><a href="#cascader-级联选择" class="anchor">#</a></h1><p>级联选择框。</p><h2 id="何时使用"><span>何时使用</span><a href="#何时使用" class="anchor">#</a></h2><ul><li>需要从一组相关联的数据集合进行选择，例如省市区，公司层级，事物分类等。</li><li>从一个较大的数据集合中进行选择时，用多级分类进行分隔，方便选择。</li><li>比起 Select 组件，可以在同一个浮层中完成选择，有较好的体验。</li></ul><h2 id="代码演示"><span>代码演示</span><a href="#代码演示" class="anchor">#</a></h2></section>'},d={template:'<section class="markdown"><h2 id="api"><span>API</span><a href="#api" class="anchor">#</a></h2><pre><code>&lt;s-cascader options=&#123;&#123;options}} on-change={{onChange}}&gt;&lt;/s-cascader&gt;</code></pre><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>allowClear</td><td>是否支持清除</td><td>boolean</td><td>true</td></tr><tr><td>autoFocus</td><td>自动获取焦点</td><td>boolean</td><td>false</td></tr><tr><td>changeOnSelect</td><td>当此项为 true 时，点选每级菜单选项值都会发生变化，具体见上面的演示</td><td>boolean</td><td>false</td></tr><tr><td>defaultValue</td><td>默认的选中项</td><td>string[] | Array</td><td>-</td></tr><tr><td>disabled</td><td>禁用</td><td>boolean</td><td>false</td></tr><tr><td>displayRender</td><td>选择后展示的渲染函数</td><td>(label, selectedOptions) =&gt;sanComponentInstance</td><td><code>label =&gt; label.join(&#39; / &#39;)</code></td></tr><tr><td>expandTrigger</td><td>expandTrigger 次级菜单的展开方式，可选 <code>click</code> 和 <code>hover</code></td><td>string</td><td>&#39;click&#39;</td></tr><tr><td>fieldNames</td><td>自定义 options 中 label name children 的字段</td><td>object</td><td><code>{ label: &#39;label&#39;, value: &#39;value&#39;, children: &#39;children&#39; }</code></td></tr><tr><td>getPopupContainer</td><td>菜单渲染父节点。默认渲染到dropdown上，也可以选择渲染到body上,比如<code>() =&gt; document.body</code></td><td>function</td><td>-</td></tr><tr><td>loadData</td><td>用于动态加载选项，无法与 showSearch 一起使用</td><td>(selectedOptions) =&gt; void</td><td>-</td></tr><tr><td>notFoundContent</td><td>当下拉列表为空时显示的内容</td><td>string</td><td>&#39;Not Found&#39;</td></tr><tr><td>options</td><td>可选项数据源</td><td>Array</td><td>-</td></tr><tr><td>placeholder</td><td>输入框占位文本</td><td>string</td><td>-</td></tr><tr><td>popupClassName</td><td>自定义浮层类名</td><td>string</td><td>-</td></tr><tr><td>popupStyle</td><td>自定义浮层样式</td><td>object</td><td>{}</td></tr><tr><td>popupPlacement</td><td>浮层预设位置：<code>bottomLeft</code> <code>bottomRight</code> <code>topLeft</code> <code>topRight</code></td><td>string</td><td>bottomLeft</td></tr><tr><td>popupVisible</td><td>控制浮层显隐</td><td>boolean</td><td>-</td></tr><tr><td>showSearch</td><td>在选择框中显示搜索框</td><td>boolean | object(详解如下)</td><td>false</td></tr><tr><td>size</td><td>输入框大小，可选 <code>large</code><br> <code>default</code><br> <code>small</code></td><td>string</td><td>default</td></tr><tr><td>style</td><td>自定义样式</td><td>cssProperty</td><td>-</td></tr><tr><td>suffixIcon</td><td>自定义的选择框后缀图标type</td><td>string</td><td>-</td></tr><tr><td>value</td><td>指定选中项</td><td>Array</td><td>-</td></tr><tr><td>on-change</td><td>选择完成后的回调</td><td>({value, selectedOptions}) =&gt; void</td><td>-</td></tr><tr><td>on-popupVisibleChange</td><td>显示/隐藏浮层的回调</td><td>(value) =&gt; void</td><td>-</td></tr><tr><td>on-search</td><td>输入框变化时的回调</td><td>(value) =&gt; void</td><td>-</td></tr></tbody></table><p><code>showSearch</code> 为对象时，其中的字段：</p><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>filter</td><td>接收 <code>inputValue</code> <code>path</code> 两个参数，当 <code>path</code> 符合筛选条件时，应返回 true，反之则返回 false。</td><td><code>function(inputValue, path): boolean</code></td><td></td></tr><tr><td>limit</td><td>搜索结果展示数量</td><td>number | false</td><td>50</td></tr><tr><td>matchInputWidth</td><td>搜索结果列表是否与输入框同宽</td><td>boolean</td><td></td></tr><tr><td>render</td><td>用于渲染 filter 后的选项</td><td><code>function({inputValue, path})</code></td><td></td></tr><tr><td>sort</td><td>用于排序 filter 后的选项</td><td><code>function(a, b, inputValue)</code></td><td></td></tr></tbody></table><h3 id="方法"><span>方法</span><a href="#方法" class="anchor">#</a></h3><table><thead><tr><th>名称</th><th>描述</th></tr></thead><tbody><tr><td>blur()</td><td>移除焦点</td></tr><tr><td>focus()</td><td>获取焦点</td></tr></tbody></table></section>'},l=a(8);const c=[{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou",children:[{value:"xihu",label:"West Lake"}]}]},{value:"jiangsu",label:"Jiangsu",children:[{value:"nanjing",label:"Nanjing",children:[{value:"zhonghuamen",label:"Zhong Hua Men"}]}]}];var i={initData:()=>({isExpand:!1,code:"\n<pre><code class=\"language-html\">&lt;template>\n    &lt;div>\n        &lt;s-cascader options=\"{{options}}\" on-change=\"onChange\" placeholder=\"Please select\" />\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport {Cascader} from 'santd';\n\nconst options = [{\n    value: 'zhejiang',\n    label: 'Zhejiang',\n    children: [{\n        value: 'hangzhou',\n        label: 'Hangzhou',\n        children: [{\n            value: 'xihu',\n            label: 'West Lake'\n        }]\n    }]\n}, {\n    value: 'jiangsu',\n    label: 'Jiangsu',\n    children: [{\n        value: 'nanjing',\n        label: 'Nanjing',\n        children: [{\n            value: 'zhonghuamen',\n            label: 'Zhong Hua Men',\n        }]\n    }]\n}];\n\nexport default {\n    components: {\n        's-cascader': Cascader\n    },\n    initData() {\n        return {\n            options: options\n        };\n    },\n    onChange(value) {\n      console.log(value)\n    }\n\n}\n&lt;/script></code></pre>",text:'\n<h4 id="基本形式"><span>基本形式</span><a href="#基本形式" class="anchor">#</a></h4><p>省市区级联。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-cascader":l.m},initData:()=>({options:c}),onChange(e){console.log(e)},template:'<div><s-cascader options="{{options}}" on-change="onChange" placeholder="Please select"></s-cascader></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1667753625372"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'};const p=[{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou",children:[{value:"xihu",label:"West Lake"}]}]},{value:"jiangsu",label:"Jiangsu",disabled:!0,children:[{value:"nanjing",label:"Nanjing",children:[{value:"zhonghuamen",label:"Zhong Hua Men"}]}]}];var r={initData:()=>({isExpand:!1,code:"\n<pre><code class=\"language-html\">&lt;template>\n    &lt;div>\n        &lt;s-cascader options=\"{{options}}\" on-change=\"onChange\" placeholder=\"Please select\" />\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport {Cascader} from 'santd';\n\nconst options = [{\n    value: 'zhejiang',\n    label: 'Zhejiang',\n    children: [{\n        value: 'hangzhou',\n        label: 'Hangzhou',\n        children: [{\n            value: 'xihu',\n            label: 'West Lake'\n        }]\n    }]\n}, {\n    value: 'jiangsu',\n    label: 'Jiangsu',\n    disabled: true,\n    children: [{\n        value: 'nanjing',\n        label: 'Nanjing',\n        children: [{\n            value: 'zhonghuamen',\n            label: 'Zhong Hua Men',\n        }]\n    }]\n}];\n\nexport default {\n    components: {\n        's-cascader': Cascader\n    },\n    initData() {\n        return {\n            options: options\n        };\n    },\n    onChange(value) {\n      console.log(value)\n    }\n\n}\n&lt;/script></code></pre>",text:'\n<h4 id="禁用选项"><span>禁用选项</span><a href="#禁用选项" class="anchor">#</a></h4><p>通过指定 options 里的 <code>disabled</code> 字段。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-cascader":l.m},initData:()=>({options:p}),onChange(e){console.log(e)},template:'<div><s-cascader options="{{options}}" on-change="onChange" placeholder="Please select"></s-cascader></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1667753625365"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'};const h=[{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou",children:[{value:"xihu",label:"West Lake"}]}]},{value:"jiangsu",label:"Jiangsu",children:[{value:"nanjing",label:"Nanjing",children:[{value:"zhonghuamen",label:"Zhong Hua Men"}]}]}];var g={initData:()=>({isExpand:!1,code:"\n<pre><code class=\"language-html\">&lt;template>\n    &lt;div>\n        &lt;s-cascader size=\"large\" options=\"{{options}}\" on-change=\"onChange\" placeholder=\"Please select\" />\n        &lt;br>\n        &lt;s-cascader options=\"{{options}}\" on-change=\"onChange\" placeholder=\"Please select\" />\n        &lt;br>\n        &lt;s-cascader size=\"small\" options=\"{{options}}\" on-change=\"onChange\" placeholder=\"Please select\" />\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport {Cascader} from 'santd';\n\nconst options = [{\n    value: 'zhejiang',\n    label: 'Zhejiang',\n    children: [{\n        value: 'hangzhou',\n        label: 'Hangzhou',\n        children: [{\n            value: 'xihu',\n            label: 'West Lake'\n        }]\n    }]\n}, {\n    value: 'jiangsu',\n    label: 'Jiangsu',\n    children: [{\n        value: 'nanjing',\n        label: 'Nanjing',\n        children: [{\n            value: 'zhonghuamen',\n            label: 'Zhong Hua Men',\n        }]\n    }]\n}];\n\nexport default {\n    components: {\n        's-cascader': Cascader\n    },\n    initData() {\n        return {\n            options: options\n        };\n    },\n    onChange(value) {\n      console.log(value);\n    }\n\n}\n&lt;/script></code></pre>",text:'\n<h4 id="大小"><span>大小</span><a href="#大小" class="anchor">#</a></h4><p>不同大小的级联选择器。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-cascader":l.m},initData:()=>({options:h}),onChange(e){console.log(e)},template:'<div><s-cascader size="large" options="{{options}}" on-change="onChange" placeholder="Please select"></s-cascader><br><s-cascader options="{{options}}" on-change="onChange" placeholder="Please select"></s-cascader><br><s-cascader size="small" options="{{options}}" on-change="onChange" placeholder="Please select"></s-cascader></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1667753625360"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'};const u=[{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou",children:[{value:"xihu",label:"West Lake"}]}]},{value:"jiangsu",label:"Jiangsu",children:[{value:"nanjing",label:"Nanjing",children:[{value:"zhonghuamen",label:"Zhong Hua Men"}]}]}];var m={initData:()=>({isExpand:!1,code:"\n<pre><code class=\"language-html\">&lt;template>\n    &lt;div>\n        &lt;s-cascader options=\"{{options}}\" on-change=\"onChange\" placeholder=\"Please select\" changeOnSelect />\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport {Cascader} from 'santd';\n\nconst options = [{\n    value: 'zhejiang',\n    label: 'Zhejiang',\n    children: [{\n        value: 'hangzhou',\n        label: 'Hangzhou',\n        children: [{\n            value: 'xihu',\n            label: 'West Lake'\n        }]\n    }]\n}, {\n    value: 'jiangsu',\n    label: 'Jiangsu',\n    children: [{\n        value: 'nanjing',\n        label: 'Nanjing',\n        children: [{\n            value: 'zhonghuamen',\n            label: 'Zhong Hua Men',\n        }]\n    }]\n}];\n\nexport default {\n    components: {\n        's-cascader': Cascader\n    },\n    initData() {\n        return {\n            options: options\n        };\n    },\n    onChange(value) {\n      console.log(value)\n    }\n\n}\n&lt;/script></code></pre>",text:'\n<h4 id="选择即改变"><span>选择即改变</span><a href="#选择即改变" class="anchor">#</a></h4><p>这种交互允许只选中父级选项。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-cascader":l.m},initData:()=>({options:u}),onChange(e){console.log(e)},template:'<div><s-cascader options="{{options}}" on-change="onChange" placeholder="Please select" changeOnSelect=""></s-cascader></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1667753625352"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'};const x=[{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou",children:[{value:"xihu",label:"West Lake"}]}]},{value:"jiangsu",label:"Jiangsu",children:[{value:"nanjing",label:"Nanjing",children:[{value:"zhonghuamen",label:"Zhong Hua Men"}]}]}];var v={initData:()=>({isExpand:!1,code:"\n<pre><code class=\"language-html\">&lt;template>\n    &lt;div>\n        &lt;s-cascader\n            options=\"{{options}}\"\n            on-change=\"onChange\"\n            placeholder=\"Please select\"\n            expandTrigger=\"hover\"\n            displayRender=\"{{displayRender}}\"\n        />\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport {Cascader} from 'santd';\n\nconst options = [{\n    value: 'zhejiang',\n    label: 'Zhejiang',\n    children: [{\n        value: 'hangzhou',\n        label: 'Hangzhou',\n        children: [{\n            value: 'xihu',\n            label: 'West Lake'\n        }]\n    }]\n}, {\n    value: 'jiangsu',\n    label: 'Jiangsu',\n    children: [{\n        value: 'nanjing',\n        label: 'Nanjing',\n        children: [{\n            value: 'zhonghuamen',\n            label: 'Zhong Hua Men',\n        }]\n    }]\n}];\n\nexport default {\n    components: {\n        's-cascader': Cascader\n    },\n    initData() {\n        return {\n            options: options,\n            displayRender(label) {\n                return label[label.length - 1];\n            }\n        };\n    },\n    onChange(value) {\n      console.log(value)\n    }\n\n}\n&lt;/script></code></pre>",text:'\n<h4 id="移入展开"><span>移入展开</span><a href="#移入展开" class="anchor">#</a></h4><p>通过移入展开下级菜单，点击完成选择。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-cascader":l.m},initData:()=>({options:x,displayRender:e=>e[e.length-1]}),onChange(e){console.log(e)},template:'<div><s-cascader options="{{options}}" on-change="onChange" placeholder="Please select" expandTrigger="hover" displayRender="{{displayRender}}"></s-cascader></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1667753625345"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'};const b=[{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou",children:[{value:"xihu",label:"West Lake"}]}]},{value:"jiangsu",label:"Jiangsu",children:[{value:"nanjing",label:"Nanjing",children:[{value:"zhonghuamen",label:"Zhong Hua Men"}]}]}];var w={initData:()=>({isExpand:!1,code:"\n<pre><code class=\"language-html\">&lt;template>\n  &lt;div>\n    &lt;s-cascader\n        defaultValue=\"{{defaultValue}}\"\n        options=\"{{options}}\"\n        on-change=\"onChange\"\n        placeholder=\"Please select\"\n    />\n  &lt;/div>\n&lt;/template>\n&lt;script>\nimport {Cascader} from 'santd';\n\nconst options = [{\n    value: 'zhejiang',\n    label: 'Zhejiang',\n    children: [{\n        value: 'hangzhou',\n        label: 'Hangzhou',\n        children: [{\n            value: 'xihu',\n            label: 'West Lake'\n        }]\n    }]\n}, {\n    value: 'jiangsu',\n    label: 'Jiangsu',\n    children: [{\n        value: 'nanjing',\n        label: 'Nanjing',\n        children: [{\n            value: 'zhonghuamen',\n            label: 'Zhong Hua Men',\n        }]\n    }]\n}];\n\nexport default {\n    components: {\n        's-cascader': Cascader\n    },\n    initData() {\n        return {\n            options: options,\n            defaultValue: ['zhejiang','hangzhou', 'xihu'],\n        };\n    },\n    onChange(value) {\n      console.log(value)\n    }\n}\n&lt;/script></code></pre>",text:'\n<h4 id="默认值"><span>默认值</span><a href="#默认值" class="anchor">#</a></h4><p>默认值通过数组的方式指定。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-cascader":l.m},initData:()=>({options:b,defaultValue:["zhejiang","hangzhou","xihu"]}),onChange(e){console.log(e)},template:'<div><s-cascader defaultValue="{{defaultValue}}" options="{{options}}" on-change="onChange" placeholder="Please select"></s-cascader></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1667753625339"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'};const j=[{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou",children:[{value:"xihu",label:"West Lake"}]}]},{value:"jiangsu",label:"Jiangsu",disabled:!0,children:[{value:"nanjing",label:"Nanjing",children:[{value:"zhonghuamen",label:"Zhong Hua Men"}]}]}];var z={initData:()=>({isExpand:!1,code:"\n<pre><code class=\"language-html\">&lt;template>\n    &lt;div>\n        &lt;s-cascader options=\"{{options}}\" on-change=\"onChange\" placeholder=\"Please select\" showSearch=\"{{filter}}\"/>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport {Cascader} from 'santd';\n\nconst options = [{\n    value: 'zhejiang',\n    label: 'Zhejiang',\n    children: [{\n        value: 'hangzhou',\n        label: 'Hangzhou',\n        children: [{\n            value: 'xihu',\n            label: 'West Lake'\n        }]\n    }]\n}, {\n    value: 'jiangsu',\n    label: 'Jiangsu',\n    disabled: true,\n    children: [{\n        value: 'nanjing',\n        label: 'Nanjing',\n        children: [{\n            value: 'zhonghuamen',\n            label: 'Zhong Hua Men',\n        }]\n    }]\n}];\n\nexport default {\n    components: {\n        's-cascader': Cascader\n    },\n    initData() {\n        return {\n            options: options,\n            filter(inputValue, path) {\n                return path.some(option => option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1);\n            }\n        };\n    },\n    onChange(value) {\n      console.log(value)\n    }\n\n}\n&lt;/script></code></pre>",text:'\n<h4 id="搜索"><span>搜索</span><a href="#搜索" class="anchor">#</a></h4><p>可以直接搜索选项并选择。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-cascader":l.m},initData:()=>({options:j,filter:(e,n)=>n.some(n=>n.label.toLowerCase().indexOf(e.toLowerCase())>-1)}),onChange(e){console.log(e)},template:'<div><s-cascader options="{{options}}" on-change="onChange" placeholder="Please select" showSearch="{{filter}}"></s-cascader></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1667753625318"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'};const f=[{value:"zhejiang",label:"Zhejiang",isLeaf:!1},{value:"jiangsu",label:"Jiangsu",isLeaf:!1}];var E={initData:()=>({isExpand:!1,code:"\n<pre><code class=\"language-html\">&lt;template>\n    &lt;div>\n        &lt;s-cascader options=\"{{options}}\" on-change=\"onChange\" changeOnSelect loadData=\"{{loadData}}\"/>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport {Cascader} from 'santd';\n\nconst options = [{\n    value: 'zhejiang',\n    label: 'Zhejiang',\n    isLeaf: false\n}, {\n    value: 'jiangsu',\n    label: 'Jiangsu',\n    isLeaf: false\n}];\n\nexport default {\n    components: {\n        's-cascader': Cascader\n    },\n    initData() {\n        return {\n            options: options,\n            loadData(selectedOptions) {\n                const targetOption = selectedOptions[selectedOptions.length - 1];\n                targetOption.loading = true;\n\n                // load options lazily\n                setTimeout(() => {\n                    targetOption.loading = false;\n                    targetOption.children = [{\n                        label: &#96;&#36;&#123;targetOption.label} Dynamic 1&#96;,\n                        value: 'dynamic1',\n                    }, {\n                        label: &#96;&#36;&#123;targetOption.label} Dynamic 2&#96;,\n                        value: 'dynamic2',\n                    }];\n                    this.data.set('options', [...this.data.get('options')])\n                }, 1000);\n            }\n        };\n    },\n    onChange(value) {\n        console.log(value)\n    }\n\n}\n&lt;/script></code></pre>",text:'\n<h4 id="动态加载选项"><span>动态加载选项</span><a href="#动态加载选项" class="anchor">#</a></h4><p>使用 <code>loadData</code> 实现动态加载选项。</p><blockquote>\n<p>注意：<code>loadData</code> 与 <code>showSearch</code> 无法一起使用。</p></blockquote>\n'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-cascader":l.m},initData:()=>({options:f,loadData(e){const n=e[e.length-1];n.loading=!0,setTimeout(()=>{n.loading=!1,n.children=[{label:n.label+" Dynamic 1",value:"dynamic1"},{label:n.label+" Dynamic 2",value:"dynamic2"}],this.data.set("options",[...this.data.get("options")])},1e3)}}),onChange(e){console.log(e)},template:'<div><s-cascader options="{{options}}" on-change="onChange" changeOnSelect="" loadData="{{loadData}}"></s-cascader></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1667753625323"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'};const C=[{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou"}]},{value:"jiangsu",label:"Jiangsu",children:[{value:"nanjing",label:"Nanjing"}]}];var y={initData:()=>({isExpand:!1,code:"\n<pre><code class=\"language-html\">&lt;template>\n    &lt;div>\n        &lt;span>\n            {{selectText}}\n            &lt;s-cascader options=\"{{options}}\" on-change=\"onChange\">\n                &lt;a href=\"javascript:;\">Change city&lt;/a>\n            &lt;/s-cascader>\n        &lt;/span>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport {Cascader} from 'santd';\n\nconst options = [{\n    value: 'zhejiang',\n    label: 'Zhejiang',\n    children: [{\n        value: 'hangzhou',\n        label: 'Hangzhou'\n    }]\n}, {\n    value: 'jiangsu',\n    label: 'Jiangsu',\n    children: [{\n        value: 'nanjing',\n        label: 'Nanjing'\n    }]\n}];\n\nexport default {\n    components: {\n        's-cascader': Cascader\n    },\n    initData() {\n        return {\n            selectText: 'Unselect',\n            options: options\n        };\n    },\n    onChange({value, selectedOptions}) {\n        const selectText = selectedOptions.map(o => o.label).join(', ');\n        this.data.set('selectText', selectText);\n    }\n}\n&lt;/script></code></pre>",text:'\n<h4 id="可以自定义显示"><span>可以自定义显示</span><a href="#可以自定义显示" class="anchor">#</a></h4><p>切换按钮和结果分开。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-cascader":l.m},initData:()=>({selectText:"Unselect",options:C}),onChange({value:e,selectedOptions:n}){const a=n.map(e=>e.label).join(", ");this.data.set("selectText",a)},template:'<div><span>{{selectText}}<s-cascader options="{{options}}" on-change="onChange"><a href="javascript:;">Change city</a></s-cascader></span></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1667753625313"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'};const k=[{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou",children:[{value:"xihu",label:"West Lake",code:752100}]}]},{value:"jiangsu",label:"Jiangsu",children:[{value:"nanjing",label:"Nanjing",children:[{value:"zhonghuamen",label:"Zhong Hua Men",code:453400}]}]}];var D={initData:()=>({isExpand:!1,code:"\n<pre><code class=\"language-html\">&lt;template>\n    &lt;div>\n        &lt;s-cascader\n            options=\"{{options}}\"\n            on-change=\"onChange\"\n            defaultValue=\"{{defaultValue}}\"\n        >\n            &lt;template s-for=\"item, index in label\" slot=\"displayRender\">\n                &lt;span s-if=\"index === label.length - 1\">\n                    {{item}} (&lt;a href=\"javascript:;\" on-click=\"handleAreaClick($event, item, selectedOptions[index])\">{{selectedOptions[index].code}}&lt;/a>)\n                &lt;/span>\n                &lt;span s-else>{{item}} / &lt;/span>\n            &lt;/template>\n        &lt;/s-cascader>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport {Cascader} from 'santd';\n\nconst options = [{\n    value: 'zhejiang',\n    label: 'Zhejiang',\n    children: [{\n        value: 'hangzhou',\n        label: 'Hangzhou',\n        children: [{\n            value: 'xihu',\n            label: 'West Lake',\n            code: 752100\n        }]\n    }]\n}, {\n    value: 'jiangsu',\n    label: 'Jiangsu',\n    children: [{\n        value: 'nanjing',\n        label: 'Nanjing',\n        children: [{\n            value: 'zhonghuamen',\n            label: 'Zhong Hua Men',\n            code: 453400\n        }]\n    }]\n}];\n\nexport default {\n    components: {\n        's-cascader': Cascader\n    },\n    initData() {\n        return {\n            options: options,\n            defaultValue: ['zhejiang', 'hangzhou', 'xihu']\n        };\n    },\n    onChange(value) {\n      console.log(value)\n    }\n}\n&lt;/script></code></pre>",text:'\n<h4 id="自定义已选项"><span>自定义已选项</span><a href="#自定义已选项" class="anchor">#</a></h4><p>例如给最后一项加上邮编链接。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-cascader":l.m},initData:()=>({options:k,defaultValue:["zhejiang","hangzhou","xihu"]}),onChange(e){console.log(e)},template:'<div><s-cascader options="{{options}}" on-change="onChange" defaultValue="{{defaultValue}}"><template s-for="item, index in label" slot="displayRender"><span s-if="index === label.length - 1">{{item}} (<a href="javascript:;" on-click="handleAreaClick($event, item, selectedOptions[index])">{{selectedOptions[index].code}}</a>)</span><span s-else="">{{item}} / </span></template></s-cascader></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1667753625302"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'};const Z=[{code:"zhejiang",name:"Zhejiang",items:[{code:"hangzhou",name:"Hangzhou",items:[{code:"xihu",name:"West Lake"}]}]},{code:"jiangsu",name:"Jiangsu",items:[{code:"nanjing",name:"Nanjing",items:[{code:"zhonghuamen",name:"Zhong Hua Men"}]}]}];var H={initData:()=>({isExpand:!1,code:"\n<pre><code class=\"language-html\">&lt;template>\n    &lt;div>\n        &lt;s-cascader\n            options=\"{{options}}\"\n            on-change=\"onChange\"\n            placeholder=\"Please select\"\n            fieldNames=\"{{fieldNames}}\"\n        />\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport {Cascader} from 'santd';\n\nconst options = [{\n    code: 'zhejiang',\n    name: 'Zhejiang',\n    items: [{\n        code: 'hangzhou',\n        name: 'Hangzhou',\n        items: [{\n            code: 'xihu',\n            name: 'West Lake'\n        }]\n    }]\n}, {\n    code: 'jiangsu',\n    name: 'Jiangsu',\n    items: [{\n        code: 'nanjing',\n        name: 'Nanjing',\n        items: [{\n            code: 'zhonghuamen',\n            name: 'Zhong Hua Men'\n        }]\n    }]\n}];\n\nexport default {\n    components: {\n        's-cascader': Cascader\n    },\n    initData() {\n        return {\n            options: options,\n            fieldNames: {\n                label: 'name',\n                value: 'code',\n                children: 'items'\n            }\n        };\n    },\n    onChange(value) {\n      console.log(value)\n    }\n\n}\n&lt;/script></code></pre>",text:'\n<h4 id="自定义字段名"><span>自定义字段名</span><a href="#自定义字段名" class="anchor">#</a></h4><p>自定义字段名</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-cascader":l.m},initData:()=>({options:Z,fieldNames:{label:"name",value:"code",children:"items"}}),onChange(e){console.log(e)},template:'<div><s-cascader options="{{options}}" on-change="onChange" placeholder="Please select" fieldNames="{{fieldNames}}"></s-cascader></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1667753625309"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'};a(614),n.default=o.a.defineComponent({components:{readme:d,head:s,basic:i,disabled:r,size:g,change:m,hover:v,defaultvalue:w,search:z,loaddata:E,customtrigger:y,customrender:D,fieldname:H},template:"\n        <div>\n            <head/>\n            <basic/>\n            <defaultvalue/>\n            <customtrigger/>\n            <hover/>\n            <disabled/>\n            <change/>\n            <size/>\n            <customrender/>\n            <loaddata/>\n            <fieldname/>\n            <search/>\n            <readme/>\n        </div>\n    "})},614:function(e,n,a){var t=a(4),o=a(615);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var s={insert:"head",singleton:!1};t(o,s);e.exports=o.locals||{}},615:function(e,n,a){(n=a(5)(!1)).push([e.i,".san-cascader-picker {\n  width: 300px;\n}\n",""]),e.exports=n}}]);