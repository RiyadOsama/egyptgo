'use client';
import { useRouter } from "next/navigation";

export default function LogoutButton({ className }) {
  const router = useRouter();

  const logoutHandler = () => {
    document.cookie = "email=; Max-Age=0; path=/";
    document.cookie = "token=; Max-Age=0; path=/";
    localStorage.removeItem("token");
    router.push("/login");
  };

  return (
    <button
      onClick={logoutHandler}
      className={className}
    >
      Logout
    </button>
  );
}
