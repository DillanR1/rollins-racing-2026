import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const page = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    body: z.string().optional(),  // Made optional to avoid required errors on files without it
    heroImage: z.string().optional(),
    helmetImage: z.string().optional(),
    venmoQr: z.string().optional(),
    venmoHandle: z.string().optional(),
    facebookUrl: z.string().optional(),
  }),
});

const sponsorshipLevels = defineCollection({
  loader: glob({
    pattern: ['**/*.mdx', '!**/_*.mdx'],  // Only .mdx, exclude drafts
    base: './src/content/sponsorshipLevels',
  }),
  schema: z.object({
    tier: z.string(),
    price: z.string().optional(),
    benefits: z.string(),
    gradient: z.enum(['primary', 'gold', 'silver', 'cyan', 'highfive']),
  }),
});

const benefits = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    emoji: z.string().optional(),
    bullet1: z.string(),
    bullet2: z.string(),
    bullet3: z.string().optional(),
  }),
});

const footer = defineCollection({
  type: 'content',
  schema: z.object({
    contactName: z.string(),
    email: z.string(),
    phone: z.string(),
  }),
});

export const collections = { page, sponsorshipLevels, benefits, footer };