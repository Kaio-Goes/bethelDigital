import React from "react";
import Header from "../../component/header";
import {
  makeStyles,
  Card,
  CardMedia,
  Divider,
  CardContent,
  Typography,
} from "@material-ui/core";
import Footer from "../../component/footer";

export default function Church() {
  const {
    container,
    cardContainer,
    bgImage,
    titulo,
    position,
    subTitle,
    subPosition,
    cardContent,
    text,
    body,
    column,
    title,
    textCard,
    subtitle,
    minicard,
  } = useStyles();

  return (
    <div className={container}>
      <div className={body}>
        <div>
          <Header />
        </div>
        <div>
          <Card className={cardContainer}>
            <CardMedia
              className={bgImage}
              component="img"
              alt="img"
              src={require("../../img/blessed.jpg")}
              title="img"
            />
            <div className={position}>
              <h1 className={titulo}>Sobre Nós</h1>
              <p className={subTitle}> Home / A igreja</p>
              <CardContent className={cardContent}>
                <div className={subPosition}>
                  <h1>História</h1>
                  <div style={{ marginTop: "60px" }}>
                    <p className={text}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                    <p className={text}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                  </div>
                </div>
              </CardContent>
              <br />
              <br />
              <br />
              <br />
              <br />
              <Divider />
            </div>
          </Card>
          <Card className={column}>
            <Card sx={{ minWidth: 275 }} className={minicard}>
              <CardContent>
                <Typography gutterBottom className={subtitle}>
                  Corpo Clínico Qualificado{" "}
                </Typography>
                <Typography component="div" className={title}>
                  Onde as Pessoas Vem Primeiro
                </Typography>
                <Typography sx={{ mb: 1.5 }} className={textCard}>
                  Na Salute Clínicas Especializadas o paciente está em boas
                  mãos. Temos o melhores e mais atualizados especialistas da
                  Região Norte do DF em diversas áreas de atuação.
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ minWidth: 275 }} className={minicard}>
              <CardContent>
                <Typography gutterBottom className={subtitle}>
                  Pronto Atendimento
                </Typography>
                <Typography component="div" className={title}>
                  Cuidados de Alto Nível{" "}
                </Typography>
                <Typography sx={{ mb: 1.5 }} className={textCard}>
                  Com foco no atendimento humanizado, na qualificação da equipe,
                  na adoção de novas tecnologias e na expansão do atendimento, a
                  Salute é referência em qualidade técnica.
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ minWidth: 275 }} className={minicard}>
              <CardContent>
                <Typography gutterBottom className={subtitle}>
                  Estamos aqui por você{" "}
                </Typography>
                <Typography component="div" className={title}>
                  Departamento de Emergência
                </Typography>
                <Typography sx={{ mb: 1.5 }} className={textCard}>
                  Criamos em Sobradinho uma ampla estrutura com soluções
                  completas em saúde que vai de consultas médicas a medicação
                  prescrita e exames clínicos.
                </Typography>
              </CardContent>
            </Card>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
}

const useStyles = makeStyles(() => ({
  container: {
    padding: 0,
    margin: 0,
    height: "100%",
  },
  cardContainer: {
    height: "100%",
  },
  bgImage: {
    height: "80%",
    width: "100%",
    position: "absolute",
  },
  position: {
    position: "relative",
    "@media (max-width:900px)": {
      marginLeft: 0,
    },
  },
  titulo: {
    color: "white",
    fontSize: 60,
    fontFamily: "Inter, sans-serif",
    marginTop: 210,
    textAlign: "center",
    "@media (max-width:900px)": {
      fontSize: "1.5rem",
      marginTop: 130,
      marginLeft: 50,
      textAlign: "center",
    },
  },
  subTitle: {
    color: "white",
    fontSize: 30,
    fontFamily: "Inter  ,sans-serif",
    fontWeight: "100",
    textAlign: "center",
    "@media (max-width:900px)": {
      fontSize: "18px",
      color: "black",
      fontWeight: "300",
      marginTop: 80,
      marginLeft: 10,
      textAlign: "center",
    },
  },
  subPosition: {
    textAlign: "center",
    fontFamily: "Inter  ,sans-serif",
  },
  cardContent: {
    marginTop: 220,
  },
  text: {
    fontFamily: "Inter  ,sans-serif",
    fontSize: "18px",
    marginLeft: 100,
    marginRight: 100,
    fontWeight: "300",
  },
  column: {
    display: "flex",
    padding: 10,
    justifyContent: "center",
  },
  minicard: {
    width: 400,
  },
  subtitle: {
    fontFamily: "Inter  ,sans-serif",
    color: "rgba(255, 0, 0, 0.6)",
    fontSize: 14,
  },
  title: {
    fontFamily: "Inter  ,sans-serif",
    color: "rgba(255, 0, 0, 0.8)",
    fontSize: 19,
    fontWeight: "500",
    paddingTop: 10,
    paddingBottom: 10
  },
  textCard: {
    fontFamily: "Inter  ,sans-serif",
    fontSize: 14,
    fontWeight: "200",
    lineHeight: '2'
  },
}));
