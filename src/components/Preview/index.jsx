/* eslint-disable react/prop-types */

function Preview({ data }) {
  return (
    <div className="w-92 mb-10 mx-5 py-8 rounded-2xl border border-amber-200 lg:flex lg:justify-center lg:items-center lg:gap-20">
        <figure className="w-1/2 h-1/2 mx-4 lg:w-1/4 lg:h-1/4">
            <img className="w-full h-full object-cover" src={data.image} alt={data.title} />
        </figure>
        <p className="mt-4">
            <div className="flex justify-between mx-4">
                <span className="w-2/3 text-lg lg:text-2xl ">{data.title}</span>
                <span className="text-lg font-bold lg:text-2xl">{data.price}$</span>
            </div>
            <button className="mx-4 mt-5 bg-amber-400 py-2 px-5 rounded-full lg:text-xl">Buy Now</button>
        </p>
    </div>
  )
}

export default Preview