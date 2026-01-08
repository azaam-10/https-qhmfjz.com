
import React from 'react';
import { Users, FileText, Activity, Mail } from 'lucide-react';

const FeatureGrid: React.FC = () => {
  const features = [
    { label: 'Teams', icon: <Users size={28} />, color: '#F6A623' },
    { label: 'Record', icon: <FileText size={28} />, color: '#44D7B6' },
    { label: 'Wallet management', icon: <Activity size={28} />, color: '#FE5E5E' },
    { label: 'Invite friends', icon: <Mail size={28} />, color: '#4A90E2' },
  ];

  return (
    <div className="bg-white py-6 flex justify-around items-start">
      {features.map((item, idx) => (
        <button key={idx} className="flex flex-col items-center w-1/4 gap-2">
          <div style={{ color: item.color }}>
            {item.icon}
          </div>
          <span className="text-[11px] text-[#333333] font-medium text-center px-1 leading-tight">
            {item.label}
          </span>
        </button>
      ))}
    </div>
  );
};

export default FeatureGrid;
