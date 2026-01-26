/**
 * Generate unique order number
 * Format: SP-YYYYMMDD-XXXX
 * Example: SP-20260126-A7F3
 */
export function generateOrderNumber() {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  
  // Generate random alphanumeric suffix (4 characters)
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let suffix = '';
  for (let i = 0; i < 4; i++) {
    suffix += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  
  return `SP-${year}${month}${day}-${suffix}`;
}
