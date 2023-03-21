import { BsFillMoonFill, BsMoon } from "react-icons/bs";
import { TbSearch } from "react-icons/tb";
import Layout from "../components/Layout";

const Homepage = () => {
  return (
    <div className=''>
      <div className='flex flex-col'>
        <div className='flex flex-col sm:flex-row sm:justify-between gap-y-3'>
          <form>
            <TbSearch />
            <input type='text' name='' id='' />
          </form>
          <div className='relative'>
            <div className='h-12 p-3 flex gap-x-2 items-center'>
              <p>Filter by Region</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout(Homepage);
