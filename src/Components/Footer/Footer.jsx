import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <p>
          Created By :-
          <span>
            <a
              href="https://github.com/LakshyaRoy"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Lakshya Roy 😀
            </a>
          </span>
        </p>
        <div>
          <a
            href="https://www.linkedin.com/in/lakshya-roy729/"
            target="_blank"
            rel="noreferrer"
          >
            Lakshya&apos;s LinkedIn
          </a>
          <p>© 2023 All rights reserved. 😁</p>
          <p>Terms of Service | Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
