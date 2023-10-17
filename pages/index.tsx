import Box from "./../components/Box";
import Layout from "./../components/Layout";

// Define interface for HomeItem
interface HomeItem {
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
}

// Define interface for HomeProps
interface HomeProps {
  data: HomeItem[]; // Use the HomeItem interface here
}

export default function Home({ data }: HomeProps) {
  return (
    <>
      <Layout>
        <div>
          {data?.map((el, ind) => (
            <Box
              key={ind}
              title={el.title.rendered}
              description={el.content.rendered}
            />
          ))}
        </div>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  try {
    const res = await fetch(
      "https://onarrador.com/wp-json/wp/v2/home-service-item",
    );

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const data: HomeItem[] = await res.json();
    console.log(data);

    return {
      props: {
        data,
      },
      revalidate: 10,
    };
  } catch (error) {
    console.error("Error fetching data:", error);

    return {
      props: {
        data: [],
      },
      revalidate: 10,
    };
  }
}
