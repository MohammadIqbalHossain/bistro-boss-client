import { NavLink, Outlet } from "react-router-dom";
import { FaCartPlus, FaWallet, FaCalendarAlt, FaHome, FaHamburger } from 'react-icons/fa';
import useCart from "../Hooks/useCart";

const Dashboard = () => {
    const [cart] = useCart();
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}

                <Outlet></Outlet>

                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side bg-[#D1A054]">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80  min-h-full text-xl">
                    {/* Sidebar content here */}
                    <li>
                        <NavLink to={"/dashboard/home"}>
                            <FaHome />
                            User Home
                        </NavLink >
                    </li>
                    <li>
                        <NavLink to={"/dashboard/mycart"}>
                            <FaCartPlus />
                            My Cart
                            <span className="badge badge-secondary">+{cart.length || 0}</span>
                        </NavLink >
                    </li>
                    <li>
                        <NavLink to={"/dashboard/history"}>
                            <FaWallet />
                            Payment History
                        </NavLink >
                    </li>
                    <li>
                        <NavLink to={"/dashboard/reservations"}>
                            <FaCalendarAlt />
                            Reservations
                        </NavLink >
                    </li>

                    <div className="flex flex-col w-full border-opacity-50">
                        <div className="divider"></div>
                    </div>
                    <li>
                        <NavLink to={"/"}>
                            <FaHome />
                            Home
                        </NavLink >
                    </li>

                    <li>
                        <NavLink to={"/menu"}>
                            <FaHome />
                            Our Menu
                        </NavLink >
                    </li>
                    <li>
                        <NavLink to="/order/salad" >
                            <FaHamburger />
                            Order Menu
                        </NavLink >
                    </li>

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;