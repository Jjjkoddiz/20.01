document.addEventListener('DOMContentLoaded', function () {
  // = означает присваиваиние
  // !=  означает не равно
  // == означает не строгое равенство
  // === строего равенство (сравнинивает типы данных)
  //   console.log(5 > 6);
  //   true = 1, false = 0
  //   console.log(true == 1); // true
  //   console.log(false == 0); // true
  //   console.log(true === 1); // false
  //   console.log(false === 0); // false
  //   console.log(null === undefined);
  //   let year = prompt(
  //     'В каком году была опубликована спецификация ECMAScript-2015?',
  //     ''
  //   );
  //   if (year == 2015) {
  //     console.log('wow cool!');
  //   } else {
  //     console.log('oyy nooy');
  //   }
  // console.log(us.name);
  // console.log(us.age);
  // console.log(us.hobby);
  // function personaj(name, age) {
  //   return {
  //     name: name,
  //     age: age,
  //   };
  // }
  // let usernash = personaj('Polly, 34');
  // console.log(usernash);

  // Домашка
  // Задача 2

  const num1 = prompt('Введите первое число:');
  const num2 = prompt('Введите второе число:');

  if (num1 > num2) {
    console.log('Первое число больше');
  } else if (num1 < num2) {
    console.log('Второе число больше');
  } else {
    console.log('Числа равны');
  }

  // Задача 4
  const secretNumber = 9;
  const userGuess = prompt('Угадайте число от 1 до 10:');

  if (userGuess == secretNumber) {
    console.log('Вы угадали!');
  } else {
    console.log('Попробуйте ещё раз!');
  }

  // Задача 5
  const login = prompt('Введите логин:');
  const password = prompt('Введите пароль:');
  if (login === 'kodismylife' && password === 'forever') {
    console.log('Добро пожаловать!');
  } else {
    console.log('Неверный логин или пароль');
  }
});
