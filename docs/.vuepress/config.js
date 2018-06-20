module.exports = {
    title: '我的网站',
    description: 'Just playing around',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/' },
            {
                text: 'Languages',
                items: [
                    { text: 'Chinese', link: '/language/chinese/' },
                    { text: 'Japanese', link: '/language/japanese/' }
                ]
            },
            { text: 'External', link: 'https://google.com' },
        ],
        sidebar: [
            ['/','首页'],
            ['/bar/','ceshi'],
            ['/foo/','dhh']
        ],
        search: false,
        searchMaxSuggestions: 10
    }
}