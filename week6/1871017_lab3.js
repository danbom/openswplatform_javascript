function sort(arr) { 
    if(arr.length == 0 )  return [];  
    
    var middle = arr[0]; 
    var len = arr.length; 
    var left = [], right = []; 
    
    for(var i = 1; i < len; ++i) { 
        if( arr[i] < middle )  left.push(arr[i]);  
        else  right.push(arr[i]); } 
        
    
    return sort(left).concat(middle, sort(right)); 

}

console.log(sort([]));
console.log(sort([5]));
console.log(sort([4,1]));
console.log(sort([3,2,3]));
console.log(sort([5,3,8,9,4,1]));



        