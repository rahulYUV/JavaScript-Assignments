

function countVowels(str){


        let arr = str.split("");
        let count = 0;
        arr.forEach(element => {
            element = element.toLowerCase();
                if(element === "a" || element ==="e"
                    || element ==="i" || element ==="o" 
                    || element ==="u"
                ){
                    count++;
                }


        });
        return count;



}

console.log(countVowels("aeiou gsdgas"));
