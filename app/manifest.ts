import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'rozy.dev',
        short_name: 'rozy',
        description: `Firmansyah Rozy's Portfolio Website`,
        start_url: '/',
        display: 'standalone',
        background_color: '#1c1c22',
        theme_color: '#00e187',
        icons: [
            {
                src: '/favicon.png',
                sizes: 'any',
                type: 'image/png',
            },
        ],
    }
}