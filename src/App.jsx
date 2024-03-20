import Cards from "./compoenents/Cards";
import Footer from "./compoenents/Footer";
import Login from "./compoenents/Login";
import Navabr from "./compoenents/Navbar/Navabr";

const App = () => {
  return (
    <div className="grid grid-row-3 gap-4 content-between h-screen">
      <Navabr />
      <div className="flex flex-row justify-evenly flex-wrap">
        <Cards></Cards>
        <Cards></Cards>
        <Cards></Cards>
        <Cards></Cards>
        <Login></Login>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default App;
