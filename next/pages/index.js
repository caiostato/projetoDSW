import React, { useEffect, useState } from "react";

import api from '../services/api'

import Head from 'next/head'
import Menu from '../components/Menu'
import PlaceList from "../components/PlaceList";

export default function Home() {

  const [places, setPlaces] = useState();

  useEffect(() => {
    api
      .get("/api/pontos")
      .then((response) => setPlaces(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  return (
    <div>
      <Head>
        <title>Home Page</title>
      </Head>
      <Menu/>
      <PlaceList places={places}/>
    </div>
  )
}
