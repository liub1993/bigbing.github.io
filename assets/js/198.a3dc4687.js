(window.webpackJsonp=window.webpackJsonp||[]).push([[198],{265:function(t,s,n){"use strict";n.r(s);var a=n(0),e=Object(a.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[t._m(0),t._v(" "),n("p",[t._v("贪婪是一种算法的范畴，通过每一步都选择最佳最直接的方案，一步一步解决问题的算法。贪婪算法主要是用来优化问题，如果问题具有如下特点，就可以使用贪婪算法：在每一部，我们都可以做出看似最佳的选择，那么我们就可以找到这个问题的最佳解决方法了。")]),t._v(" "),n("p",[t._v("如果贪婪算法可以解决一个问题，那么它通常就是这个问题的最佳算法了，因为贪婪算法一般会比其他的方法如动态规划要高效的多。")]),t._v(" "),n("p",[t._v("贪婪算法有以下几种标准的算法：")]),t._v(" "),n("ol",[n("li",[n("router-link",{attrs:{to:"/datastructure/content.html#最小生成树"}},[t._v("可如斯卡尔算法")]),t._v("： 在该算法中，我们通过一条条的选择边来创建最小生成树（MST）。其中贪婪的选择是挑选最小的权重的边，并且不会和有的MST生成环。")],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/datastructure/content.html#最小生成树"}},[t._v("普力马最小生成树")]),t._v("：在该算法中，我们也是通过一条条选边来创建MST。我们维护两个集合，一个是MST的顶点，一个是MST外的顶点。其中贪婪的选择是选择其中最小权值的边来连接两个集合。")],1),t._v(" "),n("li",[t._v("Dijkstra最短路径(Dijkstra’s Shortest Path)：该算法和Prim算法很类似。我们维护两个集合，一个是已经包含在树里面的顶点集合，一个是没有包含在里面的顶点集合。贪婪算法选择连接两个集合的边，并且是从包含的顶点集合到没有包含的顶点集合的权值最小的边。")]),t._v(" "),n("li",[n("router-link",{attrs:{to:"/datastructure/content.html#哈夫曼树-huffman"}},[t._v("哈弗曼编码")]),t._v("：该算法是一个无损的压缩技术。它给不同的字符分配变长的编码。")],1)]),t._v(" "),t._m(1),t._v(" "),n("p",[t._v("给定n个活动和它们的开始结束时间。假设一个人在一个时间内只能参加一个活动，一个人如何才可以参加的最大数目的活动呢。")]),t._v(" "),n("p",[t._v("贪婪的算法总是选择下一个活动的结束时间是最小的，开始时间是大于且最近接当前结束时间的。一个简化的算法如下：")]),t._v(" "),t._m(2),t._v(" "),t._m(3)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"贪婪算法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#贪婪算法","aria-hidden":"true"}},[this._v("#")]),this._v(" 贪婪算法")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"活动选择问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#活动选择问题","aria-hidden":"true"}},[this._v("#")]),this._v(" 活动选择问题")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",[s("li",[this._v("按活动的结束时间顺序排序")]),this._v(" "),s("li",[this._v("从排序的数组中选择第一个活动")]),this._v(" "),s("li",[this._v("不停的从剩下的活动中选择\n"),s("ol",[s("li",[this._v("如果开始时间大于或等于上一个活动的结束时间，选择该活动")])])])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-c line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-c"}},[n("code",[n("span",{attrs:{class:"token comment"}},[t._v("// C++ program for activity selection problem. ")]),t._v("\n"),n("span",{attrs:{class:"token comment"}},[t._v("// The following implementation assumes that the activities ")]),t._v("\n"),n("span",{attrs:{class:"token comment"}},[t._v("// are already sorted according to their finish time ")]),t._v("\n"),n("span",{attrs:{class:"token macro property"}},[t._v("#"),n("span",{attrs:{class:"token directive keyword"}},[t._v("include")]),n("span",{attrs:{class:"token string"}},[t._v("<stdio.h>")]),t._v(" ")]),t._v("\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("// Prints a maximum set of activities that can be done by a single ")]),t._v("\n"),n("span",{attrs:{class:"token comment"}},[t._v("// person, one at a time. ")]),t._v("\n"),n("span",{attrs:{class:"token comment"}},[t._v("// n --\x3e Total number of activities ")]),t._v("\n"),n("span",{attrs:{class:"token comment"}},[t._v("// s[] --\x3e An array that contains start time of all activities ")]),t._v("\n"),n("span",{attrs:{class:"token comment"}},[t._v("// f[] --\x3e An array that contains finish time of all activities ")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("printMaxActivities")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" s"),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" f"),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" n"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n"),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n\t"),n("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" j"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n\n\tprintf "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"Following activities are selected n"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n\n\t"),n("span",{attrs:{class:"token comment"}},[t._v("// The first activity always gets selected ")]),t._v("\n\ti "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("0")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n\t"),n("span",{attrs:{class:"token function"}},[t._v("printf")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"%d "')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" i"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n\n\t"),n("span",{attrs:{class:"token comment"}},[t._v("// Consider rest of the activities ")]),t._v("\n\t"),n("span",{attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("j "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("1")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" j "),n("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v(" n"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" j"),n("span",{attrs:{class:"token operator"}},[t._v("++")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n\t"),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n\t"),n("span",{attrs:{class:"token comment"}},[t._v("// If this activity has start time greater than or ")]),t._v("\n\t"),n("span",{attrs:{class:"token comment"}},[t._v("// equal to the finish time of previously selected ")]),t._v("\n\t"),n("span",{attrs:{class:"token comment"}},[t._v("// activity, then select it ")]),t._v("\n\t"),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v(">=")]),t._v(" f"),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n\t"),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n\t\tprintf "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"%d "')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" j"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n\t\ti "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" j"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n\t"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n\t"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n\n"),n("span",{attrs:{class:"token comment"}},[t._v("// driver program to test above function ")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("main")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n"),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n\t"),n("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" s"),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{attrs:{class:"token number"}},[t._v("1")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("3")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("0")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("5")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("8")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("5")]),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n\t"),n("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" f"),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{attrs:{class:"token number"}},[t._v("2")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("4")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("6")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("7")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("9")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("9")]),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n\t"),n("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" n "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("sizeof")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token operator"}},[t._v("/")]),n("span",{attrs:{class:"token keyword"}},[t._v("sizeof")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token number"}},[t._v("0")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n\t"),n("span",{attrs:{class:"token function"}},[t._v("printMaxActivities")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" f"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" n"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n\t"),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("0")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br"),n("span",{staticClass:"line-number"},[t._v("20")]),n("br"),n("span",{staticClass:"line-number"},[t._v("21")]),n("br"),n("span",{staticClass:"line-number"},[t._v("22")]),n("br"),n("span",{staticClass:"line-number"},[t._v("23")]),n("br"),n("span",{staticClass:"line-number"},[t._v("24")]),n("br"),n("span",{staticClass:"line-number"},[t._v("25")]),n("br"),n("span",{staticClass:"line-number"},[t._v("26")]),n("br"),n("span",{staticClass:"line-number"},[t._v("27")]),n("br"),n("span",{staticClass:"line-number"},[t._v("28")]),n("br"),n("span",{staticClass:"line-number"},[t._v("29")]),n("br"),n("span",{staticClass:"line-number"},[t._v("30")]),n("br"),n("span",{staticClass:"line-number"},[t._v("31")]),n("br"),n("span",{staticClass:"line-number"},[t._v("32")]),n("br"),n("span",{staticClass:"line-number"},[t._v("33")]),n("br"),n("span",{staticClass:"line-number"},[t._v("34")]),n("br"),n("span",{staticClass:"line-number"},[t._v("35")]),n("br"),n("span",{staticClass:"line-number"},[t._v("36")]),n("br"),n("span",{staticClass:"line-number"},[t._v("37")]),n("br"),n("span",{staticClass:"line-number"},[t._v("38")]),n("br"),n("span",{staticClass:"line-number"},[t._v("39")]),n("br"),n("span",{staticClass:"line-number"},[t._v("40")]),n("br"),n("span",{staticClass:"line-number"},[t._v("41")]),n("br"),n("span",{staticClass:"line-number"},[t._v("42")]),n("br"),n("span",{staticClass:"line-number"},[t._v("43")]),n("br")])])}],!1,null,null,null);e.options.__file="greedy.md";s.default=e.exports}}]);