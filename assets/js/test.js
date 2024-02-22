// const snowContainer = document.querySelector('.snow');
//
// function createSnow() {
//     const snow = document.createElement('i');
//     snow.className = 'fas fa-snowflake'
//     snowContainer.appendChild(snow);
// }
//
// function removeSnow() {
//     const snow = document.querySelector('.fas');
//     snowContainer.removeChild(snow);
// }
//
// function createSnowInterval() {
//     setInterval(createSnow, 500);
//     setInterval(removeSnow, 5000);
// }
//
// createSnowInterval()


// function squareDigits(num) {
//
//     return parseInt(num.toString().split('').map(item=>(Math.pow(Number(item), 2))).join(''));
// }
//
// console.log(squareDigits(8119));

// function highAndLow(numbers){
//     return  Math.max(...numbers.split(' ')).toString() + ' ' + Math.min(...numbers.split(' ')).toString()
// }
//
// console.log(highAndLow("1 2 3 4 5"))

// function filter_list(l) {
//     let newArr = [];
//     for (let i = 0; i < l.length; i++){
//         if (typeof l[i] === "number") {
//             newArr.push(l[i])
//         }
//     }
//     return newArr;
// }
//
// console.log(filter_list([1,2,'a','b']));


// let isSquare = (n)=> {
//     return Math.sqrt(n) % 1 === 0;
// }
// console.log(isSquare(3));

// function pickPeaks(arr){
//
//     //  return {pos:[],peaks:[]}
// }
// pickPeaks([[3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 3]])
// function descendingOrder(n){
//     return parseInt(n.toString().split('').sort((a,b)=>b-a).join(''));
// }
//
// console.log(descendingOrder(35265));

// function getMiddle(s) {
//     if (s.length % 2 === 0) {
//         return s[s.length / 2 - 1] + s[s.length / 2];
//     }
//     else {
//        return  s[Math.floor(s.length/2)];
//     }
// }
//
//
//
// console.log(getMiddle('testdjaskdaskk'));

