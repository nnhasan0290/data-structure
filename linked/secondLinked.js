function Node(value){
    this.value = value;
    this.next = null
}

class Linked{
    constructor(){
      this.head = null;
      this.size = 0;
    }

    prepand(value){
        const node = new Node(value);
        node.next = this.head;
        this.head = node;
        this.size++;
    }

    print(){
        if(this.size === 0){
            console.log("This linked list is empty");
        }else {
            let current = this.head;
            while(current){
                console.log(current.value);
                current = current.next;
            }
        }
    }
}

const LinkedList = new Linked();
LinkedList.prepand(20);
LinkedList.prepand(10);
LinkedList.prepand(40);

LinkedList.print();