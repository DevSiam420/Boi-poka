import React from "react";
import Banner from "../../Componants/Banner/Banner";
import Books from "../Books/Books";
import { useLoaderData } from "react-router";

const Home = () => {
  // useLoaderData ---
  const data = useLoaderData();
  console.log(data);

  return (
    <>
      <Banner></Banner>
      <Books data={data}></Books>
    </>
  );
};

export default Home;
