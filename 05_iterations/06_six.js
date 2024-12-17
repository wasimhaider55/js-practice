// foreach loop cannot return anything

// const coding = ["js", "ruby", "java", "python", "cpp"]

// const values = coding.forEach( (item) => { // foreach loops return undefined 
//     //console.log(item);
//     return item
// } )

// console.log(values);


// filter is retun the value "foreach cannot"
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// Method 1
// // const mynum = myNums.filter( (num) => num > 5) 
// console.log(mynum)

// Method 2
// const newNums = myNums.filter( (num) => {
//     return num > 4
// } )
// console.log(newNums)



// const newNums = []

// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// } )

// console.log(newNums);



const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

// Method 1
//   const userBooks = books.filter( (bk) => bk.genre === "History")
// console.log(userBooks);

// Method 2
// const userBooks = books.filter((bk) => {
//     return bk.genre === "History";
// })
//   console.log(userBooks);


userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})
  console.log(userBooks);
  
  