
// A node type in a binary tree 
class Node{
    constructor(key){
        this.key = key,
        this.left = null,
        this.right = null,
        this.parent = null
    }

    // set new key
    set newKey(key){
        this.key = key;
    }

    // set new left 
    set newLeft(left){
        this.left = left;
    }

    // set new right
    set newRight(right){
        this.right = right
    }

    // set new right
    set newParent(parent){
        this.parent = parent;
    }
}

// Binary tree type
class BST{}
