"use client"; // This is a client component 👈🏽

import Box from "./../components/Box";
import React, { useState, useEffect } from "react";

interface Items {
  title: string;
  description: string;
}

export default function Home() {
  const [data, setData] = useState<Items[]>([]);

  useEffect(() => {
    fetch("https://onarrador.com/wp-json/wp/v2/home-service-item")
      .then((response) => response.json()) // Parse response as JSON
      .then((postData: any) => {
        let objects = postData.map((el: any) => ({
          title: el.title.rendered,
          description: el.content.rendered,
        }));

        setData(objects);
      })
      .catch((error) => {
        console.error("Erro ao buscar dados da landing page:", error);
      });
  }, []);

  return (
    <div>
      {data.map((el, ind) => (
        <Box key={ind} title={el.title} description={el.description} />
      ))}
    </div>
  );
}
