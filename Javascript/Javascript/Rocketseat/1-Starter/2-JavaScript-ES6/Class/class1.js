class List{
    constructor() {
        this.data = [];
    }

    add(data){
        this.data.push(data);
    }

    show(){
        console.log(this.data);
    }
}

class TodoList extends List{
    constructor() {
        super();
        this.user = "Emaboy";
    }

    showUser(){
        console.log(this.user);
    }
}

var  myList = new TodoList();
var i = 0;
document.getElementById('newTodo').onclick = function(){
    myList.add(i);
    i++;
    myList.show();
}

myList.showUser();