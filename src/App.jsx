import {createBrowserRouter, NavLink, Outlet, RouterProvider} from "react-router-dom";
import {Article} from "./components/pages/Article.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout/>,
        children: [
            {path: "blog", element: <Blog/>},
            {path: "blog/:id", element: <Article/>},
            {path: "contact", element: <Contact/>},
        ]
    },
])

function App() {
    console.log("App render")

    return (
        <div className="container">
            <RouterProvider router={router}/>
        </div>
    )
}

function RootLayout() {
    return (
        <>
            <Navigation/>
            <div className="my-4">
                <Outlet/>
            </div>
        </>
    )
}

function Blog() {
    return (
        <div className="">
            Blog
        </div>
    )
}

function Contact() {
    return (
        <div className="">
            Contact
        </div>
    )
}

function Navigation() {
    return (
        <nav className="my-4">
            <NavLink to="/">Home </NavLink>
            <NavLink to="/blog">Blog </NavLink>
            <NavLink to="/contact">Contact </NavLink>
        </nav>
    )
}

export default App
