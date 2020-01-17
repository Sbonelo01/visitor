let visitor = require('../src/visitor');

describe('functionality tests', () => {

		let bob = new visitor.Visitor();
		let charlie = new visitor.Visitor();

		let alice = new visitor.Visitor('Alice Smith', 21, '13/01/2020', '12:00', 'amazing', 'Sbonelo');
		let data = '{"fullName":"Alice Smith","age":21,"date":"13-01-2020","time":"12:00","comments":"amazing","person":"Sbonelo"}';

	it('should exist', () => {
		expect(visitor.load).toBeDefined();
	});

	it('should exist', () => {
		expect(bob.save).toBeDefined();
		expect(charlie.save).toBeDefined();
	});

	xit('should return data', () => {
		expect(JSON.stringify(alice)).toBe(data);	
	});

})
