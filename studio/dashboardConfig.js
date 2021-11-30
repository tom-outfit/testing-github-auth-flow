export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '61a60418a14c16289b58dc4d',
                  title: 'Sanity Studio',
                  name: 'testing-github-auth-flow-studio',
                  apiId: '1fa8a27b-6f38-4555-aaf5-3fafdb95eca8'
                },
                {
                  buildHookId: '61a604182e6ad4082640acce',
                  title: 'Landing pages Website',
                  name: 'testing-github-auth-flow',
                  apiId: 'b1757ee8-f5ef-4fa0-9adf-fd90d544761f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tom-outfit/testing-github-auth-flow',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://testing-github-auth-flow.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
