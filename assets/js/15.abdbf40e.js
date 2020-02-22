(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{223:function(t,s,a){t.exports=a.p+"assets/img/Reactor.50bb6ee5.png"},308:function(t,s,a){"use strict";a.r(s);var n=[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"redis事件驱动"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#redis事件驱动","aria-hidden":"true"}},[this._v("#")]),this._v(" Redis事件驱动")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Redis 是一个事件驱动的内存数据库，依托操作系统的 "),s("code",[this._v("I/O 多路复用")]),this._v("技术。服务器需要处理两种类型的事件：文件事件和时间事件\b。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("文件事件")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Redis 服务器通过 "),s("code",[this._v("socket")]),this._v(" 实现与客户端（或其他redis服务器）的交互，文件事件就是服务器对 "),s("code",[this._v("socket")]),this._v(" 操作的抽象。Redis 服务器通过监听这些 "),s("code",[this._v("socket")]),this._v(" 产生的文件事件并处理这些事件，实现对客户端调用的响应。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("时间事件")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_1-reactor"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-reactor","aria-hidden":"true"}},[this._v("#")]),this._v(" 1. Reactor")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:a(223),alt:"Reactor"}})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("“I/O 多路复用模块”会监听多个描述符，当这些"),a("code",[t._v("fd")]),t._v("产生"),a("code",[t._v("accept")]),t._v("，"),a("code",[t._v("read")]),t._v("，"),a("code",[t._v("write")]),t._v(" 或 "),a("code",[t._v("close")]),t._v(" 的文件事件时，“I/O 多路复用模块”会记录发生文件事件的描述符和事件类型。尽管多个文件事件可能并发的出现，但是I/O复用模块总是会将所有产生事件的套接字都放到一个队列("),a("code",[t._v("aeEventLoop.fired")]),t._v(")里面，然后通过这个队列，以有序的、同步的、每次一个套接字的方式向文件事件分发器传送套接字。当上一个套接字产生的事件被与之关联的事件处理器处理完毕之后，分发器继续分发下一个，直到队列被消费完。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"_1-1-事件驱动数据结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-事件驱动数据结构","aria-hidden":"true"}},[this._v("#")]),this._v(" 1.1 事件驱动数据结构")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Redis 的主函数调用 "),s("code",[this._v("initServer()")]),this._v(" 函数从而初始化事件循环中心（EventLoop），其结构如下：")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("/* 事件轮询结构体 */")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("typedef")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" aeEventLoop "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" maxfd"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("                          "),a("span",{attrs:{class:"token comment"}},[t._v("/* 目前已注册的最大描述符 */")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" setsize"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("                        "),a("span",{attrs:{class:"token comment"}},[t._v("/* 目前已追踪的最大描述符 */")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("long")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("long")]),t._v(" timeEventNextId"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("          "),a("span",{attrs:{class:"token comment"}},[t._v("/* 用于生成时间事件 id */")]),t._v("\n    time_t lastTime"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("                    "),a("span",{attrs:{class:"token comment"}},[t._v("/* 最后一次执行时间事件的时间 */")]),t._v("\n    aeFileEvent "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v("events"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("                "),a("span",{attrs:{class:"token comment"}},[t._v("/* 已注册的文件事件 */")]),t._v("\n    aeFiredEvent "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v("fired"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("                "),a("span",{attrs:{class:"token comment"}},[t._v("/* 已就绪的文件事件 */")]),t._v("\n    aeTimeEvent "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v("timeEventHead"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("         "),a("span",{attrs:{class:"token comment"}},[t._v("/* 时间事件表头，新的时间事件加入到时间事件链表的表头 */")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" stop"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("                           "),a("span",{attrs:{class:"token comment"}},[t._v("/* 事件循环的开关 */")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v("apidata"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("                      "),a("span",{attrs:{class:"token comment"}},[t._v("/* 多路复用库的私有数据 */")]),t._v("\n    aeBeforeSleepProc "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v("beforesleep"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("     "),a("span",{attrs:{class:"token comment"}},[t._v("/* 在处理事件前要执行的函数 */")]),t._v("\n    aeBeforeSleepProc "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v("aftersleep"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("      "),a("span",{attrs:{class:"token comment"}},[t._v("/* 在处理事件后要执行的函数 */")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" aeEventLoop"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("在事件轮询结构体中，维护了三个重要的成员"),a("code",[t._v("events")]),t._v("、"),a("code",[t._v("fired")]),t._v("和"),a("code",[t._v("timeEventHead")]),t._v("。事件轮询结构体通过"),a("code",[t._v("aeCreateEventLoop")]),t._v("函数创建的。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[t._v("aeEventLoop "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),a("span",{attrs:{class:"token function"}},[t._v("aeCreateEventLoop")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" setsize"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    aeEventLoop "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v("eventLoop"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n    eventLoop"),a("span",{attrs:{class:"token operator"}},[t._v("->")]),t._v("events "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("zmalloc")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("sizeof")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("aeFileEvent"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v("setsize"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    eventLoop"),a("span",{attrs:{class:"token operator"}},[t._v("->")]),t._v("fired "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("zmalloc")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("sizeof")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("aeFiredEvent"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v("setsize"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("eventLoop"),a("span",{attrs:{class:"token operator"}},[t._v("->")]),t._v("events "),a("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{attrs:{class:"token constant"}},[t._v("NULL")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("||")]),t._v(" eventLoop"),a("span",{attrs:{class:"token operator"}},[t._v("->")]),t._v("fired "),a("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{attrs:{class:"token constant"}},[t._v("NULL")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("goto")]),t._v(" err"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n    eventLoop"),a("span",{attrs:{class:"token operator"}},[t._v("->")]),t._v("timeEventHead "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token constant"}},[t._v("NULL")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    eventLoop"),a("span",{attrs:{class:"token operator"}},[t._v("->")]),t._v("timeEventNextId "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("我们可以看到，"),s("code",[this._v("events")]),this._v("和"),s("code",[this._v("fired")]),this._v("是文件事件结构体和已触发事件结构体的数组，其元素数目相同，这两个数组的元素数据结构定义如下：")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("/* 文件事件结构体 */")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("typedef")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" aeFileEvent "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" mask"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("                           "),a("span",{attrs:{class:"token comment"}},[t._v("/* 监听事件类型掩码，值可以 AE_(READABLE|WRITABLE|BARRIER) */")]),t._v("\n    aeFileProc "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v("rfileProc"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("              "),a("span",{attrs:{class:"token comment"}},[t._v("/* 读事件处理器 */")]),t._v("\n    aeFileProc "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v("wfileProc"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("              "),a("span",{attrs:{class:"token comment"}},[t._v("/* 写事件处理器 */")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v("clientData"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("                   "),a("span",{attrs:{class:"token comment"}},[t._v("/* 多路复用库的私有数据 */")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" aeFileEvent"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("/* 触发的事件  */")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("typedef")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" aeFiredEvent "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" fd"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("                             "),a("span",{attrs:{class:"token comment"}},[t._v("/* 已就绪文件描述符 */")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" mask"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("                           "),a("span",{attrs:{class:"token comment"}},[t._v("/* 事件类型掩码，值可以是 AE_READABLE 或 AE_WRITABLE，或者是两者的或 */")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" aeFiredEvent"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_2-i-o-多路复用模块"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-i-o-多路复用模块","aria-hidden":"true"}},[this._v("#")]),this._v(" 2. I/O 多路复用模块")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("Redis 的 I/O 多路复用模块，其实是封装了操作系统提供的"),a("code",[t._v("select")]),t._v("，"),a("code",[t._v("epoll")]),t._v("，"),a("code",[t._v("avport")]),t._v(" 和 "),a("code",[t._v("kqueue")]),t._v(" 这些基础函数。向上层提供了一个统一的接口，屏蔽了底层实现的细节。以epoll为例，封装的接口如下：")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// 事件状态")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("typedef")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" aeApiState "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" epfd"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// epoll_event 实例描述符")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" epoll_event "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v("events"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// 事件槽")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" aeApiState"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 创建一个新的 epoll ")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("aeApiCreate")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("aeEventLoop "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v("eventLoop"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 调整事件槽的大小")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("aeApiResize")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("aeEventLoop "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v("eventLoop"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" setsize"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 释放 epoll 实例和事件槽")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("aeApiFree")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("aeEventLoop "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v("eventLoop"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 关联给定事件到 fd")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("aeApiAddEvent")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("aeEventLoop "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v("eventLoop"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" fd"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" mask"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 从 fd 中删除给定事件")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("aeApiDelEvent")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("aeEventLoop "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v("eventLoop"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" fd"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" mask"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 获取可执行事件")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("aeApiPoll")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("aeEventLoop "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v("eventLoop"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" timeval "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v("tvp"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("在redis启动时，I/O 多路复用模块是在"),a("code",[t._v("initServer")]),t._v("函数中初始化的。之后Redis将监听套接字和Unix域套接字的可读事件加入到"),a("code",[t._v("aeEventLoop.events")]),t._v("数组中（描述符为数组索引），分别指定读处理器"),a("code",[t._v("acceptTcpHandler")]),t._v("和"),a("code",[t._v("acceptUnixHandler")]),t._v("，并调用"),a("code",[t._v("aeApiAddEvent")]),t._v("将套接字描述符加入到轮询中，监听这些描述符的可读事件。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// 初始化I/O 多路复用模块和事件轮询结构体")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("initServer")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("->")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("aeCreateEventLoop")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("->")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("aeApiCreate")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 将监听套接字相关信息加入轮询结构体中，并监听这些描述符的可读事件")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token function"}},[t._v("listenToPort")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("anetUnixServer")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token operator"}},[t._v("->")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("aeCreateFileEvent")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token operator"}},[t._v("->")]),a("span",{attrs:{class:"token function"}},[t._v("aeApiAddEvent")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_3-事件分发器（dispatcher）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-事件分发器（dispatcher）","aria-hidden":"true"}},[this._v("#")]),this._v(" 3. 事件分发器（dispatcher）")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Redis 的事件分发器 "),s("code",[this._v("ae.c/aeProcessEvents")]),this._v(" 不但处理文件事件还处理时间事件。事件分发器根据"),s("code",[this._v("aeFiredEvent.mask")]),this._v("调用不同的事件处理器。\nRedis的事件分发器由"),s("code",[this._v("aeMain")]),this._v("函数循环调用。事件分发过程如下：")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ol",[a("li",[t._v("从头遍历双向链表"),a("code",[t._v("aeEventLoop.timeEventHead")]),t._v("，计算出最近一次时间时间发生还有多久，假设还需要time秒；")]),t._v(" "),a("li",[t._v("调用I/O复用模块阻塞并等待文件事件的产生，最大阻塞时间为time秒，如果等待时间事件触发时间为0，"),a("code",[t._v("aeApiPoll")]),t._v("立即返回，不阻塞。如果期间有retval个文件事件的发生，则更新"),a("code",[t._v("aeEventLoop.fired")]),t._v("数组的前retval个元素的"),a("code",[t._v("fd")]),t._v("和"),a("code",[t._v("mask")]),t._v("；")]),t._v(" "),a("li",[t._v("处理到达的文件事件。读取"),a("code",[t._v("aeEventLoop.fired")]),t._v("数组的前retval个元素，根据"),a("code",[t._v("fd")]),t._v("和"),a("code",[t._v("mask")]),t._v("从"),a("code",[t._v("aeEventLoop.events")]),t._v("调用描述符相应的不同的事件处理器；")]),t._v(" "),a("li",[t._v("处理时间事件。")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// 循环调用aeProcessEvents事件分发器")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("aeMain")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{attrs:{class:"token operator"}},[t._v("->")]),a("span",{attrs:{class:"token function"}},[t._v("aeProcessEvents")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("                                     \n            "),a("span",{attrs:{class:"token comment"}},[t._v("// 计算离最近一次时间事件发生还有多久，记为timeval")]),t._v("\n            "),a("span",{attrs:{class:"token operator"}},[t._v("->")]),a("span",{attrs:{class:"token function"}},[t._v("aeSearchNearestTimer")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("                \n                "),a("span",{attrs:{class:"token comment"}},[t._v("// 阻塞并等待文件事件的产生，最大阻塞时间为timeval，")]),t._v("\n                "),a("span",{attrs:{class:"token comment"}},[t._v("// 如果等待时间事件触发时间为0，aeApiPoll立即返回，不阻塞")]),t._v("\n                "),a("span",{attrs:{class:"token operator"}},[t._v("->")]),a("span",{attrs:{class:"token function"}},[t._v("aeApiPoll")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                    "),a("span",{attrs:{class:"token comment"}},[t._v("// 先处理文件事件")]),t._v("\n                    "),a("span",{attrs:{class:"token operator"}},[t._v("->")]),t._v("ProcessFileEvents\n                        "),a("span",{attrs:{class:"token comment"}},[t._v("// 可读事件，调用读事件处理器")]),t._v("\n                        "),a("span",{attrs:{class:"token operator"}},[t._v("->")]),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("AE_READABLE"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token operator"}},[t._v("->")]),a("span",{attrs:{class:"token operator"}},[t._v("*")]),a("span",{attrs:{class:"token function"}},[t._v("rfileProc")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                        "),a("span",{attrs:{class:"token comment"}},[t._v("// 可写事件，调用写事件处理器")]),t._v("\n                        "),a("span",{attrs:{class:"token operator"}},[t._v("->")]),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("AE_WRITABLE"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token operator"}},[t._v("->")]),a("span",{attrs:{class:"token operator"}},[t._v("*")]),a("span",{attrs:{class:"token function"}},[t._v("wfileProc")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                    "),a("span",{attrs:{class:"token comment"}},[t._v("// 后处理时间事件")]),t._v("\n                    "),a("span",{attrs:{class:"token operator"}},[t._v("->")]),a("span",{attrs:{class:"token function"}},[t._v("processTimeEvents")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_4-文件事件处理器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-文件事件处理器","aria-hidden":"true"}},[this._v("#")]),this._v(" 4. 文件事件处理器")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"accepttcphandler-连接应答处理器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#accepttcphandler-连接应答处理器","aria-hidden":"true"}},[this._v("#")]),this._v(" "),s("code",[this._v("acceptTcpHandler")]),this._v(" 连接应答处理器")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("负责处理连接相关的事件，当有client 连接到Redis的时候们就会产生 "),a("code",[t._v("AE_READABLE")]),t._v(" 事件。引发它执行。"),a("code",[t._v("acceptTcpHandler")]),t._v("会"),a("code",[t._v("accept")]),t._v("客户端连接，为客户端创建客户端状态（"),a("code",[t._v("redisClient")]),t._v(")，当"),a("code",[t._v("fd")]),t._v("不为 -1 时，绑定读事件到事件 "),a("code",[t._v("loop")]),t._v(" （开始接收命令请求）。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"readqueryfromclinet-命令请求处理器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#readqueryfromclinet-命令请求处理器","aria-hidden":"true"}},[this._v("#")]),this._v(" "),s("code",[this._v("readQueryFromClinet")]),this._v(" 命令请求处理器")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"sendreplytoclient-命令回复处理器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sendreplytoclient-命令回复处理器","aria-hidden":"true"}},[this._v("#")]),this._v(" "),s("code",[this._v("sendReplyToClient")]),this._v(" 命令回复处理器")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_5-时间事件处理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-时间事件处理","aria-hidden":"true"}},[this._v("#")]),this._v(" 5. 时间事件处理")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("时间事件结构体是一个按照"),s("code",[this._v("id")]),this._v("倒序排列的链表，并没有按照时间顺序排序。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("/* 时间事件结构体 */")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("typedef")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" aeTimeEvent "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("long")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("long")]),t._v(" id"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("                       "),a("span",{attrs:{class:"token comment"}},[t._v("/* 时间事件的唯一标识符 */")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("long")]),t._v(" when_sec"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("                      "),a("span",{attrs:{class:"token comment"}},[t._v("/* 事件的到达时间 */")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("long")]),t._v(" when_ms"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    aeTimeProc "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v("timeProc"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("               "),a("span",{attrs:{class:"token comment"}},[t._v("/* 事件处理函数 */")]),t._v("\n    aeEventFinalizerProc "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v("finalizerProc"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("        "),a("span",{attrs:{class:"token comment"}},[t._v("/* 事件释放函数 */")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v("clientData"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("                   "),a("span",{attrs:{class:"token comment"}},[t._v("/* 多路复用库的私有数据 */")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" aeTimeEvent "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v("prev"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("           "),a("span",{attrs:{class:"token comment"}},[t._v("/* 指向上个时间事件结构，形成链表 */")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" aeTimeEvent "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v("next"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("           "),a("span",{attrs:{class:"token comment"}},[t._v("/* 指向下个时间事件结构，形成链表 */")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" aeTimeEvent"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Redis 使用"),s("code",[this._v("processTimeEvent")]),this._v("函数处理所有的时间事件，我们整理一下执行思路：")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ol",[a("li",[t._v("处理系统时间被修改产生的问题（如果之前系统时间提前了，后来又修改了，则立即执行所有的时间事件）。")]),t._v(" "),a("li",[t._v("遍历链表找出所有 "),a("code",[t._v("when_sec")]),t._v(" 和 "),a("code",[t._v("when_ms")]),t._v(" 小于现在时间的事件；")]),t._v(" "),a("li",[t._v("执行事件对应的处理函数；")]),t._v(" "),a("li",[t._v("检查事件类型，如果是周期事件则刷新该事件下一次的执行事件，否则删除。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"参考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考","aria-hidden":"true"}},[this._v("#")]),this._v(" 参考")])}],e=a(0),r=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),a("p",[t._v("Redis 有很多操作需要在给定的时间点进行处理，时间事件就是对这类定时任务的抽象。")]),t._v(" "),t._m(5),t._v(" "),a("p",[t._v("Redis 基于 Reactor 模式开发了自己的事件处理器。")]),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),a("p",[t._v("Redis具体是怎么实现这种模式的呢？我们先看看事件相关的数据结构。")]),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._m(11),t._v(" "),t._m(12),t._m(13),t._v(" "),t._m(14),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._m(18),t._v(" "),t._m(19),t._m(20),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),t._m(23),t._m(24),t._v(" "),a("p",[t._v("Redis 有大量的事件处理器类型，我们就讲解处理一个简单命令涉及到的三个处理器：")]),t._v(" "),t._m(25),t._v(" "),t._m(26),t._v(" "),t._m(27),t._v(" "),a("p",[t._v("负责读取通过 sokect 发送来的命令。")]),t._v(" "),t._m(28),t._v(" "),a("p",[t._v("当Redis处理完命令，就会产生 AE_WRITEABLE 事件，将数据回复给 client。")]),t._v(" "),t._m(29),t._v(" "),t._m(30),t._v(" "),t._m(31),t._m(32),t._v(" "),t._m(33),t._v(" "),t._m(34),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"http://wiki.jikexueyuan.com/project/redis/event-driven.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Redis 事件驱动详解"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://xilidou.com/2018/03/22/redis-event/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Redis 中的事件驱动模型"),a("OutboundLink")],1)])])])},n,!1,null,null,null);r.options.__file="event_driven_library.md";s.default=r.exports}}]);