module.exports = {
    title: 'Bing Docs',
    description: '文档空间',
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        search: true,
        searchMaxSuggestions: 10,
        nav: [
            { text: '主页', link: '/' },
            {
                text: '归档',
                items: [
                    { text: 'PHP', link: '/PHP/content' },
                    { text: '网络', link: '/network/content' },
                    { text: 'Linux', link: '/Linux/content' },
                    { text: 'Docker', link: '/docker/content' },
                    { text: '操作系统', link: '/OS/content' },
                    { text: 'JavaScipt', link: '/JavaScript/content' },
                    { text: '数据库', link: '/Database/content' },
                    { text: '生物信息', link: '/Bioinformatics/content' },
                ]
            },
            {
                text: '专栏',
                items: [
                    { text: 'Redis', link: '/topic/redis/redis' },
                    { text: '更多...', link: '/topic/centent' },
                ]
            },
            {
                text: '杂谈',
                items: [
                    { text: '谈谈Redis', link: '/gossip/redis/redis' },
                    { text: '更多...', link: '/gossip/centent' },
                ]
            },
            { text: '关于', link: '/aboutme' }
        ],
        sidebar: {
            '/PHP/': [
                'content',
                'basic',
                'tips',
                'sugs',
                'static',
                'router',
                'composer',
                'OOP/SRP',
                'OOP/OCP',
                'OOP/LSP',
                'OOP/ISP',
                'OOP/DIP',
                'OOP/abstract_class',
                'Laravel/Container',
                'pattern/singleton'
            ],
            '/network/': [
                'content',
                'physical',
                'DataLink',
                'transport',
                'network',
                'TCP',
                'DNS',
                'OSI',
                'protocals'
            ],
            '/Linux/': [
                'content',
                'centos_ssh_login_too_slowly',
                'centos5_yum_source',
                'R730Linux_driver',
                'iptables',
                'LC_CTYPE_error',
                'netstat',
                'PBS',
                'yum_Segmentation_fault',
                'zombie_process',
                'cpu_frequence_controller',
                'mount_panasass_storage',
                'log_analysis',
                'change_perl_module_locations',
                'sys_info',
                'sys_and_hardware_clock',
                'compile_gcc',
                'track_process',
                'web_security',
            ],
            '/docker/': [
                'content',
                'command',
                'dockerfile',
                'network',
                'container_process',
            ],
            '/OS/': [
                'content',
                'history',
                'memory',
                'process_thread',
                'deadlock_hungry',
                'sync',
            ],
            '/JavaScript/': [
                'content',
                'es6_import_jquery',
                'js_deepcopy',
                'js_tips',
                'XMLHttpRequest',
                'React.js/React_webpack_babel_config'
            ],
            '/Database/': [
                'content',
                'MySQL/basic',
                'MySQL/leetcode',
                'MySQL/optimization',
                'Redis/Redis',
            ],
            '/Bioinformatics/': [
                'content',
                'softwares_install/easy_install',
                'softwares_install/augustus',
                'softwares_install/interproscan',
                'scripts/gtf2gff3.md'
            ],
            '/': [
                '',
                'aboutme',
                'INSTALL',
            ],
        },
        lastUpdated: '最近更新', // string | boolean
    }
}