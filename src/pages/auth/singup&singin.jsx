import { useState } from "react";

function Auth(){
    const [isSignUp, setIsSignUp] = useState(false);

    const toggleForm = () => {
      setIsSignUp(!isSignUp);
    };
  
    return (
      <div className="bg-gray-100 h-screen flex items-center justify-center ">
        <div className="w-full max-w-md m-4">
          {isSignUp ? (
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
              <form>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
                  <input className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500" id="name" type="text" placeholder="Enter your name" />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
                  <input className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500" id="email" type="email" placeholder="Enter your email" />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
                  <input className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500" id="password" type="password" placeholder="Create a password" />
                </div>
               
                <div className="flex items-center justify-between">
                  <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">Sign Up</button>
                  <button type="button" onClick={toggleForm} className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">Already have an account? Sign In</button>
                </div>
              </form>
            </div>
          ) : (
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
              <form>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
                  <input className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500" id="email" type="email" placeholder="Enter your email" />
                </div>
                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
                  <input className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500" id="password" type="password" placeholder="Enter your password" />
                </div>
                <div className="flex items-center justify-between">
                  <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">Sign In</button>
                  <button type="button" onClick={toggleForm} className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">Don't have an account? Sign Up</button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    );

}

export default Auth