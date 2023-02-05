import { Container, Row } from "react-bootstrap";
import { GithubIcon } from "./GithubIcon";
import { LinkedinIcon } from "./LinkedinIcon";
import { TwitterIcon } from "./TwitterIcon";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center justify-content-center">
          <div className="d-flex flex-column align-items-center justify-content-center">
            <div className="brand">
              <span>Let's </span>
              <span>Connect!</span>
            </div>
            <div className="social-icon">
              <LinkedinIcon />
              <GithubIcon />
              <TwitterIcon />
            </div>
            <a
              href="https://foxkdev.github.io/"
              className="copyright"
              rel="noreferrer"
              target="_blank"
            >
              Copyright 2023. All Rights Reserved
            </a>
          </div>
        </Row>
      </Container>
    </footer>
  );
};
