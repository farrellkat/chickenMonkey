for (let i = 1; i <= 100; i++) {
for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {

    let output = `${currentNumber}: `

    if (currentNumber % 5 === 0) {
        output += "Chicken"
    }

    if (currentNumber % 7 === 0) {
        output += "Monkey"
    }

    console.log(output)

}


//     if (i % 7 === 0 && i % 5 === 0) {
//         console.log("chickenMonkey")
//     } else {
//         if (i % 5 === 0) {
//             console.log("chicken")
//         }
//         if (i % 7 === 0) {
//             console.log("Monkey")
//         }
//         else (console.log(i))
//     }