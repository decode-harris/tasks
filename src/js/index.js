// selector [ gro ] : form input
let gro = document.querySelector('#gro');

// selector [ add ] : add button
let add = document.querySelector('#add');

// event [ add ] : add item 
add.addEventListener('click', (e)=>{

    // prevent form submit
    e.preventDefault();

    // validate form input
    if (gro.value == '' || gro.value == null) {
        
        // input helper
        alert('please fill in an item');
        
        // focus gro input
        gro.focus();
    }
    else if (gro.value.length >= 20) {
        
        // input helper
        alert('please use 20 characters or less');

        // focus gro input
        gro.focus();
    }
    else {
        
        // init app
        runApp();
    }

});

// function [ runApp ] : start application
function runApp() {

    // selector [ out ] : output list
    let output = document.querySelector('#out');
    
    // create list element for gro value 
    let task = document.createElement('li');

    // create span element for buttons
    let span = document.createElement('span');

    // create control buttons
    let che = document.createElement('button');
    let del = document.createElement('button');

    // assign gro value to new task element
    task.innerHTML = gro.value;
    
    // assign font awesome icons to buttons
    che.innerHTML = '<i class="fas fa-check"></i>';
    del.innerHTML = '<i class="fas fa-times"></i>';

    // append buttons to span element
    span.appendChild(che);
    span.appendChild(del);

    // append span to list element
    task.appendChild(span);

    // append list to unordered list element
    output.appendChild(task);

    // reset form input
    gro.value = '';
    
    // event [ che ] : check button
    che.addEventListener('click', ()=>{

        // validate checked list item
        if (task.style.textDecoration != 'line-through') {
            task.style.textDecoration = 'line-through';

            // test
            console.log('item checked');
        } 
        // return list item to default
        else {
            task.style.textDecoration = 'none';

            // test
            console.log('item un-checked');
        }
        
    });

    // event  [ del ] : delete button
    del.addEventListener('click', ()=>{
        
        // remove task element
        task.style.display = 'none';

        // test
        console.log('item deleted');

    });

    // test
    console.log(gro.value);
}
