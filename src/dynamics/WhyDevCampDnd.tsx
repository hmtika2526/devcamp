'use client';

import { useState } from 'react';
import {
    DndContext,
    closestCenter,
    PointerSensor,
    useSensor,
    useSensors,
    DragEndEvent,
} from '@dnd-kit/core';
import {
    SortableContext,
    useSortable,
    horizontalListSortingStrategy,
    arrayMove,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons';

interface CardItem {
    id: string;
    title: string;
    content: string;
}

const initialCards: CardItem[] = [
    {
        id: 'card-1',
        title: 'Learning From The Instructor',
        content:
            'Gain direct guidance from expert mentors who walk you through every key stage—from creative ideation to code deployment.',
    },
    {
        id: 'card-2',
        title: 'Creative Magic',
        content:
            'Explore visual storytelling and interface design powered by animation libraries like GSAP, Framer Motion, and custom WebGL.',
    },
    {
        id: 'card-3',
        title: 'Get Insight, Connections, and Certificate',
        content:
            'Expand your career journey with curated insights, exclusive networking, and a DevCamp certificate to boost your credibility.',
    },
];

function SortableCard({ id, children }: { id: string; children: React.ReactNode }) {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    return (
        <div
            ref={setNodeRef}
            {...attributes}
            {...listeners}
            style={style}
            className="bg-white/10 backdrop-blur-lg w-[80%] sm:w-[100%] border border-white/20 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 cursor-grab active:cursor-grabbing"
        >
            {children}
        </div>
    );
}

export default function WhyDevCampDnd() {
    const [cards, setCards] = useState<CardItem[]>(initialCards);
    const sensors = useSensors(useSensor(PointerSensor));

    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event;
        if (active.id !== over?.id) {
            const oldIndex = cards.findIndex((card) => card.id === active.id);
            const newIndex = cards.findIndex((card) => card.id === over?.id);
            setCards(arrayMove(cards, oldIndex, newIndex));
        }
    };

    return (
        <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
            <SortableContext items={cards.map((card) => card.id)} strategy={horizontalListSortingStrategy}>
                <div className="flex gap-6 justify-center flex-wrap md:flex-nowrap">
                    {cards.map((card) => (
                        <SortableCard key={card.id} id={card.id}>
                            <div className="mb-3 text-3xl text-white">
                                <FontAwesomeIcon icon={faWandMagicSparkles} />
                            </div>
                            <h3 className="text-white text-xl font-bold font-orbitron">{card.title}</h3>
                            <p className="text-white/80 text-sm mt-2">{card.content}</p>
                        </SortableCard>
                    ))}
                </div>
            </SortableContext>
        </DndContext>
    );
}
