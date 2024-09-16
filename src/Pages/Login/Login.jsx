import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContex } from "../../AuthProvider/AuthProvider";

const Login = () => {
    const { logInUser, googleLogIn } = useContext(AuthContex);
    const handelLogin = (e) => {
      e.preventDefault();
      const email = e.target.email.value;
      const password = e.target.password.value;
      console.log(email, password);
      // login user
      logInUser(email, password)
        .then((result) => {
          console.log(result.user);
          
          //  navigate
        //   navigate(location?.state ? location.state : "/");
        })
        .catch((error) => console.log(error));
    };
    const handelGoogleLogin = () => {
      googleLogIn()
        .then((result) => {
          const LoginUser = result.user;
          console.log(LoginUser);
        })
        .catch((err) => console.log(err));
    };
    return (
      <div className="flex justify-center items-center mt-24">
        <div className="w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-900 dark:text-gray-100 ">
          <h1 className="text-2xl font-bold text-center">Login</h1>
          <form onSubmit={handelLogin} className="space-y-6">
            <div className="space-y-1 text-sm">
              <label className="block dark:text-gray-400">Email</label>
              <input
                type="email"
                name="email"
                id="username"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
              />
            </div>
            <div className="space-y-1 text-sm">
              <label className="block dark:text-gray-400">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
              />
            </div>
            <button className="block w-full p-3 text-center rounded-sm dark:text-gray-900 dark:bg-violet-400">
              Sign in
            </button>
          </form>
          <div className="flex items-center pt-4 space-x-1">
            <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
            <p className="px-3 text-sm dark:text-gray-400">
              Login with social accounts
            </p>
            <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          </div>
          <div className="flex justify-center space-x-4">
           <button className="btn btn-primary" onClick={handelGoogleLogin}>LogIn With Google</button>
           <button className="btn btn-secondary" onClick={handelGoogleLogin}>LogIn With Github</button>
          </div>
          <p className="text-md text-center sm:px-6 dark:text-gray-400">
            Don't have an account?{" "}
            <Link to="/register" className="text-blue-600 font-bold">
              Register
            </Link>
          </p>
        </div>
      </div>
    );
};

export default Login;