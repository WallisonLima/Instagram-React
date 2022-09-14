import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login, Dashboard } from '../pages'


export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/pagina-inicial" element={<Dashboard />} />
            </Routes>
        </BrowserRouter>
    )
}