class Stack {
    constructor(){
        this.items = [];
        this.count = 0;
    }
    // Add elements to the top of the stack
    push(element){
        this.items[this.count] = element;
        this.count++;
        console.log(`The element ${element} was added in position ${this.count - 1}`);
        return this.count - 1;
    } 
    // Return and remove the last element of the stack
    // Return undefined if the stack is empty
    pop(){
        if(this.count === 0) return undefined;
        let deleteItem = this.items[this.count - 1]
        this.count--;
        console.log(`${deleteItem} has been removed`)
        return deleteItem;
    }
    // Get the last item
    peek(){
        console.log(`The last item is ${this.items[this.count - 1]}`);
        return this.items[this.count - 1];
    }
    // Return if the stack is EMPTY or NOT
    isEmpty(){
        console.log(this.count == 0 ? "The stack is empty" : "The stack is NOT empty");
        return this.count == 0;
    }
    // Show the size of the stack
    size(){
        console.log(`There are ${this.count} elements in the stack`);
        return this.count;
    }
    // Print the current values of the stack
    print(){
        let str = '';
        for(let i = 0; i < this.count; i++){
            str += this.items[i] + ' ';
        }
        console.log(`The current values of the stack are: ${str}`);
        return str;
    }
     // Clear stack
     clear() {
        this.items = [];
        this.count = 0;
        console.log('Stack cleared..')
        return this.items;
    }
}

const stack = new Stack();

stack.isEmpty();
stack.push(100);
stack.push(200);
stack.push(300);
stack.print();

stack.pop();
stack.pop();
stack.size();
stack.peek();
stack.print();

stack.pop();
stack.isEmpty();

