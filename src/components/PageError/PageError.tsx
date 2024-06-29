import { Link } from "react-router-dom";

const PageError = () => {
    return (
        <>
            <div className="flex justify-center py-10">
                <div>
                    <img
                        src="https://woodmart.click/storage/errors/img-error-404.png"
                        alt=""
                    />
                    <div className="text-center flex justify-center">
                    <Link
                        to="/"
                        className="block p-3 title-font bg-[#101010] text-white rounded-xl hover:opacity-70
                        transtion-all duration-300 ease-linear"
                    >
                        Back go home
                    </Link>
                    </div>

                </div>
            </div>
        </>
    );
};

export default PageError;
