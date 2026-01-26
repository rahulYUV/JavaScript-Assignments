
function isAnagram(str1, str2){

    if(str1.length !== str2.length){

        return false;
    }

    const sort1 = str1.split("").sort().join("");
    const sort2 = str2.split("").sort().join("");


    return sort1 === sort2;

}

// const str ="this is aam";
// const some = str.split(" ");
// console.log(some);
// const joinn = some.join(" ");
// console.log(joinn);




console.log(isAnagram("listen","silent"));
console.log(isAnagram("listen","silet"));

