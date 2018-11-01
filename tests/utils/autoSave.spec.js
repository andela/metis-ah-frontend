import AutoSave from '../../src/util/AutoSave';

const parent = jest.fn();
const setState = jest.fn();

describe('test word counter ', () => {
  it('should return test value', () => {
    AutoSave.save('test', 'test');
    expect(localStorage.getItem('test'))
    .toEqual('test');
  });

  it('should return null', () => {
    AutoSave.clear('test');
    expect(localStorage.getItem('test'))
    .toEqual(null);
  });

})
