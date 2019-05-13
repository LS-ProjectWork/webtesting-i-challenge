const enhancer = require('./enhancer.js');
// test away!
describe('enhancer.js', () => {
    describe('succeed method', () => {
        it('should increase an enhancement by 1 if the enhancement level is less than 20', () => {
            expect(enhancer.succeed({enhancement: 18})).toEqual({enhancement: 19})
        })
    })
})