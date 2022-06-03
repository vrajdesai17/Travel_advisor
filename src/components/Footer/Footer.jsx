const Footer = () => {
    return ( 
        <>
        <div className="d-flex flex-column footer" style={{"marginTop":"30px" , "backgroundColor":"grey"}} >
            <footer className="text-center text-lg-start bg-light text-muted mt-auto">
            <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                <div className="me-5 d-none d-lg-block">
                <span>Get connected with us on social networks:</span>
                </div>
                <div>
                <a href="/" className="me-4 text-reset">
                    <i className="fab fa-facebook-f"></i>
                </a>
                <a href="/" className="me-4 text-reset">
                    <i className="fab fa-twitter"></i>
                </a>
                <a href="/" className="me-4 text-reset">
                    <i className="fab fa-google"></i>
                </a>
                <a href="/" className="me-4 text-reset">
                    <i className="fab fa-instagram"></i>
                </a>
                <a href="/" className="me-4 text-reset">
                    <i className="fab fa-linkedin"></i>
                </a>
                <a href="/" className="me-4 text-reset">
                    <i className="fab fa-github"></i>
                </a>
                </div>
            </section>
            <section className="">
                <div className="container text-center text-md-start mt-5">
                <div className="row mt-3">
                    <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                    <h6 className="text-uppercase fw-bold mb-4">
                        <i className="fas fa-gem me-3"></i>Travel Buddy
                    </h6>
                    <p>
                        Plan your next trip, read reviews and get travel advice from our community on where to stay and what to do. Find savings on hotels, book the perfect tour or attraction, and reserve a table at the best restaurants.
                    </p>
                    </div>

                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                    <h6 className="text-uppercase fw-bold mb-4">
                        Contact
                    </h6>
                    <p><i className="fas fa-home me-3"></i> Mumbai , India</p>
                    <p>
                        <i className="fas fa-envelope me-3"></i>
                        travelbuddy@gmail.com
                    </p>
                    <p><i className="fas fa-phone me-3"></i>+91 9876543210</p>
                    </div>
                </div>
                </div>
            </section>

            <div className="text-center p-4" style={{"backgroundColor": "rgba(0,0,0,0.2)"}}>
                © 2022 Copyright:
                <a className="text-reset fw-bold" href="/">TravelBuddy.com</a>
            </div>
            </footer>
        </div>
        </>
    );
}

export default Footer;