'use client'
import { Dialog, Transition } from '@headlessui/react'
import React, { Fragment } from 'react'
import { AiFillCloseCircle } from 'react-icons/ai';
import styles from "./modal.module.scss";
import Button from '../button/button';
import { useRouter } from 'next/navigation';

interface Props {
    isOpen: boolean;
    closeModal: () => void;
}

const WarningModal = ({ isOpen, closeModal }: Props) => {
    const router = useRouter()

    const handleClick = () => {
        router.push('/register')
        closeModal()
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

                                <h1 className="text-center mt-2">Səbətdəki məhsulları görmək üçün xahiş olunur qeydiyyatdan keçin. &#128578;</h1>
                                <Button handleClick={handleClick} className='w-full mt-5 g-button--red'>
                                    Daxil ol
                                </Button>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}

export default WarningModal