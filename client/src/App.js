import routes from "./router";
import { useRoutes } from "react-router-dom";

const App = () => {
    const element = useRoutes(routes);

    return (
        <div className="w-full h-full mx-auto max-w-[1000px]">{element}</div>
    );
};

export default App;
