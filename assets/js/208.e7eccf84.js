(window.webpackJsonp=window.webpackJsonp||[]).push([[208],{251:function(s,a,e){"use strict";e.r(a);var t=e(0),n=Object(t.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("div",{staticClass:"content"},[e("h1",{attrs:{id:"docker-命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker-命令","aria-hidden":"true"}},[s._v("#")]),s._v(" Docker 命令")]),s._v(" "),e("ul",[e("li",[s._v("查看docker信息")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("docker info\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ul",[e("li",[s._v("运行ubuntu")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("docker run -i -t -p 127.0.0.1:8080:80 --name the_ubuntu_container ubuntu /bin/bash\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("table",[e("thead",[e("tr",[e("th",[s._v("Option")]),s._v(" "),e("th",[s._v("Description")])])]),s._v(" "),e("tbody",[e("tr",[e("td",[s._v("-i")]),s._v(" "),e("td",[s._v("STDIN")])]),s._v(" "),e("tr",[e("td",[s._v("-t")]),s._v(" "),e("td",[s._v("tty")])]),s._v(" "),e("tr",[e("td",[s._v("-h")]),s._v(" "),e("td",[s._v("设置容器的主机名")])]),s._v(" "),e("tr",[e("td",[s._v("-p")]),s._v(" "),e("td",[s._v("绑定容器80端口到宿主机的8080端口，-P 公开所有的容器端口")])]),s._v(" "),e("tr",[e("td",[s._v("-w")]),s._v(" "),e("td",[s._v("指定工作目录")])]),s._v(" "),e("tr",[e("td",[s._v("-e")]),s._v(" "),e("td",[s._v('设置环境变量，  -e "WEB_PORT=8080"')])]),s._v(" "),e("tr",[e("td",[s._v("-v")]),s._v(" "),e("td",[s._v("将宿主机目录挂载到容器中，只读：-v "),e("code",[s._v("local_directory:container_directory:ro")]),s._v(" 读写：-v "),e("code",[s._v("local_directory:container_directory:rw")])])]),s._v(" "),e("tr",[e("td",[s._v("--name")]),s._v(" "),e("td",[s._v("容器命名")])]),s._v(" "),e("tr",[e("td",[s._v("--privileged")]),s._v(" "),e("td",[s._v("启动docker的特权模式，允许以宿主机具有的能力来运行容器，包括内核特性和设备访问")])]),s._v(" "),e("tr",[e("td",[s._v("--volumes-from")]),s._v(" "),e("td",[s._v("将指定容器里面的所有的卷加入到新创建的容器里，即使指定的容器没有运行，但必须存在")])]),s._v(" "),e("tr",[e("td",[s._v("--rm")]),s._v(" "),e("td",[s._v("容器只用一次")])])])]),s._v(" "),e("ul",[e("li",[s._v("重新启动一个容器")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("docker start the_ubuntu_container\ndocker restart  the_ubuntu_container\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("ul",[e("li",[s._v("附着到容器上")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("docker attach the_ubuntu_container\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ul",[e("li",[s._v("创建守护式进程\ndocker如果前台没有程序执行时会自动停止容器")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("docker run -i -t --name the_ubuntu_container -d ubuntu /bin/bash -c "),e("span",{attrs:{class:"token string"}},[s._v('"while true; do echo hello world; sleep 1; done"')]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ul",[e("li",[s._v("获取后台容器日志")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("docker logs -f the_ubuntu_container\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ul",[e("li",[s._v("查看容器内的进程")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("docker "),e("span",{attrs:{class:"token function"}},[s._v("top")]),s._v(" the_ubuntu_container\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ul",[e("li",[s._v("在容器内部运行进程[后台]")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("docker "),e("span",{attrs:{class:"token function"}},[s._v("exec")]),s._v(" -d the_ubuntu_container "),e("span",{attrs:{class:"token function"}},[s._v("touch")]),s._v(" /etc/new_config_file\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ul",[e("li",[s._v("在容器内部运行进程[交互]")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("docker "),e("span",{attrs:{class:"token function"}},[s._v("exec")]),s._v(" -t -i the_ubuntu_container "),e("span",{attrs:{class:"token function"}},[s._v("touch")]),s._v(" /bin/bash\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ul",[e("li",[s._v("停止守护式进程")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("docker stop the_ubuntu_container\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ul",[e("li",[s._v("自动重启容器")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("docker run --restart"),e("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v("always --name the_ubuntu_container -d ubuntu /bin/sh -c "),e("span",{attrs:{class:"token string"}},[s._v('"while true; do echo hello world; sleep 1; done"')]),s._v("\n--restart"),e("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v("always\t\t"),e("span",{attrs:{class:"token comment"}},[s._v("#无论退出代码时什么，都会自动重启 \\")]),s._v("\n--restart"),e("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v("on-failure\t"),e("span",{attrs:{class:"token comment"}},[s._v("#当容器退出代码为非0的值的时候重启 \\")]),s._v("\n--restart"),e("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v("on-failure:5\t"),e("span",{attrs:{class:"token comment"}},[s._v("#重启次数 ")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("ul",[e("li",[s._v("获取容器的更多信息")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("docker inspect the_ubuntu_container\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ul",[e("li",[s._v("删除容器")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("docker "),e("span",{attrs:{class:"token function"}},[s._v("rm")]),s._v(" the_ubuntu_container\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ul",[e("li",[s._v("删除全部容器")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("docker "),e("span",{attrs:{class:"token function"}},[s._v("rm")]),s._v(" "),e("span",{attrs:{class:"token variable"}},[e("span",{attrs:{class:"token variable"}},[s._v("`")]),s._v("docker "),e("span",{attrs:{class:"token function"}},[s._v("ps")]),s._v(" -a -q"),e("span",{attrs:{class:"token variable"}},[s._v("`")])]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ul",[e("li",[s._v("列出镜像")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("docker images\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ul",[e("li",[s._v("删除镜像")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("docker rmi test/ubuntu\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ul",[e("li",[s._v("拉取镜像")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("docker pull ubuntu\ndocker run -t -i --name new_container ub ubuntu /bin/bash  "),e("span",{attrs:{class:"token comment"}},[s._v("#如果本地不存在，自动拉取")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("ul",[e("li",[s._v("查找镜像")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("docker search puppet\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ul",[e("li",[s._v("构建镜像")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("docker build -t"),e("span",{attrs:{class:"token operator"}},[s._v("=")]),e("span",{attrs:{class:"token string"}},[s._v('"test/ubuntu"')]),s._v(" "),e("span",{attrs:{class:"token keyword"}},[s._v(".")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ul",[e("li",[s._v("查看镜像历史")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("docker "),e("span",{attrs:{class:"token function"}},[s._v("history")]),s._v(" the_ubuntu_container\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ul",[e("li",[s._v("将镜像推送到Docker Hub")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("docker login\ndocker push test/ubuntu\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("ul",[e("li",[s._v("将容器保存（快照）")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("docker "),e("span",{attrs:{class:"token function"}},[s._v("export")]),s._v(" 容器ID "),e("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v(" container.tar\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ul",[e("li",[s._v("将容器快照保存成镜像：")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{attrs:{class:"token function"}},[s._v("cat")]),s._v(" container.tar "),e("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v("docker "),e("span",{attrs:{class:"token function"}},[s._v("import")]),s._v(" -  image_name:image_tag\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])])}],!1,null,null,null);n.options.__file="command.md";a.default=n.exports}}]);