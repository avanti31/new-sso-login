import { LoginNav } from "../components/LoginNav";
import { Sidebar } from "../components/sidebar";
import { LoginFooter } from "../components/Footer";
import { useRouter } from "next/router";
import { AuthProvider } from "../context/auth";
import { PortalProvider } from "../context/portal";
import {Nav} from "../components/Nav";
import "../styles/globals.css";


function MyApp({ Component, pageProps }) {

  const router = useRouter();
  return (
    
      <AuthProvider>
        <PortalProvider>
        {router.pathname !== "/" ? <Nav/> : <LoginNav />}
        <div className="relative flex justify-center">
        {router.pathname === "/" ? null : <Sidebar/>}
          <div className="w-full m-auto">
          <Component {...pageProps} />
          </div>
          </div>
          {router.pathname === "/" ? <LoginFooter/> : null}
      
        </PortalProvider>
      </AuthProvider>
    
  );
}
 

export default MyApp;
