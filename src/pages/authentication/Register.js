import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useSendEmailVerification } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Register = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');
    const [passwordError, setPasswordError] = React.useState('');
    const [confirmPasswordError, setConfirmPasswordError] = React.useState('');
    const [emailError, setEmailError] = React.useState('');
    const [isLoading, setIsLoading] = React.useState(false);
    const [errorMessage, setErrorMessage] = React.useState('');
    const [disabled, setDisabled] = React.useState(true);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [sendEmailVerification, sending, error2] = useSendEmailVerification(
        auth
    );
    //got to home page if user is logged in
    const location = useLocation();
    const navigate = useNavigate();
    let from = location.state?.from?.pathname || "/";
    if (user) {
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
    const handleConfirmPassword = (e) => {
        if (password !== e.target.value) {
            setConfirmPasswordError('passwords do not match');
        } else {
            setConfirmPasswordError('');
            setConfirmPassword(e.target.value);
        }
    };

    useEffect(() => {
        if (error || error2) {
            setErrorMessage(error?.message || error2?.message);
        }
    }, [error, error2]);

    useEffect(() => {
        if (passwordError || emailError || loading || confirmPasswordError || !email || !password || !confirmPassword) {
            setDisabled(true);
        } else {
            setDisabled(false);
        }
    }, [confirmPassword, confirmPasswordError, email, emailError, loading, password, passwordError]);

    const handleSubmit = () => {
        setErrorMessage('');
        if (!disabled) {
            setIsLoading(true);
            createUserWithEmailAndPassword(email, password)
                .then(() => setIsLoading(false))
                .then(() => {
                    fetch(`${process.env.REACT_APP_SERVER_URL}user/${email}`, {
                        method: 'PUT',
                        headers: {
                            'Content-type': 'application/json; charset=UTF-8',
                        },
                        body: JSON.stringify({ email: email, isAdmin: false }),
                    })
                        .then((response) => response.json())
                        .then((json) => console.log(json));
                })
                .then(() => {
                    sendEmailVerification()
                        .then(() => setIsLoading(false))
                        .then(() => {
                            alert('verification email sent');
                        }).catch(error => {
                            alert(error.message);
                        }
                        );
                }).catch(error => {
                    alert(error.message);
                }
                );
        }
    };
    if (sending) {
        return <div className="flex justify-center items-center h-screen">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
        </div>;
    }
    return (
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100  mx-auto mt-28">
            <div className="card-body">
                {(error) &&
                    <div className="alert alert-error shadow-lg">
                        <div>
                            <span>{error.message.split(' ')[2]}</span>
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
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Confirm Password</span>
                    </label>
                    <input onChange={(e) => handleConfirmPassword(e)} type="password" placeholder="password" className="input input-bordered" />
                    {confirmPasswordError && <div className="text-red-600"><small>{confirmPasswordError}</small></div>}
                    <label className="label">
                        <p onClick={() => { navigate('/login'); }} className="label-text-alt link link-hover">Have an account?</p>
                    </label>
                </div>
                <div className="form-control mt-6" onClick={handleSubmit}>
                    <button className="btn btn-primary" disabled={disabled}>Login</button>
                </div>
                {isLoading && <div className="text-center">Loading...</div>}
            </div>
        </div>
    );
};

export default Register;