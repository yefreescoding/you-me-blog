export function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

export function formatDate(date) {
  return new Date(date).toLocaleDateString('en-US', {
    timeZone: 'UTC',
  });
}

export function formatBlogPost(
  post,
  {
    filterOutDrafts = true,
    filterOutFuturePosts = true,
    sortbyDate = true,
    limit = undefined,
  } = {}
) {
  const filteredPosts = post.reduce((acc, post) => {
    const { date, draft } = post.frontmatter;
    // filter out draft if true
    if (filterOutDrafts && draft) return acc;
    // filter out future posts if true
    if (filterOutFuturePosts && new Date(date) > new Date()) return acc;
    // add post to acc
    acc.push(post);
    return acc;
  }, []);

  // Sort by date or randomized
  if (sortbyDate) {
    filteredPosts.sort(
      (a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
    );
  } else {
    filteredPosts.sort(() => Math.random() - 0.5);
  }

  // limit the number we passed in
  if (typeof limit === 'number') {
    return filteredPosts.slice(0, limit);
  }

  return filteredPosts;
  // console.log(filteredPosts);
}
