import { styles } from "styles"
import { Arrows, Circle, Me } from "../assets"
import Section from "@layout/Section"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <>
      <Section id="hero">
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.4 }}
          transition={{
            delay: 0.2,
            duration: 10,
          }}
          src={Arrows}
          alt=""
          className="absolute top-[50px] right-0 w-[800px] filter brightness-60 hidden xl:block"
        />
        <div className="min-h-screen max-w-7xl mx-auto relative flex justify-center items-center m-5 pt-[80px]">
          <div className="flex flex-col xl:flex-row items-center gap-10">
            <motion.div
              className="relative"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5 }}
            >
              <img src={Circle} alt="" className={styles.heroCircle} />
              <img
                src={Me}
                alt="Me"
                className={`${styles.heroImg} absolute animate-glowDark dark:animate-glowLight rounded-[50%] z-10`}
              />
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 4 }}
            >
              <p className="max-w-5xl text-2xl italic px-5 m-5 z-5 text-dark dark:text-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet mollis
                neque. Morbi pulvinar pharetra diam, quis posuere mi lobortis ut. Sed elementum eget
                est vitae finibus. Nullam sem mi, sodales sit amet elit sed, consequat venenatis
                ante. Sed varius aliquam leo, et blandit magna ultricies sit amet. Etiam tincidunt
                tincidunt libero. Fusce sodales aliquam turpis. Nunc tempus dui tellus, eu feugiat
                urna cursus eget.
              </p>
            </motion.div>
          </div>
        </div>
      </Section>
    </>
  )
}
