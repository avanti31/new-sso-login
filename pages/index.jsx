import { useContext } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { AuthContext } from "../context/auth";
import fetcher from "../api/fetcher";


export default function Home() {

  const router = useRouter();
  const [_, setUser] = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async ({ employeeId, password }) => {
    const data = {
      // EmployeeId: "C1571",
      EmployeeId: employeeId,
      // Password: "June@123",
      Password: password,
      AppName: "",
      MachinId: "",
      MacAdd: "",
    };

    const result = await fetcher("LOGIN_URL", { body: data });
    const { body } = result;
    console.log("headers",result)
    
    // adding data to local storage
    if (result.body.status === 0) {
      const user = body.responseData;
      const { Body } = JSON.parse(user).loginResponse;
      console.log("body",body)
      localStorage.setItem("user", JSON.stringify(Body));
      setUser(Body);
      router.push("/portal");
    } else {
      router.push("/");
    }
  };
  
  return (
  
    <div className="bg-gray-200 w-full py-14 pb-20"> 
      <h1 className="text-3xl text-center text-gray-700 dark:text-white mb-5">Login</h1> 
      <div className="w-2/3 py-6 px-4 lg:w-2/5 border-b-4 mx-auto overflow-hidden bg-white">
        <div className="pb-4 w-1/2 border-b-4 border-red-400">
         <h2 className="text-1xl text-center py-2 text-gray-800 dark:text-white">Employee</h2>
        </div>
        
              <p className="mt-4 text-sm pt-2 text-gray-800 text-center">You can login to all your IIFL applications through this common login page, using your IWIN credentials.</p>
  
         <form onSubmit={handleSubmit(onSubmit)}>
            <div className="w-full mt-8">
             <input className="block w-full px-4 py-2 mt-2 mb-2 text-base text-gray-700 placeholder-gray-500 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" placeholder="Username" name='employeeId' isInvalid={!!errors?.employeeId}
              {...register("employeeId", { required: true })} />
            </div>
            {errors.employeeId?.type === "required" && (
            <label
              status='error'
              w='95%'
              m='auto'
              color='#dd1c3f'
              bg='white'
              pt='0.5rem'
              fontSize='0.9rem'
            >
              Provide valid username
            </label>
          )}
            <div className="w-full mt-6 mb-6">
              <input className="block w-full px-4 py-2 mt-2 text-base text-gray-700 placeholder-gray-500 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" type="password" placeholder="Password" aria-label="Password"  name='password' isInvalid={!!errors?.password}
              {...register("password", { required: true })} />
              {errors.password?.type === "required" && (
              <label
              status='error'
              w='95%'
              m='auto'
              color='#dd1c3f'
              bg='white'
              pt='0.5rem'
              fontSize='0.9rem'
            >
              Provide valid password
            </label>
          )}
            </div>
              <button className=" text-base flex item-left mt-4 px-10 py-2 text-gray-800 transition-colors duration-200 transform bg-gray-200 rounded focus:outline-none" type="submit">LOGIN</button>
         </form>
       </div>
      </div>
   
  
  
  )
}
