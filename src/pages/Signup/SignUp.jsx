import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from 'sweetalert2'
import { useContext } from "react";


const SignUp = () => {
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm();

    const { createUser, updateUserProfile, logOut } = useContext(AuthContext);
    const navigate = useNavigate()

    const onSubmit = (data) => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        const saveUser = {
                            name: data.name,
                            email: data.email
                        }
                        fetch('http://localhost:5000/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(saveUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                console.log(data);
                                if (data.insertedId) {
                                    reset()
                                    // Sawl is not working I've to fix it.
                                    Swal.fire({
                                        position: 'center',
                                        icon: 'success',
                                        title: 'Your profile updated',
                                        showConfirmButton: false,
                                        timer: 1500
                                    })
                                }
                            })

                        logOut(() => { })
                            .then(() => {
                                navigate('/');
                            })
                            .catch((error) => console.log(error))

                    })
                    .catch((error) => console.log(error))

            })
    };

    console.log(watch("example"))

    return (
        <>
            <Helmet>
                <title>Bistro Boss | Sign up</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} name="name" placeholder="Name" className="input input-bordered" />
                                {errors.name && <span className="text-red-600 my-1">Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">PhotoURL</span>
                                </label>
                                <input type="text" {...register("photo", { required: true })} name="photo" placeholder="Name" className="input input-bordered" />
                                {errors.name && <span className="text-red-600 my-1">PhotoURL is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                                {errors.email && <span className="text-red-600 my-1">Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>

                                <input
                                    type="password"
                                    {...register("password",
                                        {
                                            required: true,
                                            minLength: 6,
                                            maxLength: 20,
                                            pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z].*[a-z])/
                                        })} placeholder="password"
                                    className="input input-bordered" />

                                {errors.password?.type === "required" && (
                                    <span className="text-red-600 my-1">Password is required</span>
                                )}
                                {errors.password?.type === "minLength" && (
                                    <span className="text-red-600 my-1">Password must be 6 charecter</span>
                                )}
                                {errors.password?.type === "maxLength" && (
                                    <span className="text-red-600 my-1">Password must less than 20 charecter</span>
                                )}
                                {errors.password?.type === "pattern" && (
                                    <span className="text-red-600 my-1">Password must have one uppercase letter, one special charecter, one digit, and two lowercase letter.</span>
                                )}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Sing up" />
                                <p><small>Already have an account? <Link to={'/login'}>Login.</Link></small></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;