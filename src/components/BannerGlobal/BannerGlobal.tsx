const BannerGolobal = ({title}: {title?:string}) => {
    return (
        <>
        <div className="w-full h-[325px] bg-[url('https://woodmart.xtemos.com/furniture2/wp-content/uploads/sites/11/2023/04/wd-furniture-pt-def-opt.jpg')] flex items-center">
            <div className="content">
                <h1 className="title-font text-white text-[78px]">{title}</h1>
                <div className="flex gap-2">
                    <span className="text-[11px] text-white wd-text-font-bold uppercase">HOME</span>
                    <span className="text-[11px] text-white wd-text-font-bold uppercase">/</span>
                    <span className="text-[11px] text-white wd-text-font-bold uppercase">{title}</span>
                </div>
            </div>
        </div>
        </>
    )
}

export default BannerGolobal ; 