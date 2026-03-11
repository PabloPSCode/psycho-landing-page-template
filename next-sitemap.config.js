/** @type {import('next-sitemap').IConfig} */
const siteUrl =
  "https://www.camilaterapeutatrg.com.br";

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  sitemapSize: 7000,
  changefreq: "weekly",
  priority: 0.7,
  autoLastmod: true,
  additionalPaths: async (config) => [await config.transform(config, "/")],
  transform: async (config, path) => ({
    loc: path,
    changefreq: path === "/" ? "weekly" : config.changefreq,
    priority: path === "/" ? 1 : config.priority,
    lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
  }),
};
