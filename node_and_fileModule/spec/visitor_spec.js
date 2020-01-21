let visitor = require('../src/visitor');
let fs = require('fs');

describe('function save()', () => {
    let alice = new visitor.Visitor('alice_cooper', 21, '13/01/2020', '12:00', 'amazing', 'Sbonelo')
    
    it('exists', () => {
        expect(alice.save).toBeDefined()
    })

    it("writes a visitor's content to a respectively named file", () => {
        fs.readFile('visitor_alice_cooper.json', 'UTF8', (err, data) =>{
            if(err){throw err}
            else{
                let readData = data
                expect(readData).toEqual(JSON.stringify(alice, null, 4))
            }
        })
    })

})

describe('function load()', () => {
    it('exists', () => {
        expect(visitor.load).toBeDefined()
    })
})
