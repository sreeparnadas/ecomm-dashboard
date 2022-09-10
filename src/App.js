import './App.css';
import {Button} from 'react-bootstrap';
import Header from './Header';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import AddProduct from './AddProduct';
import UpdateProduct from './UpdateProduct';
import Protected, {} from './Protected';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<Login/>}/>
          <Route path="register" element={<Register/>}/>

          <Route path="add" element={<Protected component={AddProduct}/>}/>
          <Route path="update" element={<Protected component={UpdateProduct}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
