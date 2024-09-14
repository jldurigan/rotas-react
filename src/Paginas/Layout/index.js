import Banner from "Componentes/Banner";
import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <main>
            <Banner />

            <Outlet />
        </main>
    );
}