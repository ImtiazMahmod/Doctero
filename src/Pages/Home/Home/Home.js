import React from 'react';
import Departments from '../Departments/Departments';
import HeaderInfo from '../HeaderInfo/HeaderInfo';
import HomeBanner from '../HomeBanner/HomeBanner';

const Home = () => {
    
    return (
        <>
            
        <HomeBanner></HomeBanner>
        
            <HeaderInfo></HeaderInfo>
            <Departments></Departments>
            
            </>
    );
};

export default Home;