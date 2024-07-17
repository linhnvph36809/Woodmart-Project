import { listBrands } from "./content";

const Brands = () => {
    return (
        <>
            <div className="grid grid-cols-258 gap-y-6 justify-between">
                {
                    listBrands.map((listBrand:any,index) =>
                        <a href="" key={index} className="block shoping-hover">
                            <div className={`relative w-card rounded-[10px]`}>
                                <img src={listBrand.banner} alt="" className="w-full min-h-[396px] rounded-[10px]"/>
                                <div className="absolute top-0 bottom-0 left-0 right-0 transition-shoping rounded-[10px]
                                 transition-all duration-300 ease-linear">
                                    <div className="absolute top-5 left-5 flex gap-4">
                                        <div>
                                            <img src={listBrand.imgBrand} alt="" />
                                        </div>
                                        <div>
                                            <h4 className="title-font text-white text-[22px] block">
                                                {listBrand.title}
                                            </h4>
                                            <p className="mt-2 text-font text-[#dad9d8] text-base">
                                            {listBrand.location}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    )}
            </div>
        </>
    )
}

export default Brands; 