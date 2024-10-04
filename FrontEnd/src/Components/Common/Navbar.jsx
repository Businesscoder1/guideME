import { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"; // Close icon added for mobile menu
import { BsChevronDown } from "react-icons/bs"; // Dropdown icon
import { useSelector } from "react-redux";
import { Link, matchPath, useLocation } from "react-router-dom";
import { NavbarLinks } from "../../data/navbar-links";
import Logo from "../../assets/Logo/logo.jpg";
// import { apiConnector } from "../../services/apiConnector"
// import { categories } from "../../services/apis"
// import { ACCOUNT_TYPE } from "../../utils/constants"
// import ProfileDropdown from "../core/Auth/ProfileDropdown"



function Navbar() {
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const location = useLocation();

  const [subLinks, setSubLinks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        // Fetch categories if needed
      } catch (error) {
        console.log("Could not fetch Categories.", error);
      }
      setLoading(false);
    })();
  }, []);

  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div
      className={`flex h-14 items-center bg-gray-600 justify-center border-b-[1px] border-b-richblack-700 ${
        location.pathname !== "/" ? "bg-gray-800" : ""
      } transition-all duration-200`}
      
    >
      <div className="flex w-screen h-20 max-w-maxContent text-white font-extrabold bg-gray-800 items-center justify-between px-4">
        <Link to="/" className="flex items-center">
          <img src={Logo} alt="Logo" className="w-10 h-12 rounded-full" loading="lazy" />
          <div className="mt-2 ml-3 text-2xl">Guide ME</div>
        </Link>
        
        <nav className="hidden md:block">
          <ul className="flex gap-x-6 text-richblack-25">
            {NavbarLinks.map((link, index) => (
              <li key={index}>
                {link.title === "Catalog" ? (
                  <div
                    className={`group relative flex cursor-pointer items-center gap-1 ${
                      matchRoute("/catalog/:catalogName")
                        ? "text-yellow-500"
                        : "text-gray-300"
                    }`}
                  >
                    <p>{link.title}</p>
                    <BsChevronDown />
                    <div className="invisible absolute left-[50%] top-[50%] z-[1000] flex w-[200px] translate-x-[-50%] translate-y-[3em] flex-col rounded-lg bg-richblack-5 p-4 text-richblack-900 opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-[1.65em] group-hover:opacity-100 lg:w-[300px]">
                      <div className="absolute left-[50%] top-0 -z-10 h-6 w-6 translate-x-[80%] translate-y-[-40%] rotate-45 select-none rounded bg-richblack-5"></div>
                      {loading ? (
                        <p className="text-center">Loading...</p>
                      ) : subLinks.length ? (
                        subLinks
                          ?.filter((subLink) => subLink?.courses?.length > 0)
                          ?.map((subLink, i) => (
                            <Link
                              to={`/catalog/${subLink.name.split(" ").join("-").toLowerCase()}`}
                              className="rounded-lg bg-transparent py-4 pl-4 hover:bg-richblack-50"
                              key={i}
                            >
                              <p>{subLink.name}</p>
                            </Link>
                          ))
                      ) : (
                        <p className="text-center">No Courses Found</p>
                      )}
                    </div>
                  </div>
                ) : (
                  <Link to={link?.path}>
                    <p className={`${
                        matchRoute(link?.path)
                          ? "text-yellow-100"
                          : "text-gray-300"
                      }`}>
                      {link.title}
                    </p>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Login / Signup Buttons always visible */}
        <div className="hidden items-center gap-x-4 md:flex">
          {token === null ? (
            <>
              <Link to="/login">
                <button className="rounded-[8px] border border-richblack-700 bg-richblack-800 px-4 py-2 text-richblack-100 text-sm md:text-base">
                  Log in
                </button>
              </Link>
              <Link to="/signup">
                <button className="rounded-[8px] border border-richblack-700 bg-richblack-800 px-4 py-2 text-richblack-100 text-sm md:text-base">
                  Sign up
                </button>
              </Link>
            </>
          ) : (
            <>
              {/* Profile Dropdown */}
              {/* {token !== null && <ProfileDropdown />} */}
            </>
          )}
        </div>

        {/* Mobile menu toggle */}
        <button className="md:hidden" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? (
            <AiOutlineClose fontSize={24} fill="#AFB2BF" />
          ) : (
            <AiOutlineMenu fontSize={24} fill="#AFB2BF" />
          )}
        </button>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-10  opacity-80 top-20 right-0 w-80 bg-black p-4 md:hidden">
            <ul className="flex flex-col gap-y-4">
              {NavbarLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link?.path} onClick={() => setIsMobileMenuOpen(false)}>
                    <p className={`${
                        matchRoute(link?.path)
                          ? "text-yellow-500"
                          : "text-richblack-25"
                      }`}>
                      {link.title}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar
