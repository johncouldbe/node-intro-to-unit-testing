const should = require('mocha');
const fizzBuzzer = require('../fizzbuzzer');

describe('fizzbuzz', function(){
  it('Should return "fizz" when divisible by 3, "buzz" when divisible by 5 and "fizzbuzz" when divisible by both 3 and 5, else return the original number', function(){
    const normalCases = [
      {num:3, expected:'fizz'},
      {num:5, expected:'buzz'},
      {num:15, expected:'fizz-buzz'},
      {num:1, expected: 1}
    ];
    normalCases.forEach(function(input){
      const answer = fizzBuzzer(input.num)
      answer.should.equal(input.expected);
    });

    const badCases = ['3', false];
    badCases.forEach(function(){
      fizzBuzzer.should.throw(Error);
    });
  });
});
