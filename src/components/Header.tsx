import React from "react"
import { Link, useNavigate } from "react-router-dom"
import Logo from '../assets/images/Logo.svg'
import { BasketIcon } from '../assets/images/logo'

interface HeaderType {
    basketCount:number
    totalPrife:number
}

const Header:React.FC<HeaderType> = ({basketCount, totalPrife}) => {
    const navigate = useNavigate()

  return (
    <div className="flex items-center pb-[40px] border-b-[2px] border-[#b9b9b9] justify-between">
        <Link className="flex items-center" to={"/"}>
            <img src={Logo} alt="Logo" width={38} height={38}/>
            <div className="ml-[17px]">
                <h1 className="text-[16xpx] leading-[19.23px] font-bold">REACT PIZZA</h1>
                <p className="text-[16px] leading-[19.49px] text-[#7B7B7B]">самая вкусная пицца во вселенной</p>
            </div>
        </Link>
        <button onClick={() => navigate("/basket")} className="w-[150px] text-white rounded-[30px] flex items-center justify-center gap-[13px] cursor-pointer py-[12px] bg-[#FE5F1E]">
            <strong className="text-[16px]">{totalPrife}</strong>
            <span className="inline-block w-[2px] h-[25px] bg-[#FFFFFF40]"></span>
            <div className="flex items-center space-x-[8px]">
                <BasketIcon/>
                <span>{basketCount}</span>
            </div>
        </button>
    </div>
  )
}

export default Header