import type { NextConfig } from "next"
import createNextIntlPlugin from "next-intl/plugin"
import createMDX from "@next/mdx"

const withNextIntl = createNextIntlPlugin()

const withMDX = createMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "mdx"],
}

export default withNextIntl(withMDX(nextConfig))
