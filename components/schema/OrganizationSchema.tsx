import React from 'react';
import { JsonLd } from 'react-schemaorg';
import type { Corporation } from 'schema-dts';

export const organization: Corporation = {
  '@type': 'Corporation',
  name: 'Cyberbyte Software',
  url: 'https://cyberbyte.software',
  logo: 'https://cyberbyte.software/opengraph-image.png',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'GB',
    addressRegion: 'Kent',
  },
  iso6523Code: '9932:GB364633977',
  sameAs: [
    'https://www.linkedin.com/company/cyberbyte-software',
    'https://github.com/Cyberbyte-Studios',
  ],
};

const OrganizationSchema = () => (
  <JsonLd<Corporation>
    item={{ '@context': 'https://schema.org', ...organization }}
  />
);

export default OrganizationSchema;
