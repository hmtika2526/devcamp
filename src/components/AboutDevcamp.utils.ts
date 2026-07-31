import { 
  faCode, 
  faRocket, 
  faPalette,
  IconDefinition 
} from '@fortawesome/free-solid-svg-icons';

export interface Feature {
  icon: IconDefinition;
  title: string;
  description: string;
}

export const FEATURES: Feature[] = [
  {
    icon: faPalette,
    title: 'UI/UX Design',
    description: 'Design interfaces & experiences with Figma.',
  },
  {
    icon: faCode,
    title: 'Basic HTML Development',
    description: 'Build semantic web structures with HTML.',
  },
  {
    icon: faRocket,
    title: 'CSS Mastery',
    description: 'Style responsive layouts using modern CSS.',
  },
];

export const SCROLL_FLOAT_CONFIG = {
  containerClassName: "text-center text-white font-orbitron font-bold",
  textClassName: "text-3xl text-white mb-6",
  animationDuration: 0.8,
  stagger: 0.02,
  ease: "easeOut" as const
};

// Perbaiki dengan format rgba yang benar
export const SPOTLIGHT_CARD_CONFIG = {
  spotlightColor: "rgba(46, 83, 176, 0.4)" as const,
  className: "w-[90%] sm:w-[100%] mx-auto bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-5 shadow-sm hover:shadow-md transition duration-200 flex flex-col h-full"
};