const input = [
  { itemName: "Laptop", category: "Electronics", price: 5000, timestamp: 1672531200 },
  { itemName: "Headphones", category: "Electronics", price: 2000, timestamp: 1672617600 },
  { itemName: "Shirt", category: "Clothing", price: 1500, timestamp: 1672704000 },
  { itemName: "Jeans", category: "Clothing", price: 2500, timestamp: 1672790400 },
  { itemName: "Coffee", category: "Food", price: 300, timestamp: 1672876800 }
];

function calcTotalSpendCategory(transactions) {
  const categoryTotals = {};

  transactions.forEach((transaction) => {
    const category = transaction.category;
    const price = transaction.price;

    if (categoryTotals[category]) {
      categoryTotals[category] += price;
    } else {
      categoryTotals[category] = price;
    }
  });

  const result = [];
  for (const category in categoryTotals) {
    result.push({
      category: category,
      totalSpend: categoryTotals[category]
    });
  }

  return result; 
}


console.log(calcTotalSpendCategory(input));
