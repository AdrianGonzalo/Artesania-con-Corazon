// components/ShareButton.jsx
import React from "react";

const ShareButton = ({ message, url, className }) => {
  const handleShare = () => {
    const compartirWhatsApp = `https://wa.me/?text=${encodeURIComponent(
      message
    )} ${encodeURIComponent(url)}`;
    window.open(compartirWhatsApp, "_blank");
  };

  return (
    <button
      onClick={handleShare}
      className={`mt-3 w-full max-w-[350px] bg-green-600 text-white px-4 py-2 rounded-lg text-lg font-semibold ${className}`}
    >
      Compartir en WhatsApp
    </button>
  );
};

export default ShareButton;
