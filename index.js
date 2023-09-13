document.getElementById('calculate').addEventListener('click', function () {
    var list = document.getElementById('main-input').value;
    list = list.replaceAll(' ', '');
    list = list.split(',');
  
    list = list.map((item, index) => {
      return parseInt(item);
    });
  
    var operator = document.getElementById('operator').value;
  
    switch (operator) {
      case 'sum':
        var sum = 0;
        for (var i = 0; i < list.length; i++) {
          sum += parseInt(list[i]);
        }
        document.getElementById('output').innerHTML = sum;
        break;
  
      case 'average':
        var sum = 0;
        for (var i = 0; i < list.length; i++) {
          sum += parseInt(list[i]);
        }
        document.getElementById('output').innerHTML = sum / list.length;
        break;
  
      case 'min':
        var min = list[0];
        for (var i = 0; i < list.length; i++) {
          if (list[i] < min) {
            min = list[i];
          }
        }
        document.getElementById('output').innerHTML = min;
        break;
  
      case 'max':
        var max = list[0];
        for (var i = 0; i < list.length; i++) {
          if (list[i] > max) {
            max = list[i];
          }
        }
        document.getElementById('output').innerHTML = max;
        break;
  
      case 'median':
        // Sort list
        list.sort(function (a, b) {
          return a - b;
        });
  
        // Get median
        var median;
        if (list.length % 2 === 0) {
          var mid1 = list[list.length / 2 - 1];
          var mid2 = list[list.length / 2];
          median = (mid1 + mid2) / 2;
        } else {
          median = list[Math.floor(list.length / 2)];
        }
        document.getElementById('output').innerHTML = median;
        break;
  
      case 'mode':
        var modeMap = {};
        var maxCount = 0;
        var modes = [];
  
        for (var i = 0; i < list.length; i++) {
          var num = list[i];
          modeMap[num] = (modeMap[num] || 0) + 1;
          if (modeMap[num] > maxCount) {
            modes = [num];
            maxCount = modeMap[num];
          } else if (modeMap[num] === maxCount) {
            modes.push(num);
          }
        }
  
        document.getElementById('output').innerHTML = modes.join(', ');
        break;
  
      case 'range':
        var min = Math.min.apply(null, list);
        var max = Math.max.apply(null, list);
        document.getElementById('output').innerHTML = max - min;
        break;
  
      default:
        document.getElementById('output').innerHTML = 'Invalid operator';
        break;
    }
  });
  