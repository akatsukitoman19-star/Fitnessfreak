import React from 'react';
import { MessageSquareText } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-6 right-6 z-40 group flex flex-col items-end pointer-events-none">
      
      {/* Floating tooltip/badge */}
      <div className="mb-2 bg-neutral-950/90 text-[10px] font-mono text-white font-bold px-3 py-1.5 rounded-xl border border-pink-500/20 shadow-xl opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 pointer-events-none uppercase tracking-widest whitespace-nowrap">
        Chat with our Front Desk <span className="text-pink-500">• Online</span>
      </div>

      {/* WhatsApp Button Anchor */}
      <a
        href="https://wa.me/918341725523"
        target="_blank"
        rel="noreferrer"
        className="pointer-events-auto relative flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-[0_0_20px_rgba(16,185,129,0.5)] transition-all duration-300 hover:scale-110 active:scale-95 group-hover:bg-emerald-400 group animate-float"
        aria-label="Contact us on WhatsApp"
      >
        {/* Pulsing Back Rings */}
        <span className="absolute inset-0 rounded-full bg-emerald-500/30 animate-ping opacity-75"></span>
        
        {/* Custom Glowing Ring */}
        <span className="absolute -inset-1.5 rounded-full border-2 border-emerald-500/20 blur-[2px] animate-pulse-slow"></span>

        {/* WhatsApp Icon */}
        <svg
          className="h-6.5 w-6.5 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.864.002-2.637-1.019-5.116-2.876-6.974C16.586 1.908 14.12 1.887 11.93 1.887c-5.439 0-9.865 4.42-9.869 9.865-.001 1.761.47 3.473 1.365 4.982l-.995 3.637 3.733-.979zm11.122-7.14c-.302-.15-1.788-.882-2.057-.98-.269-.099-.465-.148-.659.15-.195.297-.752.942-.918 1.138-.166.196-.331.221-.63.072-.298-.15-1.26-.464-2.398-1.48-1.884-.788-1.48-1.761-1.779-1.91-.3-.15-.33-.075-.15-.224-.162-.135-.331-.39-.497-.588-.166-.197-.22-.338-.331-.563-.111-.225-.056-.421-.028-.571.028-.15.195-.446.293-.595.098-.15.13-.248.195-.413.065-.165.033-.31-.014-.46-.047-.15-.465-1.123-.637-1.538-.168-.404-.339-.349-.465-.356-.12-.006-.257-.008-.395-.008-.138 0-.363.052-.553.26-.191.208-.727.71-0.727 1.732s.743 2.01 1.05 1.547c.307.414 4.5 4.025 11.583 6.942 1.353.518 2.378.854 3.197 1.114 1.363.433 2.61.373 3.593.226.547-.083 1.788-.731 2.057-1.413.268-.68 2.68-1.261.268-1.486-.03-.023-.156-.15-.465-.3z" />
        </svg>

        {/* Counter Badge */}
        <span className="absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-pink-500 text-[10px] font-black text-white shadow-md border border-neutral-950 scale-100 group-hover:scale-110 transition-transform duration-300">
          1
        </span>
      </a>
    </div>
  );
}
