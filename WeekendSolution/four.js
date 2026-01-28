function findLargestKey(obj) {
    let maxVal = -Infinity; 
    let maxKey = "";        

    for (let key in obj) {
        let currentVal = obj[key];

      
        if (currentVal > maxVal) {
            maxVal = currentVal; 
            maxKey = key;      
        }
    }
    return maxKey; 
}

console.log(findLargestKey({ a: 10, b: 50, c: 20 }))