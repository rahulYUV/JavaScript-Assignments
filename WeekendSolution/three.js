function swapKey(obj){
    const ans = {};

    for(let key in obj){
        let val = obj[key];
        
      
        ans[val] = key; 
    }
    return ans;
}

console.log(swapKey({ a: "x", b: "y", c: "z" })); 
