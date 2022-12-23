import "./header.css";
const Header = () => {
    return (
        <>
            <div className="Headerbar-container">
                <div className="header_left">
                    <div>
                        <h1 className="title">CGP</h1>
                        <h3 className="banner_text">
                            Centeralized Grievance Portal
                        </h3>
                    </div>
                    <div>
                        <h4 className="help">

                            We are here to help you!
                        </h4>
                    </div>

                </div>
                <div className="header_right">
                    <img src="./images/headerim.jpg" />
                </div>
            </div>
        </>
    )
}
export default Header;