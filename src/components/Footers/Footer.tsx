const Footer = () => {
    return (
        <footer className="bg-black pt-12">
            <div className="content">
                <div className="flex justify-between items-center">
                    <div className="w-9/12">
                        <img src="./public/images/logo-footer.svg" alt="" />
                    </div>
                </div>
                <div className="flex justify-between pt-12 pb-8">
                    <div className="w-9/12 flex">
                        <div className="w-4/12">
                            <h1 className="text-[22px] text-white title-font">Useful links</h1>
                            <ul className="mt-6">
                                <li>
                                    <a href="#" className="text-sm text-[#ffffff99] text-font mt-3 block 
                                hover:text-white hover:transition-all hover:duration-250 hover:ease-linear"
                                    >About Us</a>
                                </li>
                                <li>
                                    <a href="#" className="text-sm text-[#ffffff99] text-font mt-3 block 
                                hover:text-white hover:transition-all hover:duration-250 hover:ease-linear"
                                    >Contact Us</a>
                                </li>
                                <li>
                                    <a href="#" className="text-sm text-[#ffffff99] text-font mt-3 block 
                                hover:text-white hover:transition-all hover:duration-250 hover:ease-linear"
                                    >Showrooms</a>
                                </li>
                                <li>
                                    <a href="#" className="text-sm text-[#ffffff99] text-font mt-3 block 
                                hover:text-white hover:transition-all hover:duration-250 hover:ease-linear"
                                    >Blog</a>
                                </li>
                                <li>
                                    <a href="#" className="text-sm text-[#ffffff99] text-font mt-3 block 
                                hover:text-white hover:transition-all hover:duration-250 hover:ease-linear"
                                    >Gift Cards</a></li>
                            </ul>
                        </div>
                        <div className="w-4/12">
                            <h1 className="text-[22px] text-white title-font">Categories</h1>
                            <ul className="mt-6">
                                <li>
                                    <a href="#" className="text-sm text-[#ffffff99] text-font mt-3 block 
                                hover:text-white hover:transition-all hover:duration-250 hover:ease-linear"
                                    >Chair</a>
                                </li>
                                <li>
                                    <a href="#" className="text-sm text-[#ffffff99] text-font mt-3 block 
                                hover:text-white hover:transition-all hover:duration-250 hover:ease-linear"
                                    >Tables</a>
                                </li>
                                <li>
                                    <a href="#" className="text-sm text-[#ffffff99] text-font mt-3 block 
                                hover:text-white hover:transition-all hover:duration-250 hover:ease-linear"
                                    >Sofas</a>
                                </li>
                                <li>
                                    <a href="#" className="text-sm text-[#ffffff99] text-font mt-3 block 
                                hover:text-white hover:transition-all hover:duration-250 hover:ease-linear"
                                    >Armchairs</a>
                                </li>
                                <li>
                                    <a href="#" className="text-sm text-[#ffffff99] text-font mt-3 block 
                                hover:text-white hover:transition-all hover:duration-250 hover:ease-linear"
                                    >Beds</a></li>
                            </ul>
                        </div>
                        <div className="w-4/12">
                            <ul className="mt-14">
                                <li>
                                    <a href="#" className="text-sm text-[#ffffff99] text-font mt-3 block 
                                hover:text-white hover:transition-all hover:duration-250 hover:ease-linear"
                                    >Storage</a>
                                </li>
                                <li>
                                    <a href="#" className="text-sm text-[#ffffff99] text-font mt-3 block 
                                hover:text-white hover:transition-all hover:duration-250 hover:ease-linear"
                                    >Textiles</a>
                                </li>
                                <li>
                                    <a href="#" className="text-sm text-[#ffffff99] text-font mt-3 block 
                                hover:text-white hover:transition-all hover:duration-250 hover:ease-linear"
                                    >Lighting</a>
                                </li>
                                <li>
                                    <a href="#" className="text-sm text-[#ffffff99] text-font mt-3 block 
                                hover:text-white hover:transition-all hover:duration-250 hover:ease-linear"
                                    >Toys</a>
                                </li>
                                <li>
                                    <a href="#" className="text-sm text-[#ffffff99] text-font mt-3 block 
                                hover:text-white hover:transition-all hover:duration-250 hover:ease-linear"
                                    >Decor</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-3/12">
                        <h1 className="title-font text-[22px] text-white">Download App on Mobile:</h1>
                        <p className="text-sm text-font text-[#ffffffcc] py-3">15% discount on your first purchase</p>
                        <div className="flex items-center gap-4 mt-2">
                            <img src="https://woodmart.b-cdn.net/furniture2/wp-content/uploads/sites/11/2023/04/google-play.svg" alt="" />
                            <img src="https://woodmart.b-cdn.net/furniture2/wp-content/uploads/sites/11/2023/04/app-store.svg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-5 border-t-[0.8px] border-solid border-[#ffffff26]">
                <div className="content flex justify-between">
                    <h3 className="text-font text-xs text-[#cccccc] text-white"><strong className="text-white">WOODMART</strong> © 2024 CREATED BY <strong className="text-white">XTEMOS STUDIO</strong>. PREMIUM E-COMMERCE SOLUTIONS.</h3>
                    <img src="https://woodmart.b-cdn.net/furniture2/wp-content/themes/woodmart/images/payments.png" alt="" />
                </div>
            </div>
        </footer>
    )
}

export default Footer; 