import React, { useState } from 'react'
import classes from './Layout.module.css'
import {Drawer} from '../../components/Navigation/Drawer/Drawer'
import {MenuToggle} from '../../components/Navigation/MenuToggle/MenuToggle'

interface ILayoautProps {
    children?: React.ReactNode
}

const Layout: React.FC<ILayoautProps> = ({children}) => {

    const [menu, setMenu] = useState<Boolean>(false)

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
                {children}
            </main>
        </div>
    )
}

export default Layout