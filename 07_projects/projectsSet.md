# Projects related to DOM

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## project 1

```javascript

const buttons = document.querySelectorAll(".button")
// console.log(buttons)
const body = document.querySelector("body")

buttons.forEach(function (button) {
  // console.log(button)
  button.addEventListener("click", function (e) {
    // console.log(e)
    // console.log(e.target)
    if(e.target.id === "grey"){
      body.style.backgroundColor = e.target.id
    }
    else if(e.target.id === "white"){
      body.style.backgroundColor = e.target.id
    }
    else if(e.target.id === "blue"){
      body.style.backgroundColor = e.target.id
    }
    else if(e.target.id === "yellow"){
      body.style.backgroundColor = e.target.id
    }

  })

})


```


## project 2 Solution

```javascript 

const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  // console.log(height)
  const weight = parseInt(document.querySelector('#weight').value);
  // console.log(weight)
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    //show the result
    if(bmi > 24.9){
      results.innerHTML = `<span>${bmi}</span> Over Weighted`;
    }
    if(bmi > 18.6 && bmi < 24.6){
      results.innerHTML = `<span>${bmi}</span> Normal Weight`;
    }
    if(bmi < 18.6){
      results.innerHTML = `<span>${bmi}</span> Under Weighted`;
    }
  }
});

```