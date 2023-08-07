async function getData() {
  const res = await fetch("https://dog.ceo/api/breeds/image/random");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
}

export default function Home() {
  return <>hehe</>;
}
