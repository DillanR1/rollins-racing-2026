import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const page = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    body: z.string().optional(),
    heroImage: z.string().optional(),
    helmetImage: z.string().optional(),
    venmoQr: z.string().optional(),
    venmoHandle: z.string().optional(),
    facebookUrl: z.string().optional(),
  }),
});

const sponsorshipLevels = defineCollection({
  loader: glob({
    pattern: '**/*.mdx',  // Only .mdx, suppresses .md warning
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
    bullet1: z.string().optional(),
    bullet2: z.string().optional(),
    bullet3: z.string().optional(),
  }),
});

const footer = defineCollection({
  type: 'content',
  schema: z.object({
    contactName: z.string().optional(),
    email: z.string().optional(),
    phone: z.string().optional(),
  }),
});

export const collections = { page, sponsorshipLevels, benefits, footer };