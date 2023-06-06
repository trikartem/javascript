const payRateUSD = 80;
const AvailableHours = (11 - 2) * 5;
const projectHours = 40;
let cost;

console.log('Смогу ли выполнить работу ' + (projectHours <= AvailableHours));
console.log('Стоимость работ: ' + payRateUSD * projectHours + '$');