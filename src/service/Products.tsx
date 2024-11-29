import { useContext } from "react"
import { Context } from "../Context/Context"
import { useQuery } from "@tanstack/react-query"
import { useAxios } from "../hook/useAxios"
import ProductCard from "../components/ProductCard"

export interface ProductType {
    id: string
    categoryId: string
    imgUrl: string
    name: string
    type: string[]
    size: string[]
    price: number
    orderCount: number
}

function Products() {
    const { categoryId } = useContext(Context)

    const { data: products = [] } = useQuery({
        queryKey: ["products", categoryId],
        queryFn: () => useAxios().get(`/products`, { params : { categoryId } }).then((res) => res.data)
    })

  return (
    <>
        <h1 className="mt-[32px] mb-[35px] font-bold text-black text-[32px]">Все пиццы</h1>
    <div className="flex justify-between gap-[35px] flex-wrap">
        {products.map((item: ProductType) => (
            <ProductCard key={item.id} item={item}/>
        ))}
    </div>
    </>
  )
}

export default Products