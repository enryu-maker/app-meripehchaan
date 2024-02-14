import React from 'react'
import Index from './Navigation/Index'
import Navbar from './Components/Navbar'
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { Init } from './Store/actions';
import { Circles, Rings, TailSpin } from 'react-loader-spinner';
export default function App() {
  const dispatch = useDispatch()
  const [loading, setLoading] = React.useState(false)
  React.useEffect(() => {
    dispatch(Init(setLoading))
  }, [dispatch])
  if (loading) {
    return (
      <div className='flex justify-center items-center h-screen'>
        <TailSpin
          visible={true}
          height="80"
          width="80"
          color="#000"
          ariaLabel="rings-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    )
  }
  else {
    return (
      <div>
        <Index />
        <ToastContainer />
      </div>
    )
  }
}
