window.onload = ()=>{

  const obj = {
    two : document.getElementById('two'),
    two2 : document.getElementById('two2'),
    two3 : document.getElementById('two3'),
    two4 : document.getElementById('two4'),
    two5 : document.getElementById('two5')
  };

  function resetAnimation () {
    // the class is added to the HTML tag in 3 seconds.
    // the same happens with the rest of the set times every 1.5 and 3 seconds
    setTimeout(()=>{obj.two5.classList.add('startAnimation');},3000);
    setTimeout(()=>{obj.two5.classList.add('zIndex');},4500);
    setTimeout(()=>{obj.two4.classList.add('startAnimation');},7500);
    setTimeout(()=>{obj.two4.classList.add('zIndex');},9000);
    setTimeout(()=>{obj.two3.classList.add('startAnimation');},12000);
    setTimeout(()=>{obj.two3.classList.add('zIndex');},13500);
    setTimeout(()=>{obj.two2.classList.add('startAnimation');},16500);
    setTimeout(()=>{obj.two2.classList.add('zIndex');},18000);
    setTimeout(()=>{obj.two.classList.add('startAnimation');},21000);
  };

  resetAnimation();

  setInterval(()=>{
    // the function removes the previously assigned classes every 22.5 seconds
    // and calls the function resetAnimation
    for (key in obj) { obj[key].classList.remove('zIndex', 'startAnimation'); }
    return resetAnimation();
  },22500);

};
