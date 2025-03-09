const process = require('node:process');

/** @type {import('next-sitemap').IConfig} */
module.exports = {
	siteUrl: process.env.SITE_URL || 'http://tasking-flame.vercel.app/',
	generateRobotsTxt: true,
};
