import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import dynamic from 'next/dynamic';
import Loading from '@/components/Loading';

const SpotlightCard = dynamic(() => import('@/utils/SpotlightCard'), {
    ssr: true,
    loading: () => <Loading />,
});

interface FeatureCardProps {
    icon: IconDefinition;
    title: string;
    description: string;
    spotlightColor?: `rgba(${number}, ${number}, ${number}, ${number})`;
    className?: string;
}

export default function FeatureCard({
    icon,
    title,
    description,
    spotlightColor = "rgba(46, 83, 176, 0.4)",
    className = "w-[90%] sm:w-[100%] mx-auto bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-5 shadow-sm hover:shadow-md transition duration-200 flex flex-col h-full"
}: FeatureCardProps) {
    return (
        <SpotlightCard
            spotlightColor={spotlightColor}
            className={className}
        >
            <div className="text-[#2E53B0] text-3xl mb-3">
                <FontAwesomeIcon icon={icon} />
            </div>
            <h3 className="text-white text-xl font-semibold mb-1 font-orbitron">
                {title}
            </h3>
            <p className="text-white/70 text-sm">
                {description}
            </p>
        </SpotlightCard>
    );
}