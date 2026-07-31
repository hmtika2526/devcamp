import React from 'react';
import FeatureCard from './FeatureCard';
import { FEATURES } from './AboutDevcamp.utils';

export default function FeaturesGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
      {FEATURES.map((feature, index) => (
        <FeatureCard
          key={index}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </div>
  );
}