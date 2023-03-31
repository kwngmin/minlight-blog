export default function Home() {
  return (
    <section className="">
      <h1>{`Hello, I'm MinLight`}</h1>
      <h2>Front end Developer & Designer</h2>
      <p>{`I'm always thinking about designing a better user experience.`}</p>
      <Link href="/contact">
        <button>Contact Me</button>
      </Link>
    </section>
  );
}
