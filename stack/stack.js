class Stack {
    constructor(){
        this.items = [];
        this.count = 0;
    }

    push(val){
        this.items[this.count] = val
        this.count++;
    }

    pop(val){
       this.items = [val,...this.items];
       this.count++; 
    }

    print(){
        let data = "";
        if(this.count){
            this.items.forEach((e) => {
              data += `${e} `;
            })
        }
        return data;
    }
}

const stack = new Stack();
stack.push(3);
stack.push(4);
stack.pop(8);
console.log(stack.print());