import { MaybeRefOrGetter, computed, toRef } from 'vue';

import { renderAbort } from '@kb-web/features/errors';

import useBlogMetas from './useBlogMetas';

export default (pageId: string | MaybeRefOrGetter<string>) => {
  const pageIdRef = toRef(pageId);
  const blogMetas = useBlogMetas();

  return computed(() => {
    const foundArticle = blogMetas.find((it) => it.pageId == pageIdRef.value);
    if (!foundArticle) {
      throw renderAbort(404, 'Blog article not found', { pageId });
    }

    return foundArticle;
  });
};
