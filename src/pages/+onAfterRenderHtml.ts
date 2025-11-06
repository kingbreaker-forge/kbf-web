import { PageContextServer } from 'vike/types';

export default (pageContext: PageContextServer) => {
  const collectedCss = (pageContext.app as unknown as { collectedCss: string }).collectedCss;
  const updatedPageHtml = pageContext.pageHtmlString!.replace(
    '</head>',
    `<style id="naive-ssr-css">${collectedCss}</style></head>`,
  );

  return { ...pageContext, pageHtmlString: updatedPageHtml };
};
