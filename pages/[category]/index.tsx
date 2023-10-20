import Layout from "./../../components/Layout";
import { useRouter } from "next/router";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { Link, Box } from "@mui/material";

const client = new ApolloClient({
  uri: "https://onarrador.com/graphql",
  cache: new InMemoryCache(),
});

interface Article {
  title: string;
  categories: Array<{}>[];
}

interface CategoryPageProps {
  articleData: Article[];
}

export default function CategoryPage({ articleData }: CategoryPageProps) {
  const route = useRouter();
  const category = route.query.category;
  const slug = route.query.slug;

  const articles = articleData.filter(
    (article: Article, index) => article.categories.nodes[0].name === category,
  );

  return (
    <div>
      {articles.map((article, index) => (
        <Link href={`/${article.categories.nodes[0]?.slug}/${article.slug}`}>
          {article.title}
        </Link>
      ))}
    </div>
  );
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
