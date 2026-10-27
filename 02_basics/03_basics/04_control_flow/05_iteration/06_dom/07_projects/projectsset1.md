# project related to DOM

## project link
1
# solution code

## project 1

```javascript
console.log("hitesh")
const buttons = document.querySelectorAll(`.button`);

const body = document.querySelector("body")

buttons.forEach(function(button) {
    console.log(button);

    button.addEventListener('click',function(e){
        
        console.log(e);
        console.log(e.target);
        if(e.target.id === 'grey') {
            body.style.backgroundColor = e.target.id
        }

        if(e.target.id === 'white') {
            body.style.backgroundColor = e.target.id
        }

        if(e.target.id === 'blue') {
            body.style.backgroundColor = e.target.id
        }

        if(e.target.id === 'yellow') {
            body.style.backgroundColor = e.target.id
        }

        if(e.target.id === 'purple') {
            body.style.backgroundColor = e.target.id
        }


    })
});
    



```

## project 2 solution

```javascript

const height = document.querySelector("#height");
const weight = document.querySelector("#weight");
const button = document.querySelector("#calculate");
const results = document.querySelector("#results");

button.addEventListener("click", function (e) {

    e.preventDefault();

    const heightValue = parseFloat(height.value);
    const weightValue = parseFloat(weight.value);

    const heightInMeter = heightValue / 100;

    const bmi = weightValue / (heightInMeter * heightInMeter);

    results.innerHTML = `Your BMI is ${bmi.toFixed(2)}`;
});

```