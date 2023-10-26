import React from 'react';
import Axiosinstance from '../Hooks/Axiosinstance';
import toast, { Toaster } from 'react-hot-toast';

const Addcart = () => {
    const handlefrom=async(e)=>{
     e.preventDefault()
     const name=e.target.name.value
     const image=e.target.image.value
     const brand=e.target.select.value
     const type=e.target.type.value
     const price=e.target.price.value
     const rating=e.target.rating.value
     const description=e.target.description.value
     if(rating > 6){
          return toast.error("Rating must be between 1 and 6")
     }
     const jsondata={name,image,brand,type,price,rating,description}

     const {data}=await Axiosinstance.post('/allbrand',jsondata)
      if(data.insertedId){
          toast.success('Added for Successfully')
      }
 
     //  reset from for application
      e.target.reset()
    }
    return (
        <div className='w-11/12 lg:max-w-7xl m-auto py-10'>
        <form onSubmit={handlefrom}>
        <div className='flex-row gap-4 lg:flex'>
             <div className='lg:w-1/2'>
             <div className="form-control">
             <label className="label">
             <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" className="input input-bordered w-full" required />
        </div>
        <div className="form-control">
             <label className="label">
             <span className="label-text">Brand select</span>
          </label>
            <select name="select" className="select select-bordered w-full">
             <option disabled selected>Select Your Brand</option>
             <option>lenovo</option>
            <option>iphone</option>
            <option>amd</option>
            <option>sony</option>
            <option>dell</option>
            <option>google</option>
             </select>
        </div>
        <div className="form-control">
             <label className="label">
             <span className="label-text">Price</span>
          </label>
          <input type="text" name="price" className="input input-bordered w-full" required />
        </div>
             </div>
             {/* right to */}
             <div className='lg:w-1/2'>
             <div className="form-control">
             <label className="label">
             <span className="label-text">Image</span>
          </label>
          <input type="text" name="image" className="input input-bordered" required />
        </div>
        <div className="form-control">
             <label className="label">
             <span className="label-text">Type</span>
          </label>
          <input type="text" name="type"  className="input input-bordered" required />
        </div>
        <div className="form-control">
             <label className="label">
             <span className="label-text">Rating</span>
          </label>
          <input type="number"   name="rating"  className="input input-bordered" required />
        </div>
             </div>
        </div>
        <h1 className='mt-2'>Description</h1>
        <textarea className="textarea textarea-bordered w-full my-2" name="description" required></textarea>
        <button className='btn btn-primary w-full my-3'>Add Product</button>
        </form>
        <Toaster
  position="top-right"
  reverseOrder={false}
/>
    </div>
    );
};

export default Addcart;