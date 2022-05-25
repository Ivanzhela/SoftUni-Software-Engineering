function cinema(input) {
    const premiereProjection = 12;
    const normalProjection = 7.50;
    const discountProjection = 5;

    const typeProjection = input[0];
    const rowCount = Number(input[1]);
    const columnCount = Number(input[2]);
    
    let rowColumnCount = rowCount * columnCount;

    if (typeProjection === "Premiere") {
        console.log((premiereProjection * rowColumnCount).toFixed(2))
    } else if (typeProjection === "Normal") {
        console.log((normalProjection * rowColumnCount).toFixed(2))
    } else {
        console.log((discountProjection * rowColumnCount).toFixed(2))
    }
}
cinema(["Normal",
"21",
"13"])
