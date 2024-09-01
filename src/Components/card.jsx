import { Link } from "react-router-dom"

function Card({product}){

  const {image,title,description,price,id}= product
    return(
        <div className="max-w-sm w-72 h-[450px] bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 flex flex-col">
        <div className="flex justify-center items-center">
          <img
            className="w-32 h-32 "
            src={image}
            alt="Product Image"
          />
        </div>
        <div className="p-4 flex flex-col flex-grow justify-between">
          <div>
            <h3 className="font-semibold text-gray-900">{title}</h3>
            <p className="mt-2 text-gray-700 line-clamp-5 ">{description}</p>
          </div>
          <div className="flex items-center justify-between mt-4">
            <span className="text-lg font-bold text-indigo-600">${price}</span>
            <Link to={`${id}`} className="px-4 py-2 bg-indigo-500 text-white text-sm font-medium rounded-full shadow-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition-colors duration-300">
              Add to Cart
            </Link>
          </div>
        </div>
      </div>
    )
    
}

export default Card 