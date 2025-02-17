
let graph = {
    A:["B","C"],
    B:["A","D"],
    C:["A","D"],
    D:["B","C"],
    
}
let queue = ["A"];
let visited = new Set();
visited.add("A");

while(queue.length>0){
    let node = queue.shift();
    console.log(node);
    for(let neighbor of graph[node]){
        if(!visited.has(neighbor)){
            visited.add(neighbor);
            queue.push(neighbor);
        }
    }
        
    }
