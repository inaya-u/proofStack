// country code + number, digits only (e.g. 2348012345678). Replace the placeholder.
export const WHATSAPP_NUMBER = "234XXXXXXXXXX";

export const WHATSAPP_MESSAGE = "Hi Ameelee Abaya, I'd like to place an order.";

export const whatsappLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const WHATSAPP_URL = whatsappLink(WHATSAPP_MESSAGE);

export const INSTAGRAM = [
  {
    handle: "@ameelee_abaya",
    href: "https://instagram.com/ameelee_abaya",
    note: "",
  },
  {
    handle: "@ameelee__abaya",
    href: "https://instagram.com/ameelee__abaya",
    note: "(backup)",
  },
];
