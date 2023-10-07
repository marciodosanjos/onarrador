import Box from "./../components/Box";
import Layout from "./../components/layout";

interface Item {
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
}

interface HomeProps {
  data: Item[];
}

export default function Home({ data }: HomeProps) {
  return (
    <div>
      {data?.map((el, ind) => (
        <Box
          key={ind}
          title={el.title.rendered}
          description={el.content.rendered}
        />
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
