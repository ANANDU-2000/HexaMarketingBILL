export const WHATSAPP_MESSAGE_EN =
  "Hi, I run a distribution or wholesale business and want to see a HexaBill demo.";
export const WHATSAPP_MESSAGE_AR =
  "مرحباً، أريد معرفة المزيد عن HexaBill لعملي في التوزيع";

export function buildWhatsAppUrl(message: string, number: string): string {
  const clean = number.replace(/\D/g, "");
  return `https://wa.me/${clean}?text=${encodeURIComponent(message)}`;
}
