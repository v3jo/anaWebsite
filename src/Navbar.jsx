const Navbar = () => {
return(
    <>
    <header className=" mt-5 sticky top-5  z-10 p-3">
        <nav >
            <ul className="flex justify-end gap-5 px-10">
                <li><a href="#" className="link_nav">Inicio</a></li>
                <li><a href="#" className="link_nav">Servicios</a></li>
                <li><a href="#" className="link_nav">Referencias</a></li>
                <li><a href="#" className="link_nav">Sobre Mi</a></li>
                <li><a href="#"className="link_nav">Contacto</a></li>
            </ul>
         </nav>   
    </header>
    </>
)
}

export default Navbar;