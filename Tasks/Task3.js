function calculatePercentage(maths, english, science)
 {
    let total = maths + english + science;
    let percentage = (total / 300) * 100;

    return percentage;
}

let result = calculatePercentage(80, 75, 90);

console.log("Percentage:", result + "%");