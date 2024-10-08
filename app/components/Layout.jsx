"use client";
import Titlebar from "./Titlebar";
import Sidebar from "./Sidebar";
import Explorer from "./Explorer";
import Bottombar from "./Bottombar";
import Tabsbar from "./Tabsbar";
import styles from "../styles/Layout.module.css";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const Layout = ({ children }) => {
  // set scroll to top of main content on url pathname change
  const router = useRouter();
  useEffect(() => {
    const main = document.getElementById("main-editor");
    main.scrollTop = 0;
  }, [router.pathname]);
  return (
    <>
      <Titlebar />
      <div className={styles.main}>
        <Sidebar />
        <Explorer />
        <div style={{ width: "100%" }}>
          <Tabsbar />
          <main id="main-editor" className={styles.content}>
            {children}
          </main>
        </div>
      </div>
      <Bottombar />
    </>
  );
};

export default Layout;
