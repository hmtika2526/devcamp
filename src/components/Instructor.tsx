// "use client";

import instructorData from '../data/intruktur.json';
import ProfileCard from '../utils/Profilcard';
// import DynamicAvatar from '../dynamics/DynamicAvatar';
import '../assets/css/style.css';

export default function Instructor() {
    return (
        <section className="mx-auto w-full py-20 px-6 backdrop-blur-md relative">
            <div className="container text-center mb-12 mx-auto">
                <h2 className="text-white text-4xl font-orbitron font-bold mb-6">Meet The Instructor</h2>
                <p className="text-center text-white text-base max-w-2xl mx-auto mb-8 font-medium">
                    You’re not alone in this journey. At DevCamp, our instructors are here to challenge, support, and elevate your learning through immersive tasks and hands-on guidance.
                </p>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap gap-6 justify-center items-center">
                {instructorData.map((instructor, index) => (
                    <ProfileCard
                        key={index}
                        name={instructor.name}
                        title={instructor.title}
                        handle={instructor.handle}
                        status={instructor.status}
                        contactText="Contact Me"
                        url={instructor.url}
                        avatarUrl={instructor.avatarUrl}
                        showUserInfo={true}
                        enableTilt={true}
                        onContactClick={() => console.log(`${instructor.title} contacted`)}
                    />
                ))}
            </div>
        </section>
    );
}
