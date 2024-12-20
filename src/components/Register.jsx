import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
export default function Register() {

  const [firstName, setFirstName] = useState('')
  const [lastName, setlastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // const [userSave, setUserSave] = useState([])

  // const getData = async () => {
  //   try {
  //     const userData = await axios.get("http://localhost:5000/user")
  //     setUserSave(userData?.data?.user)
  //   }
  //   catch (err) {
  //     console.log(err)
  //   }
  // }

  // useEffect(() => {

  //   getData()

  // }, [])

  const navigate = useNavigate();
  const handleSubmit = async () => {
    
    console.log("Function is working")
    const body = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password
    }
    try {
      const userData = await axios.post("http://localhost:5000/user", body)
      if (userData) {
        alert(userData.data.message)
        navigate("/profile")
        // getData()
      }
    }
    catch (err) {
      console.log(err)
    }
  };
  return (
    <>
      <br />
      <form className="mx-auto max-w-2xl py-15 sm:py-15 lg:py-30 bg-slate-100 sm:px-20 lg:px-50 rounded-3xl shadow-2xl">
        <div className="space-y-12">
          <div className="border-b border-gray-400 pb-12">
            <br />
            <h3 className="text-balance text-4xl font-semibold tracking-tight text-gray-800 sm:text-4xl text-center">
              Sign Up
            </h3>
          </div>

          <div className="border-b border-gray-400 pb-12">
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  First name
                </label>
                <div className="mt-2">
                  <input
                    id="first-name"
                    name="first-name"
                    type="text"
                    onChange={(e)=> setFirstName(e.target.value)}
                    autoComplete="given-name"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-500 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-gray-800 sm:text-sm/6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="last-name"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Last name
                </label>
                <div className="mt-2">
                  <input
                    id="last-name"
                    name="last-name"
                    type="text"
                    onChange={(e)=> setlastName(e.target.value)}
                    autoComplete="family-name"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-500 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-gray-800 sm:text-sm/6"
                  />
                </div>
              </div>

              <div className="sm:col-span-6">
                <label
                  htmlFor="email"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    onChange={(e)=> setEmail(e.target.value)}
                    autoComplete="email"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-500 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-gray-800 sm:text-sm/6"
                  />
                </div>
              </div>

              <div className="sm:col-span-6">
                <label
                  htmlFor="password"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Password
                </label>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    onChange={(e)=> setPassword(e.target.value)}
                    autoComplete="password"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-500 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-gray-800 sm:text-sm/6"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center gap-x-6">
            <button
              type="button"
              className="text-sm/6 font-semibold text-gray-900"
              onClick={() => handleSubmit()}
            >
              Cancel
            </button>
            <button
              type="submit"
              onClick={() => handleSubmit()}
              className="rounded-md bg-gray-800 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-800"
            >
              Save
            </button>
          </div>
          <br />
        </div>
      </form>
      <p className="mt-10 text-center text-sm/6 text-gray-500">
        Already have an account?{" "}
        <Link
          to="/login"
          className="font-semibold text-indigo-600 hover:text-indigo-500"
        >
          LogIn
        </Link>
      </p>
      <br />
    </>
  );
}
