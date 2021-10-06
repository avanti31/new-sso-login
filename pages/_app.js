import { Nav } from "../components/Nav";
import { Sidebar } from "../components/sidebar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div class="relative min-h-screen md:flex">
      <Nav />
      <Sidebar />
      <div class="flex-1 p-10 text-2xl font-bold">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
