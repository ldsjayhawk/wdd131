var input = document.querySelector('#favchap');
var button = document.querySelector('button');
var list = document.querySelector('list');

var li = document.createElement('li');
var delButton = document.createElement('button');


button.addEventListener('click', function() {
    if (input.value.trim() !== '') {
        li.textContent = input.value;
        // delButton.textContent = '❌';
        // li.append(delButton);
        li.append(input.value);
        return ("Chapter Added");
    } else {
        return ("Enter Chapter")
        // document.getElementById(input.focus();
    };
});

delButton.addEventListener('click', function() {
    list.removeChild('li');
    input.focus();
});

input.value = '';
input.focus();


