// We can use metadata just only in page.tsx, layout.tsx
// Available on server components only

export const metadata = {
  title: "About us",
  description: "Chicken, Pizza, Hamburger",
};

export default function AboutUs() {
  return <h1>About us</h1>;
}
