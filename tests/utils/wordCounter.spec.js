import wordCounter from '../../src/util/WordCounter';

describe('test word counter ', () => {
  it('should return 6', () => {
    expect(wordCounter('i am a six word sentence')).toEqual(6);
  });

  it('should return 0', () => {
    expect(wordCounter('')).toEqual(0);
  });

})
