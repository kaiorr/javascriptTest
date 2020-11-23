const {queryString} = require('./queryString')

describe('Object to query string', () => {
  it('should create a valid query string when an object', () => {
    const obj = {
      name: 'Kaio',
      profession: 'Developer'
    }

    expect(queryString(obj)).toBe('name=Kaio&profession=Developer')});

  it('should create a valid query string even when an array', () => {
    const obj = {
      name: 'Kaio',
      abilities: ['JS', 'TDD']
    }

    expect(queryString(obj)).toBe('name=Kaio&abilities=JS,TDD')
  })

  it('should create a valid query string even when an array', () => {
    const obj = {
      name: 'Kaio',
      abilities: {
        first: 'JS',
        second: 'TDD'
      },
    }

    expect(() => {
      queryString(obj)
    }).toThrowError();
  })

})
