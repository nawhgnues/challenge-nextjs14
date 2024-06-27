import { Metadata } from "next";
import { API_URL } from "../../../(home)/page";
import MovieInfo from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";
import { Suspense } from "react";

export const medadata: Metadata = {
  title: "Movie",
  description: "123123",
};

export default async function Movie({ params: { id } }: { params: { id: string } }) {
  return (
    <div>
      <Suspense fallback={<h1>Loading Movie Info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading Movie Videos</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
