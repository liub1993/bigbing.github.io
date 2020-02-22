(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{167:function(a,s,t){a.exports=t.p+"assets/img/b-tree.37781378.png"},168:function(a,s,t){a.exports=t.p+"assets/img/preindex1.07ddd596.png"},169:function(a,s,t){a.exports=t.p+"assets/img/jucusuoyin.37f4d987.png"},170:function(a,s,t){a.exports=t.p+"assets/img/jucusuoyin2.9a77ea08.png"},343:function(a,s,t){"use strict";t.r(s);var n=[function(){var a=this,s=a.$createElement,n=a._self._c||s;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"创建高性能的索引"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#创建高性能的索引","aria-hidden":"true"}},[a._v("#")]),a._v(" 创建高性能的索引")]),a._v(" "),n("h2",{attrs:{id:"_5-1-索引基础"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-索引基础","aria-hidden":"true"}},[a._v("#")]),a._v(" 5.1 索引基础")]),a._v(" "),n("p",[a._v("索引可以包含一个或多个列的值，列的顺序十分重要，因为MySQL只能高效的使用索引的最左前缀列。")]),a._v(" "),n("h3",{attrs:{id:"_5-1-1-索引的类型"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-1-索引的类型","aria-hidden":"true"}},[a._v("#")]),a._v(" 5.1.1 索引的类型")]),a._v(" "),n("h4",{attrs:{id:"b-tree索引"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#b-tree索引","aria-hidden":"true"}},[a._v("#")]),a._v(" B-Tree索引")]),a._v(" "),n("p",[a._v("存储引擎以不同的方式使用B-Tree索引，性能也各不相同。MyISAM使用前缀压缩技术是得索引更小，InnoDB使用的是B+Tree则按原数据格式进行存储。MyISAM索引通过数据的物理位置引用被索引的行，而InnoDB则根据主键引用被索引的行。")]),a._v(" "),n("p",[a._v("B-Tree通常意味着所有的值都是按顺序存储的，并且每一个叶子页到根的距离相同。叶子节点比较特殊，它们的指针指向的是被索引的数据，而不是其他的节点页。")]),a._v(" "),n("p",[n("img",{attrs:{src:t(167),alt:"B-Tree"}})]),a._v(" "),n("p",[a._v("B-Tree索引的限制：")]),a._v(" "),n("ol",[n("li",[a._v("如果不是按照索引的最左列开始查找，则无法使用索引。")]),a._v(" "),n("li",[a._v("不能跳过索引中的列。")]),a._v(" "),n("li",[a._v("如果查询中由某个列的范围查询，则其右边所有列都无法使用索引优化查找。")])]),a._v(" "),n("p",[a._v("有些限制并不是B-Tree本身导致，而是MySQL优化器和存储引擎使用索引的方式导致的。")]),a._v(" "),n("h4",{attrs:{id:"哈希索引"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#哈希索引","aria-hidden":"true"}},[a._v("#")]),a._v(" 哈希索引")]),a._v(" "),n("p",[a._v("哈希索引是基于哈希表实现的，只有精确匹配索引的所有列的查询才有效。它的限制：")]),a._v(" "),n("ol",[n("li",[a._v("哈希索引只包含哈希值和行指针，而不存储字段值，所以不能使用索引中的值来避免读取行")]),a._v(" "),n("li",[a._v("哈希索引数据并不是按照索引值得顺序存储的，所以也就无法用于排序")]),a._v(" "),n("li",[a._v("哈希索引也不支持部分索引列匹配查找，因为哈希索引始终是使用索列的全部内容来计算哈希值")]),a._v(" "),n("li",[a._v("哈希索引只支持等值比较查询")]),a._v(" "),n("li",[a._v("访问哈希索引的数据非常快，除非有很多哈希冲突")]),a._v(" "),n("li",[a._v("如果有哈希冲突很多的话，一些索引维护操作的代价也会很高")])]),a._v(" "),n("h4",{attrs:{id:"空间数据索引（r-tree"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#空间数据索引（r-tree","aria-hidden":"true"}},[a._v("#")]),a._v(" 空间数据索引（R-Tree)")]),a._v(" "),n("p",[a._v("MyISAM表支持空间索引，可以用作地理数据存储。")]),a._v(" "),n("h4",{attrs:{id:"全文索引"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#全文索引","aria-hidden":"true"}},[a._v("#")]),a._v(" 全文索引")]),a._v(" "),n("p",[a._v("全文索引是一种特殊类型的索引，它查找的是文本中的关键词，而不是直接比较索引中的值。全文搜索和其他几类索引的匹配方式完全不一样。它有许多需要注意的细节，如停用词、词干和复数、布尔搜索等。全文索引更类似于搜索引擎做的事情，而不是简单的WHERE条件匹配。")]),a._v(" "),n("p",[a._v("在相同的列上同时创建全文索引和基于值的B-Tree索引不会有冲突，全文索引适用于 "),n("code",[a._v("MATCH AGAINST")]),a._v(" 操作，而不是普通的WHERE条件操作。")]),a._v(" "),n("h2",{attrs:{id:"_5-2-索引的优点"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-索引的优点","aria-hidden":"true"}},[a._v("#")]),a._v(" 5.2 索引的优点")]),a._v(" "),n("ol",[n("li",[a._v("大大减少了服务器扫描的数据量")]),a._v(" "),n("li",[a._v("可以帮助服务器避免排序和临时表")]),a._v(" "),n("li",[a._v("可以将随机I/O变为顺序I/O")])]),a._v(" "),n("h2",{attrs:{id:"_5-3-高性能的索引策略"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-3-高性能的索引策略","aria-hidden":"true"}},[a._v("#")]),a._v(" 5.3 高性能的索引策略")]),a._v(" "),n("h3",{attrs:{id:"_5-3-1-独立的列"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-3-1-独立的列","aria-hidden":"true"}},[a._v("#")]),a._v(" 5.3.1 独立的列")]),a._v(" "),n("p",[a._v("独立的列是指索引列不能是表达式的一部分，也不能是函数的参数。例如，下面的查询就不能使用actor_id索引:")]),a._v(" "),n("div",{staticClass:"language-sql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sql"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[a._v("select")]),a._v(" actor_id "),n("span",{attrs:{class:"token keyword"}},[a._v("from")]),a._v(" sakila"),n("span",{attrs:{class:"token punctuation"}},[a._v(".")]),a._v("actor "),n("span",{attrs:{class:"token keyword"}},[a._v("where")]),a._v(" actor_id "),n("span",{attrs:{class:"token operator"}},[a._v("+")]),a._v(" "),n("span",{attrs:{class:"token number"}},[a._v("1")]),a._v(" "),n("span",{attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),n("span",{attrs:{class:"token number"}},[a._v("5")]),n("span",{attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br")])]),n("p",[a._v("显然，where中的表达式其实等价于actor_id = 4，但是MySQL无法自动解析这个方程式。另外一个常见的错误：")]),a._v(" "),n("div",{staticClass:"language-sql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sql"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[a._v("SELECT")]),a._v(" "),n("span",{attrs:{class:"token punctuation"}},[a._v(".")]),n("span",{attrs:{class:"token punctuation"}},[a._v(".")]),n("span",{attrs:{class:"token punctuation"}},[a._v(".")]),a._v(" "),n("span",{attrs:{class:"token keyword"}},[a._v("WHERE")]),a._v(" TO_DAYS"),n("span",{attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{attrs:{class:"token keyword"}},[a._v("CURRENT_DATE")]),n("span",{attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),n("span",{attrs:{class:"token operator"}},[a._v("-")]),a._v(" TO_DAYS"),n("span",{attrs:{class:"token punctuation"}},[a._v("(")]),a._v("date_col"),n("span",{attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),n("span",{attrs:{class:"token operator"}},[a._v("<=")]),a._v(" "),n("span",{attrs:{class:"token number"}},[a._v("10")]),n("span",{attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br")])]),n("h3",{attrs:{id:"_5-3-2-前缀索引和索引选择性"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-3-2-前缀索引和索引选择性","aria-hidden":"true"}},[a._v("#")]),a._v(" 5.3.2 前缀索引和索引选择性")]),a._v(" "),n("p",[a._v("有时候需要索引很长的字符列，这会让索引变得大而且慢，通过可以索引开始的部分字符，这样可以大大节约索引空间，从而提高索引效率。但是也会降低索引的选择性。")]),a._v(" "),n("p",[a._v("索引的选择性是指不重复的索引值（也称为基数）和数据表的记录总数（#T）的壁纸，范围从1/#T到1之间。索引的选择性越高则查询的效率越高。")]),a._v(" "),n("p",[a._v("对于BLOB，TEXT或者很长的VARCHAR类型的列，必须使用前缀索引，因为MySQL不允许索引这些列的完整长度。诀窍在于要选择足够长的前缀以保证高的选择性，同时为了节约空间又不能太长。")]),a._v(" "),n("p",[a._v("计算不同前缀长度的选择性：")]),a._v(" "),n("p",[n("img",{attrs:{src:t(168),alt:"PREFIX INDEX"}})]),a._v(" "),n("p",[a._v("当前缀长度达到7时选择性的提升幅度已经很小了。找到合适的前缀索引长度后如何创建前缀索引呢？")]),a._v(" "),n("div",{staticClass:"language-SQL line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sql"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[a._v("ALTER")]),a._v(" "),n("span",{attrs:{class:"token keyword"}},[a._v("TABLE")]),a._v(" sakila"),n("span",{attrs:{class:"token punctuation"}},[a._v(".")]),a._v("city_demo "),n("span",{attrs:{class:"token keyword"}},[a._v("ADD")]),a._v(" "),n("span",{attrs:{class:"token keyword"}},[a._v("KEY")]),a._v(" "),n("span",{attrs:{class:"token punctuation"}},[a._v("(")]),a._v("city"),n("span",{attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{attrs:{class:"token number"}},[a._v("7")]),n("span",{attrs:{class:"token punctuation"}},[a._v(")")]),n("span",{attrs:{class:"token punctuation"}},[a._v(")")]),n("span",{attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br")])]),n("p",[a._v("前缀索引是一种能够使索引更小更快的有效方法，但是 "),n("strong",[a._v("MySQL无法使用前缀索引做ORDER BY 和 GROUP BY，也无法使用前缀索引做覆盖扫描")]),a._v(" 。")]),a._v(" "),n("h3",{attrs:{id:"_5-3-3-选择合适的索引列顺序"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-3-3-选择合适的索引列顺序","aria-hidden":"true"}},[a._v("#")]),a._v(" 5.3.3 选择合适的索引列顺序")]),a._v(" "),n("p",[a._v("经验法则：将选择性最高的列放到索引最前列。当不需要考虑排序和分组时，将选择性最高的列放在前面通常是很好的。性能不但和索引列的选择性有关，也和查询条件的值得分布有关。以下面的查询为例：")]),a._v(" "),n("div",{staticClass:"language-sql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sql"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[a._v("SELECT")]),a._v(" "),n("span",{attrs:{class:"token operator"}},[a._v("*")]),a._v(" "),n("span",{attrs:{class:"token keyword"}},[a._v("FROM")]),a._v(" payment "),n("span",{attrs:{class:"token keyword"}},[a._v("WHERE")]),a._v(" staff_id "),n("span",{attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),n("span",{attrs:{class:"token number"}},[a._v("2")]),a._v(" "),n("span",{attrs:{class:"token operator"}},[a._v("AND")]),a._v(" customer_id "),n("span",{attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),n("span",{attrs:{class:"token number"}},[a._v("584")]),n("span",{attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br")])]),n("p",[a._v("在确定索引的顺序前，可以跑一些查询来确定在表中值得分布情况，查询情况：")]),a._v(" "),n("div",{staticClass:"language-sql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sql"}},[n("code",[a._v("mysql"),n("span",{attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),n("span",{attrs:{class:"token keyword"}},[a._v("SELECT")]),a._v(" "),n("span",{attrs:{class:"token function"}},[a._v("SUM")]),n("span",{attrs:{class:"token punctuation"}},[a._v("(")]),a._v("stadff_id "),n("span",{attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),n("span",{attrs:{class:"token number"}},[a._v("2")]),n("span",{attrs:{class:"token punctuation"}},[a._v(")")]),n("span",{attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),n("span",{attrs:{class:"token function"}},[a._v("SUM")]),n("span",{attrs:{class:"token punctuation"}},[a._v("(")]),a._v("customer_id "),n("span",{attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),n("span",{attrs:{class:"token number"}},[a._v("584")]),n("span",{attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),n("span",{attrs:{class:"token keyword"}},[a._v("FROM")]),a._v(" payment"),n("span",{attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),n("span",{attrs:{class:"token operator"}},[a._v("+")]),n("span",{attrs:{class:"token comment"}},[a._v("----------------------+------------------------+")]),a._v("\n"),n("span",{attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),n("span",{attrs:{class:"token function"}},[a._v("SUM")]),n("span",{attrs:{class:"token punctuation"}},[a._v("(")]),a._v("staff_id "),n("span",{attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),n("span",{attrs:{class:"token number"}},[a._v("2")]),n("span",{attrs:{class:"token punctuation"}},[a._v(")")]),a._v("    "),n("span",{attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),n("span",{attrs:{class:"token function"}},[a._v("SUM")]),n("span",{attrs:{class:"token punctuation"}},[a._v("(")]),a._v("customer_id "),n("span",{attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),n("span",{attrs:{class:"token number"}},[a._v("584")]),n("span",{attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),n("span",{attrs:{class:"token operator"}},[a._v("|")]),a._v(" \n"),n("span",{attrs:{class:"token operator"}},[a._v("+")]),n("span",{attrs:{class:"token comment"}},[a._v("----------------------+------------------------+")]),a._v("\n"),n("span",{attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),n("span",{attrs:{class:"token number"}},[a._v("7992")]),a._v("                 "),n("span",{attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),n("span",{attrs:{class:"token number"}},[a._v("30")]),a._v("                     "),n("span",{attrs:{class:"token operator"}},[a._v("|")]),a._v(" \n"),n("span",{attrs:{class:"token operator"}},[a._v("+")]),n("span",{attrs:{class:"token comment"}},[a._v("----------------------+------------------------+")]),a._v("\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br")])]),n("p",[a._v("根据前面的经验法则，应该把索引列customer_id放到前面，因为对应条件值的customer_id数量更小。不过最好还是按经验法则来做，因为经验法则考虑的是全局基数和选择性，而不是某个具体查询：")]),a._v(" "),n("div",{staticClass:"language-sql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sql"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[a._v("SELECT")]),a._v("\n    "),n("span",{attrs:{class:"token function"}},[a._v("COUNT")]),n("span",{attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{attrs:{class:"token keyword"}},[a._v("DISTINCT")]),a._v(" staff_id"),n("span",{attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),n("span",{attrs:{class:"token operator"}},[a._v("/")]),a._v(" "),n("span",{attrs:{class:"token function"}},[a._v("COUNT")]),n("span",{attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{attrs:{class:"token operator"}},[a._v("*")]),n("span",{attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),n("span",{attrs:{class:"token keyword"}},[a._v("AS")]),a._v(" staff_id_selectivity"),n("span",{attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    "),n("span",{attrs:{class:"token function"}},[a._v("COUNT")]),n("span",{attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{attrs:{class:"token keyword"}},[a._v("DISTINCT")]),a._v(" customer_id"),n("span",{attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),n("span",{attrs:{class:"token operator"}},[a._v("/")]),a._v(" "),n("span",{attrs:{class:"token function"}},[a._v("COUNT")]),n("span",{attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{attrs:{class:"token operator"}},[a._v("*")]),n("span",{attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),n("span",{attrs:{class:"token keyword"}},[a._v("AS")]),a._v(" customer_id_selectivity"),n("span",{attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    "),n("span",{attrs:{class:"token function"}},[a._v("COUNT")]),n("span",{attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{attrs:{class:"token operator"}},[a._v("*")]),n("span",{attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),n("span",{attrs:{class:"token keyword"}},[a._v("FROM")]),a._v(" payment\\G\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br")])]),n("h3",{attrs:{id:"_5-3-5-聚簇索引"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-3-5-聚簇索引","aria-hidden":"true"}},[a._v("#")]),a._v(" 5.3.5 聚簇索引")]),a._v(" "),n("p",[a._v("聚簇索引并不是一种单独的索引类型，而是一种数据存储方式。具体的细节依赖于其实现方式，但InnoDB的聚簇索引实际上是同一个结构中保存了B+Tree索引和数据行。当表由聚簇索引时，它的数据行实际上是存放在索引的叶子页中。术语”聚簇“表示数据行和相邻的键值紧凑的存储在一起。（非聚簇索引就是指B+Tree的叶子节点上的data，并不是数据本身，而是数据存放的地址。）")]),a._v(" "),n("p",[a._v("因为无法同时把数据行存放在两个不同的地方，所以一个表只能有一个聚簇索引。不是所有的存储引擎都支持聚簇索引。下图展示了聚簇索引中的记录和数据是如何存放的。")]),a._v(" "),n("p",[n("img",{attrs:{src:t(169),alt:"聚簇索引"}})]),a._v(" "),n("p",[a._v("非聚簇索引，又叫二级索引。二级索引的叶子节点中保存的不是指向行的物理指针，而是行的主键值。当通过二级索引查找行，存储引擎需要在二级索引中找到相应的叶子节点，获得行的主键值，然后使用主键去聚簇索引中查找数据行，这需要两次B-Tree查找。\n"),n("img",{attrs:{src:t(170),alt:"聚簇索引和非聚簇索引的区别"}})]),a._v(" "),n("p",[a._v("聚簇索引可能对性能有帮助，也有可能导致严重的性能问题。\n【优点】")]),a._v(" "),n("ol",[n("li",[a._v("可以把相关的数据保存在一起")]),a._v(" "),n("li",[a._v("数据访问更快")]),a._v(" "),n("li",[a._v("使用覆盖索引扫描的查询可以直接使用叶节点中的主键值")])]),a._v(" "),n("p",[a._v("【缺点】")]),a._v(" "),n("ol",[n("li",[a._v("聚簇数据最大限度的提高了I/O密集型应用的性能，但是如果数据都存放在内存中，则访问的顺序就没那么重要了，聚簇索引也就没有什么优势了。")]),a._v(" "),n("li",[a._v("插入速度严重依赖于插入顺序。按照主键的顺序插入式加载数据到InnoDB表中速度最快的方式，但如果不是，那么在加载完成后最好使用"),n("code",[a._v("OPTIMIZE TABLE")]),a._v("命令重新组织一下表。")]),a._v(" "),n("li",[a._v("更新聚簇索引列的代价很高，因为强制InnoDB将每个被更新的行移动到新的位置。")]),a._v(" "),n("li",[a._v("移动式可能面临”页分裂“的问题，导致表占用更多的磁盘空间。")]),a._v(" "),n("li",[a._v("聚簇索引可能导致全表扫描变慢，尤其是行比价哦系数或者由于页分裂导致数据存储不连续的时候。")]),a._v(" "),n("li",[a._v("二级索引（非聚簇索引）可能比想象中的大，因为二级索引的叶子节点包含了行的主键列。")]),a._v(" "),n("li",[a._v("二级行访问需要两次查找，而不是一次。二级索引中保存的是“行指针”，存储引擎找到二级索引的叶子节点或得对应主键值，然后通过主键值去聚簇索引中查找到对应的行。")])]),a._v(" "),n("h4",{attrs:{id:"在innodb中按主键顺序插入行"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#在innodb中按主键顺序插入行","aria-hidden":"true"}},[a._v("#")]),a._v(" 在InnoDB中按主键顺序插入行")]),a._v(" "),n("p",[a._v("如果正在使用InnoDB表并且没有什么数据需要聚集，那么可以定义一个代理键(surrogatekey)作为主键，这种主键的数据应该和应用无关，最简单的方法是使用 "),n("code",[a._v("AUTO_ INCREMENT")]),a._v(" 自增列。这样可以"),n("strong",[a._v("保证数据行是按顺序写人，对于根据主键做关联操作的性能也会更好")]),a._v("。")]),a._v(" "),n("h3",{attrs:{id:"_5-3-6-覆盖索引"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-3-6-覆盖索引","aria-hidden":"true"}},[a._v("#")]),a._v(" 5.3.6 覆盖索引")]),a._v(" "),n("p",[a._v("如果索引的叶子结点中已经包含（或者说覆盖）要查询的数据，则称之为覆盖索引。")]),a._v(" "),n("h3",{attrs:{id:"_5-3-7-使用索引扫描来做排序"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-3-7-使用索引扫描来做排序","aria-hidden":"true"}},[a._v("#")]),a._v(" 5.3.7 使用索引扫描来做排序")]),a._v(" "),n("p",[a._v("MySQL可以通过（1）排序操作或者（2）按索引顺序扫描来生成有序结果。（如果EXPLAIN出来的type列值为index，则说明MySQL使用了索引扫描来做排序，不要和Exta列的“Using index”搞混淆了）。")]),a._v(" "),n("ol",[n("li",[a._v("只有当索引的列顺序和"),n("code",[a._v("ORDER BY")]),a._v("子句的顺序完全一致，并且所有列的排序方向（倒序或者正序）都一样时，MySQL才可以使用索引来对结果做排序。")]),a._v(" "),n("li",[a._v("如果查询需要关联多张表，则只有当"),n("code",[a._v("ORDER BY")]),a._v("子句引用的字段全部为第一个表时，才能使用索引做排序。"),n("code",[a._v("ORDER BY")]),a._v("子句和查找型查询的限制是一样的：需要满足索引的最左前缀的要求")])]),a._v(" "),n("p",[a._v("否则，MySQL都需要执行排序操作，无法利用索引排序。")]),a._v(" "),n("h3",{attrs:{id:"_5-3-8-压缩（前缀压缩）索引"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-3-8-压缩（前缀压缩）索引","aria-hidden":"true"}},[a._v("#")]),a._v(" 5.3.8 压缩（前缀压缩）索引")]),a._v(" "),n("p",[a._v("MyISAM使用前缀压缩来减少索引的大小，提高性能。其方法是：先完全保存索引块中的第一个值，然后将其他值和第一个值进行比较得到相同前缀的字节数和剩余的不同后缀部分，把这部分存储起来即可。例如第一个值为“perform”，第二个值为“performance”，那么第二个值可以压缩为“7,ance”。")]),a._v(" "),n("p",[a._v("压缩块可以减少空间，但是操作可能更慢，并且后面的值依赖前面的值。正序扫描速度还不错，但是倒序扫描就不是很好了。")]),a._v(" "),n("h3",{attrs:{id:"_5-3-9-冗余和重复索引"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-3-9-冗余和重复索引","aria-hidden":"true"}},[a._v("#")]),a._v(" 5.3.9 冗余和重复索引")]),a._v(" "),n("p",[a._v("重复索引是指在相同的列上按照相同的顺序创建的相同类型的索引，应该避免，发现后也应该立即移除。")]),a._v(" "),n("h3",{attrs:{id:"_5-3-10-未使用的索引"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-3-10-未使用的索引","aria-hidden":"true"}},[a._v("#")]),a._v(" 5.3.10 未使用的索引")]),a._v(" "),n("p",[a._v("删！")]),a._v(" "),n("h3",{attrs:{id:"_5-3-11-索引和锁"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-3-11-索引和锁","aria-hidden":"true"}},[a._v("#")]),a._v(" 5.3.11 索引和锁")]),a._v(" "),n("h3",{attrs:{id:"_5-4-2-避免多个范围条件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-4-2-避免多个范围条件","aria-hidden":"true"}},[a._v("#")]),a._v(" 5.4.2 避免多个范围条件")]),a._v(" "),n("p",[a._v("对于范围条件查询，MySQL无法使用范围列后面的其他索引列，但是对于多个等值条件查询则没有这个限制。如"),n("code",[a._v("WHERE")]),a._v("和"),n("code",[a._v("IN")]),a._v("。")]),a._v(" "),n("h2",{attrs:{id:"_5-5-维护索引和表"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-5-维护索引和表","aria-hidden":"true"}},[a._v("#")]),a._v(" 5.5 维护索引和表")]),a._v(" "),n("h3",{attrs:{id:"_5-5-1-找到并修复损坏的表"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-5-1-找到并修复损坏的表","aria-hidden":"true"}},[a._v("#")]),a._v(" 5.5.1 找到并修复损坏的表")]),a._v(" "),n("p",[n("code",[a._v("CHECK TABLE")]),a._v(" 通常能够找出大多数的表和索引的错误，可以使用 "),n("code",[a._v("REPAIR TABLE")]),a._v(" 命令来修复损坏的表。")]),a._v(" "),n("h3",{attrs:{id:"_5-5-3-减少索引和数据的碎片"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-5-3-减少索引和数据的碎片","aria-hidden":"true"}},[a._v("#")]),a._v(" 5.5.3 减少索引和数据的碎片")]),a._v(" "),n("p",[a._v("B-Tree索引可能会碎片化，进而降低查询的效率。根据设计，B-Tree需要随机磁盘访问才能定位到叶子页，随机访问是不可避免的。如果叶子页在物理分布上是顺序紧密的，那么查询的性能就会更好。")]),a._v(" "),n("p",[a._v("可以通过执行 "),n("code",[a._v("OPTIMIZE TABLE")]),a._v(" 或者导出再导入的方式来重新整理数据。对于不支持 "),n("code",[a._v("OPTIMIZE TABLE")]),a._v(" 的存储引擎，可以通过一个不做任何操作的 "),n("code",[a._v("ALTER TABLE")]),a._v(" 操作来重建表，只需要将标的存储引擎修改为当前的引擎即可：")]),a._v(" "),n("div",{staticClass:"language-sql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sql"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[a._v("ALTER")]),a._v(" "),n("span",{attrs:{class:"token keyword"}},[a._v("TABLE")]),a._v(" table_name ENGIN"),n("span",{attrs:{class:"token operator"}},[a._v("=")]),n("span",{attrs:{class:"token operator"}},[a._v("<")]),a._v("engin"),n("span",{attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br")])])])}],e=t(0),r=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},n,!1,null,null,null);r.options.__file="05.md";s.default=r.exports}}]);