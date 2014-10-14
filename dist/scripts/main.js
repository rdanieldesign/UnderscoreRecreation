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


// DDD.invert(). Not sure how it works, but it almost does.

DDD.invert = function(object){
  // var invertedObject = {};
  var invertedObject = {};
  for(var x in object){
    var key = x;
    var value = object[x];
    invertedObject[value] = key;
    invertedObject[value[key]] = key;
  };
  // return invertedObject;
  return (invertedObject);
};

var names = {Moe: "Moses", Larry: "Louis", Curly: "Jerome"}
DDD.invert(names);


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


// DDD.without(). Collaborated with Paul Park.

DDD.without = function (nums, remove) {
  var newNums = [];
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] !== remove) {
      newNums.push(nums[i]);
      };
    };
  return newNums;
};

var origNums = [1,3,6,5,7,9];
DDD.without(origNums, 5);