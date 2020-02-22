(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{396:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[t._v("在你打开一个流之后, 就可以在它上面执行I/O操作了. 使用哪种协议包装API创建了流并不重要, 它们都使用相同的访问API.")]),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("流的读写可以使用下面的API函数组合完成, 它们多数都是遵循POSIX I/O中对应的API规范的:")]),t._v(" "),t._m(2),t._v(" "),a("p",[t._v("从数据流中接收一个字符. 如果流上再没有数据, 则返回EOF.")]),t._v(" "),t._m(3),t._v(" "),a("p",[t._v("从指定流中读取指定字节的数据. buf必须预分配至少count字节的内存空间. 这个函数将返回从数据流实际读到缓冲区中的数据字节数.")]),t._v(" "),a("p",[t._v("php_stream_read()不同于其他的流读取函数. 如果使用的流不是普通文件流, 哪怕数据流中有超过请求字节数的数据, 并且当前也可以返回, 它也只会调用过一次底层流实现的read函数. 这是为了兼容基于包(比如UDP)的协议的这种做法.")]),t._v(" "),t._m(4),a("p",[t._v("这两个函数从stream中读取最多maxlen个字符, 直到碰到换行符或流结束. buf可以是一个指向预分配的至少maxlen字节的内存空间的指针, 也可以是NULL, 当它是NULL时,则会自动的创建一个动态大小的缓冲区, 用从流中实际读出的数据填充, 成功后函数返回指向缓冲区的指针, 失败则返回NULL. 如果returned_len传递了非NULL值, 则在返回时它将被设置为实际从流中读取的字节数.")]),t._v(" "),t._m(5),a("p",[t._v("和php_stream_get_line()类似, 这个函数将读取最多maxlen, 或到达EOF/行结束第一次出现的位置. 但是它也有和php_stream_get_line()的不同指出, 这个函数允许指定任意的停止读取标记.")]),t._v(" "),t._m(6),t._v(" "),a("p",[t._v("从php流中读取目录项和上面从普通文件中读取普通数据相同. 这些数据放到了固定大小的dirents块中. 内部的php_stream_dirent结构体如下, 它与POSIX定义的dirent结构体一致:")]),t._v(" "),t._m(7),a("p",[t._v("实际上你可以直接使用php_stream_read()函数读取数据到这个结构体中:")]),t._v(" "),t._m(8),a("p",[t._v("由于从目录流中读取是很常见的操作, php流包装层暴露了一个API, 它将记录大小的检查和类型转换处理封装到了一次调用中:")]),t._v(" "),t._m(9),a("p",[t._v("如果成功读取到目录项, 则传入的entry指针将被返回, 否则返回NULL标识错误. 使用这个为目录流特殊构建的函数而不是直接从目录流读取非常重要, 这样做未来流API改变时就不至于和你的代码冲突.")]),t._v(" "),t._m(10),t._v(" "),a("p",[t._v("和读类似, 向流中写数据只需要传递一个缓冲区和缓冲区长度给流.")]),t._v(" "),t._m(11),a("p",[t._v("write_string的版本实际上是一个提供便利的宏, 它允许写一个NULL终止的字符串,而不用显式的提供长度. 返回的是实际写到流中的字节数. 要特别小心的是尝试写大数据的时候可能导致流阻塞, 比如套接字流, 而如果流被标记为非阻塞, 则实际写入的数据量可能会小于传递给函数的期望大小.")]),t._v(" "),t._m(12),a("p",[t._v("还有一种选择是, 使用php_stream_putc()和php_stream_puts()写入一个字符或一个字符串到流中. 要注意, php_stream_puts()不同于php_stream_write_string(), 虽然它们的原型看起来是一样的, 但是php_stream_puts()会在写出buf中的数据后自动的追加一个换行符.")]),t._v(" "),t._m(13),a("p",[t._v("功能和格式上都类似于fprintf(), 这个API调用允许在写的同时构造字符串而不用去创建临时缓冲区构造数据. 这里我们能够看到的一个明显的不同是它需要TSRMLS_CC宏来保证线程安全.")]),t._v(" "),t._m(14),t._v(" "),a("p",[t._v("基于文件的流, 以及另外几种流是可以随机访问的. 也就是说, 在流的一个位置读取了一些数据之后, 文件指针可以向前或向后移动, 以非线性顺序读取其他部分.")]),t._v(" "),a("p",[t._v("如果你的流应用代码预测到底层的流支持随机访问, 在打开的时候就应该传递STREAM_MUST_SEEK选项. 对于那些原本就可随机访问的流来说, 这通常不会有什么影响, 因为流本身就是可随机访问的. 而对于那些原本不可随机访问的流, 比如网络I/O或线性访问文件比如FIFO管道, 这个暗示可以让调用程序有机会在流的数据被消耗掉之前, 优雅的失败.")]),t._v(" "),a("p",[t._v("在可随机访问的流资源上工作时, 下面的函数可用来将文件指针移动到任意位置:")]),t._v(" "),t._m(15),a("p",[t._v("offset是相对于whence表示的流位置的偏移字节数, whence的可选值及含义如下:")]),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),a("p",[t._v("在目录流上随机访问时, 只有php_stream_rewinddir()函数可用. 使用php_stream_seek()函数将导致未定义行为. 所有的随机访问一族函数返回0标识成功或者-1标识失败.")]),t._v(" "),t._m(18),a("p",[t._v("如你之前所见, php_stream_tell()将返回当前的文件偏移量.")]),t._v(" "),t._m(19),a("p",[t._v("调用flush()函数将强制将流过滤器此类内部缓冲区中的数据输出到最终的资源中. 在流被关闭时, flush()函数将自动调用, 并且大多数无过滤流资源虽然不进行任何内部缓冲,但也需要flush. 显式的调用这个函数很少见, 并且通常也是不需要的.")]),t._v(" "),t._m(20),a("p",[t._v("调用php_stream_stat()可以获取到流实例的其他信息, 它的行为类似于fstat()函数. 实际上, php_stream_statbuf结构体现在仅包含一一=个元素: struct statbuf sb; 因此,php_stream_stat()调用可以如下面例子一样, 直接用传统的fstat()操作替代, 它只是将posix的stat操作翻译成流兼容的:")]),t._v(" "),t._m(21),t._m(22),t._v(" "),a("p",[t._v("所有流的关闭都是通过php_stream_free()函数处理的, 它的原型如下:")]),t._v(" "),t._m(23),a("p",[t._v("这个函数中的options参数允许的值是PHP_STREAM_FREE_xxx一族常量的按位或的结果, 这一族常量定义如下(下面省略PHP_STREAM_FREE_前缀):")]),t._v(" "),t._m(24),t._v(" "),a("p",[t._v("实际上, 你并不需要直接调用php_stream_free()函数. 而是在关闭流时使用下面两个宏的某个替代:")]),t._v(" "),t._m(25),t._m(26),t._v(" "),a("p",[t._v("因为流通常映射到zval上, 反之亦然, 因此提供了一组宏用来简化操作, 并统一编码(格式):")]),t._v(" "),t._m(27),a("p",[t._v("要注意, 这里并没有调用ZEND_REGISTER_RESOURCE(). 这是因为当流打开的时候, 已经自动的注册为资源了, 这样就可以利用到引擎内建的垃圾回收和shutdown系统的优点. 使用这个宏而不是尝试手动的将流注册为新的资源ID是非常重要的; 这样做的最终结果是导致流被关闭两次以及引擎崩溃.")]),t._v(" "),t._m(28),a("p",[t._v('从传入的zval *中取回php_stream *有一个类似的宏. 可以看出, 这个宏只是对资源获取函数(第9章"资源数据类型")的一个简单封装. 请回顾ZEND_FETCH_RESOURCE2()宏,第一个宏php_stream_from_zval()就是对它的包装, 如果资源类型不匹配, 它将抛出一个警告并尝试从函数实现中返回. 如果你只是想从传入的zval *中获取一个php_stream *, 而不希望有自动的错误处理, 就需要使用php_stream_from_zval_no_verify()并且需要手动的检查结果值.')]),t._v(" "),t._m(29),t._v(" "),a("ul",[a("li",[a("router-link",{attrs:{to:"./preface.html"}},[t._v("目录")])],1),t._v(" "),a("li",[t._v("14.1 "),a("router-link",{attrs:{to:"./14.1.html"}},[t._v("流的概览")])],1),t._v(" "),a("li",[t._v("14.3 "),a("router-link",{attrs:{to:"./14.3.html"}},[t._v("静态资源操作")])],1)])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"访问流"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#访问流","aria-hidden":"true"}},[this._v("#")]),this._v(" 访问流")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"读"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#读","aria-hidden":"true"}},[this._v("#")]),this._v(" 读")])},function(){var t=this.$createElement,s=this._self._c||t;return s("pre",[s("code",[this._v("int php_stream_getc(php_stream *stream);\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("pre",[s("code",[this._v("size_t php_stream_read(php_stream *stream, char *buf, size_t count);\n")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("char")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),a("span",{attrs:{class:"token function"}},[t._v("php_stream_get_line")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("php_stream "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v("stream"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("char")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v("buf"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" size_t maxlen"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" size_t "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v("returned_len"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("char")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),a("span",{attrs:{class:"token function"}},[t._v("php_stream_gets")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("php_stream "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v("stream"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("char")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v("buf"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" size_t maxlen"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("char")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),a("span",{attrs:{class:"token function"}},[t._v("php_stream_get_record")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("php_stream "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v("stream"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" size_t maxlen"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" size_t "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v("returned_len"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("char")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v("delim"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" size_t delim_len TSRMLS_DC"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"读取目录项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#读取目录项","aria-hidden":"true"}},[this._v("#")]),this._v(" 读取目录项")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("typedef")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" _php_stream_dirent "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("char")]),t._v(" d_name"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("MAXPATHLEN"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" php_stream_dirent"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" dirent entry"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token function"}},[t._v("php_stream_read")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("stream"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("char")]),a("span",{attrs:{class:"token operator"}},[t._v("*")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token operator"}},[t._v("&")]),t._v("entry"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("sizeof")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("entry"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("sizeof")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("entry"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token comment"}},[t._v("/* 成功从目录流中读取到一项 */")]),t._v("\n        "),a("span",{attrs:{class:"token function"}},[t._v("php_printf")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"File: %s\\n"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" entry"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("d_name"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[t._v("php_stream_dirent "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),a("span",{attrs:{class:"token function"}},[t._v("php_stream_readdir")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("php_stream "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v("dirstream"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" php_stream_dirent "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v("entry"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"写"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#写","aria-hidden":"true"}},[this._v("#")]),this._v(" 写")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[t._v("size_t "),a("span",{attrs:{class:"token function"}},[t._v("php_stream_write")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("php_stream "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v("stream"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("char")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v("buf"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" size_t count"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nsize_t "),a("span",{attrs:{class:"token function"}},[t._v("php_stream_write_string")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("php_stream "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v("stream"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("char")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v("stf"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("php_stream_putc")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("php_stream "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v("stream"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" c"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("php_stream_puts")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("php_string "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v("stream"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("char")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v("buf"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[t._v("size_t "),a("span",{attrs:{class:"token function"}},[t._v("php_stream_printf")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("php_stream "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v("stream TSRMLS_DC"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("char")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v("format"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"随机访问-查看文件偏移量以及缓存的flush"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#随机访问-查看文件偏移量以及缓存的flush","aria-hidden":"true"}},[this._v("#")]),this._v(" 随机访问, 查看文件偏移量以及缓存的flush")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("php_stream_seek")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("php_stream "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v("stream"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" off_t offset"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" whence"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("php_stream_rewind")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("php_stream "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v("stream"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("tr",[a("td",[t._v("SEEK_SET")]),t._v(" "),a("td",[t._v("offset相对于文件开始位置. php_stream_rewind()API调用实际上是一个宏,展开后是php_stream_seek(stream, 0, SEEK_SET), 表示移动到文件开始位置偏移0字节处. 当使用SEEK_SET时, 如果offset传递负值被认为是错误的, 将会导致未定义行为. 指定的位置超过流的末尾也是未定义的, 不过结果通常是一个错误或文件被扩大以满足指定的偏移量.")])]),t._v(" "),a("tr",[a("td",[t._v("SEEK_CUR")]),t._v(" "),a("td",[t._v("offset相对于文件的当前偏移量. 调用php_stream_seek(steram, offset,SEEK_CUR)一般来说等价于php_stream_seek(stream, php_stream_tell() + offset, SEEK_SET);")])]),t._v(" "),a("tr",[a("td",[t._v("SEEK_END")]),t._v(" "),a("td",[t._v("offset是相对于当前的EOF位置的. 负值的offset表示在EOF之前的位置, 正值和SEEK_SET中描述的是相同的语义, 可能在某些流实现上可以工作.")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("pre",[s("code",[this._v("int php_stream_rewinddir(php_stream *dirstream);\n")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[t._v("off_t "),a("span",{attrs:{class:"token function"}},[t._v("php_stream_tell")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("php_stream "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v("stream"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("php_stream_flush")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("php_stream "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v("stream"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("php_stream_stat")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("php_stream "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v("stream"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" php_stream_statbuf "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v("ssb"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("php_sample4_fd_is_fifo")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" fd"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" statbuf sb"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token function"}},[t._v("fstat")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fd"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("&")]),t._v("sb"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("S_ISFIFO")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sb"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("st_mode"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("php_sample4_stream_is_fifo")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("php_stream "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v("stream"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    php_stream_statbuf ssb"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token function"}},[t._v("php_stream_stat")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("stream"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("&")]),t._v("ssb"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("S_ISFIFO")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ssb"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sb"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("st_mode"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"关闭"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#关闭","aria-hidden":"true"}},[this._v("#")]),this._v(" 关闭")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("php_stream_free")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("php_stream "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v("stream"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" options"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("tr",[a("td",[t._v("CALL_DTOR")]),t._v(" "),a("td",[t._v("流实现的析构器应该被调用. 这里提供了一个时机对特定的流进行显式释放.")])]),t._v(" "),a("tr",[a("td",[t._v("RELEASE_STREAM")]),t._v(" "),a("td",[t._v("释放为php_stream结构体分配的内存")])]),t._v(" "),a("tr",[a("td",[t._v("PRESERVE_HANDLE")]),t._v(" "),a("td",[t._v("指示流的析构器不要关闭它的底层描述符句柄")])]),t._v(" "),a("tr",[a("td",[t._v("RSRC_DTOR")]),t._v(" "),a("td",[t._v("流包装层内部管理资源列表的垃圾回收")])]),t._v(" "),a("tr",[a("td",[t._v("PERSISTENT")]),t._v(" "),a("td",[t._v("作用在持久化流上时, 它的行为将是永久的而不局限于当前请求.")])]),t._v(" "),a("tr",[a("td",[t._v("CLOSE")]),t._v(" "),a("td",[t._v("CALL_DTOR和RELEASE_STREAM的联合. 这是关闭非持久化流的一般选项")])]),t._v(" "),a("tr",[a("td",[t._v("CLOSE_CASTED")]),t._v(" "),a("td",[t._v("CLOSE和PRESERVE_HANDLE的联合.")])]),t._v(" "),a("tr",[a("td",[t._v("CLOSE_PERSISTENT")]),t._v(" "),a("td",[t._v("CLOSE和PERSISTENT的联合. 这是永久关闭持久化流的一般选项.")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{attrs:{class:"token macro property"}},[t._v("#"),a("span",{attrs:{class:"token directive keyword"}},[t._v("define")]),t._v(" php_stream_close(stream) \\\n    php_stream_free((stream), PHP_STREAM_FREE_CLOSE)")]),t._v("\n"),a("span",{attrs:{class:"token macro property"}},[t._v("#"),a("span",{attrs:{class:"token directive keyword"}},[t._v("define")]),t._v(" php_stream_pclose(stream) \\\n    php_stream_free((stream), PHP_STREAM_FREE_CLOSE_PERSISTENT)")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"通过zval交换流"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#通过zval交换流","aria-hidden":"true"}},[this._v("#")]),this._v(" 通过zval交换流")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-c line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{attrs:{class:"token macro property"}},[this._v("#"),s("span",{attrs:{class:"token directive keyword"}},[this._v("define")]),this._v(" php_stream_to_zval(stream, pzval) \\\n    ZVAL_RESOURCE((pzval), (stream)->rsrc_id);")]),this._v("\n")])]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br"),s("span",{staticClass:"line-number"},[this._v("2")]),s("br")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{attrs:{class:"token macro property"}},[t._v("#"),a("span",{attrs:{class:"token directive keyword"}},[t._v("define")]),t._v(' php_stream_from_zval(stream, ppzval) \\\n    ZEND_FETCH_RESOURCE2((stream), php_stream*, (ppzval), \\\n    -1, "stream", php_file_le_stream(), php_file_le_pstream())')]),t._v("\n"),a("span",{attrs:{class:"token macro property"}},[t._v("#"),a("span",{attrs:{class:"token directive keyword"}},[t._v("define")]),t._v(' php_stream_from_zval_no_verify(stream, ppzval) \\\n    (stream) = (php_stream*)zend_fetch_resource((ppzval) \\\n    TSRMLS_CC, -1, "stream", NULL, 2, \\\n    php_file_le_stream(), php_file_le_pstream())')]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"links"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#links","aria-hidden":"true"}},[this._v("#")]),this._v(" links")])}],!1,null,null,null);e.options.__file="14.2.md";s.default=e.exports}}]);