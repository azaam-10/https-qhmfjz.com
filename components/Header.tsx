
import React from 'react';
import { MessageSquare, Wallet, CreditCard } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <div 
      className="pt-10 pb-6 px-5 relative"
      style={{
        background: 'linear-gradient(to right, #9B4A4E, #7C4A50)',
      }}
    >
      {/* Top Right Icon */}
      <button className="absolute top-8 right-5 text-white opacity-90">
        <MessageSquare size={24} />
      </button>

      {/* Profile Info Row */}
      <div className="flex items-center gap-4 mb-8">
        <div className="w-16 h-16 rounded-full overflow-hidden flex items-center justify-center bg-white shadow-sm">
          {/* Logo Recreation with SVG for exact match to the user's uploaded image */}
          <svg viewBox="0 0 100 100" className="w-[85%] h-[85%]">
            <g transform="translate(50, 50) rotate(-18)">
              {/* Red Pentagon */}
              <path d="M0,-35 L20,-21 L12,3 L-12,3 L-20,-21 Z" fill="#E54D4D" transform="rotate(0) translate(0, -10)" />
              {/* Yellow Pentagon */}
              <path d="M0,-35 L20,-21 L12,3 L-12,3 L-20,-21 Z" fill="#F4C430" transform="rotate(72) translate(0, -10)" />
              {/* Purple Pentagon */}
              <path d="M0,-35 L20,-21 L12,3 L-12,3 L-20,-21 Z" fill="#9B59B6" transform="rotate(144) translate(0, -10)" />
              {/* Blue Pentagon */}
              <path d="M0,-35 L20,-21 L12,3 L-12,3 L-20,-21 Z" fill="#3498DB" transform="rotate(216) translate(0, -10)" />
              {/* Green Pentagon */}
              <path d="M0,-35 L20,-21 L12,3 L-12,3 L-20,-21 Z" fill="#2ECC71" transform="rotate(288) translate(0, -10)" />
            </g>
          </svg>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <span className="text-white text-xl font-bold tracking-tight uppercase">huzefa</span>
            <span 
              className="text-[10px] px-1.5 py-0.5 font-bold italic"
              style={{
                backgroundColor: '#F5B400',
                color: '#FFFFFF',
                borderRadius: '8px',
              }}
            >
              VIP0
            </span>
          </div>
          <span className="text-white/80 text-sm mt-0.5">Invitation code: 804461</span>
        </div>
      </div>

      {/* Account Balance & Action Buttons */}
      <div className="flex justify-between items-end">
        {/* Account Info */}
        <div className="flex flex-col text-white">
          <span className="text-sm font-medium opacity-90 mb-1">My Account</span>
          <div className="flex items-baseline gap-2">
            <span className="text-xs opacity-80">USDT</span>
            <span className="text-2xl font-bold">1522.4586</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-6 pr-2">
          {/* Deposit */}
          <button className="flex flex-col items-center group">
            <div 
              className="w-12 h-12 flex items-center justify-center bg-[#F5F5F5] mb-1 transition-transform active:scale-95"
              style={{ borderRadius: '20px' }}
            >
              <div 
                style={{
                  background: 'linear-gradient(to bottom, #1F6AE1, #0B4DB8)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                <Wallet size={26} strokeWidth={2.5} />
              </div>
            </div>
            <span className="text-white text-[11px] font-medium">Deposit</span>
          </button>

          {/* Withdrawal */}
          <button className="flex flex-col items-center group">
            <div 
              className="w-12 h-12 flex items-center justify-center bg-[#F5F5F5] mb-1 transition-transform active:scale-95"
              style={{ borderRadius: '20px' }}
            >
               <div 
                style={{
                  background: 'linear-gradient(to bottom, #1F6AE1, #0B4DB8)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                <CreditCard size={26} strokeWidth={2.5} />
              </div>
            </div>
            <span className="text-white text-[11px] font-medium">Withdrawal</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
