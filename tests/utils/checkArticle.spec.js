import checkArticle from '../../src/util/helpers/checkArticle.js';

describe('test check article', () => {
  it('should return title must not be empty', () => {
    expect(checkArticle(0,0,0)).toEqual("title must not be empty");
  });

  it('should return description must not be empty', () => {
    expect(checkArticle(1,0,0)).toEqual("description must not be empty");
  });
  it('should return body must be at least 50 words long', () => {
    expect(checkArticle(1,1,10)).toEqual("body must be at least 50 words long");
  });

  it('should return null', () => {
    expect(checkArticle(1,1,100)).toEqual(null);
  });
})
