import React from 'react';
import dynamic from 'next/dynamic';
import Loading from '@/components/Loading';

const ScrollFloat = dynamic(() => import('@/utils/ScrollFloat'), { 
  ssr: true, 
  loading: () => <Loading />,
});

export default function AboutDevcampHeader() {
  return (
    <>
      <ScrollFloat
        containerClassName="text-center text-white font-orbitron font-bold"
        textClassName="text-3xl text-white mb-6"
        animationDuration={0.8}
        stagger={0.02}
        ease="easeOut"
      >
        What is DevCamp?
      </ScrollFloat>

      <p className="text-center text-white text-base max-w-2xl mx-auto mb-8 font-medium">
        DevCamp is a hands-on bootcamp by HMTIKA. Apply design principles, build semantic structures, and master CSS to launch dynamic websites.
      </p>
    </>
  );
}