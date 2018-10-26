const mockData = {
  data: {
    data: {
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
        },
      ],
      category: {
        buttonIsVisible: false,
        className: 'article-hero',
        description: 'A community where readers and writers come together to share and discuss knowledge and ideas.',
        name: "AUTHOR'S HAVEN",
        poster: 'banner'
      },
      noHeroContent: {
        buttonIsVisible: false,
        className: 'article-hero',
      }
    },
  },
  error: {
    data: 'Category does not have articles'
  }
};

export default mockData;
