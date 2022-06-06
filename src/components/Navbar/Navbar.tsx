import React from 'react'
import bg from '../../assets/img/StockSnap_J18ZCO3IPA.jpg'
import './Navbar.css'

const Navbar: React.FC = () => {

    return (
        <div className="nav">
            <div>
                <figure>
                    <img src={bg} alt="bg" />
                    <figcaption><h2>Friday, 01 June</h2></figcaption>
                </figure>
                <div className="mask"></div>
            </div>
        </div>
    )
}

export default Navbar