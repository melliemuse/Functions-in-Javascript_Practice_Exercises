// // print numbers 1-100

// for (let i = 0; i < 100; i++) {
//   console.log(i+1)
// }

// // if #s are divisible by 5 and 7 print "ChickenMonkey"

// for (let i = 0; i < 100; i++) {
//     if (i % 5 === 0 && i % 7 === 0) {
//       console.log("ChickenMonkey")
//     }
// }

// // if #s are divisible by 5 print "Chicken"
// for (let i = 0; i < 100; i++) {
//     if (i % 5 === 0) { 
//         console.log("Chicken")
//     }
// }
     

// // if #s are divisible by 7 print "Monkey"
// for (let i = 0; i < 100; i++) {
//     if (i % 7 === 0) {
//         console.log("Monkey")
//     }
      
//   }

  // Altogether

  for (let i = 1; i <= 100; i++) {
    if (i % 5 === 0 && i % 7 === 0) {
        console.log("ChickenMonkey")
      }
    else if (i % 5 === 0) { 
        console.log("Chicken")
    }
    else if (i % 7 === 0) {
        console.log("Monkey")
    } else {
    console.log(i)
    }
  }