import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { setParams } from '../features/Query/QuerySlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [input, setInput] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate()
  const dropdownButtons = ["Business", "Entertainment", "General", "Health", "Science", "Sports", "Technology"];

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
    if (isSearchOpen) {
      setIsSearchOpen(false);
    }
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (isNavbarOpen) {
      setIsNavbarOpen(false);
    }
  };

  const clickHandler = (category) => {
    console.log(category);
    dispatch(setParams(category));
    navigate(`/category/${category}`)
  };

  function submitHandler(e) {
    e.preventDefault();
    if (input.length === 0) {
      toast.error('⚠️ Please enter a search term!!', {
        position: 'top-center',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
      return;
    }
    dispatch(setParams(input.toLowerCase()));
    setInput('');
    navigate('/search');
  }

  function changeHandler(event) {
    setInput(event.target.value);
  }

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700 sticky top-0 z-10">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <svg version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="42px" height="42px" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve" fill="#111827" stroke="#111827"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path fill="#111827" d="M32,0C14.328,0,0,14.328,0,32s14.328,32,32,32s32-14.328,32-32S49.672,0,32,0z M50.555,16.781 c-0.273,0.234-0.602,0.473-0.863,0.703c-1.98,1.723-2.852,2.422-4.48,2.484C44.762,19.984,44.336,20,43.93,20 c-1.43,0-1.789-0.191-2.242-0.594c-0.23-0.207-0.246-0.629,0.109-2.719c0.203-1.188,0.406-2.43,0.441-3.73 c0.02-0.887,0.184-1.676,0.371-2.461C45.684,12.016,48.398,14.156,50.555,16.781z M33.938,48.266 c-0.996,1.809-2.086,2.465-4.676,3.902l-1.188,0.664c-1.535,0.891-2.914,1.348-4.371,1.664c-4.789-1.766-8.867-4.992-11.66-9.168 c0.098-0.945,0.648-1.461,3.199-2.973c1.684-1,3.777-2.242,5.555-4.215c1.348-1.504,2.102-3.258,2.707-4.668 c0,0,0-0.008,0.004-0.012c0.551,1.238,1.348,2.707,2.848,3.887c2.09,1.672,4.305,2.07,5.922,2.363 c1.449,0.258,1.793,0.375,2.023,0.664C35.375,41.738,36.301,43.871,33.938,48.266z M38.867,54.988 c0.738-0.809,1.449-1.723,2.094-2.898c4.281-7.945,2.156-13.449-0.387-16.676c-2.16-2.727-5-3.238-6.879-3.578 c-1.172-0.211-1.859-0.352-2.371-0.758c-0.219-0.172-0.539-0.93-0.77-1.48c-0.723-1.715-2.07-4.91-6.117-5.469 c-5.406-0.691-7.285,3.859-8.285,6.188c-0.414,0.961-0.844,1.961-1.305,2.477c-0.957,1.059-2.285,1.848-3.691,2.684 c-0.816,0.484-1.707,1.047-2.582,1.695C8.207,35.504,8,33.777,8,32C8,18.746,18.746,8,32,8c0.977,0,1.938,0.074,2.883,0.191 c-0.348,1.359-0.605,2.855-0.645,4.562c-0.023,0.895-0.184,1.758-0.324,2.582c-0.461,2.695-1.16,6.766,2.422,10.02 C38.953,27.684,41.645,28,43.93,28c0.5,0,1.023-0.02,1.574-0.039c4.277-0.16,6.828-2.195,9.047-4.109 C55.473,26.398,56,29.133,56,32C56,42.867,48.773,52.035,38.867,54.988z"></path> <g> <path fill="#F9EBB2" d="M42.609,10.496c-0.188,0.785-0.352,1.574-0.371,2.461c-0.035,1.301-0.238,2.543-0.441,3.73 c-0.355,2.09-0.34,2.512-0.109,2.719C42.141,19.809,42.5,20,43.93,20c0.406,0,0.832-0.016,1.281-0.031 c1.629-0.062,2.5-0.762,4.48-2.484c0.262-0.23,0.59-0.469,0.863-0.703C48.398,14.156,45.684,12.016,42.609,10.496z"></path> <path fill="#F9EBB2" d="M32.277,39.711c-1.617-0.293-3.832-0.691-5.922-2.363c-1.5-1.18-2.297-2.648-2.848-3.887 c-0.004,0.004-0.004,0.008-0.004,0.008c-0.605,1.414-1.359,3.168-2.707,4.672c-1.777,1.973-3.871,3.215-5.555,4.215 c-2.551,1.512-3.102,2.027-3.199,2.973c2.793,4.176,6.871,7.402,11.66,9.168c1.457-0.316,2.836-0.773,4.371-1.664l1.188-0.664 c2.59-1.438,3.68-2.094,4.676-3.902c2.363-4.395,1.438-6.527,0.363-7.891C34.07,40.086,33.727,39.969,32.277,39.711z"></path> </g> <path fill="#45AAB8" d="M38.867,54.988c0.738-0.809,1.449-1.723,2.094-2.898c4.281-7.945,2.156-13.449-0.387-16.676 c-2.16-2.727-5-3.238-6.879-3.578c-1.172-0.211-1.859-0.352-2.371-0.758c-0.219-0.172-0.539-0.93-0.77-1.48 c-0.723-1.715-2.07-4.91-6.117-5.469c-5.406-0.691-7.285,3.859-8.285,6.188c-0.414,0.961-0.844,1.961-1.305,2.477 c-0.957,1.059-2.285,1.848-3.691,2.684c-0.816,0.484-1.707,1.047-2.582,1.695C8.207,35.504,8,33.777,8,32C8,18.746,18.746,8,32,8 c0.977,0,1.938,0.074,2.883,0.191c-0.348,1.359-0.605,2.855-0.645,4.562c-0.023,0.895-0.184,1.758-0.324,2.582 c-0.461,2.695-1.16,6.766,2.422,10.02C38.953,27.684,41.645,28,43.93,28c0.5,0,1.023-0.02,1.574-0.039 c4.277-0.16,6.828-2.195,9.047-4.109C55.473,26.398,56,29.133,56,32C56,42.867,48.773,52.035,38.867,54.988z"></path> </g> </g></svg>
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">NewsG</span>
        </Link>
        <div className="flex md:order-2">
          <button
            type="button"
            className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1"
            aria-controls="search-navbar"
            aria-expanded={isSearchOpen ? "true" : "false"}
            onClick={toggleSearch}
          >
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
            <span className="sr-only">Search</span>
          </button>
          <button
            data-collapse-toggle="navbar-multi-level"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-multi-level"
            aria-expanded={isNavbarOpen ? "true" : "false"}
            onClick={toggleNavbar}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
        <div className={`items-center justify-between ${isNavbarOpen ? '' : 'hidden'} w-full md:flex md:w-auto md:order-1`} id="navbar-multi-level">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link to="/" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">Home</Link>
            </li>
            <li className="relative">
              <button
                id="dropdownNavbarLink"
                data-dropdown-toggle="dropdownNavbar"
                className="flex items-center justify-between w-full py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                onClick={toggleDropdown}
              >
                Category
                <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                </svg>
              </button>
              {isDropdownOpen && (
                <div id="dropdownNavbar" className="z-10 absolute mt-2 w-44 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600">
                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownLargeButton">
                    {dropdownButtons.map((buttonName) => (
                      <li key={buttonName}>
                        <button
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          onClick={() => clickHandler(buttonName)}
                        >
                          {buttonName}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          </ul>
        </div>
        <form onSubmit={submitHandler}>
          <div className={`items-center justify-between ${isSearchOpen ? '' : 'hidden'} w-full md:flex md:w-auto md:order-1`} id="search-navbar">
            <input type="text"
              placeholder="Search..."
              value={input}
              className="block w-full py-2 px-4 text-gray-100 bg-slate-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={changeHandler}
            />
          </div>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
