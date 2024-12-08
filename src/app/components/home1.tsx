import Image from "next/image";

const Home1 = () => {
  return (
      <section className="hero">
        <h1 className="title">
          Rocket single <br />
          seater <br/>
        <button className="button">Shop Now</button>
        </h1>
        <Image
          className="seater1"
          src="/image/Rocket single seater 1.png"
          alt="Seater"
          width={853}
          height={1}
        />
      </section>
  );
};

export default Home1;
