var obj = {
  two : document.getElementById('two'),
  two2 : document.getElementById('two2'),
  two3 : document.getElementById('two3'),
  two4 : document.getElementById('two4'),
  two5 : document.getElementById('two5')
};

function reset () {
  setTimeout(function() {
     obj.two5.classList.add('startAnimation'); console.log('two5 startAnimation;');
  },3000);
  setTimeout(function() {
     obj.two5.classList.add('zIndex'); console.log('two5 zIndex: -1;');
  },4500);
  setTimeout(function() {
     obj.two4.classList.add('startAnimation'); console.log('two4 startAnimation;');
  },7500);
  setTimeout(function() {
     obj.two4.classList.add('zIndex'); console.log('two4 zIndex: -1;');
  },9000);
  setTimeout(function() {
     obj.two3.classList.add('startAnimation'); console.log('two3 startAnimation;');
  },12000);
  setTimeout(function() {
     obj.two3.classList.add('zIndex'); console.log('two3 zIndex: -1;');
  },13500);
  setTimeout(function() {
     obj.two2.classList.add('startAnimation'); console.log('two2 startAnimation;');
  },16500);
  setTimeout(function() {
     obj.two2.classList.add('zIndex'); console.log('two2 zIndex: -1;');
  },18000);
  setTimeout(function() {
     obj.two.classList.add('startAnimation'); console.log('two startAnimation;');
  },21000);
};

reset();

setInterval(function() {
  for (key in obj) {
    obj[key].classList.remove('zIndex', 'startAnimation');
    console.log('obj[key] zIndex: avto;');
  }
  return reset();
},22500);
