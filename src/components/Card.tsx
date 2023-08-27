import { styles } from "styles"

type Props = {
  title: string
  description: string
  imagePath: string
  link: string
}

export default function Card({ title, description, imagePath, link }: Props) {
  return (
    <div
      className={`${styles.hoverAnimation} min-w-[350px] w-[400px] flex flex-col rounded-xl overflow-hidden`}
    >
      <div className="w-full h-[300px] flex flex-row justify-center items-center bg-magic bg-center bg-cover bg-no-repeat">
        <img src={imagePath} alt="" className="max-h-[90%]" />
      </div>
      <div className="grow flex flex-col gap-2 p-8 bg-dark dark:bg-light">
        <h1 className="text-light dark:text-dark font-bold text-xl">{title}</h1>
        <p className="text-light dark:text-dark grow">{description}</p>
        <a href={link} className="text-light dark:text-dark underline ">
          Link
        </a>
      </div>
    </div>
  )
}
