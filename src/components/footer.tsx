import '../styles/footer.css';
function Footer() {
    return (
        <footer className="footer">
        <div>
            Copyright © {new Date().getFullYear()}
        </div>
        </footer>
    );
}

export default Footer;