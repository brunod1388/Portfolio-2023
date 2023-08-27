import { styles } from "styles"
import { Arrows, Circle, Me } from "../assets"
import Section from "@layout/Section"

export default function Hero() {
  return (
    <>
      <Section id="hero">
        <img
          src={Arrows}
          alt=""
          className="absolute top-[50px] right-0 opacity-40 w-[800px] filter brightness-60 hidden xl:block"
        />
        <div className="h-screen max-w-7xl mx-auto relative flex justify-center items-center m-5 pt-[80px]">
          <div className="flex flex-col xl:flex-row items-center gap-10">
            <div className="relative">
              <img src={Circle} alt="" className={styles.heroCircle} />
              <img
                src={Me}
                alt="Me"
                className={`${styles.heroImg} absolute animate-glowDark dark:animate-glowLight rounded-[50%] z-10`}
              />
            </div>
            <div className="relative">
              <p className="max-w-5xl text-2xl italic px-5 m-5 z-5 text-dark dark:text-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet mollis
                neque. Morbi pulvinar pharetra diam, quis posuere mi lobortis ut. Sed elementum eget
                est vitae finibus. Nullam sem mi, sodales sit amet elit sed, consequat venenatis
                ante. Sed varius aliquam leo, et blandit magna ultricies sit amet. Etiam tincidunt
                tincidunt libero. Fusce sodales aliquam turpis. Nunc tempus dui tellus, eu feugiat
                urna cursus eget.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
