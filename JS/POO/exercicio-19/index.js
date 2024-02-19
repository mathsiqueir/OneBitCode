const Author = require("./Author");
const Comment = require("./Comment");
const Post = require("./Post");

const siqueira = new Author('Siqueira')
const post = siqueira.writePost('padroes','lorem')

post.addComment('Siqueira','lorem ipsu')

console.log(siqueira)
console.log(post)

/* <ref *1> Author {
  name: 'Siqueira',
  posts: [
    Post {
      title: 'padroes',
      body: 'lorem',
      author: [Circular *1],
      comments: [Array],
      createdAt: 2024-02-19T00:04:55.984Z
    }
  ]
}
<ref *1> Post {
  title: 'padroes',
  body: 'lorem',
  author: Author { name: 'Siqueira', posts: [ [Circular *1] ] },     
  comments: [
    Comment {
      '0': 'l',
      '1': 'o',
      '2': 'r',
      '3': 'e',
      '4': 'm',
      '5': ' ',
      '6': 'i',
      '7': 'p',
      '8': 's',
      '9': 'u',
      createdAT: 2024-02-19T00:04:55.984Z
    }
  ],
  createdAt: 2024-02-19T00:04:55.984Z
} */