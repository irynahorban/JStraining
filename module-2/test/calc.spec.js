'use strict';

const calc = require('../calc');
const expect = require('chai').expect;
/*
 * calc(3).v // 3
 * calc(3).add(5).v // 8
 * calc(3).minus(2).v // 1
 * calc(4).sqrt().v // 2
 * calc(3).times(10).v // 30
 * calc(10).divide(2).v // 5
 * calc(10).modulo(5).v // 0
 * calc(5).divide(0) // throw error
 * calc(-3).sqrt() // throw error
 * calc(3).add(4)
 *     .minus(3)
 *     .times(6).v // 24
 */

describe.only('calc', () => {
    // calc(3).v // 3
    it('Should return the actual value passed in the calc', () => {
        let value = calc(3);
        return expect(value.v).to.equal(3);
    });

    // calc(3).add(5).v // 8
    it ('Should return the result of addition of the 2 passed values', () => {
        let addition = calc(3)
            .add(5);
        return expect(addition.v).to.equal(8);
    });

    // calc(3).minus(2).v // 1
    it('Should return the result of subtraction of one value from another', () => {
        let subtract = calc(3)
            .subtract(2);
        return expect(subtract.v).to.equal(1);
    });

    //calc(4).sqrt().v // 2
    it('Should return the result of a square root of a passed number', () => {
        let sqroot = calc(4).sqrt();
        return expect(sqroot.v).to.equal(2);
    });

    //calc(3).times(10).v // 30
    it('Should return the result of a multiplication of 2 values', () => {
        let mult = calc(3).multiply(10);
        return expect(mult.v).to.equal(30);
    });

    //calc(10).divide(2).v // 5
    it('Should return the result of a division of one value by another', () => {
        let devision = calc(10).divide(2);
        return expect(devision.v).to.equal(5);
    });

    //calc(10).modulo(5).v // 0
    it ('Should return the number left after a division of one number by another', () => {
        let modulo = calc(10).modulo(5);
        return expect(modulo.v).to.equal(0);
    });

    //calc(3).add(4).minus(3).times(6).v // 24
    it('Should return the result of the following operations = (3+4-3)*6', () => {
        let result = calc(3).add(4).subtract(3).multiply(6);
        return expect(result.v).to.equal(24);
    });

    //calc(5).divide(0) // throw error
    it('Should throw an error in case of a division by 0', () => {
    let divByZero = calc(3);
    expect(() => divByZero.devide(0)).to.throw;
    });

    //calc(-3).sqrt() // throw error
    it('Should throw an error if trying to get a root of a number <= 0', () => {
      let rootFromNeg = calc(-9);
      expect(() => rootFromNeg.sqrt()).to.throw;
    });

});