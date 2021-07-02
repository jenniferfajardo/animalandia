import logo from './logo.jpg';
import './Header.css';
import ModalLogin from './ModalLogin';

function Header() {
  return (
<header className="row align-items-center text-center text-md-start">
  <div className="col-12 col-md-6 col-lg-9 logo">
    <img src={logo} className="img-fluid" />
  </div>

  <div className="col-12 col-md-6 col-lg-3">
    <button type="button" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#login"><i className="bi bi-power" ></i> Ingresar</button>
    <button type="button" className="btn btn-morado"><i className="bi bi-person-plus-fill"></i> Registrarse</button>
</div>
<ModalLogin />
</header>


  );
}

export default Header;