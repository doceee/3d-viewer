import { Routes, Route } from "react-router-dom";
import Model from "./pages/Model";
import Home from "./pages/Home";
import Layout from "./components/Layout";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path=":id" element={<Model />} />
            </Route>
        </Routes>
    );
};

export default App;
