import { PropsWithChildren } from "react"

type Props = {
  id: string
}

export default function Section({ children, id }: PropsWithChildren<Props>) {
  return (
    <section
      className="relative w-full z-0 bg-light dark:bg-dark flex flex-col items-center"
      id={id}
    >
      {children}
    </section>
  )
}
