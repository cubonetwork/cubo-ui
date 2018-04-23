import { MetaLoader, MetaStaticLoader, PageTitlePositioning } from '@ngx-meta/core';

export function metaFactory(): MetaLoader {
  return new MetaStaticLoader({
    pageTitlePositioning: PageTitlePositioning.PrependPageTitle,
    pageTitleSeparator: ' | ',
    applicationName: 'Cubo UI',
    defaults: {
      title: 'Cubo UI',
      description: 'Cubo\'s components to Angular',
      'og:image': '',
      'og:type': 'website',
      'og:locale': 'en'
    }
  });
}
