import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Userlist from './component/Userlist'
import Header from './component/Header'
import Adduser from './component/Adduser'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {


  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" exact element={<Userlist />}></Route>
        <Route path="/add" exact element={<Adduser />}></Route>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
