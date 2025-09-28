import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router'
import MainLayout from './Component/MainLayout.jsx'
import Home from './Component/Home.jsx'
import FindRoommate from './Pages/FindRoommate.jsx'
import MyListing from './Pages/MyListing.jsx'
import LogIn from './Pages/LogIn.jsx'
import SignUp from './Pages/SignUp.jsx'
import BrowseListing from './Pages/BrowseListing.jsx'
import About from './Pages/About.jsx'
import AuthProvider from './Provider/AuthProvider.jsx'
import RoomcardDetails from './Component/RoomcardDetails.jsx'
import UpdateInfo from './Pages/UpdateInfo.jsx'
import PrivateRoute from './Provider/PrivateRoute.jsx'
import ErrorPage from './Pages/ErrorPage.jsx'
import Loading from './Component/Loading.jsx'




const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        loader: () => fetch('https://server-side-room.vercel.app/items'),
        element:

          <Home></Home>,
        hydrateFallbackElement:
          <div className="flex justify-center items-center py-5 ">
            <div className="w-12 h-12 border-4 border-dashed mt-48 rounded-full animate-spin border-green-500"></div>
          </div>,




      },
      {
        path: 'find-roommate',
        element:
          <PrivateRoute>
            <FindRoommate></FindRoommate>
          </PrivateRoute>
      },

      {
        path: 'find-roommate/:id',
        loader: ({ params }) => fetch(`https://server-side-room.vercel.app/find-roommate/${params.id}`),
        element:

          <PrivateRoute>
            <RoomcardDetails></RoomcardDetails>
          </PrivateRoute>,
        hydrateFallbackElement:
          <div className="flex justify-center items-center py-5 ">
            <div className="w-12 h-12 border-4 border-dashed mt-48 rounded-full animate-spin border-green-500"></div>
          </div>,




      },


      {
        path: 'my-listing',
        element:
          <PrivateRoute>
            <MyListing></MyListing>
          </PrivateRoute>
      },

      {
        path: 'browse-listing',
        loader: () => fetch('https://server-side-room.vercel.app/find-roommate'),
        element: <BrowseListing></BrowseListing>,
        hydrateFallbackElement:
          <div className="flex justify-center items-center py-5 ">
            <div className="w-12 h-12 border-4 border-dashed mt-48 rounded-full animate-spin border-green-500"></div>
          </div>,



      },

      {
        path: 'update-info/:id',
        element:
          <PrivateRoute>

            <UpdateInfo></UpdateInfo>

          </PrivateRoute>,
        loader: ({ params }) => fetch(`https://server-side-room.vercel.app/find-roommate/${params.id}`),

        hydrateFallbackElement:
          <div className="flex justify-center items-center py-5 ">
            <div className="w-12 h-12 border-4 border-dashed rounded-full mt-48 animate-spin border-green-500"></div>
          </div>



      },

      {
        path: 'login',
        Component: LogIn
      },
      {
        path: 'signup',
        Component: SignUp
      },
      {
        path: 'about',
        Component: About
      }

    ]

  }
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>,
)
