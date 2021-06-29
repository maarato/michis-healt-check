const Header = () => { return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-md fixed-top">
		<div className="container">
		<a href="#" className="navbar-brand"><strong>Odinsario</strong></a>
		<button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#NavbarMenuItems" aria-controls="NavbarMenuItems" aria-expanded="false" arial-label="Main Menu"><span className="navbar-toggler-icon"></span></button>
		
		<div className="collapse navbar-collapse " id="NavbarMenuItems">
			<ul className="navbar-nav ms-auto">
				<li className="nav-item"><a href="http://alexaurio.ddns.net/" className="nav-link text-white">Inicio</a></li>
				<li className="nav-item"><a href="#" className="nav-link text-white">¿Quien Soy?</a></li>
				<li className="nav-item"><a href="#" className="nav-link text-white">Proyectos</a></li>
				<li className="nav-item"><a href="http://alexaurio.ddns.net:3006/" className="nav-link text-white">Panzas en React</a></li>
				<li className="nav-item"><a href="http://alexaurio.ddns.net/tienda.html" className="nav-link text-white">Tienda</a></li>
				
			</ul>
		</div>
				
		</div>
	</nav>
);
}
export default Header;