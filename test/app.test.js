const { expect } = require('chai');
const { describe, it, beforeEach, afterEach } = require('mocha');
const NumbersValidator = require('../app/app');

describe('isNumberEven', () => {
  let validator;
  beforeEach(() => {
    validator = new NumbersValidator();
  });
  afterEach(() => {
    validator = null;
  });
  describe('positive tests', () => {
    it('should return true when provided an even number', () => {
      const validationResult = validator.isNumberEven(4);
      expect(validationResult).to.be.equal(true);
    });
  });
  describe('negative tests', () => {
    it('should return false when provided an non even number', () => {
      const validationResult = validator.isNumberEven(5);
      expect(validationResult).to.be.equal(false);
    });
    it('should throw an error when provided not a Number value', () => {
      const input = 'four';
      expect(() => {
        validator.isNumberEven(input);
      }).to.throw(`[${input}] is not of type "Number" it is of type "${typeof input}"`);
    });
  });
});
describe('getEvenNumbersFromArray', () => {
  let validator;
  beforeEach(() => {
    validator = new NumbersValidator();
  });
  afterEach(() => {
    validator = null;
  });
  describe('positive tests', () => {
    it('should return only even numbers from an array of numbers', () => {
      const validationResult = validator.getEvenNumbersFromArray([1, 2, 3, 4, 5]);
      expect(validationResult).to.be.eql([2, 4]);
    });
    it('should return an empty array when there are no even numbers', () => {
      const result = validator.getEvenNumbersFromArray([1, 3, 5]);
      expect(result).to.be.eql([]);
    });
  });
  describe('negative tests', () => {
    it('should throw an error when provided not an array', () => {
      const input = 'text';
      expect(() => {
        validator.getEvenNumbersFromArray(input);
      }).to.throw(`[${input}] is not an array of "Numbers"`);
    });
    it('should throw an error when an array contains not only numbers', () => {
      const input = [1, '2', 3];
      expect(() => {
        validator.getEvenNumbersFromArray(input);
      }).to.throw(`[${input}] is not an array of "Numbers"`);
    });
  });
});
describe('isAllNumbers', () => {
  let validator;
  beforeEach(() => {
    validator = new NumbersValidator();
  });
  afterEach(() => {
    validator = null;
  });
  describe('positive tests', () => {
    it('should return true when all elements are numbers', () => {
      const result = validator.isAllNumbers([1, 2, 3]);
      expect(result).to.be.equal(true);
    });
    it('should return false when some elements are not numbers', () => {
      const result = validator.isAllNumbers([1, 'two', 3]);
      expect(result).to.be.equal(false);
    });
  });
  describe('negative tests', () => {
    it('should throw an error when provided not an array', () => {
      const input = 'text';
      expect(() => {
        validator.isAllNumbers(input);
      }).to.throw(`[${input}] is not an array`);
    });
  });
});

describe('isInteger', () => {
  let validator;
  beforeEach(() => {
    validator = new NumbersValidator();
  });
  afterEach(() => {
    validator = null;
  });
  describe('positive tests', () => {
    it('should return true when provided an integer', () => {
      const result = validator.isInteger(5);
      expect(result).to.be.equal(true);
    });
    it('should return false when provided a non-integer number', () => {
      const result = validator.isInteger(5.5);
      expect(result).to.be.equal(false);
    });
  });
  describe('negative tests', () => {
    it('should throw an error when provided not a number', () => {
      const input = '5';
      expect(() => {
        validator.isInteger(input);
      }).to.throw(`[${input}] is not a number`);
    });
  });
});
