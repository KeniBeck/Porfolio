import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

export default function AppRouter() {

    return (
        <Routes>
            <Route element={<MainLayout />} >
            <Route
                path="/"
                element={
                    <div className="text-blue-400">
                        Home
                    </div>
                }
            />
            </Route>
        </Routes>
    )
}