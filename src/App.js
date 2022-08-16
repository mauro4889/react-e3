import logo from './logo.svg';
import './App.css';
import { Home } from './pages/Home/Home';
import {Routes, Route, Navigate} from 'react-router-dom';
import { Todo } from './pages/TodoList/Todo';
import { Navbar } from './components/Navbar/Navbar';
import { Pokeapi } from './pages/Pokeapi/Pokeapi'
import { Provider } from 'react-redux';
import store from './redux/store';



function App() {

return ( 
  <Provider store={store}>
  <div className = "App" >
    
      <Navbar/>
      <Routes>
        <Route path='/' element={<Navigate to="home"/>}></Route>
        <Route path='home' element={<Home/>}></Route>
        <Route path='todolist' element={<Todo/>}></Route>
        <Route path='pokeapi' element={<Pokeapi/>}></Route>
      </Routes>   
  </div>
  </Provider> 
);


}

export default App;