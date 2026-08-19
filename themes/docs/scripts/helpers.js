'use strict';

hexo.extend.helper.register('notes_for', function (title) {
  const notes = this.site.posts.toArray().filter((post) =>
    post.categories.toArray().some((cat) => cat.name === title)
  );

  notes.sort((a, b) => {
    const ao = a.order == null ? 9999 : Number(a.order);
    const bo = b.order == null ? 9999 : Number(b.order);
    if (ao !== bo) return ao - bo;
    return a.date.valueOf() - b.date.valueOf();
  });

  return notes;
});
