const deposit = 12000;
const rate = 0.07;
const depositLength = 24;
const result = deposit * (1 + rate / 12) ** depositLength;
const houseCost = 13500;

if (result > houseCost) {
  console.log(`Мы накопили ${result}. Можем купить.Остаток ${result - houseCost}`);
} else {
  console.log(`Мы наколи: ${result}. Купить не сможем`);
}