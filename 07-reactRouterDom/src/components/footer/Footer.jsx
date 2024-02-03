import React from 'react';
import { Link } from 'react-router-dom';


function Footer() {
    return (
        <footer className="w-full bg-gray-900 p-5 md:pt-12">
            <div className="w-[95%] mx-auto flex gap-4 flex-wrap flex-col items-center text-white">
                <div
                    className="w-full flex gap-5 flex-wrap flex-col md:flex-row justify-between items-center">
                    <div className="flex flex-col justify-center items-center">
                        <div className="flex justify-center items-center">
                            <Link to="/" className="flex items-center">
                                <span className="text-2xl font-bold text-red-500">&lt;/&gt;</span>
                                <span className="font-bold text-green-500">|</span>
                                <span className="text-xl font-bold text-indigo-800"> TikamSoftwares</span>
                            </Link>
                        </div>
                        <p className="my-2">Email us: tikamsoftware@.com</p>
                        <img className="w-24" src="../../src/assets/iso.png" alt="img" />
                        <span className="text-sm">ISO Certified</span>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-2">
                        <h2 className="font-bold">Tikam Softwares</h2>
                        <div className="w-28 h-2 border-b-2 border-orange-600"></div>
                        <ul>
                            <li><Link to="#">About US</Link ></li>
                            <li><Link to="#">FAQs</Link ></li>
                            <li><Link to="#">Privacy Policy</Link ></li>
                        </ul>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-2">
                        <h2 className="font-bold">Products</h2>
                        <div className="w-28 h-2 border-b-2 border-orange-600"></div>
                        <ul>
                            <li><Link to="#">TS Skills Lab</Link ></li>
                            <li><Link to="#">Job Portal</Link ></li>
                            <li><Link to="#">Experience Portal</Link ></li>
                        </ul>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-2">
                        <h2 className="font-bold">Follow Us</h2>
                        <div className="w-28 h-2 border-b-2 border-orange-600"></div>
                        <ul>
                            <li><Link to="#">Youtube</Link ></li>
                            <li><Link to="#">Linkedin</Link ></li>
                            <li><Link to="#">Discord</Link ></li>
                            <li><Link to="#">Github</Link ></li>
                        </ul>
                    </div>
                </div>
                <hr className=" w-full border-gray-200" />
                <div className="w-full flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm mb-3">© 2024 Tikam Singh. All Rights Reserved.</p>
                    <div className=" flex items-center gap-4">
                        <i className="cursor-pointer fa-brands fa-youtube"></i>
                        <i className="cursor-pointer fa-brands fa-facebook"></i>
                        <i className="cursor-pointer fa-brands fa-linkedin"></i>
                        <i className="cursor-pointer fa-brands fa-twitter"></i>
                        <i className="cursor-pointer fa-brands fa-github"></i>
                        <i className="cursor-pointer fa-brands fa-discord"></i>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;