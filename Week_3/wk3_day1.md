## VANILLA JS

const submit = document.querySelector('#submit');
// OR document.getElementById("submit")

submit.addEventListener('click', function(e) {
e.preventDefault();
console.log('Button clicked');
document.getElementById('myText').innerText = 'Sunday';
});

## JQUERY

$('#submit').on('click', function(e) {
e.preventDefault();
console.log('CLicked with JQuery');
$('#myText').text('Sunday');
});

## Constructors and THIS

function Person(first, last) {
this.firstName = first;
this.lastName = last;

this.displayName = function() {
console.log(`Name: ${this.firstName} ${this.lastName}`);
};
}

let person = new Person('Captain', 'America');
person.displayName();
let person2 = new Person('Alton', 'Brown');
person2.displayName();

## CSS Media Queries from scratch then Bootstrap

@media only screen and (max-width: 500px) {
form {
text-align: center;
border-radius: 20px;
background-color: aqua;
}
}
