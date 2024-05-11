import { useState } from 'react';
import './App.css';
import { useEffect } from 'react';
import Loading from './pages/Loading/Loading';
import Web from './components/Web/Website'
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login'

function App() {
  const[data, setData] = useState([])
  const[loading, setLoading] = useState(false)
  useEffect(()=>{
    setLoading(true)
    fetch('https://fakestoreapi.com/products')
    .then((res)=> res.json())
    .then((data)=> setData(data))
    .then(()=>{
      setTimeout(() => {
        setLoading(false)
      }, 1000);
    })
  }, [])
  return (
        <div className='App'>
         {
         loading ? <Loading/> : <Web/>
         }
         {/* <Routes>
          <Route path='/' element={<Web/>}/>
          <Route path='/login' element={<Login/>}/>
         </Routes> */}
    </div>
  );
}


export default App;
