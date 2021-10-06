import { LoginNav } from "../components/LoginNav";
import { Sidebar } from "../components/sidebar";
import { LoginFooter } from "../components/Footer";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <LoginNav />
      <div className="relative min-h-screen md:flex">
        <Sidebar />
        <div className="flex-1  p-10 text-2xl font-bold">
          <Component {...pageProps} />
        </div>
      </div>
      <LoginFooter />
    </>
  );
}

export default MyApp;
