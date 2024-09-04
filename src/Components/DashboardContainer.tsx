import React, { ReactNode } from 'react';
import Nav from './Nav';

interface DashboardContainerProps {
    children: ReactNode;
}

const DashboardContainer: React.FC<DashboardContainerProps> = ({ children }) => {
    return (
        <div className=" bg-primary-600  min-h-screen">
            <Nav />
            <div className='px-6'>
                {children}
            </div>
        </div>
    );
};

export default DashboardContainer;
