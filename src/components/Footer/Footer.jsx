import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__section footer__section_contact">
                <h2 className="footer__contact-title">Contact us at:</h2>
                <p className="footer__contact-text footer__contact-text_email">Email: Contact@ABCGram.com</p>
                <p className="footer__contact-text footer__contact-text_number">Number: +1 (800) 3457-2373</p>
            </div>
            
            <div className="footer__section footer__section_copyright">
                <p className="footer__copyright">Copyright ABCGram© 2024.</p>
            </div>
        </footer>
    );
}

export default Footer;