import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";

export default function AppRouter() {

    return (
        <Routes>
            <Route element={<MainLayout />} >
                <Route
                    path="/"
                    element={<Home />}
                />
            </Route>
        </Routes>
    )
}