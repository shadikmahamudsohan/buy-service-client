import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { BsGoogle } from 'react-icons/bs';
const Login = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [passwordError, setPasswordError] = React.useState('');
    const [emailError, setEmailError] = React.useState('');
    const [isLoading, setIsLoading] = React.useState(false);
    const [disabled, setDisabled] = React.useState(true);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
        auth
    );
    const [signInWithGoogle, user2, loading2, error2] = useSignInWithGoogle(auth);

    //got to home page if user is logged in
    const location = useLocation();
    const navigate = useNavigate();
    let from = location.state?.from?.pathname || "/";

    if (user || user2) {
        navigate(from, { replace: true });
    }
    //_______________________________________________

    const handleEmail = (e) => {
        if (/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(e.target.value)) {
            setEmailError('');
            setEmail(e.target.value);
        } else {
            setEmailError('invalid email');
        }
    };
    const handlePassword = (e) => {
        if (e.target.value?.length < 6) {
            setPasswordError('password must be at least 6 characters');
        } else {
            setPasswordError('');
            setPassword(e.target.value);
        }
    };

    useEffect(() => {
        if (passwordError || emailError || loading || !email || !password || sending) {
            setDisabled(true);
        } else {
            setDisabled(false);
        }
    }, [email, emailError, loading, password, passwordError, sending]);

    const handleSubmit = () => {
        if (!disabled) {
            setIsLoading(true);
            signInWithEmailAndPassword(email, password)
                .then(() => setIsLoading(false))
                .then(() => {
                    fetch(`${process.env.REACT_APP_SERVER_URL}user/${email}`, {
                        method: 'PUT',
                        body: JSON.stringify({ email: email, isAdmin: true }),
                        headers: {
                            'Content-type': 'application/json; charset=UTF-8',
                        },
                    })
                        .then((response) => response.json())
                        .then((data) => console.log(data));
                });
        }
    };
    const handleResetPassword = () => {
        if (!email) {
            alert('please enter your email');
        } else {
            setIsLoading(true);
            sendPasswordResetEmail(email)
                .then(() => setIsLoading(false))
                .then(() => {
                    alert('check your email for password reset instructions');
                }).catch(error => {
                    alert(error.message);
                }
                );
        }
    };

    if (isLoading || sending || loading2) {
        return <div className="flex justify-center items-center h-screen">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
        </div>;
    }

    return (
        <div className="card w-full max-w-sm shadow-2xl bg-base-100 mx-auto mt-28">
            <div className="card-body">
                {(error || error2) &&
                    <div className="alert alert-error shadow-lg">
                        <div>
                            <span>{(error).message.split(' ')[2]}</span>
                            {error2 && <span>{(error2).message.split(' ')[2]}</span>}
                        </div>
                    </div>}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input onChange={(e) => handleEmail(e)} type="text" placeholder="email" className="input input-bordered" />
                    {emailError && <div className="text-red-600"><small>{emailError}</small></div>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input onChange={(e) => handlePassword(e)} type="password" placeholder="password" className="input input-bordered" />
                    {passwordError && <div className="text-red-600"><small>{passwordError}</small></div>}
                    <label className="label">
                        <p onClick={handleResetPassword} className="label-text-alt link link-hover">Forgot password?</p>
                    </label>
                    <label className="label">
                        <p onClick={() => { navigate('/register'); }} className="label-text-alt link link-hover">Create account?</p>
                    </label>
                </div>
                <div className="form-control mt-6" onClick={handleSubmit}>
                    <button className="btn btn-primary" disabled={disabled}>Login</button>
                </div>
                <div className="form-control mt-6" onClick={() => signInWithGoogle()}>

                    <button className="btn btn-nature">
                        <BsGoogle className="mr-2 text-lg" />
                        Login With Google</button>
                </div>
                {isLoading && <div className="text-center">Loading...</div>}
            </div>
        </div>
    );
};

export default Login;