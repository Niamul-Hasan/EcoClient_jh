import { getAuth } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import app from '../../../Firebase/firebase.config';
import useToken from '../Hooks/UseToken';
import Loading from '../../Shared/Loading';
import GoogleLogin from './GoogleLogin';
// import registration from "../../../assets/registration.gif";
import bg from "../../../assets/logo-removebg-preview.png";

const Register = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const auth = getAuth(app);

    const [isHovering, setIsHovering] = useState(false);

    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const [token] = useToken(user)

    const navigate = useNavigate();
    useEffect(() => {
        if (token) {
            console.log("after geting token", user); //it is for checking purpose
            navigate('/');
        }
    }, [token, navigate, user])

    let signInError;

    if (loading || updating) {
        return <Loading></Loading>
    }

    if (error || updateError) {
        signInError = <p className='text-red-500'><small>{error?.message || updateError?.message}</small></p>
    }



    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
        console.log('update done');

    }

    return (
        <div className='flex lg:flex-row gap-10 h-screen justify-center items-center'
        >
            <div className='hidden lg:flex'>
                <img src={bg} alt="" className='max-w-1/2' />
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Register Here</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="input input-bordered w-full max-w-xs"
                                style={{ border: "1px solid black" }}
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name is Required'
                                    },
                                    minLength: {
                                        value: 3,
                                        message: 'Minimum 3 characters or longer'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="input input-bordered w-full max-w-xs"
                                style={{ border: "1px solid black" }}
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid Email'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Password"
                                className="input input-bordered w-full max-w-xs"
                                style={{ border: "1px solid black" }}
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is Required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 characters or longer'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                        </div>

                        {signInError}
                        <input className='btn btn-sm w-full max-w-xs text-white' type="submit" value="Register"
                            onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
                            style={{
                                backgroundColor: isHovering ? 'gray' : 'black',
                                color: isHovering ? 'black' : 'white',
                            }}
                        />
                    </form>
                    <p><small>Already have an account? <Link className='text-primary' to="/login">Please login</Link></small></p>
                    <div className="divider">OR</div>
                    <GoogleLogin></GoogleLogin>
                </div>
            </div>
        </div >
    );
};

export default Register;

