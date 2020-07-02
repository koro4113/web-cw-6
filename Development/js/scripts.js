function logger(array1){

    for(let anime of array1)
console.log(array1);
}
let anime = ['charlotte','dargonball','onepeice'];
logger(anime);



function hottestDays(hot, number){
 for(let dgree of hot){

    if(dgree > number){
 console.log(dgree)
       
    }


 }
}

let dgree = ['37','40','-2','7'];
hottestDays(dgree, 35);



// بداية رقم 3


function getBookById(bookId, books){

    for(books of array3){


    if(bookId == books.id){
console.log(books.book);
    break;

}else{
    console.log("undefined");
}


}
}
let array3 = [
    {book: "cook", id: 1},
    {book: "history", id: 2},
    {book: "war", id: 3},
    {book: "anatomy", id: 4}
];

getBookById(1, array3);


// المتجرر


let input = prompt("ادخل السلعه");
let array4 = [];

while ( input != "انتهيت"){
   let quantity = prompt("الكميه");
   let price = prompt("السعر");
   


   array4.push({input: input , price: price , quantity: quantity});
 

input = prompt("ادخل السلعه");

}



console.log("الفاتورة");

let total = 0;
for (let fa of array4) {
  console.log(
    fa.quantity + " " + fa.input + " " + fa.price + " USD"
  );
  total = total + fa.price * fa.quantity;
}


console.log(" المجموع : ", total);