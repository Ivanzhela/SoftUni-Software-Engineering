function evenOddSums(input) {
    let index = 0;
    const n = Number(input[index]);
    index++;

    let OddSum = 0;
    let OddMin = Number.MAX_SAFE_INTEGER;
    let OddMax = Number.MIN_SAFE_INTEGER;
    let isOddMinMax = false;

    let EvenSum = 0;
    let EvenMin = Number.MAX_SAFE_INTEGER;
    let EvenMax = Number.MIN_SAFE_INTEGER;
    let isEvenMinMax = false;

    for(let i = 1; i <= n; i++){
        let nextNum = Number(input[index]);
        if(i % 2 !== 0){
            OddSum += nextNum;
            if(nextNum > OddMax){
                OddMax = nextNum;
                isOddMinMax = true;
            }if(nextNum < OddMin){
                OddMin = nextNum;
                isOddMinMax = true;
            }
        }else{
            EvenSum += nextNum;
            if(nextNum > EvenMax){
                EvenMax = nextNum;
                isEvenMinMax = true;
            }if(nextNum < EvenMin){
                EvenMin = nextNum;
                isEvenMinMax = true;
            }
        }
        index++;
    }

  console.log(`OddSum=${OddSum.toFixed(2)},`);
  if(isOddMinMax){
  console.log(`OddMin=${OddMin.toFixed(2)},`);
  console.log(`OddMax=${OddMax.toFixed(2)},`);
  }else{
      console.log(`OddMin=No,`);
      console.log(`OddMax=No,`);
  }
  console.log(`EvenSum=${EvenSum.toFixed(2)},`);
  if(isEvenMinMax){
  console.log(`EvenMin=${EvenMin.toFixed(2)},`);
  console.log(`EvenMax=${EvenMax.toFixed(2)}`);
  }else{
      console.log(`EvenMin=No,`);
      console.log(`EvenMax=No`);
  }
} 
evenOddSums()