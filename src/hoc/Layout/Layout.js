import React, { useState } from 'react'
import classes from './Layout.module.css'
import {Drawer} from '../../components/Navigation/Drawer/Drawer'
import {MenuToggle} from '../../components/Navigation/MenuToggle/MenuToggle'

const Layout = props => {

    const [menu, setMenu] = useState(false)

    const menuCloseHandler = () => {
        setMenu(false)
    }

    const toggleMenuHandler = () => {
        setMenu(!menu)
    }

    return(
        <div className={classes.Layout}>

            <Drawer
                isOpen={menu}
                onClose={menuCloseHandler}
            />
                
            <MenuToggle
                onToggle={toggleMenuHandler}
                isOpen={menu}
            />

            <main>
                {props.children}
            </main>
        </div>
    )
}

export default Layout