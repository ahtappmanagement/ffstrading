import Image from "next/image";
import LOGO from "images/LOGO.png";
import Link from "next/link";
function Header() {
    return ( 

        <nav className="navbar navbar-expand-lg navbar-light fixed-top bg-theme">
        <div className="container">
            <Link className="navbar-brand" href="/">
                <Image src={LOGO} alt="logo" width="100" height="70"/>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link className="nav-link active" aria-current="page" href="/">Home</Link>
                    <Link className="nav-link" href="/products">Products</Link>
                    <Link className="nav-link" href="/contact">Contact</Link>
                </div>
            </div>
        </div>
    </nav>
     );
}

export default Header;