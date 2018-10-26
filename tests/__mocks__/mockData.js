import banner from 'Images/hero.jpg';

const initialState = {
  heroContent: {
    poster: banner,
    name: "AUTHOR'S HAVEN",
    description:
			'A community where readers and writers come together to share and discuss knowledge and ideas.',
    buttonIsVisible: true,
    className: 'hero'
  },
  loading: false,
  articles: [],
  error: ''
};

export default initialState;
