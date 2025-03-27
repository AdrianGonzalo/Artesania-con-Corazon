import React from "react";

const ShareButton = ({ message, url }) => {
  const handleShare = () => {
    const compartirWhatsApp = `https://wa.me/?text=${encodeURIComponent(
      message
    )} ${encodeURIComponent(url)}`;
    window.open(compartirWhatsApp, "_blank");
  };

  return (
    <button
      onClick={handleShare}
      className="mt-3 w-full max-w-[350px] bg-green-600 text-white px-4 py-2 rounded-lg text-lg font-semibold"
    >
      Compartir en WhatsApp
    </button>
  );
};

export default ShareButton;
