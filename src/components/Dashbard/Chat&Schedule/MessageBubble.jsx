import { Check, CheckCheck} from "lucide-react";


const MessageBubble = ({ text, time, variant = 'received', status = 'sent' }) => {
  const isSent = variant === 'sent';

  return (
    <div className={`flex flex-col mb-1 font-inter px-3 ${isSent ? 'items-end' : 'items-start'}`}>
      <div className={`
        max-w-[80%] p-4 rounded-2xl shadow-sm text-sm leading-5
        ${isSent 
          ? 'bg-primary/20  rounded-tr-none' 
          : ' rounded-tl-none border border-gray-100'
        }
      `}>
        {text}
      </div>

      {/* Metadata (Time & Status) */}
      <div className={`flex items-center mt-1 gap-1 text-[10px] text-gray-400`}>
        {isSent && <span>{status === 'read' ? <CheckCheck size={16} strokeWidth={1} /> : <Check size={16} strokeWidth={1} />}</span>}
        <span>{time}</span>
      </div>
    </div>
  );
};
export default MessageBubble
