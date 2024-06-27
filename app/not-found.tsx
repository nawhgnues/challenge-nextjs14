import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404",
  description: "Kiwi",
};

export default function NotFound() {
  return <h1>404</h1>;
}
