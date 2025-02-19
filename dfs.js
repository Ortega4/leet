let graph = {
    A:["B","C"],
    B:["A","D"],
    C:["A","D"],
    D:["B","C"]


};

let visited = new Set();
let stack = ["A"];
visited.add("A");

while(stack.length>0){
    let node = stack.pop();
    console.log(node);

    for(let neighbor of graph[node].slice().reverse()){
        if(!visited.has(neighbor)){
            visited.add(neighbor);
            stack.push(neighbor);
        }
    }

}