'use client'
import { BiSolidBasket } from "react-icons/bi";
import WarningModal from "../modals/warningModal";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { useAppSelector } from "@/redux/hooks";
import { useRouter } from "next/navigation";

const Basket = () => {
    const router = useRouter()
    const { totalQuantity, totalAmount } = useAppSelector((state) => state.basketReducer);
    const { status } = useSession()
    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => {
        if (status === "unauthenticated") {
            setIsOpen(true)
        } else {
            router.push("/basket")
        }
    }

    return (
        <>
            <button className="basket" onClick={handleClick}>
                <div className="basket__wrapper">
                    <span className="basket__count">{totalQuantity}</span>
                    <BiSolidBasket className="basket__icon" />
                </div>
                <span className="basket__price">{totalAmount}M</span>
            </button>

            <WarningModal isOpen={isOpen} closeModal={() => setIsOpen(false)} />
        </>
    )
}

export default Basket