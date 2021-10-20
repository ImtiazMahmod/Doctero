import React from 'react';
import CompanyInfo from '../../Shared/companyinfo/CompanyInfo';
import Departments from '../Departments/Departments';
import HeaderInfo from '../HeaderInfo/HeaderInfo';
import HomeBanner from '../HomeBanner/HomeBanner';
import HomeDoctors from '../HomeDoctors/HomeDoctors';

const Home = () => {
    
    return (
        <>
            
        <HomeBanner></HomeBanner>
        
            <HeaderInfo></HeaderInfo>
            <div className="my-5 fw-bold">
                <p className="text-info">Choose your services</p>
                <h1 className="fw-bold">Department of medical health care</h1>
            </div>
            <Departments></Departments>
            <CompanyInfo></CompanyInfo>
            <div className="my-5 fw-bold">
                <p className="text-info">Expert & Specialized Consultant </p>
                <h1 className="fw-bold">Our Specialized Doctors</h1>
            </div>
            <HomeDoctors></HomeDoctors>
            
            </>
    );
};

export default Home;