import dynamic from 'next/dynamic';
import Loading from "@/components/Loading"

const WhyDevCampDnd = dynamic(() => import('../dynamics/WhyDevCampDnd'), {
    ssr: false,
    loading: () => <Loading />,
});

export default function WhyDevcamp() {
    return (
        <section className="container mx-auto py-20 px-6 backdrop-blur-md">
            <div className="text-center mb-12">
                <h2 className="text-white text-4xl font-orbitron font-bold mb-6">Why Devcamp</h2>
                <p className="text-center text-white text-base max-w-2xl mx-auto mb-8 font-medium">
                    Bootcamp is the best time to upgrade your skills – and in DevCamp, you’ll dive deeper through immersive projects and real-world mentorship.
                </p>
            </div>

            <WhyDevCampDnd />
            
        </section>
    );
}
