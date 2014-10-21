// Open Annanoymous Self-Executing Function

(function(){

  // Define namespace object
  var DDD = {};

  // DDD.max()
  DDD.max = function(list, func){
    var highest;
    if(func == null){
      list.forEach(function(y){
        if(highest == null){
          highest = y;
        }
        else if(y > highest){
          highest = y;
        }
      });
      return highest;
    }
    else {
      list.forEach(function(y){
        if(highest == null){
          highest = func(y);
        }
        else if(func(y) > highest){
          highest = func(y);
        }
      });
      list.forEach(function(y){
        if(func(y) === highest){
          return y;
        }
      });
    }
  };

  // DDD.invert().
  DDD.invert = function(object){
    var invertedObject = {};
    for(var x in object){
      var key = x;
      var value = object[x];
      invertedObject[value] = key;
    };
    return invertedObject;
  };

  // DDD.pairs()
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


  // Tim's map() example.
  DDD.map = function(arr, callback){
    var res = [], i;
    for (i = 0; i < arr.length; i++){
      res[i] = callback(arr[i]);
    }
    return res;
  };

  // Set global variable DDD
  window.DDD = DDD;

})(); // Close self-executing function

