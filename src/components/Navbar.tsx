'use client';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import '../assets/css/style.css';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeDropdowns, setActiveDropdowns] = useState<string[]>([]);
    const [closeTimers, setCloseTimers] = useState<{ [key: string]: NodeJS.Timeout }>({});
    const router = useRouter();

    // Scroll effect + auto-close sidebar on scroll
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);

            if (window.innerWidth < 1280 && isOpen) {
                setIsOpen(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isOpen]);

    // Auto-close sidebar on route change
    useEffect(() => {
        const handleRouteChange = () => {
            if (window.innerWidth < 1280) {
                setIsOpen(false);
            }
        };

        window.addEventListener('popstate', handleRouteChange);
        return () => window.removeEventListener('popstate', handleRouteChange);
    }, []);

    // Close sidebar when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            if (isOpen && !target.closest('.navbar-container')) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isOpen]);

    const handleClick = (path: string) => {
        const currentPath = window.location.pathname;
        const isMobile = window.innerWidth < 1280;

        if (currentPath === path) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            if (isMobile) setIsOpen(false);
        } else {
            router.push(path);
            if (isMobile) setIsOpen(false);
        }
    };

    const toggleDropdown = (name: string) => {
        setActiveDropdowns((prev) =>
            prev.includes(name) ? prev.filter((item) => item !== name) : [...prev, name]
        );
    };

    const handleMouseEnter = (name: string) => {
        if (closeTimers[name]) {
            clearTimeout(closeTimers[name]);
            setCloseTimers((prev) => {
                const updated = { ...prev };
                delete updated[name];
                return updated;
            });
        }

        setActiveDropdowns((prev) =>
            prev.includes(name) ? prev : [...prev, name]
        );
    };

    const handleMouseLeave = (name: string) => {
        const timer = setTimeout(() => {
            setActiveDropdowns((prev) => prev.filter((item) => item !== name));
            setCloseTimers((prev) => {
                const updated = { ...prev };
                delete updated[name];
                return updated;
            });
        }, 2000);

        setCloseTimers((prev) => ({ ...prev, [name]: timer }));
    };

    const navGroups: Array<{
        name: string;
        path?: string;
        disabled?: boolean;
        children?: Array<{ name: string; path: string; disabled?: boolean }>;
    }> = [
        { name: 'HOME', path: '/' },
        {
            name: 'LEARNING HUB',
            children: [
                { name: 'MODULES', path: '/modules' },
                { name: 'CLASS RECORDINGS', path: '/download' },
                { name: 'MENTORING GROUPS', path: '/mentoring' },
                { name: 'TASK SUBMISSION', path: '/assignment' },
            ]
        },
        {
            name: 'RESOURCES',
            children: [
                { name: 'GUIDE & RESOURCES', path: '/resources' },
                { name: 'TIMELINE', path: '/timeline' },
            ]
        },
        {
            name: "COMMUNITY & SHOWCASE",
            disabled: true,
            children: [
                { name: 'PROJECT SHOWCASE', path: '/submission' },
                { name: 'BEST PARTICIPANTS', path: '/reward' },
                { name: 'CERTIFICATE', path: '/sertifikat' },
                { name: 'EVENT GALLERY', path: '/dokumentasi' },
                { name: 'PARTICIPANTS DIRECTORY', path: '/peserta' },
            ]
        },
        {
            name: "SUPPORT",
            children: [
                { name: 'FAQ', path: '/faq' },
                { name: 'CONTACT US', path: '/contact' },
            ]
        }
    ];

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300
                ${isOpen
                    ? scrolled
                        ? 'bg-[#22262E] h-[75px]'
                        : 'bg-[#22262E] h-[100px]'
                    : scrolled
                        ? 'bg-[#22262E] shadow-md h-[75px]'
                        : 'bg-transparent h-[100px]'
                }`}
        >
            <div className="navbar-container container mx-auto py-0 xl:py-10 transition-all duration-500 ease-in-out h-full w-full">
                <div className="flex items-center h-full w-full px-4 xl:px-0 gap-4"
                >
                    <div className="flex-1 flex justify-start">
                        <Link href="/" className="text-2xl font-bold text-blue-600">
                            <h1 className="font-orbitron font-medium text-[#ffffff] text-4xl">DEVCAMP</h1>
                        </Link>
                    </div>

                    {/* Navigation Items - Desktop */}
                    <div className="hidden xl:flex items-center justify-end md:pe-5 space-x-8">
                        {navGroups.map((group) =>
                            group.disabled ? (
                                <div
                                    key={group.name}
                                    className="relative flex items-center gap-2 cursor-not-allowed opacity-50 select-none"
                                    title="Section disabled"
                                >
                                    <span className="text-[#ffffff] font-bold font-orbitron">
                                        {group.name}
                                    </span>
                                    <span className="text-[10px] px-1.5 py-0.5 bg-red-500/20 text-red-400 border border-red-500/30 rounded font-orbitron">
                                        OFF
                                    </span>
                                </div>
                            ) : group.children ? (
                                <div
                                    key={group.name}
                                    className="relative dropdown-container"
                                    onMouseEnter={() => handleMouseEnter(group.name)}
                                    onMouseLeave={() => handleMouseLeave(group.name)}
                                >
                                    <button
                                        className="text-[#ffffff] font-bold font-orbitron cursor-pointer flex items-center gap-2"
                                        onClick={() => toggleDropdown(group.name)}
                                    >
                                        {group.name}
                                        <FontAwesomeIcon
                                            icon={faChevronDown}
                                            className={`text-xl ms-2 text-[#ffffff] transition-transform duration-300 ${activeDropdowns.includes(group.name) ? 'rotate-180' : ''
                                                }`}
                                        />
                                    </button>

                                    {activeDropdowns.includes(group.name) && (
                                        <div className="absolute left-0 top-full flex flex-col bg-[#171a26] rounded-md mt-2 py-2 z-50 min-w-[180px] transition-all duration-200 ease-in-out pointer-events-auto">
                                            {group.children.map((child) => (
                                                <button
                                                    key={child.path}
                                                    onClick={() => handleClick(child.path)}
                                                    className="px-4 py-2 text-[#ffffff] hover:bg-[#2E53B0] font-orbitron text-left font-bold"
                                                >
                                                    {child.name}
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <button
                                    key={group.path}
                                    onClick={() => handleClick(group.path!)}
                                    className="text-[#ffffff] font-bold font-orbitron cursor-pointer"
                                >
                                    {group.name}
                                </button>
                            )
                        )}

                    </div>

                    {/* Mobile Menu Button */}
                    <div className="xl:hidden flex items-center justify-end w-full h-full">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-[#ffffff] focus:outline-none mt-0 pt-0 cursor-pointer"
                            aria-label="Toggle menu"
                        >
                            <div className="w-6 flex flex-col items-end space-y-2">
                                <span className={`block h-0.5 bg-[#2E53B0] transition-all duration-300 drop-shadow-[0_0_2px_white] ${isOpen ? 'w-8 -rotate-45 translate-y-2' : 'w-8'}`}></span>
                                <span className={`block h-0.5 bg-[#2E53B0] transition-all duration-300 drop-shadow-[0_0_2px_white] ${isOpen ? 'opacity-0' : 'w-6'}`}></span>
                                <span className={`block h-0.5 bg-[#2E53B0] transition-all duration-300 drop-shadow-[0_0_2px_white] ${isOpen ? 'w-8 rotate-45 -translate-y-3' : 'w-8'}`}></span>
                            </div>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu - Dropdown */}
                <div className={`xl:hidden min-h-[calc(100vh-75px)] bg-[#22262E] text-center text-2xl ${isOpen ? 'translate-x-0 w-[100vw]' : '-translate-x-200 w-0'} transition-all duration-500 ease-in-out`}>
                    <div className="pt-4 pb-6 space-y-3 px-2">
                        {navGroups.map((group) =>
                            group.disabled ? (
                                <div key={group.name} className="w-full text-[#FFFFFF]/40 font-bold font-orbitron px-4 py-2 text-left cursor-not-allowed select-none flex items-center justify-between">
                                    <span>{group.name}</span>
                                    <span className="text-xs px-2 py-0.5 bg-red-500/20 text-red-400 border border-red-500/30 rounded font-orbitron">
                                        OFF
                                    </span>
                                </div>
                            ) : group.children ? (
                                <div key={group.name} className="text-left relative">
                                    <button
                                        onClick={() => toggleDropdown(group.name)}
                                        className="w-full text-[#FFFFFF] font-bold font-orbitron px-4 py-2 text-left cursor-pointer"
                                    >
                                        {group.name}
                                        <FontAwesomeIcon
                                            icon={faChevronDown}
                                            className={`text-xl ms-2 text-[#ffffff] transition-transform duration-300 ${activeDropdowns.includes(group.name) ? 'rotate-180' : ''}`}
                                        />
                                    </button>

                                    {activeDropdowns.includes(group.name) && (
                                        <div className="flex flex-col bg-[#171a26] rounded-md mt-1 py-2 px-2 space-y-1">
                                            {group.children.map((child) => (
                                                <button
                                                    key={child.path}
                                                    onClick={() => handleClick(child.path)}
                                                    className="px-4 py-2 text-[#FFFFFF] hover:bg-[#2E53B0] font-orbitron text-lg font-bold text-left w-full"
                                                >
                                                    {child.name}
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <button
                                    key={group.path}
                                    onClick={() => handleClick(group.path!)}
                                    className="block text-[#FFFFFF] font-bold font-orbitron px-4 py-2 text-left cursor-pointer w-full"
                                >
                                    {group.name}
                                </button>
                            )
                        )}


                    </div>
                </div>
            </div>
        </nav>
    );
}

