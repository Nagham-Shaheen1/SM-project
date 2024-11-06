import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Root from "../Root";

export const routerLink = [

    {
        path: "/",
        element: <HomePage />,
        name: 'Home'
    }
]

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            routerLink.map((link) => ({
                path: link.path,
                element: link.element,
            }))
        ]
    }
])