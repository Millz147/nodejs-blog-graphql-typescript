import posts from './dataset';
const Resolvers = {
  Query: {
    getAllPosts: () => posts,
    getPost: (_: any, args: { id: number }) => {
      return posts.find((post) => post.id === args.id);
    },
  },
  Mutation: {
    addPost: (
      _: any,
      args: { author: string; title: string; content: string }
    ) => {
      const newPost = {
        id: posts.length + 1,
        ...args,
      };
      posts.push(newPost);
      return newPost;
    },
  },
};
export default Resolvers;
