//1: Function and Array
function max(arr) {
    let maxNum = arr[0];
    for( let i=1; i<arr.length; i++){
        if(maxNum < arr[i]){
            maxNum = arr[i];
        }else{
            continue;
        }
    }
    return maxNum;
}

console.log(max([1, 2, 4, 5])); // expected output: 5
console.log(max([5, 2, 7, 1, 6])); // expected output: 7


//2: Function and Object
function calculate(args) {
    let num1 = args.n1;
    let num2 = args.n2;
    let oper = args.op;
    if(oper === '+'){
        return (num1 + num2);
    }else if(oper === '-'){
        return (num1 - num2);
    }else {
        return (`Not supported`);
    }
}
console.log(calculate({ n1: 2, n2: 3, op: '+' })); // expected output: 5
console.log(calculate({ n1: 5, n2: 2, op: '-' }));  // expected output: 3
console.log(calculate({ n1: 1, n2: 6, op: 'x' }));  // expected output: 'Not supported'


//3: Function, Array, and Object
function calculate2(data) {
	let discount = data.discount;
    let products = data.products;
    let total = 0;
    for (let i=0 ; i<products.length; i++){
        total += products[i].price;
    }
    return total*discount;
}
const discountedPrice = calculate2({
	discount: 0.1,
	products: [
		{
			name: "Product 1",
			price: 100
		},
		{
			name: "Product 2",
			price: 700
		},
		{
			name: "Product 3",
			price: 250
		}
	]
});
console.log(discountedPrice) // show the total price of all products after applying a discount

//5: Algorithm
function twoSum(nums, target) {
    let result = [];
    for(let i=0; i<nums.length-1; i++){
        let findnum = target-nums[i];
        for(let j=i+1; j<nums.length; j++){
            if(findnum === nums[j]){
                result.push([i,j]);
            }
        }
    }
    if(result.length !== 0){
        return result;
    }else{
        return `can't find any two sum equal target`;
    }
}

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([2, 7, 11, 15], 35));
console.log(twoSum([2, 7, 11, 15], 22));
console.log(twoSum([2, 4, 10, 8, 7, 11, 12, 15], 22)); //(如果不只一個答案的話)
/*
	For example:
		twoSum([2, 7, 11, 15], 9);
	Should returns:
		[0, 1]
	Because:
		nums[0] + nums[1] is 9
*/
