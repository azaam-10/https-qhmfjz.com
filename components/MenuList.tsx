
import React from 'react';
import { Layout, ClipboardList, TrendingDown, Settings, ChevronRight } from 'lucide-react';

const MenuList: React.FC = () => {
  const menuItems = [
    { label: 'Profile', icon: <Layout size={20} /> },
    { label: 'Deposit records', icon: <ClipboardList size={20} /> },
    { label: 'Withdrawal records', icon: <TrendingDown size={20} /> },
    { label: 'Setting', icon: <Settings size={20} /> },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      {menuItems.map((item, idx) => (
        <button 
          key={idx} 
          className={`w-full flex items-center justify-between px-4 py-4 active:bg-gray-50 transition-colors ${
            idx !== menuItems.length - 1 ? 'border-b border-gray-100' : ''
          }`}
        >
          <div className="flex items-center gap-3">
            <div className="text-[#8E9297]">
              {item.icon}
            </div>
            <span className="text-[15px] text-[#333333] font-normal">{item.label}</span>
          </div>
          <ChevronRight size={18} className="text-[#BCC1C8]" />
        </button>
      ))}
    </div>
  );
};

export default MenuList;
