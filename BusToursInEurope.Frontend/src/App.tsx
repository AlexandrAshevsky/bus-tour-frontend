import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AboutUsPage, MainPage } from './pages/common';
import { FullTourPage, ToursPage } from './pages/tours';
import { DefaultLayout } from './components/layout/DefaultLayout/DefaultLayout';
import { AdminLayout } from './components/layout/AdminLayout/AdminLayout';
import { AdminBusPage, AdminHotelsPage, AdminOrdersPage, AdminToursPage } from './pages/admin';

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path='/' element={<MainPage />} />
          <Route path='main' element={<MainPage />} />
          <Route path='about' element={<AboutUsPage />}/>
          <Route path='tours' element={<ToursPage />} />
          <Route path='tours/:id' element={<FullTourPage />} />
        </Route>
        <Route path='/admin' element={<AdminLayout />}>
          <Route path='buses' element={<AdminBusPage />} />
          <Route path='hotels' element={<AdminHotelsPage />} />
          <Route path='orders' element={<AdminOrdersPage />} />
          <Route path='tours' element={<AdminToursPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;