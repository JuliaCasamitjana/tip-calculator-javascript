const bill = document.querySelector("#bill");
const people = document.querySelector("#people");
const calculate = document.querySelector("#calculate");
const result = document.querySelector("#result");


calculate.addEventListener("click", function() {

    var percent = document.querySelector(".tip:checked");

   if (parseInt(bill.value[0]) <= 0 || parseInt(people.value[0]) <= 0){

        alert("Are you sure about does values?");
    }
    else{

        if (bill.value == null || bill.value == "", people.value == null || people.value == "")
        {
            alert("Please, fill all the fields");
        }

        else if (percent == null)
        {
            alert("Please, tell us how was the experience");
        }
        else {
            var checkedValue = percent.value;
            var r = (bill.value * parseInt(checkedValue) / ( 100 * people.value )).toFixed(2);

            result.innerHTML = "<p>TIP AMOUNT<br><span>"+ r + " €</span><br>for each</p>"
        }
    }

});



