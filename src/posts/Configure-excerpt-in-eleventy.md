---
title: 为 Eleventy 配置文章摘要
date: '2024-01-09'
updated: '2024-01-09'
tags: [技术, Eleventy]
excerpt: 让博客的文章显示内容摘要是一个很常见的需求，这篇文章将介绍如何在 Eleventy 中配置文章摘要功能。
---

在 Eleventy 中，Markdown 文件通常会在头部对文章设置一些属性，Eleventy 会先通过 [gray-matter](https://www.npmjs.com/package/gray-matter) 这个包来解析这块内容，将文件的头部的属性设置和正文内容分开。

简单来说，这个包的功能就是把如下格式的内容：

```md
---
title: 这是文章标题
---

这是文章内容。

```

转换为下面这样的对象：

```js
{
  data: {
    title: '这是文章标题',
  },
  content: '这是文章内容。',
}
```

我们可以在 `.eleventy` 配置文件中使用 `setFrontMatterParsingOptions` 方法对这个包进行配置，通过配置这个包，就可以实现内容摘要的功能。

```js
// .eleventy.js
module.exports = function(eleventyConfig) {
  eleventyConfig.setFrontMatterParsingOptions({
    excerpt: true,
    // 可选, 默认为 "---"
    excerpt_separator: "<!-- excerpt -->"
  })
}
```

`excerpt` 属性表示是否启用摘要功能，`excerpt_separator` 属性表示摘要内容和正文内容的分割记号。按照上面的配置，我们可以在 Markdown 中这样写：

```md
---
title: 这是文章标题
---

这段文本将会作为摘要。

<!-- excerpt -->

从这里开始是正文内容。

```

配置完成后，在 njk 模板文件中读取文章内容时，通过 `page.excerpt` 属性即可获取到摘要内容。

关于配置摘要的其他详细内容请参见 [官方文档](https://www.11ty.dev/docs/data-frontmatter-customize/#example-parse-excerpts-from-content)。
