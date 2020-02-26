function flatten(arr){
    let result = [];
    helper(arr,result);
    return result;
}
function helper(arr, result = []){
    for(let item of arr){
        if(Array.isArray(item)){
            helper(item,result);
        }
        else {
            result.push(item);
        }
    }
}
let arr = [1,2,3,4,5,[2,3,4,5],[['a','b','c'],['d','e','f']]];
let res = arr.concat();
console.log(res);
console.log(flatten(arr))