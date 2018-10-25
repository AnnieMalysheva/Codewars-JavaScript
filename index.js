function getCount(str) {
  var vowelsCount = 0;
  
  Array.from(str).forEach(el => 'aeio'.includes(el) ? vowelsCount++ : null)
  
  return vowelsCount;
}

