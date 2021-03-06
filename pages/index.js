import MobileMenu from "../components/mobile-menu";
import Footer from "../components/footer";
import Navbar from "../components/nav";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Video from "../components/video";
import FooterPC from "../components/footerPC";
export default function Home() {
  return (
    <>
      <div className={`contentWrapper ${styles.contentWrapper}`}>
        <MobileMenu />
        <section className={styles.main}>
          <div className={styles.textContainer}>
            <h3 className={styles.ourCommunity}> VORES FÆLLES COMMUNITY</h3>
            <h1 className={styles.title}>Dit helt nye læringsunivers</h1>
            <h2 className={styles.subTitle}>
              Guldkorn er et innovativt læringsunivers skabt for at give
              studerende på folkeskoler og ungdomsuddannelser optimale
              betingelser for at udforske deres potentiale og udvikle sig til
              fagligt, socialt og mentalt stærkere individer.
            </h2>
          </div>
          <Video
            button={false}
            buttonStyle={{ gridArea: "video", margin: "auto 0" }}
          />
          <Navbar navCSS={{ gridArea: "nav" }} />
        </section>
        <Footer />
      </div>
      <FooterPC />
    </>
  );
}
