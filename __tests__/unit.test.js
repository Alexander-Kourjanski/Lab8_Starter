// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

test('True phone number test 1', () => {
    expect(functions.isPhoneNumber('(666)666-6666')).toBe(true);
  });

test('True phone number test 2', () => {
    expect(functions.isPhoneNumber('(123)456-7890')).toBe(true);
  });

test('False phone number test 1', () => {
    expect(functions.isPhoneNumber('Not a number')).toBe(false);
  });

test('False phone number test 2', () => {
    expect(functions.isPhoneNumber('2')).toBe(false);
  });

test('True email test 1', () => {
    expect(functions.isEmail('akourjan@ucsd.edu')).toBe(true);
  });

test('True email test 2', () => {
    expect(functions.isEmail('blah@gmail.com')).toBe(true);
  }); 

test('False email test 1', () => {
    expect(functions.isEmail('not an email')).toBe(false);
  });

test('False email test 2', () => {
    expect(functions.isEmail('something@nocom')).toBe(false);
  });

test('True strong password test 1', () => {
    expect(functions.isStrongPassword('Alexander')).toBe(true);
  });

test('True strong password test 2', () => {
    expect(functions.isStrongPassword('with123_3')).toBe(true);
  });

test('False strong password test 1', () => {
    expect(functions.isStrongPassword('Not a password')).toBe(false);
  });

test('False strong password test 2', () => {
    expect(functions.isStrongPassword('!Toostrong')).toBe(false);
  });

test('True date test 1', () => {
    expect(functions.isDate('12/12/2022')).toBe(true);
  });

test('True date test 2', () => {
    expect(functions.isDate('11/21/2022')).toBe(true);
  });

test('False date test 1', () => {
    expect(functions.isDate('12/12/22')).toBe(false);
  });

test('False date test 2', () => {
    expect(functions.isDate('12-12-2022')).toBe(false);
  });

test('True hexcode test 1', () => {
    expect(functions.isHexColor('#321')).toBe(true);
  });

test('True hexcode test 2', () => {
    expect(functions.isHexColor('#3A2B1C')).toBe(true);
  });

test('False hexcode test 1', () => {
    expect(functions.isHexColor('3G1')).toBe(false);
  });

test('False hexcode test 2', () => {
    expect(functions.isHexColor('Not a code')).toBe(false);
  });