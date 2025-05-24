import React from 'react'

type Props = {
    className?:string
    children:React.ReactNode;
}

function SectionWrapper({className,children}: Props) {
  return (
    <section className={`w-full max-w-7xl mx-auto ${className ?? ""}`}>
        {children}
    </section>
  )
}

export default SectionWrapper