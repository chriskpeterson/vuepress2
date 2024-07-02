module.exports = {
title: 'Chris Peterson',
description: 'Resume and Work Samples',
themeConfig: {
    nav: [
        { text: 'Home', link: '/'},
        { text: 'About', link: '/about'},
        { text: 'Resume', link: '/resume'},
        { text: 'Writing Samples', link: '/writingsamples'},
        { text: 'Content Development', link: '/case-studies'}

    ],

    theme: [
        {'default-prefers-color-scheme' : true},
    ],

    head: [
        {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300&display=swap' },
      ],

    sidebar: 'auto'

}



}
