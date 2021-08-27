let task = document.querySelector('#task'); // select the form [ task ] input element
let addTask = document.querySelector('#addTask'); // select the form [ addTask ] button

// event [ add ] : add item 
addTask.addEventListener('click', (e)=>{

    e.preventDefault(); // prevent form submit

    // validate if form input is emtpy or null
    if (task.value == '' || task.value == null) {
        
        alert('please fill in an item'); // helper alert
        
        task.focus(); // focus the input error
    }
    // validate if task string length is equal or greater than 20 characters
    else if (task.value.length >= 20) {
        
        alert('please use 20 characters or less'); // helper alert

        gro.focus(); // focus the input error
    }
    else {
        runApplication(); // init function [ Run Application ]
    }

    task.value = ''; // reset form input element to default
    task.focus(); // refocus the task input element on submit

});

// function [ Run Application ]
runApplication = () => {
    let list = document.querySelector('.list'); // select the list element
    let items = document.createElement('li'); // create an items wrapper element
    items.classList = 'items'; // assign items element with class name 'items'
    
    let text = document.createElement('p'); // create a text data element
    text.classList = 'text';

    // create a span container for items action buttons
    let span = document.createElement('span');

    // create the items action buttons
    let itemsComplete = document.createElement('button');
    let itemsDelete = document.createElement('button');

    text.innerHTML = task.value; // assign current task value to text element
    
    itemsComplete.innerHTML = '<i class="fas fa-check"></i>'; // assign font awesome icons to buttons
    itemsDelete.innerHTML = '<i class="fas fa-times"></i>'; // assign font awesome icons to buttons
    
    items.appendChild(text); // append the data text element to the items element
    span.appendChild(itemsComplete); // append the action buttons to the span container
    span.appendChild(itemsDelete); // append the action buttons to the span container
    items.appendChild(span); // append the span container to data items element
    list.appendChild(items); // append the data items element to the unordered list
    
    // click event [ Items Complete ] 
    itemsComplete.addEventListener('click', ()=>{

        // validate checked list item
        if (text.style.textDecoration != 'line-through') {
            text.style.textDecoration = 'line-through'; // apply style property text decoration to text element
            console.log('Items Complete : True'); // test completed
            items.classList += ' itemsComplete'; // add [ complete ] classname to items element
        } 
        // return list item to default
        else {
            text.style.textDecoration = 'none';// remove any text decoration styles from element
            console.log('Items Complete : False'); // test style removal
            items.classList.remove('itemsComplete');


        }
    });

    // click event [ Items Delete ] 
    itemsDelete.addEventListener('click', ()=>{
        items.style.display = 'none'; // remove the current items element
        console.log('item deleted'); // test item removal
    });
}