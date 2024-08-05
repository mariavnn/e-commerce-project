/* eslint-disable react/prop-types */
import { TrashIcon } from "@heroicons/react/16/solid"


function OrderCard({id, title, price, image, quantity, handleDelete}) {
    const priceTotal = price * quantity;
  return (
    <div className="h-32 flex justify-between items-center mx-3 p-4 mb-2 border-b-2 ">
         <div className="w-1/4">
            <figure>
                <img className="w-full h-full object-cover" src={image} alt="" />
            </figure>
        </div>
        
        <div className="w-3/4 pl-4">
            <div className="flex mb-2 justify-between">
                <p className="text-sm w-3/4 mr-5 font-bold">{title}</p>
                <span className="w-1/4 font-bold">{priceTotal}</span>
            </div>
            
            <div className="flex justify-between">
                <p className="text-gray-400">Qty: {quantity}</p>
                <TrashIcon onClick={() => handleDelete(id)} className="w-7 text-gray-400 hover:text-black"/>
            </div>
        </div>  
    </div>
  )
}

export default OrderCard
