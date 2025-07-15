// components/JsonLd.tsx
'use client';

import React from 'react';

interface JsonLdProps {
  json: Record<string, any>;
}

const JsonLd: React.FC<JsonLdProps> = ({ json }) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
};

export default JsonLd;
