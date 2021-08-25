const request = require("request");
const cheerio = require("cheerio");
const got = require("got");

const images = [];
const link = process.argv[2];

// the request

request(link, (req, res, body) => {
  if (!console.error() && res.statusCode === 200) {
    const $ = cheerio.load(body);
    $("img").each(function () {
      const img = $(this).attr("src");
      images.push(img);
    });
    console.log(images);
  }
});

// Scrape links

got(link).then((response) => {
  const $ = cheerio.load(response.body);

  $("a").each((i, link) => {
    const { href } = link.attribs;
    console.log(href);
  });
});
