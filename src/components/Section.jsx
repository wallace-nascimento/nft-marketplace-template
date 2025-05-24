
const Section = ({ children, variant = "secondary" }) =>{

    return(
        <section className={`max-w-[64rem] w-full bg-background mr-auto ml-auto text-Text ${
            variant === 'secondary'
            ? 'pt-16'
            : 'pt-[0px]'
        }`}>
            {children}
        </section>
    )
}

export default Section;