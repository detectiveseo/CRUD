import React from 'react';

const AddUser = () => {
    const formHandle = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const location = form.location.value;
        const gender = form.gender.value;

        const userData = {
            name,
            email,
            phone,
            location,
            gender,
        }

        console.log(userData)

    }
    return (
        <div>
            <form onSubmit={formHandle}>
                <div className="w-full max-w-xl mx-auto py-20">

                    <div className='text-center bg-slate-500 text-white text-3xl uppercase py-5 font-bold px-4 rounded'>
                        <h1>Add a New User In detective seo</h1>
                    </div>
                    <label className="label">
                        <span className="label-text">What is your name?</span>
                    </label>
                    <input name='name' type="text" placeholder="Type here" className="input input-bordered w-full" />

                    <label className="label">
                        <span className="label-text">What is your email?</span>
                    </label>
                    <input name='email' type="email" placeholder="Type here" className="input input-bordered w-full" />

                    <label className="label">
                        <span className="label-text">What is your number?</span>
                    </label>
                    <input name='phone' type="tel" placeholder="Type here" className="input input-bordered w-full" />

                    <label className="label">
                        <span className="label-text">What is your Adress?</span>
                    </label>
                    <input name='location' type="text" placeholder="Type here" className="input input-bordered w-full" />



                    <label className="label">
                        <span className="label-text">What is your gender?</span>
                    </label>

                    <select className='p-3 rounded border-2 border-slate-300 w-full
                    ' name="gender" id="gender">
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>

                    <div className='text-center mt-4'>
                        <input className='btn ' type="submit" value="Add Now" />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddUser;