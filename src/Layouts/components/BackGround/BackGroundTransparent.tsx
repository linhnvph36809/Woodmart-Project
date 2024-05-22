const BackGroundTransparent = ({ bgTransparent, onhandleBg }: { bgTransparent?: boolean, onhandleBg: () => void }) => {
    return (
        <>
            <div
            className={`absolute bg-[#000000b3] z-[300]
            top-0 left-0 right-0 bottom-0
            transtion-all duration-300 ease-in-out ${bgTransparent ? "opacity-1" : " opacity-0 invisible"
            }`}
            onClick={() => onhandleBg()}
            >
            </div>
        </>
    );
};

export default BackGroundTransparent;
