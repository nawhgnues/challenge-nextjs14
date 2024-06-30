import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Next Metadata Test",
    default: "Billionaire",
  },
  description: "Billionaire",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
