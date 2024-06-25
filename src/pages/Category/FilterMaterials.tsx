import { memo, useCallback, useEffect, useState } from "react";
import { getAllMaterial } from "../../api/variants.api";

const FilterMaterials = memo(({handlerFindProducts,filterProducts}:{handlerFindProducts:(value:any) => void,filterProducts:any}) => {

    const [materials,setMaterials] = useState([]) 

    const [inputCheckeds,setInputChecked] = useState<any>([]) ; 

    const hanlerInputChecked = useCallback((isCheck:boolean,id:string|number) => {

        if(isCheck){
            setInputChecked((state:any) => {
                state.push(id)
                handlerFindProducts({...filterProducts,materialsIds: state})
                return state ; 
            }) ; 

        }else{
            setInputChecked((state:any) => {
                const results = state.filter((inputChecked:any) => inputChecked != id )
                handlerFindProducts({...filterProducts,materialsIds: results})
                return results ; 
            }) ;
        }
    },[inputCheckeds])
    
    useEffect(() => {
        (async function(){
        const data = await getAllMaterial() ; 
        setMaterials(data)     
        })()
    },[])

    
  return (
    <>
      <div>
        <h5 className="mb-6 mt-8 title-font nav-link text-base">Materials</h5>
        <div className="mt-4 pb-8 border-b-[1px] border-solid border-[#0000001b]">
          <ul className="max-h-[223px] overflow-auto scroll-cart-items">
            {materials.map((material :any) => 
            <li key={material.id} className="flex justify-between items-center gap-2 mb-3">
              <input
                id={material.id}
                type="checkbox"
                defaultValue=""
                className="w-4 h-4 accent-[#df8c4f] text-white bg-white-100 border-gray-300 rounded"
                onChange={(event) => hanlerInputChecked(event.target.checked,material.id)}
              />
              <label
                htmlFor={material.id}
                className="flex flex-1 text-base items-center gap-2 text-color-black text-font"
              >
                {material.material_value}
              </label>
            </li>
            )}
          </ul>
        </div>
      </div>
    </>
  );
});

export default FilterMaterials;
