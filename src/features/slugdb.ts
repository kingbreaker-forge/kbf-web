type MetadataImports<T> = Record<string, { default: T }>;

type WithSlug<T> = T & { slug: string };

class SlugDatabaseRegexError extends Error {}

export class NoSuchSlugError extends Error {
  constructor(public readonly slug: string) {
    super(`No such slug: ${slug}`);
  }
}

export class SlugDatabase<T> {
  // SlugDatabase is an in-memory faux-database and key-value store for resolving URLs to structured page metadata
  private slugMap = new Map<string, T>();

  constructor(metadataImports: MetadataImports<T>, importSlugRegexp: RegExp) {
    for (const [importPath, { default: obj }] of Object.entries(metadataImports)) {
      const match = importSlugRegexp.exec(importPath);
      if (!match) {
        throw new SlugDatabaseRegexError(
          `No import match; path=${importPath} pattern=${importSlugRegexp}`,
        );
      }
      const slug = match.groups?.slug;
      if (!slug) {
        throw new SlugDatabaseRegexError(
          `Slug was empty; path=${importPath} pattern=${importSlugRegexp}`,
        );
      }

      this.slugMap.set(slug, obj);
    }
  }

  getSlug = (slug: string): WithSlug<T> => {
    const obj = this.slugMap.get(slug);
    if (!obj) {
      throw new NoSuchSlugError(slug);
    }
    return { ...obj, slug };
  };

  listSlugs = () => [...this.slugMap.keys()];

  items = () => this.slugMap.keys().map((key) => this.getSlug(key));
}
