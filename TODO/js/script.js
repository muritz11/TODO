
var tasks = [
    'Build a todo list app',
    'Have some fun',
]


var list = document.getElementById('list');
var save = document.getElementById('save');
var input = document.getElementById('task');
var delBtn = document.getElementsByClassName('fa-trash');

function liTemplate(task, index) {


    var trash = "<i class='fa fa-trash btn text-danger' onclick='deleteTask("+ index +")'></i>";
    var edit = "<i class='fa fa-edit btn text-success' onclick='editLi("+ index+")'></i>";
    var div = "<div class='w-25 text-right'>"+ edit + trash +"</div>";
    var span = "<span class='w-75' onclick='strike(event)'>"+ task +"</span>";
    var li = "<li class='list-group-item d-flex p-3' ind='"+ index +"'>"+ span + div +"</li>";

    list.innerHTML += li;


}


function removeTemplate(index) {


    //this left holes in our list items
    //list.removeChild(list.children[index]);

    //so we're going with this
    list.children[index].className = 'd-none';

   
}



function addTask(task, index) {

    tasks.push(task);
    liTemplate(task, index);
    //console.log(list.children);

    input.value = '';

}

save.onclick = function () {

    let index = save.getAttribute('edit');

    if(input.value != ''){


        if (index) {
    
            //console.log('edit mode');
            tasks[index] = input.value;
            input.value = '';
            list.children[index].children[0].innerHTML = tasks[index];
            save.getAttributeNode("edit").value = '';
    
        } else {
    
            //console.log('insert mode');
            addTask(input.value, list.children.length);
    
        }
        
    }
    
}


function deleteTask(ind) {
    
    //suspicious - suspicion confirmed
    //tasks.splice(ind, 1);

    removeTemplate(ind);
    //console.log(tasks);

}


tasks.forEach((val, index) => {
    liTemplate(val, index);
});


function editLi(index) {
    input.value = tasks[index];
    input.focus();

    save.getAttributeNode("edit").value = index;
}



function strike(event) {
    event.currentTarget.classList.toggle('strike');
}

//hmmmm, this took some work :)