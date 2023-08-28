'use client'
import { ProductDetailProps } from "@/types";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import { Fragment, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import Basket from "../basket/basket";
import Button from "../button/button";
import styles from "./productDetailModal.module.scss";
import { AiFillCloseCircle } from "react-icons/ai";
import { addBaket, increment } from "@/redux/features/basketSlice";
import { useAppDispatch } from "@/redux/hooks";

const ProductDetailModal = ({ isOpen, closeModal, data }: ProductDetailProps) => {
  const dispatch = useAppDispatch();

  const options = [
    `Kicik, 10 sm - ${data.price.small} M`,
    `Orta, 20 sm - ${data.price.middle} M`,
    `Böyük, 30 sm - ${data.price.big} M`,
  ]

  const [selectValue, setSelectValue] = useState(options[0])
  const [price, setPrice] = useState(Number(selectValue.split(" - ")[1].split(" M")[0]))

  const handleOnchange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(e.target.value)
    setPrice(Number(e.target.value.split(" - ")[1].split(" M")[0]))
    setCount(1)
  }

  const [count, setCount] = useState(1)
  const increaseCount = () => {
    setCount(count + 1)
  }

  const decreaseCount = () => {
    if (count === 1) return
    setCount(count - 1)
  }

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as='div' className='relative z-10' onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-black bg-opacity-25' />
        </Transition.Child>

        <div className='fixed inset-0 overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center p-4'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-out duration-300'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <Dialog.Panel className={styles.card}>
                <button className={styles.card__close} onClick={closeModal}>
                  <span>Bağla</span>
                  <AiFillCloseCircle className={styles.card__close__icon} />
                </button>

                <div className={styles.card__img__container}>
                  <Image src={data.img} alt={data.name} fill />
                </div>

                <h4 className={styles.card__title}>{data.name}</h4>

                <select className={styles.card__select} value={selectValue} onChange={handleOnchange}>
                  {options.map((option, index) => (
                    <option key={index} value={option}>{option}</option>
                  ))}
                </select>

                <div className="flex justify-between">
                  <div className={styles.card__count}>
                    <button className={styles.card__count__btn + " " + styles.card__count__btn__minus}
                      style={{ background: count === 1 ? "gray" : "#0f9675" }}
                      onClick={() => { decreaseCount() }}
                    >
                      <FaMinus />
                    </button>
                    <span className={styles.card__count__result}>{count}</span>
                    <button className={styles.card__count__btn + " " + styles.card__count__btn__plus}
                      onClick={() => { increaseCount() }}>
                      <FaPlus />
                    </button>
                  </div>
                  <span className={styles.card__price}>{price * count} M</span>
                </div>
                <div className={styles.card__footer}>
                  <Basket />
                  <Button handleClick={() => {
                    dispatch(addBaket({ name: data.name, img: data.img, price, type: selectValue, totalPrice: price * count, count, id: data.id }))
                  }}>
                    Səbətə at
                  </Button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default ProductDetailModal
