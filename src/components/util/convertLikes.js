const convertLikes = (likes) => {
  if (likes >= 1000) {
    let num = Math.round((likes / 1000) * 10) / 10;
    num = num.toString();
    num += 'K';

    return num;
  }
  return likes;
};

export default convertLikes;
