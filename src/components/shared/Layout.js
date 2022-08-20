import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import Footer from './Footer';
import { BiLogOut } from 'react-icons/bi';
import { signOut } from 'firebase/auth';

const Layout = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    if (loading) {
        return <div className=" flex justify-center items-center h-screen">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
        </div>;
    }
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
                            <Link to="/" className='btn btn-ghost'>Home</Link>
                            {user?.email ? <button className='btn btn-error' onClick={() => signOut(auth)}>
                                <BiLogOut className='text-lg mr-2' />
                                Log Out
                            </button> : <Link to="/login" className='btn btn-ghost'>Login</Link>}
                            <div class="dropdown dropdown-end mx-3">
                                <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                                    <div class="w-14 rounded-full">
                                        {user?.photoURL ? <img src={user?.photoURL} alt="" /> : <img src="https://i.ibb.co/tZs29F5/placeholder-Img.png" alt="" />}

                                    </div>
                                </label>
                                <ul tabindex="0" class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                                    <li>
                                        <span class="justify-between text-neutral">
                                            Update Profile
                                            <span class="badge">New</span>
                                        </span>
                                    </li>
                                </ul>
                            </div>
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
                    <Link to="/" className='btn btn-ghost'>Home</Link>
                    {user?.email ? <button className='btn btn-error' onClick={() => signOut(auth)}>
                        <BiLogOut className='text-lg mr-2' />
                        Log Out
                    </button> : <Link to="/login" className='btn btn-ghost'>Login</Link>}
                </ul>

            </div>
        </div>
    );
};

export default Layout;