// sum values in object arrays 

const input = { food: [10, 20, 30], travel: [5, 15], bills: [40, 60] };
function sum(obj){

    let ans ={};


    for(let key in obj){
        let values = obj[key];
         
      ans[key] = values.reduce((a, b) => a + b, 0);

    }
    return ans;

}

console.log(sum(input));