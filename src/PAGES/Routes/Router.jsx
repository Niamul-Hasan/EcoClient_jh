import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../Layout/LandingPage";
import Home from "../Home/Home";
import Loading from "../Shared/Loading";
import Add from "../AddProduct/Add";
import ProductCart from "../Products/ProductCart";
import Selected from "../SelectedProduct/Selected";
import OtherSelected from "../SelectedProduct/OtherSelected";
import DashbordLayout from "../Layout/Dashboard/DashbordLayout";
import Dashbord from "../Layout/Dashboard/Dashbord";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Booking from "../Bookings/Booking";
import Register from "../NewPages/LogIn/Register";
import Login from "../NewPages/LogIn/LogIn";
import UserProfile from "../Layout/Dashboard/UserProfile";
import UpdateProfile from "../Layout/Dashboard/UpdateProfile";
import UserBooking from "../Layout/Dashboard/UserBooking/UserBooking";
import YourBooking from "../Layout/Dashboard/YourBooking/YourBooking";
import BookingDetails from "../Bookings/BookingDetails";
import EditBooking from "../Layout/Dashboard/YourBooking/EditBooking";
import EditSelected from "../SelectedProduct/Edit/EditSelected";
import About from "../Shared/About";
import Products from "../Products/Products";
import ExtraForMobile from "../Home/Extra/ExtraForMobile";
import Terms from "../Licences/Terms";
import Policy from "../Licences/Policy";
import Cookies from "../Licences/Cookies";



const router = createBrowserRouter([{
    path: '/',
    element: <LandingPage></LandingPage>,
    children: [{
        path: '/',
        element: <Home></Home>,
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/register',
        element: <Register></Register>
    },
    {
        path: '/loading',
        element: <Loading></Loading>
    },

    {
        path: '/products',
        element: <Products></Products>
    },
    {
        path: '/pCart',
        element: <ProductCart></ProductCart>
    },
    {
        path: '/products/:id',
        element: <Selected></Selected>

    },
    {
        path: '/other/:catagory',
        element: <OtherSelected></OtherSelected>

    },

    {
        path: '/about',
        element: <About></About>

    },
    {
        path: '/catagory',
        element: <ExtraForMobile />
    },

    {
        path: '/terms',
        element: <Terms />
    },
    {
        path: '/policy',
        element: <Policy />
    },
    {
        path: '/cookie',
        element: <Cookies />
    },

    //this is private route area
    {
        path: '/booking/:id',
        element: <PrivateRoute><Booking></Booking></PrivateRoute>
    },

    {
        path: '/dashboard',
        element: <PrivateRoute> <DashbordLayout></DashbordLayout></PrivateRoute>,
        children: [
            {
                path: `/dashboard`,
                element: <Dashbord></Dashbord>
            },
            {
                path: '/dashboard/userProfile',
                element: <UserProfile></UserProfile>
            },
            {
                path: '/dashboard/updateProfile/:email',
                element: <UpdateProfile></UpdateProfile>
            },
            {
                path: '/dashboard/userBooking',
                element: <UserBooking></UserBooking>
            },
            {
                path: '/dashboard/yourBooking/:email',
                element: <YourBooking />
            },
            {
                path: '/dashboard/bookingDetails/:id',
                element: <BookingDetails />
            },
            {
                path: '/dashboard/add',
                element: <Add></Add>
            },
            {
                path: '/dashboard/editBooking/:id',
                element: <EditBooking />
            },
            {
                path: '/dashboard/editSelected/:id',
                element: <EditSelected />
            },





        ]
    }
    ]

}]);

export default router;