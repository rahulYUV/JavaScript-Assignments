function filterValues(obj) {
    const ans = {};

   
    for (let key in obj){
        
       
        let val = obj[key]; 

       
        if (val>50) {
            
            
            ans[key] = val;
        }
    }
    console.log(ans);

    return ans;
}

filterValues({ a: 20, b: 60, c: 40, d: 90 })