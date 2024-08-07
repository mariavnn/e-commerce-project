/* eslint-disable react/prop-types */

function OrdersCard({ date, totalPrice, totalProducts}) {
    console.log(`total Price ${totalPrice}`);
    console.log(`total Products ${totalProducts}`)
  return (
    <div className='border flex justify-between rounded-lg mt-2 mx-2 py-3 px-4'>
        <div className="flex flex-col gap-3 w-3/5">
            <div>
                <p className="text-lg font-semibold text-gray-500/70">Date</p>
                <span className="font-bold">{date}</span>
            </div>
            <div>
                <p className="text-lg font-semibold text-gray-500/70">Total of Products</p>
                <span className="font-bold">{totalProducts}</span>
            </div>
            <div>
                <p className="text-lg font-semibold text-gray-500/70">Total Amount</p>
                <span className="font-bold">{totalPrice}$</span>
            </div>
        </div>
        <div className="w-2/5 flex justify-center items-center ml-4">
            <button className=" border h-11 rounded-xl border-gray-500/50 font-bold px-3" >View Order</button>
        </div>
        
    </div>
  )
}

export default OrdersCard