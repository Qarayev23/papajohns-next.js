'use client';
import { useAppSelector } from "@/redux/hooks";
import Link from "next/link";
import { BiSolidBasket } from "react-icons/bi";

const Basket = () => {
    const {totalQuantity, totalAmount} = useAppSelector((state) => state.basketReducer);
    
    return (
        <Link href="/basket" className="basket">
            <div className="basket__wrapper">
                <span className="basket__count">{totalQuantity}</span>
                <BiSolidBasket className="basket__icon" />
            </div>
            <span className="basket__price">{totalAmount}M</span>
        </Link>
    )
}

export default Basket