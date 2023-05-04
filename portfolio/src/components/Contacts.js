export function Contacts() {
    return (
        <section className="contacts left">
            <h2 className="section_title">Contact</h2>
            <label htmlFor="address" className="label">Address</label>
            <address id="address" className="contact_link black_link">Vinnytsia, Ukraine</address>
            <label htmlFor="phone" className="label">Phone</label>
            <a href="tel:+380677701705" id="phone" className="contact_link black_link">+38 067 770 17 05</a>
            <label htmlFor="email" className="label">E-mail</label>
            <a href="mailto:alyonalazarenko27@gmail.com" id="email" className="contact_link">alyonalazarenko27@gmail.com</a>
            <label htmlFor="linkedin" className="label">LinkedIn</label>
            <a href="https://www.linkedin.com/in/olena-lazarenko-8a6b73153/" rel="noreferrer noopener" className="contact_link" id="linkedin">Let's meet in LinkedIn</a>
        </section>
    )
}