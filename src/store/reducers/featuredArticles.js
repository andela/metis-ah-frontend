import image1 from 'Images/environment.jpg';
import image2 from 'Images/making-money.jpg';
import image3 from 'Images/tech.jpg';
import image4 from 'Images/pollution.jpeg';
import image5 from 'Images/family.jpg';

const initialState = {
  featuredArticles: [
    {
      title: 'The Nature of Nature',
      date: 'Aug 30',
      img: image1,
    },
    {
      title: 'The Art of Making Money',
      date: 'Aug 30',
      img: image2,
    },
    {
      title: 'Our Future on Earth',
      date: 'Aug 30',
      img: image3,
    },
    {
      title: 'The Dangers of Pollution',
      date: 'Aug 30',
      img: image4,
    },
    {
      title: 'The family',
      date: 'Aug 30',
      img: image5,
    }
  ]
};

const featArticlesReducer = (state = initialState, action) => {
  return state;
};

export default featArticlesReducer;
