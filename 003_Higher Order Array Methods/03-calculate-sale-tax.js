function calculateTotalSaleTax(sales, tax) {
  const totalSaleAmount = sales.reduce(
    (sum, sale) => sum + sale.price * sale.quantity,
    0
  );

  return totalSaleAmount * (1 + tax / 100);
}

const sale = [
  { name: "Apple", price: 0.5, quantity: 10 },
  { name: "Banana", price: 0.3, quantity: 20 },
  { name: "Orange", price: 0.6, quantity: 15 },
];

console.log(calculateTotalSaleTax(sale, 8));
