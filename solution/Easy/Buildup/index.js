

// Assignment: Get even numbers using forEach
function getEvenNumbers(arr) {
    const result = [];
    arr.forEach((value) => {
        if (value % 2 === 0) result.push(value); // push if even
    });
    return result;
}

// Assignment : Get even numbers using filter
function secondMethod(arr) {
    return arr.filter((ele) => ele % 2 === 0); // filter even numbers
}
function countLetters(str) {
    const ans = {};
    str.split("").forEach((e) => {
        ans[e] = ans[e] ? ans[e] + 1 : 1; 
    });
    return ans;
}


function frequencyCounter(list) {
    const ans = {};
    list.forEach((ele) => {
        ans[ele] = ans[ele] ? ans[ele] + 1 : 1;
    });
    return ans;
}


function booleanFlag(arr) {
    const flag = {};
    arr.forEach((e) => (flag[e] = true)); 
    return flag;
}


function sumByCategory(purchases) {
    const ans = {};
    purchases.forEach((e) => {
        ans[e.category] = ans[e.category] ? ans[e.category] + e.price : e.price; 
    });
    return ans;
}


function groupByCategory(transactions) {
    const ans = {};
    transactions.forEach((e) => {
        ans[e.category] = ans[e.category] ? [...ans[e.category], e.itemName] : [e.itemName]; 
    });
    return ans;
}


function counting(arr) {
    const ans = {};
    arr.forEach((e) => {
        ans[e.subject] = ans[e.subject] ? ans[e.subject] + 1 : 1;
    });
    return ans;
}


function bySubject(students) {
    const ans = {};
    students.forEach((student) => {
        ans[student.subject] = ans[student.subject] ? [...ans[student.subject], student.name] : [student.name]; 
    });
    return ans;
}
