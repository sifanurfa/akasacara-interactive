import DevlogSection from './DevlogSection';
import React from 'react';
import Footer from '@/components/Footer';
import HighlightSection from './HighlightSection';
import FeaturedSection from './FeaturedSection';
import Navbar from '@/components/Navbar';

const Devlog = () => {
    return (
        <>
        <Navbar />
        <div className="relative bg-black px-container flex flex-col justify-start items-start gap-[23px] overflow-hidden">
            <HighlightSection/>
            <FeaturedSection/>
            <DevlogSection/>
            <Footer/>
        </div>
        <Footer/>
        </>
    );
};

export default Devlog;