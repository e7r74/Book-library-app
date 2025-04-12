import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify'
import { clearError, selectErrorMessage } from '../../redux/slices/errorSlice'
const Error = () => {
  const errorMasage = useSelector(selectErrorMessage)
  const dispatch = useDispatch()
  useEffect(() => {
    if (errorMasage) {
      toast.info(errorMasage)
      dispatch(clearError())
    }
  }, [errorMasage, dispatch])
  //   toast.error('test measage')
  //   toast.warning('Test measage')
  return <ToastContainer position="top-right" autoClose={2000} />
}
export default Error
