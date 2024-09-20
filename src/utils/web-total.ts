import convert from 'xml-js';

export const uppercaseFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const getBlogWebTotal = async () => {
  const xml = await fetch('https://blog.hunghg.me/rss.xml', {
    next: { revalidate: 60 },
  }).then((res) => res.text());

  const result1 = JSON.parse(convert.xml2json(xml, { compact: true }));

  const blogs = result1.rss.channel.item;

  return blogs;
};
