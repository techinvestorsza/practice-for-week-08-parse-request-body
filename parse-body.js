function firstStep(input) {
  // Your code here
  return input.split('&');
}

function secondStep(input) {
  // Your code here
  return input.map(ele => {
    return ele.split('=');
  });
}

function thirdStep(input) {
  return input.map(ele => {
    return ele.map(i => {
    return i.replace('+', ' ')
    });
})
}

function fourthStep(input) {
  // Your code here
  return input.map(ele => {
    return ele.map(i => {
      return decodeURIComponent(i);
    })
  })
}

function fifthStep(input) {
  // Your code here
      /*
      // empty obj
  // loop through - first item is the key, second item is the value
        array indexing, [0, 1]
        first item = item[0]
        second item = item[1]
      */
  const obj = {};
  
  input.forEach(item => obj[item[0]] = item[1])
  
  return obj;
}

function parseBody(str) {
  // Your code here
  const first = firstStep(str);
  const second = secondStep(first);
  const third = thirdStep(second);
  const fourth = fourthStep(third);
  const fifth = fifthStep(fourth);

  return fifth;
}

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE BELOW THIS LINE *******************/

module.exports = {
  firstStep,
  secondStep,
  thirdStep,
  fourthStep,
  fifthStep,
  parseBody
};