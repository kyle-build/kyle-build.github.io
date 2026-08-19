'use strict';

hexo.extend.generator.register('json-search', function (locals) {
  function text(item) {
    const raw = item.content || item.raw || '';
    return String(raw)
      .replace(/<[^>]+>/g, ' ')
      .replace(/[#>*`[\]]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim()
      .slice(0, 400);
  }

  const records = []
    .concat(locals.posts.toArray(), locals.pages.toArray())
    .filter((item) => item.title)
    .map((item) => ({
      title: item.title,
      url: this.config.root + item.path,
      content: text(item)
    }));

  return {
    path: 'search.json',
    data: JSON.stringify(records)
  };
});
