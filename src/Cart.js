import React from 'react'

function Cart({ cartItems, total, removeFromCart }) {
    return (
        <>
        <header className="bg-dark py-5">
          <div className="container px-4 px-lg-5 my-5">
            <div className="text-center text-white">
              <h1 className="display-4 fw-bolder">Cart</h1>
            </div>
          </div>
        </header>
        <div classNameName="card">
            <>
                <ol className="list-group list-group-numbered">
                    {
                        cartItems.map((item) => {
                            return <li className="list-group-item d-flex justify-content-between align-items-start">
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold">{item.name}</div>
                                    {item.price}
                                </div>
                                <button onClick={() => removeFromCart(item)} className="badge bg-primary rounded-pill">X</button>
                            </li>
                        })
                    }
                </ol>
                <h2>Total: {total}</h2>
            </>
        </div>
        </>
    )
}

export default Cart
