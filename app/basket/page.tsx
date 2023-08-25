import Image from 'next/image'
import React from 'react'

const BasketPage = () => {
    return (
        <section className="basket_page">
            <div className="container">

            </div>
            <h1 className="basket_page__title">Səbət</h1>
            <p className="basket_page__subtitle">Səbətinizdə məhsulların sayı: <span>2</span></h2>
            <div className="basket__product">
                <div className="basket__product__row">
                    <div className="basket__product__info">
                        <div className="basket__product__img">
                            <Image src="" alt="">
                        </div>
                        <div className='flex flex-col'>
                            <h4 className="basket__product__name">Meksika</h4>
                            <p className="basket__product__description">Kicik, 10 sm - 9$</p>
                        </div>
                    </div>
                    <div className="count count-basket">
                        <span className="fa fa-minus basket" style="background: rgb(15, 150, 117);"></span>
                        <span className="basket-count">2</span>
                        <span className="fa fa-plus basket"></span>
                    </div>
                    <div className="modal-price">
                        <span className="basket-price">18$</span>
                        <i className="fa fa-times" onclick="remove(event)"></i>
                    </div>
                </div>
            </div>
            <div className="basket-footer">
                <a href="#" className="btn" id="checkout-btn">sifarişi göndər</a>
                <p id="total-price">Ümumi məbləğ: 18$</p>
            </div>
        </div>
    )
}

export default BasketPage