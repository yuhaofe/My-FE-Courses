function getCourses() {
  return Promise.resolve([{
    title: 'JavaScript: The Hard Parts, v2',
    author: 'Will Sentance',
    description: 'Go under the hood of some of the most important aspects of JavaScript! You\'ll learn what you need to know to become a sought-after, versatile, problem-solving developer. ',
    pricing: {
      type: 'member',
      cost: '39',
      unit: '$'
    }, 
    platform: 'Frontend Masters',
    cover: 'https://static.frontendmasters.com/assets/courses/2020-01-07-javascript-hard-parts-v2/thumb.webp',
    upvotes: 10,
    comments: 10,
    tags: ['JavaScript', '闭包', '异步', '原型', 'CSS']
  }])
}

export default {
  getCourses
}