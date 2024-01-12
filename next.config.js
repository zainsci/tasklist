/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa")
const runtimeCaching = require("next-pwa/cache")
const basePath = process.env.NODE_ENV === "development" ? "" : "/tasklist"

module.exports = withPWA({
	pwa: {
		dest: "public",
		runtimeCaching,
	},
	images: {
		loader: "akamai",
		path: "/",
	},
	basePath,
})
