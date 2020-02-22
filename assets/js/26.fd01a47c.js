(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{340:function(a,t,r){"use strict";r.r(t);var _=r(0),e=Object(_.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("div",{staticClass:"content"},[r("h1",{attrs:{id:"schema与数据类型优化"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#schema与数据类型优化","aria-hidden":"true"}},[a._v("#")]),a._v(" Schema与数据类型优化")]),a._v(" "),r("h2",{attrs:{id:"_4-1-选择优化的数据类型"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-选择优化的数据类型","aria-hidden":"true"}},[a._v("#")]),a._v(" 4.1 选择优化的数据类型")]),a._v(" "),r("h4",{attrs:{id:"更小的通常更好"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#更小的通常更好","aria-hidden":"true"}},[a._v("#")]),a._v(" 更小的通常更好")]),a._v(" "),r("p",[a._v("一般情况下，应该尽量使用可以正确存储数据的最小数据类型。")]),a._v(" "),r("h4",{attrs:{id:"简单就好"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#简单就好","aria-hidden":"true"}},[a._v("#")]),a._v(" 简单就好")]),a._v(" "),r("p",[a._v("简单数据类型的操作通常需要更少的CPU周期。")]),a._v(" "),r("h4",{attrs:{id:"尽量避免null"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#尽量避免null","aria-hidden":"true"}},[a._v("#")]),a._v(" 尽量避免"),r("code",[a._v("NULL")])]),a._v(" "),r("p",[a._v("通常情况下最好指定列为"),r("code",[a._v("NOT NULL")]),a._v("，除非真的需要存储NULL值。")]),a._v(" "),r("ol",[r("li",[a._v("如果查询中的包含可以为NULL的列，对MySQL来说更难优化，因为可为NULL的列使得索引、索引统计和值比较都更复杂。")]),a._v(" "),r("li",[a._v("可为NULL的列会使用更多的存储空间，在MySQL里也需要特殊处理。")]),a._v(" "),r("li",[a._v("当可为NULL的列被索引时，每个索引记录需要一个额外的字节，在MyISAM里甚至还可能导致固定大小的索引变成可变大小的索引。")])]),a._v(" "),r("p",[a._v("通常可以为NULL的列改成为NOT NULL带来的性能提升比较小，索引没有必要首先在现有schema中查找并修改掉这种情况，除非确定这回导致问题。但是如果计划在列上建索引，就应该尽量避免设计成可为NULL的列。")]),a._v(" "),r("p",[a._v("例外：InnoDB使用单独的位(bit)存储NULL值，索引对于稀疏数据有很好的空间效率，但这一点不适用与MyISAM。")]),a._v(" "),r("h3",{attrs:{id:"_4-1-1-整数类型"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-1-整数类型","aria-hidden":"true"}},[a._v("#")]),a._v(" 4.1.1 整数类型")]),a._v(" "),r("p",[a._v("如果存储整数，可以使用这几种整数类型： TINYINT, SMALLINT, MEDIUMINT, INT, BIGINT。分别使用8， 16， 24， 32， 64位存储空间。可以存储值得范围从-2"),r("sup",[a._v("N-1")]),a._v("到2"),r("sup",[a._v("N-1")]),a._v("-1，其中N是存储空间的位数。")]),a._v(" "),r("p",[a._v("MySQL可以为整数类型指定宽度，例如"),r("code",[a._v("INT(11)")]),a._v("，对于大多数应用这是没有意义的：它不会限制值得合法范围，只是规定了MySQL的一些交互工具用来显示字符的个数。对于存储和计算来说，INT(1)和INT(20)是相同的。")]),a._v(" "),r("h3",{attrs:{id:"_4-1-2-实数类型"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-2-实数类型","aria-hidden":"true"}},[a._v("#")]),a._v(" 4.1.2 实数类型")]),a._v(" "),r("p",[a._v("FLOAT和DOUBLE类型支持使用标准的浮点运算进行近似计算，DECIMAL类型用于存储精确的小数。浮点和DECIMAL类型都可以指定精度。\n浮点类型在存储相同范围的值时，通常比DECIMAL使用更少的空间。\n因为需要额外的空间和计算开销，所以应该尽量只在进行精确计算时才使用DECIMAL——例如存储财务数据。")]),a._v(" "),r("h3",{attrs:{id:"_4-1-3-字符串类型"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-3-字符串类型","aria-hidden":"true"}},[a._v("#")]),a._v(" 4.1.3 字符串类型")]),a._v(" "),r("h4",{attrs:{id:"varchar和char类型"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#varchar和char类型","aria-hidden":"true"}},[a._v("#")]),a._v(" VARCHAR和CHAR类型")]),a._v(" "),r("p",[a._v("很难精确的解释这些值是怎么存储在磁盘和内存中的，这跟存储引擎的具体实现有关。")]),a._v(" "),r("blockquote",[r("p",[a._v("VARCHAR")])]),a._v(" "),r("ol",[r("li",[a._v("VARCHAR类型用于存储可变长字符串，是最常见的字符串数据类型。它比定长类型更加节省空间。")]),a._v(" "),r("li",[a._v("VARCAHR需要使用1或2个额外字节记录字符串的长度。")]),a._v(" "),r("li",[a._v("VARCHAR节省了存储空间，所以对性能也有帮助。")])]),a._v(" "),r("p",[a._v("下面这些情况使用VARCHAR是合适的：字符串列的最大长度比平局长度大很多；列的更新很少，所以碎片不是问题；使用了像UTF-8这样复杂的字符集，每个字符都使用不同的字节数进行存储。")]),a._v(" "),r("blockquote",[r("p",[a._v("CHAR")])]),a._v(" "),r("p",[a._v("CHAR类型是定长的：MySQL总是根据定义的字符串长度分配足够的空间。CHAR很适合存储很短的字符串，或者所有值都接近同一个长度。例如存储MD5值。对于经常变更的数据，CHAR也比VARCHAR更好，因为定长的CHAR类型不容易昌盛碎皮，对于非常短的列，CHAR也比VARCHAR在存储空间上更有效率。")]),a._v(" "),r("h4",{attrs:{id:"blob和text类型"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#blob和text类型","aria-hidden":"true"}},[a._v("#")]),a._v(" BLOB和TEXT类型")]),a._v(" "),r("h4",{attrs:{id:"使用枚举enum代替字符串类型"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#使用枚举enum代替字符串类型","aria-hidden":"true"}},[a._v("#")]),a._v(" 使用枚举ENUM代替字符串类型")]),a._v(" "),r("h3",{attrs:{id:"_4-1-4-日期和时间类型"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-4-日期和时间类型","aria-hidden":"true"}},[a._v("#")]),a._v(" 4.1.4 日期和时间类型")]),a._v(" "),r("h4",{attrs:{id:"datetime"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#datetime","aria-hidden":"true"}},[a._v("#")]),a._v(" DATETIME")]),a._v(" "),r("p",[a._v("这个类型能保存大范围的值，从1001年到9999年，精度为秒。它把日期和时间封装称格式为YYYYMMDDHHMMSS的整数中，与时区无关。使用了8个字节的存储空间。")]),a._v(" "),r("h4",{attrs:{id:"timestamp"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#timestamp","aria-hidden":"true"}},[a._v("#")]),a._v(" TIMESTAMP")]),a._v(" "),r("p",[a._v("保存了从1970年1月1日午夜以来的秒数，它和UNIX时间戳相同，使用了4个字节的存储空间。")]),a._v(" "),r("p",[r("strong",[a._v("除了特殊行为以外，通常也尽量使用TIMESTAMP，因为它比DATETIME空间效率更高。")])]),a._v(" "),r("h3",{attrs:{id:"_4-1-5-位数据类型"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-5-位数据类型","aria-hidden":"true"}},[a._v("#")]),a._v(" 4.1.5 位数据类型")]),a._v(" "),r("h4",{attrs:{id:"bit"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#bit","aria-hidden":"true"}},[a._v("#")]),a._v(" BIT")]),a._v(" "),r("h4",{attrs:{id:"set"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#set","aria-hidden":"true"}},[a._v("#")]),a._v(" SET")]),a._v(" "),r("h2",{attrs:{id:"_4-2-mysql-schema设计中的陷阱"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-mysql-schema设计中的陷阱","aria-hidden":"true"}},[a._v("#")]),a._v(" 4.2 MySQL schema设计中的陷阱")]),a._v(" "),r("ol",[r("li",[a._v("太多的列")]),a._v(" "),r("li",[a._v("太多的关联")]),a._v(" "),r("li",[a._v("全能的枚举")]),a._v(" "),r("li",[a._v("变相的枚举")]),a._v(" "),r("li",[a._v("非此发明的NULL")])])])}],!1,null,null,null);e.options.__file="04.md";t.default=e.exports}}]);