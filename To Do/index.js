const arr = []
const listEl = document.getElementsByClassName('list')[0];
const submitInputEl = document.getElementById('submitInput');

const refreshList = function() {
    listEl.innerHTML="";
    for(let i=0; i<arr.length; i++) {
        let toDoItem = document.createElement('li');
        toDoItem.setAttribute('class', "list-item");
        toDoItem.innerText = arr[i];
        toDoItem.innerHTML += `<span class="deleteItem">&#10008;</span>`
        toDoItem.innerHTML += `<span class="editItem">&#x270D;</span>`
        listEl.insertAdjacentElement('beforeend', toDoItem);
    }
    addEventListeners();
}

submitInputEl.addEventListener('keyup', (e)=> {
    if(e.keyCode === 13 && e.target.value != "") {
       const val = e.target.value;
       e.target.value = "";
       arr.push(val);
       refreshList()
    }
})

refreshList()

function editItem(toDoItem, toEdit) {
    for(let i=0; i<arr.length; i++) {
        if(arr[i]===toDoItem) {
            arr[i] = toEdit;
            return;
        }
    }
}

function addEventListeners() {
    const deleteItemEls = Array.from(document.getElementsByClassName('deleteItem'));
    const editItemEls = Array.from(document.getElementsByClassName('editItem'));
    for(let i=0; i<deleteItemEls.length; i++) {
        deleteItemEls[i].addEventListener('click', (e)=> {
            const item = e.target.parentNode.innerText;
            const toDoItem = item.slice(0, -3).trim();
            arr.splice(arr.indexOf(toDoItem), 1);
            refreshList();
        })
        editItemEls[i].addEventListener('click', (e)=> {
            const item = e.target.parentNode.innerText;
            const toDoItem = item.slice(0, -3).trim();
            const val = submitInputEl.value;
            if(val === "") {
                alert("Enter the value in Input Box")
                return;
            }
            editItem(toDoItem, val)
            submitInputEl.value=""
            refreshList()
        })
    }
}
