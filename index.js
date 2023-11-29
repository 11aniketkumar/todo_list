// let counter = document.getElementById("counter");
// counter.value = '240';

// let id = setInterval(()=>{
//     if(Number(counter.value) > 0) {
//         counter.value = Number(counter.value) - 1;
//     } else {
//         clearInterval(id);
//     }
// }, 1000);





// let prev = document.querySelector('#p');
// let next = document.querySelector('#n');

// let counter = document.querySelector('#counter');

// prev.addEventListener("click", ()=>{
//     if(Number(counter.value) > 0) {
//         counter.value = Number(counter.value) - 1;
//     }
// });

// next.addEventListener("click", ()=>{
//     counter.value = Number(counter.value) + 1;
// });






let l = [];

function new_task(name, deadline) {
    this.name = name;
    this.deadline = deadline;
    this.status = "Incomplete";
}

let add_task = document.querySelector('#add_task');

add_task.addEventListener("click", ()=>{
    let name = document.getElementById('name');
    let deadline = document.getElementById('deadline');

    if((name.value === "") || (deadline.value === "")) {
        alert("Please enter all details!");
        return;
    }

    l.push(new new_task(name.value, deadline.value));
    name.value = "";
    deadline.value = "";

    refresh();
});

function switch_status(i) {
    if(l[i].status === "Completed") {
        l[i].status = "Incomplete";
        return refresh();
    }
    l[i].status = "Completed";
    return refresh();
}

function delete_task(i) {
    l.splice(i,1);
    refresh();
}

function up(i) {
    if((l.length <= 1) || (i == 0)) {
        return;
    }

    let temp = l[i-1];
    l[i-1] = l[i];
    l[i] = temp;

    return refresh();
}

function down(i) {
    if((l.length <= 1) || (i == l.length-1)) {
        return;
    }

    let temp = l[i+1];
    l[i+1] = l[i];
    l[i] = temp;
    
    return refresh();
}

function refresh() {
    let todo = document.getElementById('todo');
    todo.innerHTML = "<h2>TASKS</h2>";
    if(l.length == 0) {
        todo.innerHTML += "<p>No todo's are available</p>";
        return;
    }

    todo.innerHTML = todo.innerHTML + `<div id='task_header' class='task'><span>SNO.</span><span>Task Name</span><span>Deadline</span><span>Status</span><span>Controls</span></div>`;
    
    for(let i = 0; i < l.length; i++) {
        // todo.innerHTML = todo.innerHTML + `<div class='task'><p>${i+1}.</p><p>${l[i].name}</p><p>${l[i].deadline}</p><p>${l[i].status}</p><p><button onclick=switch_status(${i})>Change Status</button><button onclick=delete_task(${i})>Delete</button></p></div>`;
        todo.innerHTML = todo.innerHTML + `<div class='task'><span>${i+1}.</span><span>${l[i].name}</span><span>${l[i].deadline}</span><span>${l[i].status}</span><span><button onclick=switch_status(${i})>Change Status</button><button onclick=delete_task(${i})>Delete</button><button onclick=up(${i})>⬆</button><button onclick=down(${i})>⬇</button></span></div>`;
    }
}









