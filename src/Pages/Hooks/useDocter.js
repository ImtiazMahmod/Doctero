import  { useEffect, useState } from 'react';

const useDocter = () => {
    const [doctors, setDoctors] = useState([])
    useEffect(() => {
        fetch('/fakeData/doctors.json')
            .then(res => res.json())
        .then(data=>setDoctors(data))
    },[])
    return [doctors];
};

export default useDocter;