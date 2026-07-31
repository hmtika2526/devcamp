'use client';

import React from 'react';
import AboutDevcampHeader from './AboutDevcampHeader';
import FeaturesGrid from './FeaturesGrid';

export default function AboutDevcamp() {
  return (
    <section className="py-12 container mx-auto z-10">
      <div className="mx-auto">
        <AboutDevcampHeader />
        <FeaturesGrid />
      </div>
    </section>
  );
}