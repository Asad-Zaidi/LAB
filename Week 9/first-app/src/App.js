import Parent from './component/Parent';
import Name from './component/Name';
import Child from './component/Child';

const Firstname = createContext();
function App() {
  return (
    <>
    <h1>React App</h1>
    <Parent/>
    <Name/>
    <Name></Name>
    <Firstname.Provider value= "Asad" >
    <Name></Name>
    </Firstname.Provider>
    </>
  );
}

export default App;
