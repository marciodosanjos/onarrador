import FeaturedPost from "./../components/FeaturedPost";
import Layout from "./../components/Layout";
import { useRouter } from "next/router";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://onarrador.com/graphql",
  cache: new InMemoryCache(),
});

interface FeaturedImageNode {
  altText: string;
  description: string;
  mediaItemUrl: string;
}

interface FeaturedCategoriesNode {
  name: string;
  slug: string;
}

// Define interface for Article
interface Article {
  title: string;
  excerpt: string;
  categories: {
    nodes: FeaturedCategoriesNode[];
  };
  slug: string;
  featuredImage: {
    node: FeaturedImageNode;
  };
  isSticky: any;
}

// Define interface for Article
interface HomeProps {
  articleData: Article[];
}

export default function Home({ articleData }: HomeProps) {
  const router = useRouter();
  const { category, slug } = router.query;

  {
    articleData.map(
      (item, index) => item.isSticky === true && console.log(item),
    );
  }

  return (
    <>
      <Layout>
        {articleData.map((item, index) =>
          item?.isSticky === true ? (
            <FeaturedPost
              altText={item.title}
              srcImg={item.featuredImage.node.mediaItemUrl}
              excerpt={item.excerpt}
              slug={item.slug}
              category={item.categories.nodes[0]?.name}
              key={index}
              title={item.title}
              copyrightPhoto={item.featuredImage.node.altText}
            />
          ) : null,
        )}
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  const { data } = await client.query({
    query: gql`
      query Posts {
        posts {
          nodes {
            excerpt
            isSticky
            date
            categories {
              nodes {
                name
                slug
                description
              }
            }
            id
            link
            postId
            slug
            title
            content
            tags {
              edges {
                node {
                  name
                }
              }
            }
            featuredImage {
              node {
                altText
                description
                mediaItemUrl
              }
            }
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
