import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MainPage } from './pages/common';

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/polina' element={<MainPage/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;