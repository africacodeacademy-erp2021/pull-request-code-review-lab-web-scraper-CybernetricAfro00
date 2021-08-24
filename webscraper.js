const request = require("request");
const cheerio = require("cheerio");

const images = [];
request("https://www.istockphoto.com/illustrations/programmer", (req, res, body) => {
    if (!console.error() && res.statusCode === 200) {
      const $ = cheerio.load(body);
      $("img", "div.Gallery-module__rowContainer___3uUNM").each(function () {
        const img = $(this).attr("src");
        images.push(img);
      });
      console.log(images);
    
    });

// links

got(link)
.then((response) => {
  const $ = cheerio.load(response.body);

  $("a").each((i, link) => {
    const { href } = link.attribs;
    console.log(href);
  });
})