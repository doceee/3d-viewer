import { Routes, Route } from "react-router-dom";
import Model from "./pages/Model";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Download from "./pages/Download";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/model/:id" element={<Model />} />
                <Route path="/:id" element={<Download />} />
            </Route>
        </Routes>
    );
};

export default App;
