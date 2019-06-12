const mockAxios = require('axios');

test('Fetches data from sports radar api', () => {
    mockAxios.get.mockImplementationOnce(() => {
        Promise.resolve(searchResponse.raw);
    })
});