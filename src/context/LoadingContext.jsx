/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';
import { BounceLoader } from 'react-spinners';

const LoadingContext = createContext();

const LoadingProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const startLoading = () => {
    setLoading(true);
    setSuccess(false);
  }

  const stopLoading = () => {
    setLoading(false);
    setSuccess(true);
    setTimeout(() => setSuccess(false), 2000);
  }

  return (
    <LoadingContext.Provider value={{ loading, startLoading, stopLoading }}>
      {children}
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500/50 z-50">
          <BounceLoader size={60} color="#ffffff" />
        </div>
      )}
      {success && (
        <div className="fixed inset-0 flex items-center justify-center  bg-gray-500/50 z-50">
          <div className="flex flex-col items-center ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-16 rounded-full text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            <span className='text-white text-lg font-bold'>¡Producto agregado al carrito!</span>
          </div>
        </div>
      )}
    </LoadingContext.Provider>
  );
};

export {LoadingContext, LoadingProvider}
