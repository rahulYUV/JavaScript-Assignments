


const ob ={ fruits: ["apple", "banana"], veggies: ["carrot", "pea"] };


function Flatten(obj){
    const ans=[];

    for(let key in obj){

        let currentArr =obj[key];
        for(let e of currentArr){
            ans.push(e)
        }
    }

    console.log(ans);
    return ans;

}


Flatten(ob);

