const initialState = {
  article: {
    articles: [
      {
        slug: 'asasa',
        imageUrl: 'rectangle1',
        title: "The Internet's problems Can't Be solved with an Algorithm",
        description: "We can't Keep blaming behavior on the robots",
        createdAt: '23-09-2018',
        User: {
          firstname: 'Tomi',
          lastname: 'Adebanjo'
        }
      },
      {
        slug: 'asasaa',
        imageUrl: 'rectangle2',
        title: "The Internet's problems Can't Be solved with an Algorithm",
        description: "We can't Keep blaming behavior on the robots",
        createdAt: '23-09-2018',
        User: {
          firstname: 'Tomi',
          lastname: 'Adebanjo'
        }
      }
    ],
    loading: false,
    categories: [
      {
        description: 'It has become appallingly obvious that our technology has exceeded our humanity.',
        id: 1,
        name: 'FASHION',
        poster: 'https://res.cloudinary.com/dbsxxymfz/image/upload/v1539947552/eroooo_1.png'
      }
    ]
  },
  categories: {
    categories: [
      {
        description: 'It has become appallingly obvious that our technology has exceeded our humanity.',
        id: 1,
        name: 'FASHION',
        poster: 'https://res.cloudinary.com/dbsxxymfz/image/upload/v1539947552/eroooo_1.png'
      }
    ]
  },
  metadata: {
    totalArticles: 11,
    currentPage: 2,
    limit: 10,
    totalPages: 2
  }
};

export default initialState;
