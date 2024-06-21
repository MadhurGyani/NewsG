import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../features/Query/QuerySlice';

const Pagination = () => {
  const dispatch = useDispatch();
  const totalPage = useSelector((state) => state.query.totalPage);
  const page = useSelector((state) => state.query.page);

  return (
    <nav className="flex justify-between items-center gap-x-1 mt-2 py-2 w-11/12 mx-auto">
      <button
        type="button"
        className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-2 rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none shadow-sm text-xl"
        onClick={() => 
          dispatch(decrement())
        }
        disabled={page === 1}
      >
        <svg
          className="flex-shrink-0 size-3.5"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m15 18-6-6 6-6"></path>
        </svg>
        <span aria-hidden="true" className="hidden sm:block">Previous</span>
      </button>
      <div className="flex items-center gap-x-1">
        <span className="min-h-[38px] min-w-[38px] flex justify-center items-center border border-gray-400 text-gray-800 py-2 px-3 text-sm rounded-lg focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
          {page}
        </span>
        <span className="min-h-[38px] flex justify-center items-center text-gray-500 py-2 px-1.5 text-sm">of</span>
        <span className="min-h-[38px] flex justify-center items-center text-gray-500 py-2 px-1.5 text-sm">
          {totalPage}
        </span>
      </div>
      <button
        type="button"
        className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-2 rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none shadow-sm text-xl"
        onClick={() => 
          dispatch(increment())
         }
        disabled={page === totalPage}
      >
        <span aria-hidden="true" className="hidden sm:block">Next</span>
        <svg
          className="flex-shrink-0 size-3.5"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m9 18 6-6-6-6"></path>
        </svg>
      </button>
    </nav>
  );
};

export default Pagination;
