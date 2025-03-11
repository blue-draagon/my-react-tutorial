import {createBrowserRouter, NavLink, RouterProvider} from "react-router-dom";
import {Article} from "./components/pages/Article.jsx";

const router = createBrowserRouter([
    { path:"/", element : <Home />},
    { path:"/blog", element : <Blog />},
    { path:"/blog/:id", element : <Article />},
    { path:"/contact", element : <Contact />},
])

function App() {
    console.log("App render")

    return (
        <div className="container my-4">
            Bonjour le monde
            <RouterProvider router={router} />
        </div>
    )
}

function Home () {
    return (
        <div className="">
            <Navigation />
            Home
        </div>
    )
}

function Blog () {
    return (
        <div className="">
            <Navigation />
            Blog
        </div>
    )
}

function Contact () {
    return (
        <div className="">
            <Navigation />
            Contact
        </div>
    )
}

function Navigation() {
    return (
        <nav>
            <NavLink to="/" >Home </NavLink>
            <NavLink to="/blog" >Blog </NavLink>
            <NavLink to="/contact" >Contact </NavLink>
        </nav>
    )
}

export default App
