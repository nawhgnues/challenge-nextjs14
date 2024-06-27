import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Next Metadata Test",
    default: "Movie",
  },
  description: "123123",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
