import './Razas.css';


function ModalRazas(props) {
  return (
    <div className="modal fade" id={props.pm1} tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">{props.pm2}</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body row">
            <div className="col-4">
            <img src={`../imagenes/${props.pm4}`}/>   
            </div>

            <div className="col-8">
               <strong>Acerca de </strong> <p dangerouslySetInnerHTML={{ __html: props.pm3}}></p>
            </div>
          
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" className="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
  );
}

export default ModalRazas;