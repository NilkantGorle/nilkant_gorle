function sendWhatsAppMessage() {
    const phoneNumber = "918308909652"; // Add your WhatsApp number
    const message = "Hello Nilkant, I visited your portfolio!";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  }
  