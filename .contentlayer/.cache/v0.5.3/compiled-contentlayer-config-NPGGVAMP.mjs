// contentlayer.config.js
import { defineDocumentType, makeSource } from "contentlayer2/source-files";
var computedFields = {
  slug: {
    type: "string",
    resolve: (doc) => `/${doc._raw.flattenedPath}`
  },
  slugAsParams: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/")
  },
  folder: {
    type: "string",
    resolve: (doc) => {
      const pathParts = doc._raw.flattenedPath.split("/");
      return pathParts.length > 1 ? pathParts[pathParts.length - 2] : null;
    }
  }
};
var Works = defineDocumentType(() => ({
  name: "Works",
  filePathPattern: "./works/**/*.mdx",
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true
    }
  },
  computedFields
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "./contents",
  documentTypes: [Works]
  // mdx: {
  //   remarkPlugins: [remarkGfm],
  //   rehypePlugins: [
  //     rehypeSlug,
  //     [
  //       rehypePrettyCode,
  //       {
  //         theme: { light: 'github-light-default', dark: 'github-dark-dimmed' },
  //         keepBackground: false,
  //       },
  //     ],
  //     [
  //       rehypeAutolinkHeadings,
  //       {
  //         behavior: 'wrap',
  //         content: (node) => node.children,
  //         properties: {
  //           className: ['subheading-anchor'],
  //           ariaLabel: 'Link to section',
  //         },
  //       },
  //     ],
  //   ],
  // },
});
export {
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-NPGGVAMP.mjs.map
