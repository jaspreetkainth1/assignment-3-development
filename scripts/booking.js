/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?


document.addEventListener('DOMContentLoaded', function () {
    let costperday = 35;
    let daysSelected = [];
    let fullDayButton = document.getElementById('full-day');
    let calculatedCost = document.getElementById('calculated-Cost');
    let clearButton = document.getElementById('clear-button');
    let halfDayButton = document.getElementById('half-day');
    let dayButtons = document.querySelectorAll('.day-button');


    /********* colour change days of week *********/
    // when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
    // added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!
    dayButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            let day = button.id;
            if (!daysSelected.contains(day)) {
                daysSelected.push(day);
                button.classList.add('clicked');
            }
            else {
                let index = daysSelected.indexOf(day);
                button.classList.remove('clicked');
                daysSelected.splice(index, 1);
            }
            recalculateTotalCost();

        });
    });




    /********* clear days *********/
    // when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

    clearButton.addEventListener('click', function () {
        daysSelected.forEach(function (day) {
            let button = document.getElementById(day);
            button.classList.remove('clicked');

        });
        daysSelected = [];
        recalculateTotalCost();

    });




    /********* change rate *********/
    // when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
    halfDayButton.addEventListener('click', function () {
        costperday = 20;
        halfDayButton.classList.add('clicked');
        fullDayButton.classList.remove('clicked');
        recalculateTotalCost();
    });



    // when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
    fullDayButton.addEventListener('click', function () {
        costperday = 35;
        fullDayButton.classList.add('clicked');
        halfDayButton.classList.remove('clicked');
        recalculateTotalCost();
    });




    /********* calculate *********/
    // when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

    function recalculateTotalCost() {
        let totalcost = costperday * daysSelected.length;
        calculatedCost.textContent = totalcost;
    }
});