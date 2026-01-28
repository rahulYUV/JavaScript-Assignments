const ip = [
  { name: "A", city: "Delhi" },
  { name: "B", city: "Mumbai" },
  { name: "C", city: "Delhi" }
];

function groupPeople(arr) {
    const ans = {};

    // 1. Rename 'key' to 'person' so it makes sense!
    for (let person of arr) { 
        
        let city = person.city; // Fix: Use person.city, not arr.city

        // 2. CHECK & CREATE
        // If the city bucket doesn't exist yet...
        if (!ans[city]) {
            ans[city] = []; // ...create it.
        }

        // 3. PUSH (Happens for everyone!)
        // Now we know the array exists, so just push the name.
        ans[city].push(person.name); 
    }
    
    return ans;
}

console.log(groupPeople(ip));