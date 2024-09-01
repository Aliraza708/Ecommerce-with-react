import {useNavigate } from "react-router-dom"

function NotFound(){
  const navigate = useNavigate()
    return(
        <div className="bg-gray-100 flex items-center justify-center h-screen">
  <div className="text-center">
    <h1 className="text-6xl font-bold text-gray-800">404</h1>
    <p className="text-2xl text-gray-600 mt-4">Oops! Page not found.</p>
    <p className="mt-6">
      <button onClick={()=>navigate("/")} className="text-blue-500 hover:text-blue-700 text-lg">
        Go back to Home
      </button>
    </p>
  </div>
</div>

    )
}
export default NotFound