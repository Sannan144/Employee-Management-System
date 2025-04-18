import { useEffect, useState } from "react";

const Header = ({empData,setData}) => {
const [name , setName] = useState()

let lgout = () => {
  localStorage.setItem('login',JSON.stringify({role:''}))
  setData()
}

useEffect(()=>{
  if(empData){
    setName(empData.firstName)
  }else{
    setName('Admin')
  }
},[])

  return (
    <div className="w-full flex justify-between items-center px-8 py-6 bg-gradient-to-r from-indigo-600 to-blue-500 text-white shadow-lg">

      {/* Left Section - Greeting */}
      <div className="text-3xl md:text-4xl font-bold">
        <h1>
          Hello Mr{' '}
          <span className="text-4xl font-semibold text-yellow-300">{name}</span>
        </h1>
      </div>

      {/* Right Section - Logout Button */}
      <button onClick={lgout} className="bg-white cursor-pointer text-black font-semibold px-8 py-3 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105">
        Logout
      </button>

    </div>
  );
};

export default Header;
