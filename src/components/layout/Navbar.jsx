import { ChevronUp, Search } from 'lucide-react';

const Navbar = () => {
  return (
    <>
      <div className="font-[Montserrat] font-normal max-w-screen-xl mx-auto flex flex-col gap-2 my-3">
        <div className="flex justify-end items-center gap-12">
          <p className="cursor-pointer active:scale-95">For Companies</p>
          <p className="cursor-pointer active:scale-95">Events</p>
          <p className="cursor-pointer active:scale-95">Become a Master</p>
          <p className="cursor-pointer active:scale-95">Blogs</p>
        </div>
      </div>
      <hr className="border-[#E5E5E5] border-b-[1px]" />
      <div className="font-[Montserrat] font-normal max-w-screen-xl mx-auto flex flex-col gap-2 my-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 h-10 w-10 font-[LeagueSpartan] font-extrabold">
            <img src="/Images/logo.png" alt="logo" />
            TSC
          </div>
          <div className="flex justify-end items-center gap-12">
            <p className="flex items-center cursor-pointer active:scale-95">
              What we do <ChevronUp />
            </p>
            <p className="cursor-pointer active:scale-95">About Us</p>
            <p className="cursor-pointer active:scale-95">Careers</p>
            <p className="cursor-pointer active:scale-95">Contact Us</p>
            <p className="flex items-center gap-2 cursor-pointer active:scale-95 px-4 py-2 rounded-lg bg-gradient-to-r from-[#A468DA] to-[#149BF5] text-white">
              <Search size={16} />
              Search
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
