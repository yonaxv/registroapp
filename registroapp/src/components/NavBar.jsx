import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = () => {
return (
    <div className="px-8 py-3 navbar bg-base-100">
    <div className="flex-1">
        <a className="text-xl normal-case btn btn-ghost">RegistroApp</a>
    </div>
    <div className="flex-none">
        <ul className="p-0 menu menu-horizontal">
        <li><Link to = "/" >Lista de Usuarios</Link></li>
        <li><Link to = "/agregarusuario">Agregar Usuario</Link> </li>
        </ul>
    </div>
    </div>
)
}

export default NavBar