import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const WhatsAppButton = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const phoneNumber = '905455619465';
  const message = encodeURIComponent(
    'Merhaba Avukat Enes Bey, web siteniz üzerinden ulaşıyorum. Hukuki bir konuda danışmanlık almak istiyorum.'
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center justify-end">
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="mr-3 bg-burgundy-dark border border-silver/40 text-white text-xs font-semibold px-4 py-2 rounded-lg shadow-2xl backdrop-blur-md pointer-events-none hidden sm:block font-sans select-none"
          >
            Avukat Enes Yıldırım'a Yazın
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        aria-label="WhatsApp İletişim Hattı"
        className="relative flex items-center justify-center w-14 h-14 bg-gradient-to-tr from-emerald-600 via-green-500 to-emerald-500 rounded-full text-white shadow-[0_8px_30px_rgb(16,185,129,0.4)] border border-emerald-400/40 hover:scale-110 transition-transform duration-300 group"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
      >
        {/* Pulsing ring indicator */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500/30 animate-ping opacity-75"></span>
        
        {/* Inner gold glowing ring */}
        <span className="absolute inset-0.5 rounded-full border border-silver/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>

        <svg
          className="w-7 h-7 fill-current relative z-10"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.665.989 3.3 1.486 5.355 1.488 5.394 0 9.794-4.394 9.798-9.789.002-2.612-1.012-5.068-2.859-6.915C17.096 2.09 14.646 1.077 12.04 1.077c-5.4 0-9.8 4.4-9.804 9.795-.001 2.148.56 4.24 1.623 5.922L2.83 21.247l4.57-1.196c-.347-.28-.507-.35-.753-.9zM16.5 13.9c-.3-.15-1.785-.88-2.06-.98-.275-.1-.475-.15-.675.15-.2.3-.775.98-.95 1.18-.175.2-.35.225-.65.075-.3-.15-1.265-.467-2.41-1.487-.89-.79-1.49-1.77-1.665-2.07-.175-.3-.02-.46.13-.61.135-.133.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.675-1.625-.925-2.225-.244-.589-.493-.51-.675-.52-.172-.01-.37-.01-.567-.01-.197 0-.518.074-.79.37-.272.296-1.04 1.016-1.04 2.479 0 1.462 1.063 2.875 1.21 3.073.15.197 2.09 3.195 5.068 4.484.708.307 1.262.49 1.694.627.712.227 1.36.195 1.871.118.571-.085 1.785-.73 2.035-1.435.25-.705.25-1.31.175-1.435-.075-.125-.275-.2-.575-.35z" />
        </svg>
      </motion.a>
    </div>
  );
};

export default WhatsAppButton;
