import './Servicio.css';



function Servicio(props) {
  return (
    <div className="card">
    
    <div className="card-body">
        <img src={props.imgserv} className="img-fluid" alt="..."/>
      <h5 className="card-title">   {props.titulo}   </h5>
      <p className="card-text">
          {props.desc}
      </p>
    </div>
  </div>
  );
}

export default Servicio;