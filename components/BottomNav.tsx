
import React from 'react';
import { Home, Headphones, LayoutGrid, CalendarDays, User } from 'lucide-react';

const BottomNav: React.FC = () => {
  const navItems = [
    { label: 'Home', icon: <Home size={22} />, active: false },
    { label: 'Service', icon: <Headphones size={22} />, active: false },
    { label: 'Menu', icon: <LayoutGrid size={22} />, active: false },
    { label: 'Record', icon: <CalendarDays size={22} />, active: false },
    { label: 'Mine', icon: <User size={22} />, active: true },
  ];

  return (
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] min-w-[360px] bg-white border-t border-gray-100 flex justify-around items-center h-16 z-50 px-2">
      {navItems.map((item, idx) => (
        <button 
          key={idx} 
          className="flex flex-col items-center justify-center gap-1 w-1/5"
        >
          <div className={`${item.active ? 'text-[#333333]' : 'text-[#8E9297]'}`}>
            {item.icon}
          </div>
          <span className={`text-[10px] font-medium ${item.active ? 'text-[#333333]' : 'text-[#8E9297]'}`}>
            {item.label}
          </span>
        </button>
      ))}
    </div>
  );
};

export default BottomNav;
