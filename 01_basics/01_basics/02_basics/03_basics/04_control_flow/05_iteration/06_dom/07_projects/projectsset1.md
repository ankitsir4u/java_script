# project related to DOM

## project link
[click here](https://github.com/ankitsir4u/DOM-project/blob/main/01-colorChanger/index.html)

# solution codes

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