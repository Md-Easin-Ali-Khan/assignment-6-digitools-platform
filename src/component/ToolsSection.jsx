import { gradientBtn } from "./NavBar";

export const headingStyle = "font-extrabold text-center text-5xl text-gray-900"
export const contentStyle = "text-gray-500 text-center"

const ToolsSection = () => {
    return (
        <div className="flex flex-col items-center space-y-4 mb-10">
            <h1 className={headingStyle}>Premium Digital Tools</h1>
            <p className={contentStyle}>Choose from our curated collection of premium digital products designed<br />to boost your productivity and creativity.</p>
            <div>
                <button className={gradientBtn}>Products</button>
                <button className="btn">Cart (2)</button>
            </div>
        </div>
    );
};

export default ToolsSection;