import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Model from './pages/Model'
import Layout from './components/Layout'

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/model/:id" element={<Model />} />
            </Route>
        </Routes>
    )
}

export default App
