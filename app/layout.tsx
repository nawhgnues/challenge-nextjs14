import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Next Metadata Test",
    default: "Home",
  },
  description: "Banana, Apple, Mango",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <h1>lalalala</h1>
        {children}
      </body>
    </html>
  );
}
