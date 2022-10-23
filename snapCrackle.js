//snapcrackle
function snapCrackle(maxValue){
    let string = [];
    for(let i=0; i <= maxValue; i++){
        if(i%2 !== 0){
            string.push('Snap')
        }else if(i%5 == 0){
            string.push('Crackle')
        }else if(i%2 !== 0 || i%5 == 0){
            string.push('SnapCrackle')
        }else if(i%2 !== 0 && i%5 == 0){
            string.push(maxValue)
        }
    }
    console.log(string)
}

snapCrackle(12)