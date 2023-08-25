import { useAppSelector } from "@/redux/hooks";
import { BiSolidBasket } from "react-icons/bi";

const Basket = () => {
    const {totalCount, totalAmount} = useAppSelector((state) => state.counterReducer);
    
    return (
        <button className="basket">
            <div className="basket__wrapper">
                <span className="basket__count">{totalCount}</span>
                <BiSolidBasket className="basket__icon" />
            </div>
            <span className="basket__price">{totalAmount}M</span>
        </button>
    )
}

export default Basket

