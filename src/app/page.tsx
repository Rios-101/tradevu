import DashboardContainer from '@/Components/DashboardContainer';
import DashboardHeader from '@/Components/DashboardHeader';
import PendingActions from '@/Components/PendingActions';
import StatsCards from '@/Components/StatsCards';
import Transactions from '@/Components/Transactions';
import React from 'react';


const Dashboard: React.FC = () => {
  return (
    <DashboardContainer>
      <div className="flex-1 space-y-4">
        <DashboardHeader />
        <div className='grid grid-cols-1 gap-4 lg:grid-cols-2 pb-32'>
          <Transactions />
          <PendingActions />
        </div>

      </div>

    </DashboardContainer>
  );
};

export default Dashboard;
