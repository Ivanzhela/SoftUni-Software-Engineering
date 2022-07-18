function solve1(array) {

    let phoneList = array.shift().split(", ");
    let currentCommand = array.shift().split(" - ");
    while (currentCommand[0] !== "End") {
        let command = currentCommand[0];
        let phone = currentCommand[1];

        if (command === "Add") {
            if (!phoneList.includes(phone)) {
                phoneList.push(phone);
            }
        } else if (command === "Remove") {
            if (phoneList.includes(phone)) {
                let index = phoneList.indexOf(phone);
                phoneList.splice(index, 1);
            }
        } else if (command === "Bonus phone") {
            let currPhone = phone.split(":");
            let oldPhone = currPhone[0];
            let newPhone = currPhone[1];
            if (phoneList.includes(oldPhone)) {
                let index = phoneList.indexOf(oldPhone);
                phoneList.splice(index + 1, 0, newPhone);
            }
        } else if (command === "Last") {
            if (phoneList.includes(phone)) {
                let index = phoneList.indexOf(phone);
                phoneList.splice(index, 1);
                phoneList.push(phone);
            }
        }
        currentCommand = array.shift().split(" - ");
    }
    console.log(phoneList.join(", "));
}
solve1(["SamsungA50, MotorolaG5, HuaweiP10",
    "Last - SamsungA50",
    "Add - MotorolaG5",
    "End"])


