function salary(input) {
    let index = 0;
    let openTabs = Number(input[index]);
    index++;
    let money = Number(input[index]);
    index++;
    
    let isHaveSalary = true;
    
    for (let i = 0; i < openTabs; i++) {
        let currentTab = input[index];
        index++;
    
        if (currentTab === "Facebook") {
            money -= 150;
        } else if (currentTab === "Instagram") {
            money -= 100;
        } else if (currentTab === "Reddit") {
            money -= 50;
        }
        if (money <= 0) {
            console.log("You have lost your salary.")
            isHaveSalary = false;
            break;
        }
    }
    if (isHaveSalary) {
        console.log(money)
    }

}
salary(["10",
"750",
"Facebook",
"Dev.bg",
"Instagram",
"Facebook",
"Reddit",
"Facebook",
"Facebook"])