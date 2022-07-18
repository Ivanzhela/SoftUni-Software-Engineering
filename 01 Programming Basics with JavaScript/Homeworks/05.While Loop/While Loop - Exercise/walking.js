function walking(input) {
    let stepsForDay = 10000;
    let index = 0;
    let walkingSteps = input[index];
    index++;

    while(walkingSteps !== "Going home") {
        let steps = Number(walkingSteps);
        stepsForDay -= steps;
        if(stepsForDay <= 0) {
            console.log("Goal reached! Good job!");
            console.log(`${Math.abs(stepsForDay)} steps over the goal!`)
        break;
        } 
        walkingSteps = input[index];
        index++;
    }
    if(walkingSteps === "Going home") {
        let leftSteps = Number(input[index]);
        index++;
        stepsForDay -= leftSteps;
    
        if(stepsForDay <= 0) {
        console.log("Goal reached! Good job!");
        console.log(`${Math.abs(stepsForDay)} steps over the goal!`);
        } else {
        console.log(`${stepsForDay} more steps to reach goal.`);
    }
}
  
}
walking(["1500",
"300",
"2500",
"3000",
"Going home",
"200"])
