
const headingStyle = "font-bold text-xl text-white mb-4"
const listStyle = "space-y-4 text-white"

const FooterSection = () => {
    return (
        <div className="bg-[#101727] pt-28">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-20">

                <div className="col-span-1 flex flex-col items-center text-center">
                    <h1 className="font-extrabold text-4xl text-white mb-4">DigiTools</h1>
                    <p className="text-white max-w-sm">Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
                </div>

                <div className="col-span-2 grid justify-items-center gap-7 grid-cols-2 md:justify-between md:grid-cols-4">

                    <div>
                        <h2 className={headingStyle}>Product</h2>
                        <ul className={listStyle}>
                            <li><a href="">Features</a></li>
                            <li><a href="">Pricing</a></li>
                            <li><a href="">Templates</a></li>
                            <li><a href="">Integrations</a></li>
                        </ul>
                    </div>

                    <div>
                        <h2 className={headingStyle}>Company</h2>
                        <ul className={listStyle}>
                            <li><a href="">About</a></li>
                            <li><a href="">Blog</a></li>
                            <li><a href="">Careers</a></li>
                            <li><a href="">Press</a></li>
                        </ul>
                    </div>

                    <div>
                        <h2 className={headingStyle}>Resources</h2>
                        <ul className={listStyle}>
                            <li><a href="">Documentation</a></li>
                            <li><a href="">Help Center</a></li>
                            <li><a href="">Community</a></li>
                            <li><a href="">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h2 className={headingStyle}>Social Links</h2>
                        <ul className="flex gap-3">
                            <li className="bg-white p-2.5 rounded-full"><img src="Instagram.png" alt="" /></li>
                            <li className="bg-white p-2.5 rounded-full"><img src="Facebook.png" alt="" /></li>
                            <li className="bg-white p-2.5 rounded-full"><img src="x.png" alt="" /></li>
                        </ul>
                    </div>
                </div>
            </div>

            <hr className="h-0.5 w-full bg-gray-500" />
            <div className="grid grid-cols-2 justify-between py-7 gap-5 md:gap-0">
                <div className="text-center md:text-left md:col-span-1 col-span-2">
                    <p className="text-gray-500">© 2026 Digitools. All rights reserved.</p>
                </div>

                <div className="flex md:justify-end justify-center md:col-span-1 col-span-2 text-gray-500">
                    <a href="">Privacy Policy</a>
                    <a href="">Terms of Service</a>
                    <a href="">Cookies</a>
                </div>
            </div>
        </div>
    );
};

export default FooterSection;