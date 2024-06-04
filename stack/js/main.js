
/*
Stack is a simple data structure that functions
on the principle of last-in-first out principle.
*/


// Stack structure
let Stack = {
    data: [],
    // method: return the length of the stack
    length: function(){
        return this.data.length;
    },
    // method: add new element to 
    push: function(element){
        this.data.push(element);
    },
    // method: remove current element on stack
    pop: function(){
        this.data.pop();
        return this.data;
    },
}

function main(){
    // test stack.
    Stack.push(5);
    Stack.push(4);
    Stack.push(6);
    Stack.push(10);
    console.log(Stack.data);
    console.log(Stack.pop());
    console.log(Stack.length());
}

main();

