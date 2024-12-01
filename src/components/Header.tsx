import { Link, useNavigate } from "react-router-dom"
import Logo from '../assets/images/Logo.svg'
import { BasketIcon } from '../assets/images/logo'
import { useSelector } from "react-redux"
import { ProductType } from "../service/Products"

const Header = () => {
    const navigate = useNavigate()
    const orderedProducts = useSelector((state:{orderList:ProductType[]}) => state.orderList)

    const totalPrice = orderedProducts.reduce((val:number, item:ProductType) => {
        val+=(item.price * item.orderCount)
        return val
    }, 0)

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
            <strong className="text-[16px]">{totalPrice}₽</strong>
            <span className="inline-block w-[2px] h-[25px] bg-[#FFFFFF40]"></span>
            <div className="flex items-center space-x-[8px]">
                <BasketIcon/>
                <span>{orderedProducts.length > 0 && orderedProducts.length}</span>
            </div>
        </button>
    </div>
  )
}

export default Header