// WhatsApp number.
// Use country code, no + sign, no spaces.
const whatsappNumber = "94740148998";

// Open WhatsApp with selected product name.
function orderOnWhatsApp(productName) {
  const message = `Hi Ornella Luxe, I am interested in this item: ${productName}. Is it available?`;
  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}

// Contact form sends the message through WhatsApp.
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("customerName").value.trim();
    const email = document.getElementById("customerEmail").value.trim();
    const customerMessage = document.getElementById("customerMessage").value.trim();

    const message =
      `Hi Ornella Luxe,\n\n` +
      `My name is ${name}.\n` +
      `My email is ${email}.\n\n` +
      `Message: ${customerMessage}`;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");

    contactForm.reset();
  });
}