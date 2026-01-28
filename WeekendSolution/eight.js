// 8. Find student with highest average mark
// Input: { A: [80, 90], B: [70, 75, 85] }
// Output: "A"

function findTopper(obj) {
    let bestStudent = "";
    let maxAvg = 0; // Start with a very low score

    // Loop through each student (Key: "A", "B"...)
    for (let student in obj) {
        let marks = obj[student]; // Get the array: [80, 90]
        
        // 1. Calculate Total (Sum of the array)
        let total = 0;
        for (let score of marks) {
            total += score;
        }

        // 2. Calculate Average (Total / Number of subjects)
        let currentAvg = total / marks.length;

        // 3. Compare: Is this average better than the current max?
        if (currentAvg > maxAvg) {
            maxAvg = currentAvg;       // Update the new high score
            bestStudent = student;     // Update the winner's name
        }
    }

    return bestStudent;
}

const students = { A: [80, 90], B: [70, 75, 85] };
console.log(findTopper(students)); 
// Output: "A" (Avg: 85 vs B's Avg: 76.6)