// Builds the wa.me link + prefilled order message — filled in during Step 5 (Cart).
export const WHATSAPP_NUMBER = "234YOURNUMBER"; // single configurable place, update later

export type CartItem = {
  name: string;
  price: number;
  quantity: number;
};

export function generateWhatsAppMessage(items: CartItem[], total: number) {
  // Placeholder — real implementation lands in Step 5.
  return "";
}
