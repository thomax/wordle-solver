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
                  buildHookId: '6217428aa65bbf99c26476c1',
                  title: 'Sanity Studio',
                  name: 'wordle-solver-studio',
                  apiId: '8708ef99-077b-4a2b-932b-89a01d742d0d'
                },
                {
                  buildHookId: '6217428a2a3536724c993007',
                  title: 'Blog Website',
                  name: 'wordle-solver-web',
                  apiId: 'f3b87a75-a72b-4eec-ad5a-1c3b4adbbc57'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/thomax/wordle-solver',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://wordle-solver-web.netlify.app', category: 'apps'}
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
