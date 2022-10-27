import React from 'react';
import { useForm } from "react-hook-form";
import img from "../images/img1.jpg"
import auth from './Firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import Loading from "../Shared/Loading"
import { Link } from 'react-router-dom';
import video from "../videos/car.mp4"
const Signup = () => {
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
        <div>
           <video 
           autoPlay
           loop
           muted
           style={{
            position:"absolute",
            width:"100%",
            left:"50%",
            top:"50%",
            height:"100%",
            objectFit:"cover",
            transform:"translate(-50%,-50%)",
            zIndex:"1"
           }}
           src={video}
           type="video/mp4"
           >
            </video> 
        <div className='flex h-screen justify-center items-center'>
          
          <div className="card w-96 bg-base-100 shadow-xl image-full">
<figure><img src={img} alt="Shoes" /></figure>
<div className="card-body">
  <h2 className=" text-center text-2xl ">Sign Up</h2>
  <form onSubmit={handleSubmit(onSubmit)}>
  <div className="form-control w-full max-w-xs">
<label className="label">
  <span className="label-text text-white">Name</span>
  </label>
<input 
type="text" 
placeholder="Enter Your Name" 
className="input input-bordered w-full max-w-xs text-black" 
{...register("name", { 
  required: {
      value:true,
      message:"name is required"
  }
})} 
/>
<label className="label">
{errors.name?.type === 'required' && <span className='label-alt text-red-500'>{errors.name.message}</span>}
</label>
</div>
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
    <p className='mb-5'>Already have an account? <Link to="/login"><span className='text-info'>Please login</span></Link></p>
<input type="submit" value="signup" className='btn btn-outline btn-warning  w-full max-w-xs' />
  </form>

  <div className="divider">OR</div>
  <button onClick={() => signInWithGoogle()} className="btn glass btn-info text-">Continue With Google</button>
</div>
</div>
      </div>
    </div>
    );
};

export default Signup;