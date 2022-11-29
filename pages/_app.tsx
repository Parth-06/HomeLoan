import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar'
import { Provider } from 'react-redux'
import store from "../Store/store";
import Compare from '../components/Compare';
import { ToastContainer } from 'react-toastify';
export default function App({ Component, pageProps }: AppProps) {
  return(
    <>
     <Provider store={store}>
     <Navbar/>
     <Component {...pageProps} />
     <Compare/>
     </Provider>
     <ToastContainer
        position="top-center"
        autoClose={1700}
        hideProgressBar={true}
        closeOnClick={true}
        pauseOnHover={true}
        draggable={true}
        theme="colored"
      />
    </>
   
  )
 
}
