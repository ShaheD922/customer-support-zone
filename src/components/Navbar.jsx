import { MdOutlineMenu } from "react-icons/md";
import Container from "./Container";

const Navbar = () => {
  return (
    <div className=" bg-purple-100 shadow-md border-b-[0.5px] border-gray-300">
      <Container>
      <nav className="px-8 py-4 flex justify-between items-center"> 
        <h1 className="md:text-xl text-sm font-bold ">Customer Ticket System</h1>
        <div className="md:flex hidden items-center gap-6">
          <a href="#" className="text-gray-600">
            Home
          </a>
          <a href="#" className="text-gray-600">
            FAQ
          </a>
          <a href="#" className="text-gray-600">
            Change Log
          </a>

          <a href="#" className="text-gray-600">
            Blog
          </a>
          <a href="#" className="text-gray-600">
            Download
          </a>
          <a href="#" className="text-gray-600">
            Contact
          </a>
          <button className=" bg-gradient-to-r from-purple-600 to-indigo-800 text-white font-semibold px-4 py-2 rounded-lg hover:cursor-pointer">
            + New Ticket
          </button>
        </div>
        <div className="block md:hidden">
          <MdOutlineMenu />
        </div>
      </nav>
      </Container>
    </div>
  );
};

export default Navbar;