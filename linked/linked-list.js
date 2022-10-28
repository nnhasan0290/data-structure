class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.size = 0;
    }

    isEmpty(){
        return this.size === 0
    }

    prepand(value){
        const node = new Node(value);
        this.size++;
        node.next = this.head
        this.head =  node;
    }

    print(){
        if(this.isEmpty()){
            console.log("This is empty")
        }else{
            let current = this.head;
            while(current){
                console.log(current.value);
                current = current.next
            }
        }
    }
}

const Linked_list = new LinkedList();

Linked_list.prepand(30);
Linked_list.prepand(20);

console.log(Linked_list.print());