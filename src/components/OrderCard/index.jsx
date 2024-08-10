/* eslint-disable react/prop-types */
import { TrashIcon } from "@heroicons/react/16/solid"


function OrderCard({id, title, price, image, quantity, handleDelete}) {
    const priceTotal = price * quantity;
    let renderDeleteIcon
    if(handleDelete){
        renderDeleteIcon = <TrashIcon onClick={() => handleDelete(id)} className="w-7 text-gray-400 hover:text-black"/>
    }

    return (
    <div className="w-full h-44 flex justify-between px-4 mb-3 border-b-2 ">
        <figure className="w-1/4 h-full pb-3">
            <img className="w-full h-full object-contain" src={image} alt="" />
        </figure>
        <div className="w-3/4 pl-4 flex flex-col justify-center">
            <div className="flex mb-2 justify-between items-center">
                <p className="text-sm w-3/4 mr-5 font-bold">{title}</p>
                <span className="w-1/4 font-bold">{priceTotal}$</span>
            </div>
            
            <div className="flex justify-between">
                <p className="text-gray-400">Qty: {quantity}</p>
                {renderDeleteIcon}
            </div>
        </div>  
        
    </div>
  )
}

export default OrderCard
