/*
  Optional seed script. Requires SANITY_WRITE_TOKEN in env and SANITY_PROJECT_ID/DATASET.
  DO NOT commit the token. Run locally only.
*/
import { createClient } from '@sanity/client';

const projectId = process.env.SANITY_PROJECT_ID!;
const dataset = process.env.SANITY_DATASET || 'production';
const token = process.env.SANITY_WRITE_TOKEN!;

if (!projectId || !token) {
  console.error('Missing SANITY_PROJECT_ID or SANITY_WRITE_TOKEN');
  process.exit(1);
}

const client = createClient({ projectId, dataset, apiVersion: '2024-10-01', token });

async function run() {
  await client.create({
    _type: 'artist',
    name: 'Sample Artist',
    slug: { current: 'sample-artist' },
    roles: ['Vocalist', 'Producer'],
    featured: true
  }).then((d) => d._id);

  const serviceId = await client.create({
    _type: 'service',
    title: 'Creative Direction',
    slug: { current: 'creative-direction' },
    description: 'High-touch creative direction for luxury brands.'
  }).then((d) => d._id);

  const clientDocId = await client.create({
    _type: 'client',
    name: 'Auric Records',
    slug: { current: 'auric-records' }
  }).then((d) => d._id);

  await client.create({
    _type: 'caseStudy',
    title: 'Auric Records Launch',
    slug: { current: 'auric-records-launch' },
    summary: 'Premium launch campaign delivering 2M impressions in 2 weeks.',
    client: { _type: 'reference', _ref: clientDocId },
    services: [{ _type: 'reference', _ref: serviceId }],
    execution: [
      { _type: 'pageSection', variant: 'hero', heading: 'Auric Records', subheading: 'Launch Campaign' },
      { _type: 'pageSection', variant: 'stats', stats: [ { label: 'Impressions', value: '2M' }, { label: 'CTR', value: '4.5%' } ] }
    ],
    results: { metrics: [ { label: 'Followers', value: '+25k' } ] },
    publishedAt: new Date().toISOString(),
    featured: true
  });

  await client.create({
    _type: 'page',
    title: 'About GT Media',
    slug: { current: 'about-gt-media' },
    content: [ { _type: 'pageSection', variant: 'textImage', heading: 'Our Story' } ]
  });

  console.log('Seed complete. Artist, Service, Client, Case Study, Page created.');
}

run().catch((e) => { console.error(e); process.exit(1); });
