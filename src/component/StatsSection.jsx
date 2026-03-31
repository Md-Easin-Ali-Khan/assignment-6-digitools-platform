
const headingStyle = "font-extrabold text-4xl md:text-6xl text-white";
const textStyle = "text-xl md:text-2xl text-white"
const cardStyle = "w-96 text-center py-5 md:py-0"
const containerStyle = "flex flex-col md:flex-row justify-between mt-20 mb-[120px] py-16 divide-y md:divide-y-0 md:divide-x-2 items-center divide-white/30 bg-[linear-gradient(135deg,#4F39F6_0%,#9514FA_100%)]"

const StatsSection = () => {

    return (
        <div className={containerStyle}>
            <div className={cardStyle}>
                <h2 className={headingStyle}>50K+</h2>
                <p className={textStyle}>Active Users</p>
            </div>

            <div className={cardStyle}>
                <h2 className={headingStyle}>200+</h2>
                <p className={textStyle}>Premium Tools</p>
            </div>

            <div className={cardStyle}>
                <h2 className={headingStyle}>4.9</h2>
                <p className={textStyle}>Rating</p>
            </div>
        </div>
    );
};

export default StatsSection;