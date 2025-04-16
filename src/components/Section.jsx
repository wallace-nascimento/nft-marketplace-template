
const Section = ({ children, variant = "secondary" }) =>{

    return(
        <section className={`w-[65.625rem] mr-auto ml-auto pt-16 pb-16 text-Text ${
            variant === 'secondary'
            ? 'pt-16'
            : 'pt-[0px]'
        }`}>
            {children}
        </section>
    )
}

export default Section;