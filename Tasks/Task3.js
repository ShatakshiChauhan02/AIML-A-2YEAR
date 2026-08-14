function calculatePercentage(maths, english, science)
{
    let total = maths + english + science;
    let percentage = (total / 300) * 100;

    console.log("Percentage = " + percentage + "%");
}
calculatePercentage(80, 75, 90);