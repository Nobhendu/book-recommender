import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Navigate } from 'react-router-dom';
import App from './components/App.jsx'
import HomeScreen from './screens/HomeScreen.jsx';
import TopGenres from './screens/TopGenres.jsx';
import SimilarReads from './screens/SimilarReads.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path='/' element={<HomeScreen />}></Route>
      <Route index={true} path='/top' element={<TopGenres />}></Route>
      <Route index={true} path='/similar' element={<SimilarReads />}></Route>
      <Route index={true} path='/others' element={<Navigate to="/" />}></Route>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
