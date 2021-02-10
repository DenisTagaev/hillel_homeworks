let Array1 = [null, 54, "", undefined, 0, "String", " ", NaN, Infinity],
    Array2 = [];

function removeNegative(value) {
  for (let i = 0; i < value.length; i++) {

    if(!Array1 [i] === true) {
    /*Проверяем через булеан все что ближе к фолс,
    вырезаем из родительского массива, сохраняем значение,
    вставляем в дочерний */
      const deleted = Array1.splice( [i] , 1 );
      Array2.push(deleted);
    }
  }

    console.log(Array1);
    /*Undefined выводится в консоль если ее не трогать,
    но как только пытаюсь присвоить в переменную,
    остается в первом массиве, почему? :( */
    console.log(Array2);
    return;
}

removeNegative(Array1);