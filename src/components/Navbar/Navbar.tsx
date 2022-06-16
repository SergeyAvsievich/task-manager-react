import React from 'react'
import bg from '../../assets/img/StockSnap_J18ZCO3IPA.jpg'
import { Clock } from '../Clock/Clock'
import './Navbar.css'

const Navbar: React.FC = () => {

    return (
        <div className="nav">
            <div>
                <figure>
                    <img src={bg} alt="bg" />
                    <Clock/>
                </figure>
                <div className="mask"></div>
            </div>
        </div>
    )
}

export default Navbar