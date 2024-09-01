import { useEffect, useState } from "react"
import Card from "../Components/card.jsx"
function Home() {
     const [ product,SetProduct] = useState([])
    const [serach, setSearch]=useState("")
    const [category,setCategory] = useState("")
   useEffect(()=>{
      fetch("https://fakestoreapi.com/products").then((res)=>res.json()).then((product)=>SetProduct(product))
   },[])
   
   const filter = product.filter((data)=>data.title.toLowerCase().includes(serach.toLowerCase()) && data.category.includes(category))
   let productCategory = product.map((data)=>data.category)
   let duplicate = productCategory.filter((data,index)=>productCategory.indexOf(data)===index )
   
  
   return (
     
    
    <div>
   
    <div className='flex items-center m-7'>
     <div className=" bg-gray-100 w-96 flex justify-center items-center ml-36 rounded-full shadow-md p-2">
   <input
     type="text"
     placeholder="Search..."
     className="bg-transparent w-full outline-none text-gray-700 px-4 flex-grow"
     onChange={((e)=> setSearch(e.target.value))}
   />
  
 </div>
 <div className='ml-10 border w-52 pl-2 shadow-md p-2 rounded-full bg-gray-100'>
   <select value={category} onChange={((e)=>setCategory(e.target.value))} className='bg-gray-100 outline-none pl-5' >
     <option  value="">Select Category</option>
     
    {duplicate.map((data,index)=>{
     return(
       <option value={data} key={index}>{data}</option>
     )
    })}
   
   </select>
 </div>
 </div>

 
 <div className="flex justify-between items-center gap-6 m-7 flex-wrap">
   {filter.map((product) => (
     <Card
     key={product.id}
     product={product}
     />
   ))}
 </div>

 </div>
 
 
   )
   
 }
 

 export default Home