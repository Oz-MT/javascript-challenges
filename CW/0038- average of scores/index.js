//? Write a JS code that calculates the average of scores that students took in a math class below.
//? scores = {"Mary" : 85, "Susan": 75, "Barry" : 65, "Alexis" : 88, "Jane" : 45, "Tina" : 100, "Tom" : 90, "Tim": 60}

const scores = {
  Mary: 85,
  Susan: 75,
  Barry: 65,
  Alexis: 88,
  Jane: 45,
  Tina: 100,
  Tom: 90,
  Tim: 60,
};

let avgScore = (obj) => {
  let marks = Object.values(obj);
  let total = marks.reduce((acc, number) => acc + number, 0);
  let avr = total / marks.length;
  return avr;
};

console.log(avgScore(scores));

//! ÖNEMLİ --> 16. satırda object içindeki values ları array e çeviriyor.
// Eğer object içindeki key lere aynı işlemi uygulamak isteseydik values yerine keys yazacaktık.

//acc--> her satı eklendiğinde toplanan değeri gösteren kısım.
//number--> array içindeki her bir değer yani buradaki her bir not.
// 0 değeri ise başlangıç değeri, 5 yazsaydık 5'ten itibaren topla demekti.
