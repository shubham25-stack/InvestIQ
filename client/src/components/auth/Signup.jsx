import React, {useState} from "react";
import { useNavigate } from "react-router-dom";


function Signup(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        if(!email || !password || !name || !confirmPassword){
            alert("Please fill in all fields");
            return;
        }

        if(password !== confirmPassword){
            alert("Passwords do not match");
            return;
        }

        // Handle signup logic here
        console.log("Signing up with: ",{name,email,password});

        try{
            const config = {
                headers:{"Content-Type":"application/json"},
             };
            await axios.post(
                "https://localhost:5000/api/users/register",
                {name,email,password},
                config
            );
            navigate('/login');
        } catch (error){
            console.log(error.response.data.message);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            {/* //header */}
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
                <h1 className="text-3xl font-bold text-gray-900 text-center">
                    Welcome Back!
                </h1>
                <p className="mt-2 text-sm text-gray-600 text-center">Please sign in your account</p>
           

            {/* //form */}
            <form className="space-y-6" onSubmit={handleSubmit}>

                {/* //take input for the name */}
                <div><label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input id="name" name="name" type="name" autoComplete="name" required value={name} onChange={(event)=>setName(event.target.value)} className="w-full px-3 py-2 mt-1 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Shiv Thakur"/>
                </div>
                {/* //take input for email */}
                <div><label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                <input id="email" name="email" type="email" autoComplete="email" required value={email} onChange={(event)=>setEmail(event.target.value)} className="w-full px-3 py-2 mt-1 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="example@gmail.com"/>
                </div>

                {/* //take input for password */}
                <div><label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                <input id="password" name="password" type="password" autoComplete="password" required value={password} onChange={(event)=>setPassword(event.target.value)} className="w-full px-3 py-2 mt-1 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="********"/>
                </div>

                {/* //take input for confirm passoword */}
                <div><label htmlFor="confirm password" className="block text-sm font-medium text-gray-700">Confirm Password</label>
                <input id="confirm password" name="confirm password" type="password" autoComplete="confirm password" required value={confirmPassword} onChange={(event)=>setConfirmPassword(event.target.value)} className="w-full px-3 py-2 mt-1 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="********"/>
                </div>

                {/* //submit button */}
                <div><button type="submit" className="w-full px-4 py-2 text-sm font-medium text-white bg-indigo-500 border border-transparent rounded-md shadow-sm hover:bg-indigo-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-300">
                    Sign Up</button></div>

                {/* //creating of paragraph that redirect to the sigup page */}
                <p className="mt-4 text-sm text-center text-gray-600">Alredy have an account?{''}Sign In</p>
                {/* <Link to ="/signup" className="font-medium text-indigo-600 hover:text-indigo-500"></Link> */}

            </form>
             </div>
            
        </div>
    )
}


export default Signup