import { Link } from "react-router-dom"

function Navbar() {
    return(
<nav className="bg-gray-800 p-4 sticky top-0 z-10">
  <div className="container mx-auto flex justify-between items-center">
    <div className="text-white text-xl font-bold">Brand</div>
    <div className="md:flex space-x-6">
      <Link to={'/'} className="text-gray-300 hover:text-white">
        Home
      </Link>
      <Link to={"About"} className="text-gray-300 hover:text-white">
        About
      </Link>
      <Link to={"Contact"} className="text-gray-300 hover:text-white">
      Contact
      </Link>
      <Link to={"Auth"} className="text-gray-300 hover:text-white">
      Login 
      </Link>
      
    </div>
  </div>
</nav>


    )


}

export default Navbar