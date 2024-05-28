import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Error from "./Error/Error";
import Sponsors from "./Sponsors/Sponsors";
import About from "./About/About";
export default function AppRoutes() {
    return (
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/sponsors" element={<Sponsors></Sponsors>}></Route>
            <Route path="/about" element={<About></About>}></Route>
            <Route path="*" element={<Error></Error>}></Route>
        </Routes>
        </BrowserRouter>
        </>
    )
}