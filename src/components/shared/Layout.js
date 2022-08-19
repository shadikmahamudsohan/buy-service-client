import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <div class="drawer">
            <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col">
                {/* <!-- Navbar --> */}
                <div class="w-full navbar bg-primary text-base-100 fixed z-50">
                    <div class="flex-none lg:hidden">
                        <label for="my-drawer-3" class="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <div class="flex-1 px-2 mx-2 text-xl font-bold">BUY_Service</div>
                    <div class="flex-none hidden lg:block">
                        <ul class="menu menu-horizontal">
                            {/* <!-- Navbar menu content here --> */}
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/">Navbar Item 2</Link></li>
                        </ul>
                    </div>
                </div>
                {/* <!-- Page content here --> */}
                <div className='w-full min-h-screen'>
                    {children}
                    <Footer />
                </div>
            </div>
            <div class="drawer-side">
                <label for="my-drawer-3" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to="/">Sidebar Item 1</Link></li>
                    <li><Link to="/">Sidebar Item 2</Link></li>

                </ul>

            </div>
        </div>
    );
};

export default Layout;