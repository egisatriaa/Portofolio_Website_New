"use client";

import React from 'react';

// We've opted for native Intersection Observer in the components themselves 
// for better performance and reliability in Next.js compared to locomotive-scroll v5.
const LocomotiveScrollProvider = ({ children }: { children: React.ReactNode }) => {
    return <>{children}</>;
};

export default LocomotiveScrollProvider;
