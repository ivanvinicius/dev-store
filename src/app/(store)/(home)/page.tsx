export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 2000))

  return <main className="flex items-center">home</main>
}
