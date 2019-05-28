const grabData = require('../controllers/sr_apiCalls');

test('the data is', () => {
    return grabData().then(data => {
        expect(data).toBe('stage');
    });
});