import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
function AddToCart() {
    
    const {id} = useParams()
    const [product, setProduct] = useState("");
    useEffect(()=>{
      fetch(`https://fakestoreapi.com/products/${id}`).then((res)=>res.json()).then((product)=>setProduct(product))
   },[]) 
    // const currentProduct = product.find((data)=>data.id == id)
   
    const {image,title,category,description,price}=product
 return(
    <div className="bg-gray-100 p-8">
  <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
    <div >
      <div className="md:shrink-0">
        <img
          className="h-48 ml-60 w-full object-cover md:h-full md:w-48"
          src={image}
          alt="Product Image"
        />
      </div>
      <div className="p-8">
        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
         {category}
        </div>
        <h1 className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
         {title}
        </h1>
        <p className="mt-2 text-gray-500">
         {description}
        </p>
        <div className="flex items-center justify-between mt-4">
            <span className="text-lg font-bold text-indigo-600">${price}</span>
           
            < button className="px-4 py-2 bg-indigo-500 text-white text-sm font-medium rounded-full shadow-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition-colors duration-300">
              Buy Now
            </button>

          </div>
        
      </div>
    </div>
  </div>
</div> )   
}

export default AddToCart