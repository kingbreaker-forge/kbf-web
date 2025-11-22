export interface SupportsPageId {
  pageId: string;
}

export interface SupportsWithPageId {
  withPageId: (pageId: string) => this & SupportsPageId;
}

type ImportMetaGlobResult<T> = Record<string, () => Promise<T>>;

export const collectPageMetas = <T>(
  importMetaGlobResult: ImportMetaGlobResult<T & SupportsWithPageId>,
) =>
  Object.fromEntries(
    Object.entries(importMetaGlobResult).map(([k, v]): [string, Promise<T & SupportsPageId>] => [
      k,
      v().then((meta) => meta.withPageId(k)),
    ]),
  );

export const definePageMeta = <T>(values: T) => {
  const withPageId = (pageId: string) => ({
    ...values,
    pageId,
    withPageId,
  });

  return {
    ...values,
    withPageId,
  };
};
