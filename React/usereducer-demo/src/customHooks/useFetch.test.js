
beforeEach

test('test1',()=>{
    const mockResponse = [];
    jest.spyOn(global, 'fetch').mockResolvedValue({
        json:jest.fn().mockResolvedValue(mockResponse)
    })
})