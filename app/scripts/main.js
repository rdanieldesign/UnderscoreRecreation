// Define namespace object

var DDD = {};

// DDD.max()

DDD.max = function(list, property){
  var highest;
  if(property == null){
    list.forEach(function(y){
      if(highest == null){
        highest = y;
      }
      else if(y > highest){
        highest = y;
      }
    });
    console.log(highest);
  }
  else{
    list.forEach(function(y){
      if(highest == null){
        highest = property(y);
      }
      else if(property(y) > highest){
        highest = property(y);
      }
    });
    list.forEach(function(y){
      if(property(y) === highest){
        console.log(y);
      }
    });
  }
};

var numbers = [1, 7, 3, 6, 2];
var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
var func = function(a){ return a.age; }
DDD.max(numbers);
DDD.max(stooges, func);


// DDD.invert()

DDD.invert = function(object){
  // var invertedObject = [];
  for (var x in object){
    var hold = x;
    x = object[x];
    object[x] = hold;
  }
  return object;
};

var names = {Moe: "Moses", Larry: "Louis", Curly: "Jerome"}
DDD.invert(names);


// DDD.matches()


//DDD.pairs()

DDD.pairs = function(obj){
  var keyValPairs = [];
  for(var key in obj){
    var x = [];
    x.push(key);
    x.push(obj[key]);
    keyValPairs.push(x);
  };
  return keyValPairs;
};

DDD.pairs({one: "a", two: "b", three: "c"});






// var TEST2 = {};
//
// TEST2.map = function(obj, iteratee, context) {
//   if (obj == null) return [];
//   iteratee = function(value, context, argCount) {
//     if (value == null) return function(value) {
//     return value;
//   };
//     if (typeof value == 'function') return createCallback(value, context, argCount);
//     var matches = function(attrs) {
//       var pairs = _.pairs(attrs), length = pairs.length;
//       return function(obj) {
//         if (obj == null) return !length;
//         obj = new Object(obj);
//         for (var i = 0; i < length; i++) {
//           var pair = pairs[i], key = pair[0];
//           if (pair[1] !== obj[key] || !(key in obj)) return false;
//         }
//         return true;
//       };
//     };
//     var property = function(key) {
//       return function(obj) {
//         return obj[key];
//       };
//     };
//     if (typeof value == 'object') return matches(value);
//     return property(value);
//   };
//   var has = function(obj, key) {
//     return obj != null && hasOwnProperty.call(obj, key);
//   };
//   keysFunc = function(obj) {
//     if (!(typeof obj == "object")) return [];
//     if (nativeKeys) return nativeKeys(obj);
//     var keys = [];
//     for (var key in obj) if (has(obj, key)) keys.push(key);
//     return keys;
//   };
//   var keys = obj.length !== +obj.length && keysFunc(obj),
//       length = (keys || obj).length,
//       results = Array(length),
//       currentKey;
//   for (var index = 0; index < length; index++) {
//     currentKey = keys ? keys[index] : index;
//     results[index] = iteratee(obj[currentKey], currentKey, obj);
//   }
//   return results;
// };
//
// var newArray = [1, 2, 3, 4, 5];
//
// console.log(TEST2.map(newArray, function(x){
//   x + 3;
// }));



//Tims example: Random();

var tim = {};

tim.greeting = function(){
  alert("hi");
};

tim.random = function(min, max){
  if(max == null){
    max = min;
    min = 0;
  }
  return min + Math.floor(Math.random() * (max - min + 1));
};