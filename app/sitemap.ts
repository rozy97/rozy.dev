import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://rozy.dev',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
            images: ['https://raw.githubusercontent.com/rozy97/rozy.dev/refs/heads/main/public/capture-main.png'],
        },
        {
            url: 'https://rozy.dev/contact',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.9,
            images: ['https://raw.githubusercontent.com/rozy97/rozy.dev/refs/heads/main/public/capture-contact.png'],
        },
        {
            url: 'https://rozy.dev/resume',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
            images: ['https://raw.githubusercontent.com/rozy97/rozy.dev/refs/heads/main/public/capture-resume.png'],
        },
        {
            url: 'https://rozy.dev/services',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
            images: ['https://raw.githubusercontent.com/rozy97/rozy.dev/refs/heads/main/public/capture-services.png'],
        },
        {
            url: 'https://rozy.dev/work',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.6,
            images: ['https://raw.githubusercontent.com/rozy97/rozy.dev/refs/heads/main/public/capture-work.png'],
        },
    ]
}