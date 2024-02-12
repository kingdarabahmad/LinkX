
import React, { useState } from 'react'

const useAppointment = () => {
    const [appointmentDate, setAppointmentDate] = useState(new Date());
    const [isLoading, setIsLoading] = useState(false);
    const [error,setError] = useState(null);
    const [success,setSuccess] = useState(null);

    const [bookingData,setBookingData] = useState({
        doctorAddress:"",
        doctorFee:"",
        meetingTime:""
    })

    const handleBookAppointment = () => {
        try {
            setIsLoading(true)
            setTimeout(() => {
                setIsLoading(false)
            },2000)
        } catch (error) {
            setIsLoading(false)
            setError(error.message)
        }
    }

    //handle Change of selected date
    const changeSelectedDate = (event, selectedDate) => {
        const currentDate = selectedDate || appointmentDate;
        setAppointmentDate(currentDate);
    };
  return { appointmentDate, changeSelectedDate, isLoading,error,success,handleBookAppointment }
}

export default useAppointment