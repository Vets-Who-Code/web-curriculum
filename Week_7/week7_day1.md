# Deeper into JS and CSS Animations

# JS

## IIFE

Show how Immediatley Invoked Function Expressions work

```
(function(){
console.log("Runs right away!")
})()
```

## Function Within a Function?

Show how we can pass a function as an arugment into naother function.

```
function carCalc(x,y){
  return y-(y*x/100)
}

function modelSDiscount(disc, functRef){
  return functRef(disc,80000 )
}

console.log(modelSDiscount(10, carCalc))
```

# CSS Animations

## Transforms

Skew, change coordinates and rotate.

```
transform:translateX(200px)
transform:scale(1.5)
transform:rotate(45deg)
```

## Transitions

smoothing out changes

1 sec color change

```
.circle{
  border-radius:50%;
  width:200px;
  height:200px;
  background-color:green;
  margin:60px auto;
  curser:pointer;
  line-height:2;
  transition:background-color 1s, transform .3s;

}

.circle:hover{
  background-color:salmon;
  transform:rotate(360deg)
}
```
