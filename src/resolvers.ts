import posts from './dataset';
const Resolvers = {
  Query: {
    getAllPosts: () => posts,
    getPost: (_: any, args: { id: number }) => {
      return posts.find((post) => post.id === args.id);
    },
  },
};
export default Resolvers;
