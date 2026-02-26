export const WHATSAPP_MESSAGE_EN =
  "Hi, I want to learn how HexaBill can help my distribution business in UAE.";
export const WHATSAPP_MESSAGE_AR =
  "مرحباً، أريد معرفة المزيد عن HexaBill لعملي في التوزيع";

export function buildWhatsAppUrl(message: string, number: string): string {
  const clean = number.replace(/\D/g, "");
  const prefix = clean.startsWith("971") ? "" : "971";
  const num = prefix + clean;
  return `https://wa.me/${num}?text=${encodeURIComponent(message)}`;
}
