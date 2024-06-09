import ClipLoader from "react-spinners/ClipLoader";

const Spinner = ({color="#f59a57",size=25}: {color?:string,size?:number}) => {
    return (
        <ClipLoader
        size={size}
        aria-label="Loading Spinner"
        data-testid="loader"
        color={color}
      />
    )
}

export default Spinner ; 