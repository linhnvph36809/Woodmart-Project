import { memo } from "react";

const ProductColor = memo(({datas,size=12,gap=2,handlerSelected,colorSelected,changeImage=false}
    :{datas:any,size?:number,gap?:number,handlerSelected?:any,colorSelected?:any,changeImage?:boolean}) => {

  return (
    <>
      <ul className={`flex gap-${gap}`}>
        {
        datas && datas.map( (data:any) =>
        <li key={data.id} onClick={() => handlerSelected({...data,changeImage})}
          className={`rounded-full border-[1px]
              border-solid border-[#00000013]
              hover:border-[1px] hover:border-solid hover:border-[#000] cursor-pointer
              ${colorSelected?.id == data.id && "border-[#000]"}
              transtion-all duration-200 ease-linear p-1`}
        >
          <div style={{backgroundColor: data.color.color_value,width: size, height: size }} className={`rounded-full`}></div>
        </li>
        )}
      </ul>
    </>
  );
});

export default ProductColor;
