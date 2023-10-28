import { Link, Outlet } from "react-router-dom";
import { FaCartPlus, FaWallet, FaCalendarAlt, FaHome, FaHamburger } from 'react-icons/fa';

const Dashboard = () => {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}

                <Outlet></Outlet>

                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                    {/* Sidebar content here */}
                    <li>
                        <Link>
                            <FaHome />
                            User Home
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <FaCartPlus />
                            My Cart
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <FaWallet />
                            Payment History
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <FaCalendarAlt />
                            Reservations
                        </Link>
                    </li>

                    <div className="flex flex-col w-full border-opacity-50">
                        <div className="divider"></div>
                    </div>
                    <li>
                        <Link>
                            <FaHome />
                            Home
                        </Link>
                    </li>

                    <li>
                        <Link to={"/"}>
                            <FaHome />
                            Our Menu
                        </Link>
                    </li>
                    <li>
                        <Link to="/order/salad" >
                            <FaHamburger />
                            Our Menu
                        </Link>
                    </li>

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;