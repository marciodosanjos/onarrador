import { Box } from "@mui/material";
import { useRouter } from "next/router";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://onarrador.com/graphql",
  cache: new InMemoryCache(),
});

export default function ArticlePage({ articleData }) {
  const { slug } = useRouter().query;

  console.log(articleData);

  const article = articleData.find((article) => article.slug === slug);

  if (!article) {
    return <div>Artigo nao encontrado</div>;
  }

  return <Box>{article.title}</Box>;
}

export const getStaticProps = async () => {
  const { data } = await client.query({
    query: gql`
      query Posts {
        posts {
          nodes {
            content
            date
            categories {
              nodes {
                name
                slug
              }
            }
            id
            link
            postId
            slug
            title
          }
        }
      }
    `,
  });

  return {
    props: {
      articleData: data.posts.nodes,
    },
  };
};

export const getStaticPaths = async () => {
  const { data } = await client.query({
    query: gql`
      query Posts {
        posts {
          nodes {
            content
            date
            categories {
              nodes {
                name
                slug
              }
            }
            id
            link
            postId
            slug
            title
          }
        }
      }
    `,
  });

  // Extraia os caminhos da resposta da consulta
  const paths = data.posts.nodes.map((post) => ({
    params: {
      category: post.categories.nodes[0].slug,
      slug: post.slug,
    },
  }));

  return { paths, fallback: false };
};
