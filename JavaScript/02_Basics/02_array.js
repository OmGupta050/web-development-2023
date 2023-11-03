const marvel_heros = ["Ironman", "Spiderman", "Antman"];
const dc_heros = ["Batman", "Superman", "Flash"];

marvel_heros.push(dc_heros);

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

const allHeros = marvel_heros.concat(dc_heros);
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros];
// console.log(all_new_heros);

const another_array = [1, 2, 3, 4, [5,6,7], 8, [9, 10, [11, 12], 13], 14];
const real_another_array = another_array.flat(Infinity);
// console.log(real_another_array);

// console.log(Array.isArray("Om"));
// console.log(Array.from("Om"));
// console.log(Array.from({name: "Om"})); // Interesting 

let totalCentury = 78;
let odiCentury = 48;
let testCentury = 29;
let t20iCentury = 1;

// console.log(Array.of(totalCentury, odiCentury, testCentury, t20iCentury));

