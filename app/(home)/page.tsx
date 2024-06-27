/**
 * Fetching on client component 
 "use client";
 
 import { useEffect, useState } from "react";
 
 export default function Tomato() {
   const [isLoading, setIsLoading] = useState(true);
   const [movies, setMovies] = useState();
   const getMovies = async () => {
     const response = await fetch("https://nomad-movies.nomadcoders.workers.dev/movies");
     const json = await response.json();
     setMovies(json);
     setIsLoading(false);
   };
 
   useEffect(() => {
     getMovies();
   });
   return <h1>{isLoading ? "Loading..." : JSON.stringify(movies)}</h1>;
 }
 * 
*/

import Link from "next/link";

// +캐싱 기능, +메타 데이터 사용가능, +클라이언트에서 API 요청 없음,
export const metadata = {
  title: "home",
};

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies() {
  await new Promise((resolve) => setTimeout(resolve, 10000));
  const response = await fetch(API_URL);
  const json = await response.json();
  return json;
}

export default async function Tomato() {
  const movies = await getMovies();
  return (
    <div>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </div>
  );
}
