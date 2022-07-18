function building(input) {
    let countFloors = Number(input[0]);
    let countRooms = Number(input[1]);

    for(let floor = countFloors; floor > 0; floor--) {
        let res = "";
        for(let room = 0; room < countRooms; room++) {
            if(floor === countFloors) {
                res += `L${floor}${room} `;
            } else if(floor % 2 === 0) {
                res += `O${floor}${room} `;
            } else {
                res += `A${floor}${room} `
            }
        }
        console.log(res)
    }

    
}
building(["6", "4"])