import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faAngleDown,
	faBars,
	faHouse,
	faPlus,
	faUser,
	faUsers,
} from "@fortawesome/free-solid-svg-icons";
import Container from "../Container/Container";
import Brand from "../../ui/Brand/Brand";
import Button from "../../ui/Button/Button";
import HeaderSidebar from "./HeaderSidebar/HeaderSidebar";
import HeaderActionButton from "./HeaderActionButton/HeaderActionButton";
import HeaderAuthButton from "./HeaderAuthButton/HeaderAuthButton";
import "./Header.css";
import IconLink from "../../ui/IconLink/IconLink";

function Header() {
	// States
	const [showSidebar, setShowSidebar] = useState(false);

	return (
		<header className="header">
			<Header.Sidebar show={showSidebar} setShow={setShowSidebar} />

			<Container className="header__container">
				<Brand />

				<div className="header__right">
					<Header.ActionButton />

					<nav className="header__nav">
						<ul className="header__menu">
							<li>
								<Link to="/" title="Főoldal">
									<FontAwesomeIcon icon={faHouse} />
									Főoldal
								</Link>
							</li>
							<li className="header__menu__item--submenu">
								<Link to="/" title="Csoportok">
									<FontAwesomeIcon icon={faUsers} />
									Csoportok
									<FontAwesomeIcon icon={faAngleDown} />
								</Link>

								<ul className="header__submenu">
									<li>
										<Link to="/">Csoport 1</Link>
									</li>
									<li>
										<Link to="/">Csoport 2</Link>
									</li>
									<li>
										<Link to="/">Csoport 3</Link>
									</li>
									<hr className="header__submenu__divider" />
									<li className="header__menu__item--accent">
										<IconLink to="/new-group">
											<FontAwesomeIcon icon={faPlus} /> Új csoport
										</IconLink>
									</li>
								</ul>
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
										<Header.AuthButton />
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
						onClick={() => setShowSidebar((show) => !show)}
					>
						<FontAwesomeIcon icon={faBars} />
					</Button>
				</div>
			</Container>
		</header>
	);
}

Header.ActionButton = HeaderActionButton;
Header.AuthButton = HeaderAuthButton;
Header.Sidebar = HeaderSidebar;

export default Header;
