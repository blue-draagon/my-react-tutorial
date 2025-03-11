import {createBrowserRouter, NavLink, Outlet, RouterProvider, useNavigation, useRouteError} from "react-router-dom";
import {Article} from "./components/pages/Article.jsx";
import {Blog} from "./components/pages/Blog.jsx";
import {Spinner} from "./components/Spinner.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout/>,
        errorElement: <PageError />,
        children: [
            {
                path: "blog",
                element: <BlogLayout/>,
                children: [
                    {
                        path: "", element: <Blog/>,
                        // use defer to fetch data after route
                        // not available on react router 7
                        loader: () => (
                            fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
                        ),
                    },
                    {path: ":id", element: <Article/>},
                ]
            },
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
    const {state} = useNavigation()
    return (
        <>
            <Navigation/>
            <div className="my-4">
                {state === "loading" && <Spinner />}
                <Outlet/>
            </div>
        </>
    )
}

function BlogLayout() {
    return (
        <div className="row">
            <aside className="col-3">
                Accounts
            </aside>
            <main className="col-6">
                <Outlet/>
            </main>
            <aside className="col-3">
                Services
            </aside>
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

function PageError() {
    const error = useRouteError()
    return (
        <div className="">
            <h1 className="alert alert-danger">
                An error has occurred :
                {error?.error?.toString() ?? error?.toString()}
            </h1>
        </div>
    )
}

export default App
