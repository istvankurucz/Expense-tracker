import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faBars, faHouse, faUser, faUsers } from "@fortawesome/free-solid-svg-icons";
import Container from "../Container/Container";
import "./Header.css";
import Brand from "../../ui/Brand/Brand";
import Button from "../../ui/Button/Button";
import { useStateValue } from "../../../contexts/Context API/StateProvider";
import HeaderSidebar from "./HeaderSidebar/HeaderSidebar";
import { useState } from "react";
import signOutUser from "../../../utils/user/signOutUser";

function Header() {
	// States
	const [{ user }] = useStateValue();
	const [showSidebar, setShowSidebar] = useState(false);

	return (
		<header className="header">
			<Header.Sidebar show={showSidebar} setShow={setShowSidebar} />

			<Container className="header__container">
				<Brand />

				<div className="header__right">
					{user == null && (
						<Link to="/signin" className="header__signin">
							<Button outlined tabIndex={-1}>
								Bejelentkezés
							</Button>
						</Link>
					)}

					<nav className="header__nav">
						<ul className="header__menu">
							<li>
								<Link to="/" title="Főoldal">
									<FontAwesomeIcon icon={faHouse} />
									Főoldal
								</Link>
							</li>
							<li>
								<Link to="/" title="Csoportok">
									<FontAwesomeIcon icon={faUsers} />
									Csoportok
								</Link>
							</li>
							<li className="header__menu__item--submenu">
								<Link to="/" title="Profil">
									<FontAwesomeIcon icon={faUser} />
									Profil
									<FontAwesomeIcon icon={faAngleDown} />
								</Link>

								<ul className="header__submenu">
									<li>
										<Link to="/">Adataim</Link>
									</li>
									<hr className="header__submenu__divider" />
									<li>
										{user != null ? (
											<Link
												to=""
												className="header__menu__a--danger"
												onClick={signOutUser}>
												Kijelentkezés
											</Link>
										) : (
											<Link to="/signin" className="header__menu__a--accent">
												Bejelentkezés
											</Link>
										)}
									</li>
								</ul>
							</li>
						</ul>
					</nav>

					<Button
						variant="secondary"
						outlined
						icon
						className="header__hamburger"
						onClick={() => setShowSidebar((show) => !show)}>
						<FontAwesomeIcon icon={faBars} />
					</Button>
				</div>
			</Container>
		</header>
	);
}

Header.Sidebar = HeaderSidebar;

export default Header;
