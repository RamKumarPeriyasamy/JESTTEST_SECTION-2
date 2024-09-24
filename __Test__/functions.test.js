// functions.test.js
const functions = require('../functions');

// beforeEach(() => initDatabase());
// afterEach(() => closeDatabase());
// beforeAll(() => initDatabase());
// afterAll(() => closeDatabase());

// const initDatabase = () => console.log('Database intiallized......');
// const closeDatabase = () => console.log('Database closed......');
const nameCheck = () => console.log('Checking Name .....')
describe('checking Names', () => {
    beforeEach(() => nameCheck());


    test('user is Jeff', () => {
        const user = 'Jeff';
        expect(user).toBe('Jeff')
    });

    test('user is karen', () => {
        const user = 'karen';
        expect(user).toBe('karen')
    });
});

test('Adds 2 + 2 + 1 to equal 5', () => {
    expect(functions.add(2, 2, 1)).toBe(5);     
});
test('Adds 2 + 2 + 1 to equal 6', () => {
    expect(functions.add(2, 2, 1)).not.toBe(6);     
});
test('should be null', () => {
    expect(functions.isNull()).toBeNull();
});

test('should be falsy', () => {
    expect(functions.checkvalue(undefined)).toBeFalsy();     
});

test('User should be Brad Traversy object', () => {
    expect(functions.createUser()).toEqual({
        firstName: 'Brad',
        lastName: 'Traversy'
    });
});

//Less than and Greater than
test('should be under 1600',() => {
    const load1 = 800;
    const load2 = 700;
    expect(load1 + load2).toBeLessThan(1600);

});

//regex
test('REGEX there is no I in team', () => {
     expect('team').not.toMatch(/I/);
    
})

//Array
test('Admin should be in usernames', () => {
    usernames = ['john', 'katerin', 'linda'];
    expect(usernames).toContain('linda');

});

//working with Async data
// test('user fetched name should be Leanne Graham', () => {
//     //expect.assertions(1);
//     return functions.fetchUser().then(data => {
//         expect(data.name).toEqual('Leanne Graham');
//     });
// });

test('user fetched name should be Leanne Graham', () => {
    //expect.assertions(1);
    return functions.fetchUser().then(data => {
        expect(data.name).toEqual('Leanne Graham');
    });
});

