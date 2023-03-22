import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { TbSearch } from "react-icons/tb";
import Layout from "../components/Layout";

const Homepage = () => {
  const [dropDown, setDropDown] = useState(false);

  return (
    <div>
      <div className='flex flex-col gap-3'>
        <div className='flex flex-col sm:flex-row sm:justify-between gap-y-3'>
          <form className='h-12 flex items-center bg-white rounded px-4 element'>
            <span className='pr-4'>
              <TbSearch />
            </span>
            <input
              type='text'
              name=''
              id=''
              className='w-72 bg-transparent outline-none'
              placeholder='Search for a country...'
            />
          </form>
          <div className='relative w-fit'>
            <div
              className='h-12 p-3 flex gap-x-4 items-center rounded element w-fit select-none cursor-pointer'
              onClick={() => {
                setDropDown(!dropDown);
              }}
            >
              <p>Filter by Region</p>
              <BsChevronDown />
            </div>
            <div
              className={`absolute left-0 top-14 flex flex-col gap-1 w-full p-3 text-sm element rounded ${
                dropDown ? "flex" : "hidden"
              }`}
            >
              <p>Africa</p>
              <p>America</p>
              <p>Asia</p>
              <p>Europe</p>
              <p>Oceania</p>
            </div>
          </div>
        </div>
        <div className='flex'></div>
      </div>
    </div>
  );
};

export default Layout(Homepage);
