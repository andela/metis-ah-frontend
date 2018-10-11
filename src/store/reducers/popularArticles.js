import aImg1 from 'Images/john.jpg';
import image1 from 'Images/learning.png';
import image2 from 'Images/phone.jpg';
import image3 from 'Images/brain.jpg';

const initialState = {
  popularArticles: [
    {
      title: 'Learning to Learn',
      description: 'Have you ever wondered how people seem to learn it all so fast? Well you can do it too.',
      date: 'Aug 30',
      likes: 2300,
      banner: image1,
      author: 'John Obi',
      authorImg: aImg1,
    },
    {
      title: 'Phone Addiction',
      description: 'Your phone is training you to be it\'s servant. Here is how to fight back',
      date: 'Aug 30',
      likes: 2300,
      banner: image2,
      author: 'John Obi',
      authorImg: aImg1,
    },
    {
      title: 'The Human Brain',
      description: 'It\'s not all about muscle but neurons',
      date: 'Aug 30',
      likes: 2300,
      banner: image3,
      author: 'John Obi',
      authorImg: aImg1,
    }
  ]
};

const popularArticles = (state = initialState, action) => {
  return state;
};

export default popularArticles;
