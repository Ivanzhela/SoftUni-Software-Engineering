function oldBooks(input) {
    let index = 0;
    let book = input[index];
    index++;
    let otherBook = input[index];
    index++;
    let allbooks = 0;
    let isBook = false;

    while(otherBook !== "No More Books") {
        if (book === otherBook) {
            isBook = true;
            console.log(`You checked ${allbooks} books and found it.`)
            break;
        }
        
        otherBook = input[index];
        index++
        allbooks++
    }
    if(isBook === false) {
    console.log("The book you search is not here!");
    console.log(`You checked ${allbooks} books.`)
    }
    
}
oldBooks(["Bourne",
"True Story",
"Forever",
"Bourne"])

