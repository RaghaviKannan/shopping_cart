import React from 'react'

function Card({ products, addToCart, cartItems }) {
    return (
        <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    {
                        products.map((product) => {
                            return (
                                <div className="col mb-5">
                                    <div className="card h-100">
                                        <img className="card-img-top" src={product.img} alt="..." />
                                        <div className="card-body p-4">
                                            <div className="text-center">
                                                <h5 className="fw-bolder">{product.name}</h5>
                                                ${product.price}
                                            </div>
                                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                                <div className="text-center">
                                                    <button disabled={cartItems.some(obj => obj.id === product.id)}
                                                    onClick={() => addToCart(product)} className="btn btn-outline-dark mt-auto" href="#">
                                                        {
                                                            cartItems.some(obj => obj.id === product.id)? 'Added to Cart' : "Add to Cart"
                                                        }
                                                    </button></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section >
    )
}

export default Card