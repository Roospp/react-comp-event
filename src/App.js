import { useState } from 'react';
import Titulo from './Componentes/Titulo/Titulo'
import Input  from './Componentes/Input/Input';
import Button from './Componentes/Button/Button';

function App() {

const [habilitado,setHabilitado] = useState(false)

  return (
    <div className="App">
        <Titulo texto={"Desafio estado de los componentes y eventos"}/>
        <Input setHabilitado={setHabilitado}/>
        <Button habilitado={habilitado}/>
    </div>
  );
}

export default App;
