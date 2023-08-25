/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        dangerouslyAllowSVG: true,
        domains: [
            'images.unsplash.com',
            'tailwindui.com',
            'res.cloudinary.com',
            '127.0.0.1',
        ],
    },
}

module.exports = nextConfig
