import { Button } from './Components/Button.style';
import { Wrapper } from './Components/Wrapper.style';

function App() {

  function abrindo () {
    const abrir = document.getElementById("open");
    const fechar = document.getElementById("closed");

    abrir.style.display = "none";
    fechar.style.display = "block";
  }

  function fechando () {
    const abrir = document.getElementById("open");
    const fechar = document.getElementById("closed");

    fechar.style.display = "none";
    abrir.style.display = "block";
  }

  return (
    <Wrapper>

      <Button id='open' onClick={abrindo}>Abrir Janela</Button>

        <Button id='closed' onKeyDown={fechando} style={{display: "none"}}>Parábens! Agora aperte a tecla Esc para voltar</Button>
    
    </Wrapper>
  )
}

export default App
