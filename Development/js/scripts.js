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

getBookById(2, array);