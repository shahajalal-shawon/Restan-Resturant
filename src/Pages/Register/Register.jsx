import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContex } from "../../AuthProvider/AuthProvider";

const Register = () => {
  const [error, setError] = useState("");
  const { creatUser } = useContext(AuthContex);
  const handelCreateUser = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, photo, email, password);
    // createUser
    creatUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="flex justify-center items-center mt-24">
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-900 dark:text-gray-100 ">
        <h1 className="text-2xl font-bold text-center">Register</h1>
        <form onSubmit={handelCreateUser} className="space-y-6">
          <div className="space-y-1 text-sm">
            <label className="block dark:text-gray-400">Name</label>
            <input
              type="text"
              name="name"
              id="username"
              placeholder="Name"
              className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label className="block dark:text-gray-400">Photo URL</label>
            <input
              type="text"
              name="photo"
              id="username"
              placeholder="Photo URL"
              className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
            />
          </div>
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
            Register
          </button>
        </form>

        <p className="text-md text-center sm:px-6 dark:text-gray-400">
          Already have an account?
          <Link to="/login" className="text-blue-600 font-bold">
            LogIn
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
