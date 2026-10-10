const WA_NUMBER = "919446378369";

export function whatsappLink(message = "Hi FuelSOS, I need roadside assistance.") {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}