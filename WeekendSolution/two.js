


function cntOccurence(arr){
    const ans ={};
    for(let value of arr){

        if(ans[value]){
            ans[value] +=1;
        }else{
            ans[value]=1;

        }
    }
    return ans;

}

const ip = ["apple", "banana", "apple", "orange", "banana", "apple"] ;

console.log(cntOccurence(ip));
