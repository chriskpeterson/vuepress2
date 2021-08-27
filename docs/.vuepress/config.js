module.exports = {
title: 'Chris Peterson',
description: 'Resume and Work Samples',
themeConfig: {
    nav: [
        { text: 'Home', link: '/'},
        { text: 'Resume', link: '/resume'},
        { text: 'Writing samples', link: 'writingsamples.html'},
        { text: 'Work Projects', link: 'projects.html'}
    ],

    theme: [
        {'default-prefers-color-scheme' : true},
    ],

    head: [
        {'link',  rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300&display=swap' },
      ],

    sidebar: 'auto'

}



}
