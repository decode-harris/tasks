const refresh = document.querySelector('.btn_refresh');
const dateElmnt = document.querySelector('.date_elmnt');
// output list elmnt
const output = document.querySelector('.output');
// input list elmnt
const input = document.querySelector('.input');
// button : add task
const btn_add = document.querySelector('.btn_add');
// event : add task
btn_add.addEventListener('click', (e)=>{
    // prevent form default submitting
    e.preventDefault();
    // validate user input
    if (input.value == '') {
        alert('please fill in a task');
    } 
    else if(input.value.length > 20) {
        alert('please use under 20 letters for tasks');
    }
    else {
        // create list & span elmnt
        let task = document.createElement('li');
        let span = document.createElement('span');
        // get user input for task
        task.innerHTML = input.value;
        // create checked & delete buttons
        let btn_checked = document.createElement('button');
        let btn_delete = document.createElement('button');
        // attach icons for checked & delete buttons
        btn_checked.innerHTML = '<i class="fas fa-check"></i>';
        btn_delete.innerHTML = '<i class="fas fa-times"></i>';

        // event - task complete
        btn_checked.addEventListener('click', ()=>{
            if (task.style.background == '') {
                task.style.background = 'green';
                task.style.color = '#FFF';
                task.style.textDecoration = 'line-through';
            } else {
                task.style.background = '';
                task.style.textDecoration = 'none';
            }
            
        });

        // event - task delete
        btn_delete.addEventListener('click', ()=>{
            task.style.display = 'none';
        });

        // attach btns to span elmnt
        span.appendChild(btn_checked);
        span.appendChild(btn_delete);
        // attach span to span elmnt
        task.appendChild(span);
        // attach task to output list
        output.appendChild(task);
        // check for user input
        console.log(input.value);
    }
    // reset form to empty
    input.value = '';
});






