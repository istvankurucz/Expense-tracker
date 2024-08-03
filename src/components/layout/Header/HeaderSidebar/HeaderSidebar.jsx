import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "../../../../contexts/Context API/StateProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faAngleDoubleLeft,
	faAngleDown,
	faHouse,
	faUser,
	faUsers,
} from "@fortawesome/free-solid-svg-icons";
import Brand from "../../../ui/Brand/Brand";
import Button from "../../../ui/Button/Button";
import signOutUser from "../../../../utils/user/signOutUser";
import "./HeaderSidebar.css";

function HeaderSidebar({ show, setShow }) {
	// States
	const [{ user }] = useStateValue();
	const [showSubmenu, setShowSubmenu] = useState(false);

	return (
		<div className={`headerSidebar${show ? " headerSidebar--show" : ""}`}>
			<div className="headerSidebar__brand">
				<Brand />

				<Button
					variant="secondary"
					outlined
					icon
					className="headerSidebar__hide"
					onClick={() => setShow(false)}>
					<FontAwesomeIcon icon={faAngleDoubleLeft} />
				</Button>
			</div>

			{user == null ? (
				<Link to="/signin" className="headerSidebar__button">
					<Button outlined centered tabIndex={-1}>
						Bejelentkezés
					</Button>
				</Link>
			) : (
				<Link to="/" className="headerSidebar__button">
					<Button outlined centered tabIndex={-1}>
						Új esemény
					</Button>
				</Link>
			)}

			<nav className="headerSidebar__nav">
				<ul className="headerSidebar__menu">
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
					<li>
						<Link to="/" title="Profil" onClick={() => setShowSubmenu((show) => !show)}>
							<FontAwesomeIcon icon={faUser} />
							Profil
							<FontAwesomeIcon icon={faAngleDown} />
						</Link>

						{showSubmenu && (
							<ul className="headerSidebar__submenu">
								<li>
									<Link to="/">Adataim</Link>
								</li>
								<li>
									{user != null ? (
										<Link to="" className="header__menu__a--danger" onClick={signOutUser}>
											Kijelentkezés
										</Link>
									) : (
										<Link to="/signin" className="header__menu__a--accent">
											Bejelentkezés
										</Link>
									)}
								</li>
							</ul>
						)}
					</li>
				</ul>
			</nav>
		</div>
	);
}

HeaderSidebar.propTypes = {
	show: PropTypes.bool.isRequired,
	setShow: PropTypes.func.isRequired,
};

export default HeaderSidebar;
