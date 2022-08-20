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
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* <!-- Navbar --> */}
                <div className="w-full navbar bg-primary text-base-100 fixed z-50">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <div className="flex-1 px-2 mx-2 text-xl font-bold">BUY_Service</div>
                    <div className="flex-none hidden lg:block">
                        <ul className="menu menu-horizontal">
                            {/* <!-- Navbar menu content here --> */}
                            <Link to="/" className='btn btn-ghost'>Home</Link>
                            {user?.email ? <button className='btn btn-error' onClick={() => signOut(auth)}>
                                <BiLogOut className='text-lg mr-2' />
                                Log Out
                            </button> : <Link to="/login" className='btn btn-ghost'>Login</Link>}
                            <div className="dropdown dropdown-end mx-3">
                                <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-14 rounded-full">
                                        {user?.photoURL ? <img src={user?.photoURL} alt="" /> : <img src="https://i.ibb.co/tZs29F5/placeholder-Img.png" alt="" />}

                                    </div>
                                </label>
                                <ul tabIndex="0" className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                                    <li>
                                        <span className="justify-between text-neutral">
                                            Update Profile
                                            <span className="badge">New</span>
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
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">
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