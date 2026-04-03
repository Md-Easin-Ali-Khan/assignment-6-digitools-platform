import { headingStyle } from "./mainSection";
import { contentStyle } from "./mainSection";

const cardData = [
    {
        id: 1,
        badge: "01",
        image: "user.png",
        heading: "Create Account",
        content: "Sign up for free in seconds. No credit card required to get started.",
    },
    {
        id: 2,
        badge: "02",
        image: "package.png",
        heading: "Choose Products",
        content: "Browse our catalog and select the tools that fit your needs.",
    },
    {
        id: 3,
        badge: "03",
        image: "rocket.png",
        heading: "Start Creating",
        content: "Download and start using your premium tools immediately.",
    },
];

const StartGuideSection = () => {
    return (
        <div className="my-28">
            <div className="mb-5">
                <h1 className={headingStyle}>Get Started in 3 Steps</h1>
                <p className={contentStyle}>Start using premium digital tools in minutes, not hours.</p>
            </div>

            <div className="flex flex-col md:flex-row gap-7">
                {cardData.map((card) => (
                    <div key={card.id} className="pt-5 px-5 bg-[#F2F2F2] hover:shadow-xl transition duration-300 rounded-lg relative">

                        <div className="flex justify-center items-center absolute right-5 w-10 h-10 bg-[linear-gradient(135deg,#4F39F6_0%,#9514FA_100%)] rounded-full text-white text-sm md:text-base">
                            {card.badge}
                        </div>

                        <div className="flex flex-col items-center my-20">
                            <div className="m-5">
                                <img src={card.image} alt={card.heading} />
                            </div>

                            <h2 className="font-bold text-3xl md:text-2xl mb-4 text-gray-900">
                                {card.heading}
                            </h2>
                            <p className="text-gray-500 text-center">{card.content}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StartGuideSection;