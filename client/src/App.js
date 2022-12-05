import routes from "./router";
import { useRoutes } from "react-router-dom";

const App = () => {
    const element = useRoutes(routes);

    return <div className="w-full h-full">{element}</div>;
};

export default App;
