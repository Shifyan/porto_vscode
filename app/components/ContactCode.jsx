import styles from "../styles/ContactCode.module.css";

const contactItems = [
  {
    social: "Instagram",
    link: "@a.shif_yan",
    href: "https://www.instagram.com/a.shif_yan/",
  },
  {
    social: "email",
    link: "asifyan02@gmail.com",
    href: "mailto:asifyan02@gmail.com",
  },
  {
    social: "github",
    link: "Shifyan",
    href: "https://github.com/Shifyan",
  },
  {
    social: "linkedin",
    link: "Shifyan Almustafid",
    href: "https://id.linkedin.com/in/shifyan-almustafid/",
  },

  {
    social: "telegram",
    link: "Shifyan Almustafid",
    href: "https://t.me/asifyan01",
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{" "}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{" "}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
