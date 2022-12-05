import Home from "../pages/Home";
import Model from "../pages/Model";

let routes = [
    { path: "/", element: <Home /> },
    {
        path: "/:id",
        element: <Model />
    }
];

export default routes;
