
import { useContext } from 'react';
import './App.css';
import { Container } from './UI/Container';
import { BoxInput } from './components/BoxInput/BoxInput';
import { BoxUsers } from './components/BoxUsers/BoxUsers';
import { ModalWating } from './components/Modal/ModalWating';
import { UserContext } from './store/UserContext';


function App() {
  const CtxUser=useContext(UserContext)
  return (
    <>
    {CtxUser.FlageModalLoader&& <ModalWating></ModalWating>}
    
     <Container>
      <BoxInput></BoxInput>
      <BoxUsers></BoxUsers>
     </Container>
    </>
    
  );
}

export default App;
