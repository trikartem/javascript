const result = prompt('Сколько будет 7 + или - 15?');
if (result === 'Я не робот') {
  console.log('Успех');
} else {
  const resultNumber = Number(result);
  switch(resultNumber) {
    case 22:
    case -8:
      console.log('Успех');
      break;
    default:
      console.log('Вы робот');
  }
}
