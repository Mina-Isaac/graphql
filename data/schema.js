import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList
} from "graphql";

const linkType = new GraphQLObjectType({
  name: "Link",
  fields: () => ({
    _id: { type: GraphQLString },
    title: { type: GraphQLString },
    url: { type: GraphQLString }
  })
});

const Schema = (db)=>{
  const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
      name: "Query",
      fields: () => ({
        links: {
          type: GraphQLList(linkType),
          resolve: () => db.collection("links").find({}).toArray()
        }
      })
    }),
  });
  return schema
}


export default Schema;
