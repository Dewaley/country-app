import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { BsFillMoonFill, BsMoon } from "react-icons/bs";

const Layout = (Component) => {
  function Theme(props) {
    const [theme, setTheme] = useState(Cookies.get("Theme") || "light");
    useEffect(() => {
      if (!Cookies.get("Theme")) {
        Cookies.set("Theme", theme);
      }
    }, []);

    return (
      <div className={`${theme}`}>
        <header className='flex justify-between px-3 py-4 sm:px-6 md:px-12 font-semibold shadow element'>
          <h2 className='text-xl'>Where in the world?</h2>
          <p
            className='flex items-center gap-1 text-base cursor-pointer'
            onClick={() => {
              if (theme === "light") {
                setTheme("dark");
                Cookies.set("Theme", "dark");
              } else {
                setTheme("light");
                Cookies.set("Theme", "light");
              }
            }}
          >
            {theme === "light" ? <BsMoon /> : <BsFillMoonFill />}
            <span className='select-none'>Dark Mode</span>
          </p>
        </header>
        <main className="px-3 py-4 sm:px-6 md:px-12">
          <Component />
        </main>
      </div>
    );
  }
  return Theme;
};

export default Layout;
