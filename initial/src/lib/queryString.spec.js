const {queryString} = require('./queryString')

describe('Object to query string', () => {
  it('should create a valid query string when an object', () => {
    const obj = {
      name: 'Kaio',
      profession: 'Developer'
    }

    expect(queryString(obj)).toBe(
      'name=Kaio&profession=Developer'
    )
  });
})
