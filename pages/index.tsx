import Box from "./../components/Box";
import Layout from "./../components/layout";

export default function Home({ data }) {
  console.log(data);
  return (
    <div>
      {data?.map((el) => (
        <Box title={el.title.rendered} description={el.content.rendered} />
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    "https://onarrador.com/wp-json/wp/v2/home-service-item",
  );
  const data = await res.json();

  return {
    props: {
      data,
    },
    revalidate: 10,
  };
}
