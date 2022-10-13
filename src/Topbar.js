import React from 'react'
import { Link } from 'react-router-dom';

function Topbar({ cartcount }) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container px-4 px-lg-5">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                    <li className="nav-item"><Link to={"/home"} className="nav-link active" aria-current="page">Home</Link></li>
                </ul>
                <div>
                    <button class="btn btn-outline-dark" type="submit">
                        <i class="bi-cart-fill me-1"></i>
                        <Link to={"/cart"}>Cart</Link>
                        <span class="badge bg-dark text-white ms-1 rounded-pill">{cartcount}</span>
                    </button>
                </div>
            </div>
        </nav >
    )
}

export default Topbar