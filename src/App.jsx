import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './layouts/AppLayout'
import Home from './pages/Home';
import Category from './pages/Category';
import Search from './pages/Search';
import Giphy from './pages/Giphy';
import Favorites from './pages/Favorites';
import GifProvider from './context/Context';

// Defining routes
// npm install react-router-dom
// Inbuilt function createBrowserRouter
const router = createBrowserRouter([
 {
  element:<AppLayout/>,

  children:[
    {
      path:'/',
      element:<Home/>
    },
    {
      path:'/:category',
      element:<Category/>
    },
    {
      path:'/search/:query',
      element:<Search/>
    },
    {
      path:'/:type/:slug',
      element:<Giphy/>
    },
    {
      path:'/favorites',
      element:<Favorites/>
    },
  ]
 }
])

function App() {

  return (
    <GifProvider>
     <RouterProvider router={router}/>
    </GifProvider>
  )
}

export default App
