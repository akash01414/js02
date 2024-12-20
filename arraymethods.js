
var a = [1,2,3,4,5]
console.log(a.length);
var b = ["kohli","akaay","teja"]
b.push("rohith")
console.log(b);
b.pop("rohith")
console.log(b);
b.unshift("bob")
console.log(b)
b.shift("bob")
console.log(b);
b.reverse(b)
console.log(b);
var c =  a.indexOf(5)
console.log(c);
 var c = b.includes("kohli")
 console.log(c);
 

var arr=[20,40,30,10]
console.log(arr.sort())
var b=["kohli","akaay",]
 var e=b.join(",")
 console.log(e)



var f=[1,2,3,4,5,6,7]
f.push(8)
f.shift(1)
console.log(f);


var g=["akkay","kohli","seenu"]
var h = g.reverse().join()
console.log(h);


var arrayOrder = [20,39,47,26,10]
var sortOrder = arrayOrder.sort()
sortOrder.pop()
console.log(sortOrder);


var addTwo = [3,4,5,6,7,8,9]
addTwo.unshift(1,2)
addTwo.shift()
console.log(addTwo.length);


var firstArr = ["rohit","ram"]
var secArr = ["bob","alice"]
var bothArr = firstArr.concat(secArr)
bothArr.pop()
console.log(bothArr);



var guestList = ["Alice", "Bob", "Charlie", "David"]
guestList.unshift("ram")
guestList.pop()
console.log(guestList);
var checkGuest = guestList.includes("Bob")
console.log(checkGuest);



var sentenceA = "Learn,Practice,Improve";
var senB = sentenceA.split(",").reverse().join()
console.log(senB);



var arrF = ["Song1", "Song2", "Song3"]
var arrS = ["Song4", "Song5"]
var finalArr=arrF.concat(arrS)
finalArr.shift()
finalArr.push("Song6")
console.log(finalArr);



var movies = ["Inception", "Titanic", "Avatar", "Interstellar", "Gladiator"]
var moviesB =["The Matrix", "The Godfather"]
var moviesA = movies.slice(2,5)
var movieC = moviesA.concat(moviesB).reverse()
console.log(movieC);


var nameS = "John,Doe,Jane,Smith"
var arrNames = nameS.split(",").reverse().join(" ")
console.log(arrNames);
var checkName = arrNames.includes("Jane")
console.log(checkName);


var arr = [1, 2, 3, 4, 5]
arr.shift()
arr.push(6,7)
console.log(arr);
console.log(arr.length);




var arr = ["Milk", "Bread", "Eggs", "Butter"]
arr.pop()
arr.push("Chesse","Juice")
console.log(arr);
var arrA = arr.includes("Eggs")
console.log(arrA);


var arr1=["Alice", "Bob", "Charlie"]
var arr2=["David", "Eve"]
var reverArr = arr1.reverse()
var finalArr1 = reverArr.concat(arr2)
finalArr1.unshift("Frank")
console.log(finalArr1);



var shoppingCart = ["Milk", "Bread", "Eggs", "Butter"]
var indexEggs = shoppingCart.indexOf("Eggs")
console.log(indexEggs);
shoppingCart[2]="Cheese"
console.log(shoppingCart);
