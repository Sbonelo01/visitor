let visitor = require('../src/visitor');

it('should exist', () => {
	expect(visitor.load).toBeDefined();
})


it('should exist', () => {
	let alice = new visitor.Visitor()
	expect(alice.save).toBeDefined();
})

//it('should return data', () => {
//	let data = require('visitor_Alice_Smith.json')
//	let alice = new visitor.Visitor();
//	expect(visitor.load('Alice Smith')).toEqual(data);
//})

it('should create file', () => {
	expect('/home/sbonelo/Desktop/code/node/src/visitor_Alice_Smith.json').toBeDefined();
	expect('/home/sbonelo/Desktop/code/node/src/visitor_Bob_Sola.json').toBeDefined();
	expect('/home/sbonelo/Desktop/code/node/src/visitor_Charlie_Zondi.json').toBeDefined();	
})