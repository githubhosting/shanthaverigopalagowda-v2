import nextMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'
import rehypePrism from '@mapbox/rehype-prism'
import i18n from 'i18n'

import path from 'path'

/** @type {import('next').NextConfig} */

const nextConfig = {
  pageExtensions: ['jsx', 'mdx'],
  reactStrictMode: true,
  i18n: {
    locales: ['default', 'en', 'ka'],
    defaultLocale: 'default',
    localeDetection: false,
    localePath: path.resolve('./public/locales'),
  },
  swcMinify: true,
  experimental: {
    newNextLinkBehavior: true,
    scrollRestoration: true,
  },
}

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypePrism],
  },
})

export default withMDX(nextConfig)
