import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Model from './pages/Model'
import Download from './pages/Download'
import Layout from './components/Layout'

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/model/:id" element={<Model />} />
                <Route path="/:id" element={<Download />} />
            </Route>
        </Routes>
    )
}

export default App
