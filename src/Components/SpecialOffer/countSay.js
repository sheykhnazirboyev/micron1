/*
1 => 1
2 => 11
3 => 21
4 => 1211
5 => 111221

count(5, 1, "1"){
	count(5, 2, "11"){
		count(5, 3, "111"){
			count(5, 4, "1111"){
				count(5, 5, "11111"){
					return "11111";
				}
			}
		}
	}
}
*/

function count(n, counter, prev){
	if(counter < n){
		return count(n, counter + 1, prev + 1);
	}
	if(counter === n){
		return prev;
	}
}

function countAndSay(n){
	count(n,1,"1");
}

console.log(countAndSay(5));