// helpers.js

export function formatPrice(price) {
  // Convert price to a string
  const priceString = price.toString();

  // Insert a dot before the last three digits
  const formattedPrice = priceString.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");

  return formattedPrice;
}
