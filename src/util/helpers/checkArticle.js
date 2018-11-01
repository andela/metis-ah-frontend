const checkArticle = (title, description, body) => {
  if (title <= 0){
    return 'title must not be empty';
  }
  else if (description <= 0) {
    return 'description must not be empty';
  } else if (body <= 50 ){
    return 'body must be at least 50 words long';
  } else {
    return null;
  }
};

export default checkArticle;
