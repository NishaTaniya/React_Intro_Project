export default function Section({title, children, ...restProp}) {
    return (
        <section {...restProp}>
            <h2>{title}</h2>
            {children}
        </section>
    );
}