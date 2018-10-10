import image1 from 'Images/john.jpg';
import image2 from 'Images/jehonadab.jpg';
import image3 from 'Images/orji.jpg';
import image4 from 'Images/daniel.jpg';

const initialState = {
  popularAuthors: [
    {
      name: 'john obi',
      likes: '3400',
      image: image1,
    },
    {
      name: 'jehonadab okpukoro',
      likes: '3400',
      image: image2,
    },
    {
      name: 'Ikechukwu Orji',
      likes: '3400',
      image: image3,
    },
    {
      name: 'Daniel Adekunle',
      likes: '3400',
      image: image4,
    }
  ]
};

const popularAuthors = (state = initialState, action) => {
  return state;
};

export default popularAuthors;
