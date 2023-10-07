import Box from "./../components/Box";
import Layout from "./../components/layout";

// interface com apenas as propriedades que a usar
interface HomeItem {
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
}

interface HomeProps {
  data: HomeItem[]; // Use a nova interface aqui
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

export async function getStaticProps(): Promise<{ props: HomeProps }> {
  const res = await fetch(
    "https://onarrador.com/wp-json/wp/v2/home-service-item",
  );
  const data: HomeItem[] = await res.json();

  return {
    props: {
      data,
    },
    revalidate: 10,
  };
}
