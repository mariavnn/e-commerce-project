

function CardSkeleton() {
  return (
    <div className="animate-pulse cursor-pointer w-64 h-80 rounded-lg mb-10 bg-gray-300">
      <div className="relative mb-3 w-full h-2/3 bg-gray-400 rounded-lg"></div>
      <div className="flex flex-col space-y-2 p-2">
        <div className="h-4 bg-gray-400 rounded"></div>
        <div className="h-4 bg-gray-400 rounded"></div>
        <div className="h-8 w-36 bg-gray-400/50 rounded-full"></div>
      </div>
    </div>
  )
}

export default CardSkeleton
