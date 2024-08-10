module.exports = {
title: 'Chris Peterson',
description: 'Resume and Work Samples',
themeConfig: {
    nav: [
        { text: 'Home', link: '/'},
        { text: 'Resume', link: ''},
        { text: 'Writing Samples', link: ''},
        { text: 'Documentation Strategy', link: ''}

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
