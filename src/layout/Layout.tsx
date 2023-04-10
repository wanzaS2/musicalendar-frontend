import { Link } from "react-router-dom";
import "../App.css";
import SignIn from "../components/SignIn";
import { NavLink } from "react-router-dom";
function Navbar(){
	return(
		<div className="Navbar">
			<div className="black-nav">
			
            <h1 className="title"> 뮤캘</h1>
			
              {/* <a className="flex items-center" href="/">
                <img
                  src="/img/dco_default2.png"
                  alt="logo"
                  style={{ width: "184px" }}
                />
              </a> */}

				<h4 className="item">메뉴1</h4>
				<Link to={"/signIn"}>
					<h4 className="login">로그인/회원가입</h4>
				</Link>
			</div>
		</div>
	);
}
export default Navbar;