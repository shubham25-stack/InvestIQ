import React, {useState} from "react";

function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        if(!email || !password){
            alert("Please fill in both fields");
            return;
        }
        // Handle login logic here
        console.log("Loging in with: ",{email,password});

        //write the logic of authentication and write again
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            {/* //header */}
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
                <h1 className="text-3xl font-bold text-gray-900">
                    Welcome Back!
                </h1>
                <p className="mt-2 text-sm text-gray-600">Please sign in your account</p>
           

            {/* //form */}
            <form className="space-y-6" onSubmit={handleSubmit}>

                {/* //take input for email */}
                <div><label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                <input id="email" name="email" type="email" autoComplete="email" required value={email} onChange={(event)=>setEmail(event.target.value)} className="w-full px-3 py-2 mt-1 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="example@gmail.com"/>
                </div>

                {/* //take input for password */}
                <div><label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                <input id="password" name="password" type="password" autoComplete="password" required value={password} onChange={(event)=>setPassword(event.target.value)} className="w-full px-3 py-2 mt-1 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="********"/>
                </div>

                {/* //submit button */}
                <div><button type="submit" className="w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-300">
                    Sign In</button></div>

                {/* //creating of paragraph that redirect to the sigup page */}
                <p className="mt-4 text-sm text-center text-gray-600">Don't have an account?{''}Sign Up</p>
                {/* <Link to ="/signup" className="font-medium text-indigo-600 hover:text-indigo-500"></Link> */}

            </form>
             </div>
            
        </div>
    )
}


export default Login