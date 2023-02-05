import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import kettu from "../assets/imgs/kettu_capture.png";
import alertacoches from "../assets/imgs/alertacoches_capture.png";
// import codingResources from "../assets/imgs/codingresourcesAPI.jpg";
// import fullstack from "../assets/imgs/fullstackapi.jpg";
// import tictactoe from "../assets/imgs/tictactoe.jpg";
// import reversah from "../assets/imgs/reversah.jpg";
// import genzmone from "../assets/imgs/genzmone.jpg";

export const Projects = () => {
  const projects = [
    {
      title: "Kettu.tv",
      description:
        "Kettu.tv is a streaming platform where small content creators can growh with their communities.",
      imgUrl: kettu,
      // githubUrl: "https://github.com/foxkdev",
      deployedUrl: "https://kettu.tv",
    },
    {
      title: "Alertacoches",
      description:
        "Busca y encuentra anuncios en los principales portales de compra-venta de España. Podrás encontrar coches de segunda mano de tus marcas favoritas: Volkswagen, Audi, Mercedes, Citroën, Peugeot... Con AlertaCoches, buscar un coche bueno, bonito y barato, ¡es pan comido!",
      imgUrl: alertacoches,
      deployedUrl: "https://alertacoches.es/",
    }
  ];

  // const openSource = [
  //   {
  //     title: "Coding Resources API",
  //     description:
  //       "The Coding Resources API serves educational content for a wide variety of computer science topics, languages, and technologies related to web development.",
  //     imgUrl: codingResources,
  //     githubUrl: "https://github.com/alexisintech/coding-resources-api",
  //     deployedUrl: "https://coding-resources-api.up.railway.app/",
  //   },
  //   {
  //     title: "Full Stack Interview Questions API",
  //     description:
  //       "The Full Stack Interview Questions API consists of 150+ questions that have been asked at behavioural and technical interviews in the Tech field.",
  //     imgUrl: fullstack,
  //     githubUrl: "https://github.com/alexisintech/interview-question-api",
  //     deployedUrl: "https://full-stack-interview-prep.up.railway.app/",
  //   },
  //   {
  //     title: "Tic Tac Toe",
  //     description:
  //       "A 2-player tic-tac-toe game with win and draw validation (local only for now).",
  //     imgUrl: tictactoe,
  //     githubUrl: "https://github.com/alexisintech/tic-tac-toe",
  //     deployedUrl: "https://alexisintech-tictactoe.netlify.app/",
  //   },
  // ];

  // const clientWork = [
  //   {
  //     title: "Reversah",
  //     description:
  //       "Twitch streamer and Faze1 Top 20 Prospect, Reversah, offers custom-designed Valorant merchandise, as famously seen on tik tok. Popular customers include Tiffae, TenZ, Kyedae, and C9 Annie Dro.",
  //     imgUrl: reversah,
  //     githubUrl: "https://github.com/alexisintech/Reversah.ValorantBanner",
  //     deployedUrl: "https://reversah.com/",
  //   },
  //   {
  //     title: "Gen-Z Mon-E",
  //     description:
  //       "James Bowman, financial coach and host of the Gen-Z Mon-E podcast, helps people pay down bad debts, begin investing, and ultimately reach financial peace.",
  //     imgUrl: genzmone,
  //     deployedUrl: "https://genzmone.com/",
  //   },
  // ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <div>
              <h2>Projects</h2>
              <Tab.Container id="projects-tabs" defaultActiveKey="first">
                {/* <Nav
                  variant="pills"
                  className="nav-pills justify-content-center align-items-center"
                  id="pills-tab"
                >
                  <Nav.Item>
                    <Nav.Link eventKey="first">Projects</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Open Source</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">Client Work</Nav.Link>
                  </Nav.Item>
                </Nav> */}
                <Tab.Content id="slideInUp">
                  <Tab.Pane eventKey="first">
                    <p className="mb-5">
                      Whether it's for learning new technologies or
                      strengthening my large range of skills, I am highly
                      passionate about expressing my creativity by developing
                      modern, responsive full-stack web applications.
                    </p>
                    <Row>
                      {projects.map((project, index) => {
                        return <ProjectCard key={index} {...project} />;
                      })}
                    </Row>
                  </Tab.Pane>
                  {/* <Tab.Pane eventKey="second">
                    <p className="mb-5">
                      I've managed, contributed to, and maintained the following
                      open source projects while effectively utilizing
                      documentation, version control, and high-level
                      organization and communication.
                    </p>
                    <Row>
                      {openSource.map((project, index) => {
                        return <ProjectCard key={index} {...project} />;
                      })}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <p className="mb-5">
                      I have designed and developed interactive, responsive
                      websites under considerably pressing deadlines in order to
                      successfully meet my clients' needs and artistic visions.
                    </p>
                    <Row>
                      {clientWork.map((project, index) => {
                        return <ProjectCard key={index} {...project} />;
                      })}
                    </Row>
                  </Tab.Pane> */}
                </Tab.Content>
              </Tab.Container>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
