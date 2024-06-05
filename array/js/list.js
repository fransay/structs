
class List{
    constructor(dataArray){
        this.dataArray = dataArray
        this.length  = dataArray.length;
    };

    // Remove element at index with in-built js functions
    remove(index){
        let newDataArray = Array();
        let indexCounter = 0;
        for (var x of this.dataArray){
            if (index != indexCounter){
                newDataArray.push(x);
            }
            indexCounter++;
        }
        return newDataArray;
    }

    // Add element at the end of List
    add(element){
        this.dataArray.push(element);
        return this.dataArray;
    }
}

// Simulating main entry
function main(){
    let simpleList = new List([1,2,3,4]);
    console.log(simpleList.dataArray); // expect [1,2,3,4]  
    console.log(simpleList.remove(3));
    console.log(simpleList.add(20)); // expect 
}

main();


