import { LoginNav } from "../components/LoginNav";
import { Sidebar } from "../components/sidebar";
import { LoginFooter } from "../components/Footer";
import { useRouter } from "next/router";
import { AuthProvider } from "../context/auth";
import { PortalProvider } from "../context/portal";
import { Nav } from "../components/Nav";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <AuthProvider>
      <PortalProvider>
        {router.pathname !== "/" ? <Nav /> : <LoginNav />}
        {router.pathname === "/" ? null : <Sidebar />}
        <div className="relative flex justify-center  ">
          <div className="w-full m-auto">
            <Component {...pageProps} />
          </div>
        </div>
        <div className="modal  absolute  w-full h-screen    top-0 left-0 right-0 bg-black-300 bg-red "></div>
        {router.pathname === "/" ? <LoginFooter /> : null}
      </PortalProvider>
    </AuthProvider>
  );
}

export default MyApp;
