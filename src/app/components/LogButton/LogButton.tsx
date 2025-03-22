import { Power, SquareMenu, UserRound } from "lucide-react";
import { useState } from "react";
import { createPortal } from "react-dom";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import type { ConnectedProps } from "../assets/lib/definition";
import ModalLogin from "../components/modalLogin/ModalLogin";
import styles from "./logButton.module.css";

export default function LogButton({ user, setUser }: ConnectedProps) {
  const [openModalLogin, setOpenModalLogin] = useState(false);

  const handleClickModalLogin = () => {
    setOpenModalLogin(!openModalLogin);
  };
  const navigate = useNavigate();

  const logout = () => {
    fetch(`${import.meta.env.VITE_API_URL}/auth/logout`, {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => toast.success(data.message))
      .then(() => {
        setUser(!user);
        setOpenBurgerMenu(false);
      })
      .then(() => {
        setTimeout(() => navigate("/"), 1500);
      });
  };

  const [openBurgerMenu, setOpenBurgerMenu] = useState(false);
  const handleClickMenu = () => setOpenBurgerMenu(!openBurgerMenu);

  return (
    <>
      {openModalLogin &&
        createPortal(
          <ModalLogin
            closeModal={() => {
              setOpenModalLogin(false);
              setUser(true);
            }}
          />,
          document.body,
        )}
      <section>
        {user ? (
          <button
            className={styles.button_logout}
            type="button"
            onClick={handleClickMenu}
          >
            <SquareMenu size={48} color="#013134" />
          </button>
        ) : (
          <button
            className={styles.button}
            type="button"
            onClick={handleClickModalLogin}
          >
            <UserRound size={38} color="#013134" />
          </button>
        )}
        {openBurgerMenu && (
          <ul className={styles.menu}>
            <NavLink
              onClick={() => setOpenBurgerMenu(false)}
              className={styles.link}
              to="/profil"
            >
              <UserRound className={styles.icon} />
              Mon profil
            </NavLink>
            <button className={styles.link} onClick={logout} type="button">
              <Power className={styles.icon} />
              Se deconnecter
            </button>
          </ul>
        )}
      </section>
    </>
  );
}
