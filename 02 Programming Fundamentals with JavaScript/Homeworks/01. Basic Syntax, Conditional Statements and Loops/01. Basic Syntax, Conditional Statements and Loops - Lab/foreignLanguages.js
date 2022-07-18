function foreignLanguages(name) {
if(name === "USA" || name === "England") {
    console.log("English")
} else if( name === "Spain" || name === "Argentina" || name === "Mexico") {
    console.log("Spanish")
} else {
    console.log("unknown")
}
}
foreignLanguages("USA")