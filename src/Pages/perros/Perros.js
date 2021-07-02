import Header from "../../Components/header/Header";
import Navbar from "../../Components/navbar/Navbar";
import Footer from "../../Components/footer/Footer";
import {perros} from "../../Components/perros/Perros.json";
import Razas from "../../Components/perros/Razas";


function Perros() {
  return (
    <div className="container-fluid">
        <Header />
        <Navbar />
        <div className="row">
        <h1>La página de perros</h1>
          
        

        {
              perros.map(perro=>(
              <div className="col-12 col-md-4" key={perro.id} >
                  <Razas p1={perro.id} p2={perro.thumbnail} p3={perro.raza} p4={perro.descripcion} p5={perro.acercade} p6={perro.imagen}/>
                 
              </div>
          ))  
        }
        </div>
        <Footer />
    </div>
  );
}

export default Perros;