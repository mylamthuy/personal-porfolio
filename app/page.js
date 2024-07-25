import About from "./components/About";
import Navbar from "./components/Navbar";
import Qualification from "./components/Qualification";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col lg:mx-28">
      <Navbar />
      {/* relative bg-color-custom flex justify-center items-center flex-col overflow-hidden mx-auto ms:px-10 px-5 */}
      <div className="container mt-20 mx-auto px-12 py-4">
        <About />
        <Qualification />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
