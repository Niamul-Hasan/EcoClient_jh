import { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import app from '../../../Firebase/firebase.config';
import { getAuth } from 'firebase/auth';
import Loading from '../../Shared/Loading';
import useToken from '../Hooks/UseToken';
import GoogleLogin from './GoogleLogin';
import login from '../../../assets/login-animate.gif';
const Login = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const auth = getAuth(app)
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [token] = useToken(user);

    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const onSubmit = data => {
        // console.log(data)
        signInWithEmailAndPassword(data.email, data.password);
    };
    const navigate = useNavigate()
    useEffect(() => {

        if (token) {
            navigate(from, { replace: true });
        }

    }, [from, navigate, token])

    if (loading) {
        return <Loading></Loading>;
    }

    let signinError;
    if (error) {
        signinError = <p className='text-red-500'><small>{error.message}</small></p>
    }

    return (
        <div className='flex lg:flex-row gap-10 h-screen justify-center items-center'>
            <div className='hidden lg:flex'>
                <img src={login} alt="" className='max-w-1/2' />
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center font-bold text-2xl">Login Now</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Email here"
                                className="input input-bordered w-full max-w-xs"
                                style={{ border: "1px solid blue" }}
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: "Email is required"
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid Email'
                                    }
                                })} />
                            <label className="label">
                                {errors.email?.type === 'required' && <span
                                    className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span
                                    className="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Password here"
                                className="input input-bordered w-full max-w-xs"
                                style={{ border: "1px solid blue" }}
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: "Password is required"
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'At lest 6 charecters or Longer'
                                    }
                                })} />
                            <label className="label">
                                {errors.password?.type === 'required' && <span
                                    className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span
                                    className="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                        </div>
                        {signinError}
                        <input type="submit" value="Login" className='btn w-full max-w-xs btn-sm btn-primary' />
                    </form>
                    <p><small>New to EcoCraft? <Link className='text-secondary' to="/register">Create New Account</Link></small></p>

                    <div className="divider">OR</div>
                    <GoogleLogin></GoogleLogin>

                </div>
            </div>
        </div>
    );
};

export default Login;