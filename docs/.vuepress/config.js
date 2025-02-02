module.exports = {
title: 'Chris Peterson',
description: 'Resume and Work Samples',
themeConfig: {
    nav: [
        { text: 'Home', link: '/'},
        { text: 'Resume', link: '/resume'},
        { text: 'Writing Samples', link: '/writingsamples'},
        { text: 'Documentation Strategy', link: '/documentation-strategy'}

    ],

    theme: [
        {'vuepress-theme-hope' : true},
    ],

    head: [
        {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300&display=swap' },
      ],

    sidebar: 'auto'

}


    
}
