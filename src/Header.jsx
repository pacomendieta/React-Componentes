import React from "react"
import {Link} from 'react-router-dom'

export default Header = ()=>{
    const isLogged = true
    return (
        <header>
            isLogged
            ?<Link to='/logout'>Logout</Link>
            :<Link to='/login'>Login</Link>
        </header>
    )

}