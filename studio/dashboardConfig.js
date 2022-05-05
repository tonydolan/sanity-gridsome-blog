export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6273eaf0c551cd6b75f47157',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-a88r28wk',
                  apiId: '013ce086-0f11-4bfc-9d89-2966914a8e50'
                },
                {
                  buildHookId: '6273eaf0e0ae296eeb58ace0',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-xucpn93v',
                  apiId: '053ff204-4369-4922-b224-9486c8e292c0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tonydolan/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-xucpn93v.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
