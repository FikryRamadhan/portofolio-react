import { IconInbox, IconMenu2, IconX } from "@tabler/icons-react";
import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import SendMail from "./SendMail";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenSidebar, setOpenSidebar] = useState(false);

  const sidebarRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  function toggleSidebar() {
    setOpenSidebar(!isOpenSidebar);
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node) &&
        isOpenSidebar
      ) {
        setOpenSidebar(false);
      }
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        isOpen
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, isOpenSidebar]);




  return (
    <>
      <section className="text-white">
        <div
          id="nav"
          className="w-full lg:px-28 py-3 flex items-center justify-between backdrop-blur-lg fixed top-0 z-50 "
        >
          <div className="flex ml-4 opacity-100 items-center gap-3">
            <img
              src="/images/logo2.png"
              alt=""
              className="w-10 lg:w-16"
            />

          </div>
          <div className="items-center flex">
            <div className="hidden lg:flex items-center lg:ml-100 gap-14 mt-2 text-white font-semibold">
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive
                    ? "text-white after:content-[''] after:bottom-0 after:h-[5px] after:bg-custom-brown after:absolute after:rounded-full relative pb-2 hover:after:w-[5px] active:after:w-[15px] after:transition-all after:duration-500 after:left-1/2 after:-translate-x-1/2 after:w-full after:left-0 after:right-0 after:transition-all after:duration-500"
                    : "text-white  after:content-[''] after:bottom-0 after:h-[5px] after:bg-yelloe-400 after:absolute after:rounded-full relative pb-2 hover:after:w-[5px] active:after:w-[15px] after:transition-all after:duration-500 after:left-1/2 after:-translate-x-1/2"
                }
              >
                Home
              </NavLink>
              <NavLink
                to={"/about"}
                className={({ isActive }) =>
                  isActive
                    ? "text-white after:content-[''] after:bottom-0 after:h-[5px] after:bg-custom-brown after:absolute after:rounded-full relative pb-2 hover:after:w-[5px] active:after:w-[15px] after:transition-all after:duration-500 after:left-1/2 after:-translate-x-1/2 after:w-full after:left-0 after:right-0 after:transition-all after:duration-500"
                    : "text-white  after:content-[''] after:bottom-0 after:h-[5px] after:bg-yelloe-400 after:absolute after:rounded-full relative pb-2 hover:after:w-[5px] active:after:w-[15px] after:transition-all after:duration-500 after:left-1/2 after:-translate-x-1/2"
                }
              >
                About
              </NavLink>
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive
                    ? "text-white after:content-[''] after:bottom-0 after:h-[5px] after:bg-custom-brown after:absolute after:rounded-full relative pb-2 hover:after:w-[5px] active:after:w-[15px] after:transition-all after:duration-500 after:left-1/2 after:-translate-x-1/2 after:w-full after:left-0 after:right-0 after:transition-all after:duration-500"
                    : "text-white  after:content-[''] after:bottom-0 after:h-[5px] after:bg-yelloe-400 after:absolute after:rounded-full relative pb-2 hover:after:w-[5px] active:after:w-[15px] after:transition-all after:duration-500 after:left-1/2 after:-translate-x-1/2"
                }
              >
                Portofolio
              </NavLink>
            </div>
          </div>

          {/* Mobile View */}
          {/* tampilan mobile */}
          <div className="relative lg:hidden mt-2 px-12"
            ref={menuRef}>
            {isOpen ? (
              <>
                <button onClick={toggleMenu} className="text-white">
                  {isOpen ? <IconX /> : <IconMenu2 />}
                </button>
                <div className="top-8 absolute right-2 bg-white z-20 border border-zinc-400 rounded-lg shadow-lg px-3 py-2">
                  <div className="border-b-2 pb-3 flex items-center gap-4"></div>
                  <div className="flex flex-col justify-center items-center gap-2 py-2 px-4">
                    <NavLink to="/" className="text-zinc-800">
                      Home
                    </NavLink>
                    <NavLink to="/" className="text-zinc-800">
                      About
                    </NavLink>
                    <NavLink to="/" className="text-zinc-800">
                      Portofolio
                    </NavLink>
                  </div>
                </div>
              </>
            ) : (
              <button onClick={toggleMenu} className="text-white ">
                <IconMenu2></IconMenu2>
              </button>
            )}
            <button onClick={toggleSidebar} className="text-white ml-4">
              <IconInbox></IconInbox>
            </button>
          </div>
        </div>
      </section>

      {isOpenSidebar && (
        <div className="m-0 font-sans lg:hidden  transition-all duration-500 z-50">
          <div
            ref={sidebarRef}
            className="fixed h-full w-[300px] top-0 bg-white shadow-xl transition-all duration-500 z-50 p-6 right-0"
          >
            <div className="mt-20 mb-2">
              <h4 className="text-xl">Let's Work Together!</h4>
              <p className="text-sm text-gray-600 mt-2">
                I'm available for new opportunities and would love to contribute to your next project.
                Let's discuss how I can help bring your ideas to life!
              </p>
              <p className="text-sm text-gray-600 mt-2">
                With expertise in modern web development and a passion for creating exceptional user experiences,
                I'm ready to add value to your team.
              </p>
            </div>
            <SendMail />
          </div>
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={toggleSidebar}
          ></div>
        </div>
      )}
    </>
  )
};

export default Navbar