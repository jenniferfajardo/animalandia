import './Servicio.css';
import Servicio from './Servicio';
import img1 from './paciente.png';
import img2 from './veterinario.png';
import img3 from './vacunacion.png';

const servicios=[
    {
        id:1,
        imgs:img1,
        title:'Pacientes',
        description: 'This is a Pacientes longer card with supporting text below as a natural lead-in to additional content.'
        
    },
    {
        id:2,
        imgs:img2,
        title:'Veterinario',
        description: 'This is a Veterinario longer card with supporting text below as a natural lead-in to additional content.'
    },
    {
        id:3,
        imgs:img3,
        title:'Vacunación',
        description: 'This is a Vacunación longer card with supporting text below as a natural lead-in to additional content.'
    },
    {
        id:4,
        imgs:img3,
        title:'PRoductos',
        description: 'This is a Producto longer card with supporting text below as a natural lead-in to additional content.'
    }

]



function Sectserv() {
  return (
  <section id="servicios" className="overflow-hidden">
  
    <h1 className="titulos">Servicios</h1>
    <hr></hr>

    <div className="row">
    {
        servicios.map(serv=>(
            <div className="col-12 col-md-4" key={serv.id}>
                <Servicio imgserv={serv.imgs} titulo={serv.title} desc={serv.description}/>
            </div>
        ))
       
    }

    </div>


  </section>
  );
}

export default Sectserv;