import './Main.css'

import Programador from './assets/Programador.svg'


export default function Main(){
 
    return(
      <>
      <main className="principal">
        <div>
        <h1>O maior banco de devs do Brasil</h1>
        <p>
          Nao importa se front ou back end, fazer networking e muito importante.
          Faça parte da maior comunidade de desenvolvedores brasileiros.
        </p>
        </div>
        <img src={Programador} />
      </main>
    </>
    );
  

  
};


