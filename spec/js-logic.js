const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')

chai.use(chaiAsPromised)
const expect = chai.expect

const jslogic = require('../exercises/js-logic')

describe('Q1: Create a phone number', () => {
	it('Takes in an array and returns that array as a phone number. This should return a string.', () => {
        const testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
		const result = jslogic.createPhoneNumber(testArr)
		expect(result).to.equal('(123) 456-7890')
	})
})

describe('Q2: Count the duplicates', () => {
	it('Takes in a string and returns the number of duplicates', () => {
		const result = jslogic.countTheDups('aabbcc')
		expect(result).to.equal(3)
	})
})

describe('Q3: Boolean Xs and Os', () => {
	it('Takes in a string and returns true if it contains the same number of x and o.', () => {
		const result = jslogic.boolsXOs('xoxo')
		expect(result).to.equal(true)
	})
})
