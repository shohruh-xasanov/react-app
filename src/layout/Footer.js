function Footer() {
    return ( 
        <div className="row">
            <footer class="page-footer blue-grey darken-3">
          <div class="footer-copyright">
            <div className="container">
            © {new Date().getFullYear()} Copyright Text
            <a class="grey-text text-lighten-4 right" href="#!">More Links</a>
            </div>
          </div>
        </footer>
        </div>
     );
}

export default Footer;