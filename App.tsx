
import React, { useState } from 'react';
import Header from './components/Header';
import FeatureGrid from './components/FeatureGrid';
import MenuList from './components/MenuList';
import BottomNav from './components/BottomNav';
import MultiStepModal from './components/MultiStepModal';

const App: React.FC = () => {
  const [showModal, setShowModal] = useState(true);

  return (
    <div className="flex justify-center bg-gray-100 min-h-screen">
      <div className="w-full max-w-[430px] min-w-[360px] bg-[#f8f9fa] min-h-screen pb-20 relative flex flex-col overflow-hidden">
        
        {/* Main Content Area - Blurred when modal is open */}
        <div className={`flex-1 transition-all duration-300 ${showModal ? 'blur-md pointer-events-none scale-[0.98]' : ''}`}>
          <Header />
          
          <div className="px-0">
            <FeatureGrid />
            
            <div className="px-4 mt-4">
              <MenuList />
            </div>
          </div>
        </div>

        {/* Sticky Bottom Navigation - also blurred */}
        <div className={showModal ? 'blur-md pointer-events-none' : ''}>
          <BottomNav />
        </div>

        {/* Multi-Step Modal */}
        {showModal && (
          <MultiStepModal onClose={() => setShowModal(false)} />
        )}
      </div>
    </div>
  );
};

export default App;
