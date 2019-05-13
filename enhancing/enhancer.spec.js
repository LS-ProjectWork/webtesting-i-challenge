const enhancer = require('./enhancer.js');
// test away!
describe('enhancer.js', () => {
    describe('succeed method', () => {
        it('should increase an enhancement by 1 if the enhancement level is less than 20', () => {
            expect(enhancer.succeed({enhancement: 18})).toEqual({enhancement: 19})
        })
    })
    describe('fail method', () => {
        it('decreases durability by 5 when enhancement is less than 15', () => {
            expect(enhancer.fail({enhancement: 9, durability: 85})).toEqual({enhancement: 9, durability: 80})
        })
        it('decreases durability by 10 when enhancement is at least 15', () => {
            expect(enhancer.fail({enhancement: 15, durability: 40})).toEqual({enhancement: 15, durability: 30})
        })
        it('decreases enhancement level by 1 if over 16', () => {
            expect(enhancer.fail({enhancement: 18, durability: 60})).toEqual({enhancement: 17, durability: 50})
        })
    })
    describe('get method', () => {
        it('does not modify name', () => {
            expect(enhancer.get({name: 'Joe'})).toEqual({name: 'Joe'})
        })
    })
})