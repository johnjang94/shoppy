import React from "react";
import { Link } from "react-router-dom";

// icons
import { FiShoppingBag } from "react-icons/fi";
import { AiFillEdit } from "react-icons/ai";

// login status
import UserProfile from "../profile";
import { useAuthContext } from "../context";
import Button from "../button";
import Status from "../cart-status";

export default function Navbar() {
  const { user, login, logout } = useAuthContext();
  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center gap-1">
        <Link to="/">
          <FiShoppingBag className="text-xl text-brand" />
        </Link>
        <Link to="/">
          <h1 className="text-xl text-brand">Shoppy</h1>
        </Link>
      </div>
      <div className="flex items-center gap-5">
        <div className="flex items-center">
          <button>
            <Link to="/products">Products</Link>
          </button>
          {user && (
            <Link to="/cart">
              <Status />
            </Link>
          )}
        </div>
        {user && user.isAdmin && (
          <Link to="/products/new" className="text-xl">
            <AiFillEdit />
          </Link>
        )}
        {user && <UserProfile user={user} />}
        {!user && <Button text={"Login"} onClick={login} className="text-xl" />}
        {user && (
          <Button text={"Logout"} onClick={logout} className="text-xl" />
        )}
      </div>
    </header>
  );
}
