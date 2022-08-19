import calculate from '../components/logic/calculate';

describe('Test for `calculate`', () => {
  it('should display the correct value', () => {
    const testValue = {
      total: 0,
      next: null,
      operation: null,
    }
    const result = calculate(testValue, '7');
    expect(result.next).toEqual('7');
  })

  it('operations', () => {
    const testValue = {
      total: 0,
      next: 5,
      operation: 'sum',
    }
    const result = calculate(testValue, 'x');
    expect(result.operation).toEqual('x');
  })
})