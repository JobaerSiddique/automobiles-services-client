import React from 'react';
import { useForm } from "react-hook-form";
import img from "../images/img1.jpg"
import auth from './Firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import Loading from "../Shared/Loading"
import { Link } from 'react-router-dom';
const Login = () => {
    
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    
  const onSubmit = async(data) => {
    console.log(data)
    
   
};

if(gUser){
    console.log(gUser)
}
if(gError ){
   return <p>{gError.message}</p>
}
if(gLoading ){
    return <Loading></Loading>
}
    return (
    <>
    <h1 className='text-center text-5xl mt-08 font-bold text-primary'>Welcome to Automobiles Service</h1>
        <div className='flex h-screen justify-center items-center'>
          
          <div className="card w-96 bg-base-100 shadow-xl image-full">
<figure><img src={img} alt="Shoes" /></figure>
<div className="card-body">
  <h2 className=" text-center text-2xl ">Login</h2>
  <form onSubmit={handleSubmit(onSubmit)}>
  <div className="form-control w-full max-w-xs">
<label className="label">
  <span className="label-text text-white">Email</span>
  </label>
<input 
type="email" 
placeholder="Enter Your Email" 
className="input input-bordered w-full max-w-xs text-black" 
{...register("email", { 
  required: {
      value:true,
      message:"Email is required"
  }
})} 
/>
<label className="label">
{errors.email?.type === 'required' && <span className='label-alt text-red-500'>{errors.email.message}</span>}
</label>
</div>
<div className="form-control w-full max-w-xs">
<label className="label">
  <span className="label-text text-white">Password</span>
  </label>
<input 
type="password" 
placeholder="Enter Your password" 
className="input input-bordered w-full max-w-xs text-black" 
{...register("password", { 
  required: {
      value:true,
      message:"password is required"
  },
  maxLength:{
      value:6,
      message:"Must provided 6 digits password"
  }
})} 
/>
<label className="label">
{errors.password?.type === 'required' && <span className='label-alt text-red-500'>{errors.password.message}</span>}
{errors.password?.type === 'maxLength' && <span className='label-alt text-red-500'>{errors.password.message}</span>}
</label>
</div>
    <p className='mb-5'>Have a New User? <Link to="/signup"><span className='text-info'>Please Create a Account</span></Link></p>
<input type="submit" value="login" className='btn btn-outline btn-warning  w-full max-w-xs' />
  </form>

  <div className="divider">OR</div>
  <button onClick={() => signInWithGoogle()} className="btn glass btn-info text-">Continue With Google</button>
</div>
</div>
      </div>
    </>
    );
};

export default Login;