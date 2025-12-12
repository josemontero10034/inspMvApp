"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import {
  createTheme,
  ThemeProvider,
  type SxProps,
  type Theme,
} from "@mui/material/styles";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Backdrop from "@mui/material/Backdrop";
import Grid from "@mui/material/Grid";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "@mui/material/Link";
import Header from "../components/Header/header";

interface Author {
  name: string;
  bio: string;
  avatar: string;
  cv: {
    specialty: string;
    contact: {
      email: string;
      linkedin: string;
    };
    education: { title: string; institution: string; year: string }[];
    experience: {
      title: string;
      company: string;
      period: string;
      description: string;
    }[];
    publications: string[];
  };
}

const authors: Author[] = [
  {
    name: "Pablo Jimenez",
    bio: "Maestrante en  ingeniería Geotecnia y Cimentaciones. Su investigación se centra en Evaluación Sísmica y Vulnerabilidad de las Edificaciones",
    avatar: "/pablo-jimenez.jpeg", // Placeholder path
    cv: {
      specialty: "Especialista en Estructuras y Geotecnia",
      contact: {
        email: "pjimenez@tradeenergy.com.do",
        linkedin: "http://linkedin.com/in/pablo-b-jimenez-perez-456245186",
      },
      education: [
        {
          title: "Ingeniero Civil",
          institution: "Universidad Autónoma de Santo Domingo (UASD)",
          year: "2022",
        },
        {
          title:
            "Presto (Presupuesto, licitaciones, y cubicaciones del Estafo y sector privado",
          institution: "Presto caribe S.R.L",
          year: "2022",
        },
      ],
      experience: [
        {
          title: "Gerente de Operaciones",
          company: "Inconsaa",
          period: "2024- Presente",
          description: "Lideró Operaciones y obras civiles  .",
        },
        {
          title: "Ingeniero de Proyectos",
          company: "TRADENERGY",
          period: "2022- 2024",
          description:
            "Supervisor de proyecto que involucraba la construcción de 1280 apartamentos.",
        },
      ],
      publications: [
        "ANÁLISIS DE ESTABILIDAD Y CONTENCIÓN DE TALUDES PARA ADECUACIÓN DEL TERRENO EN ESTANCIA INFANTIL COTUÍ II, BARRIO VILLA PROGRESO, MUNICIPIO COTUÍ, PROVINCIA SÁNCHEZ RAMÍREZ, REPÚBLICA DOMINICANA. (Tesis), 2022.",
      ],
    },
  },
  {
    name: "Ing. Jose Radhames Montero",
    bio: "Ingeniero Inspector de Obras con amplia experiencia en supervisión de proyectos de construcción y evaluación estructural. Ha trabajado en múltiples proyectos de infraestructura urbana.",
    avatar: "/jose-montero.jpg", // Placeholder path
    cv: {
      specialty: "Experto en Supervisión y Evaluación Estructural",
      contact: {
        email: "jose142578@gmail.com",
        linkedin: "www.linkedin.com/in/jrmmontero",
      },
      education: [
        {
          title: "Licenciatura en Ingeniería Civil",
          institution: "Universidad Autónoma de Santo Domingo (UASD)",
          year: "2022",
        },
      ],
      experience: [
        {
          title: "Encargado de Obras",
          company: "Ebusa Engineering Group",
          period: "2018 - 2021",
          description:
            "Encargado de la supervisión y control de calidad en proyectos de torres residenciales y comerciales.",
        },
        {
          title: "Inspector de Obras Por Etapas",
          company:
            "Ministerio de la Vivienda, Hábitat y Edificaciones (MIVHED)",
          period: "2021 - Presente",
          description:
            "Docencia e investigación en geografía y tecnologías geoespaciales.",
        },
      ],
      publications: [
        '"• ANÁLISIS DE ESTABILIDAD Y CONTENCIÓN DE TALUDES PARA ADECUACIÓN DEL TERRENO EN ESTANCIA INFANTIL COTUÍ II, BARRIO VILLA PROGRESO, MUNICIPIO HATO NUEVO, PROVINCIA PERAVIA, REPÚBLICA DOMINICANA" (Tesis), 2022.',
      ],
    },
  },
  {
    name: "Oscar E. Devers Diaz",
    bio: "Maestrante en ingenieria en geotecnia y cimentaciones.",
    avatar: "/oscar-devers.png", // Placeholder path
    cv: {
      specialty: "control de calidad ",
      contact: {
        email: "oscarezedevers@gmail.com",
        linkedin: "https://www.linkedin.com/in/oscar-e-devers-diaz-7712361a8",
      },
      education: [
        {
          title: "Ingeniero Civil",
          institution: "UniversidadAutonoma de Santo Domingo",
          year: "2023",
        },
        {
          title: "",
          institution: "",
          year: "",
        },
      ],
      experience: [
        {
          title: "Encargado de control de calidad en columnas de grava Geopier",
          company: "Cimenca",
          period: "2023 - Presente",
          description: "Lidero proyectos de mejoramiento de suelos.",
        },
        {
          title: "Asociada",
          company: "",
          period: "",
          description: ".",
        },
      ],
      publications: ['".', '".'],
    },
  },
];

const theme = createTheme({
  palette: {
    primary: {
      main: "#FF5722", // Un naranja vibrante
    },
    background: {
      paper: "rgba(0, 0, 0, 0.7)",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#BDBDBD",
    },
    mode: "dark",
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
    h4: {
      fontWeight: 700,
    },
  },
});

const modalStyle: SxProps<Theme> = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "95%", sm: "80%", md: 800 },
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 0, // No padding on the main box, we'll handle it inside
  color: "text.primary",
  maxHeight: "80vh",
  overflowY: "auto",
  borderColor: "primary.main",
  borderRadius: 2,
};

export default function AboutUsPage() {
  const [openModal, setOpenModal] = React.useState(false);
  const [selectedAuthor, setSelectedAuthor] = React.useState<Author | null>(
    null,
  );

  const handleOpenModal = (author: Author) => {
    setSelectedAuthor(author);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      <Header />
      <ThemeProvider theme={theme}>
        <Container
          maxWidth="xl"
          sx={{ my: 0, position: "relative", zIndex: 1, minHeight: "100vh" }}
          className="bg-[url(/field/edificio.jpeg)] bg-cover bg-fixed bg-center"
        >
          <Paper
            elevation={6}
            sx={{ p: { xs: 2, sm: 3, md: 4 }, backdropFilter: "blur(4px)" }}
          >
            <Typography
              variant="h3"
              component="h1"
              gutterBottom
              align="center"
              sx={{
                fontWeight: "bold",
                textShadow: "2px 2px 8px rgba(0,0,0,0.7)",
                color: "primary.main",
              }}
            >
              Sobre Nosotros
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              gutterBottom
              align="center"
              sx={{ mb: 4 }}
            >
              Conozca al equipo de ingenieros detrás de este estudio.
            </Typography>

            <Divider
              sx={{ my: 4, borderColor: "primary.main", borderWidth: "1px" }}
            />

            <Box>
              <Typography variant="h5" component="h2" gutterBottom>
                Nuestro Equipo
              </Typography>
              {authors.map((author, index) => (
                <Box
                  key={`${author.name}-${index}`}
                  sx={{
                    p: 2,
                    mb: 2,
                    borderRadius: 2,
                    transition: "all 0.3s ease-in-out",
                    "&:hover": {
                      backgroundColor: "rgba(255, 87, 34, 0.1)",
                      boxShadow: `0 0 15px ${theme.palette.primary.main}`,
                      transform: "scale(1.02)",
                    },
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Avatar
                      alt={author.name}
                      src={author.avatar}
                      sx={{ width: 60, height: 60, mr: 2 }}
                    />
                    <Box sx={{ flexGrow: 1 }}>
                      <Typography variant="h6" component="h3">
                        {author.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {author.bio}
                      </Typography>
                    </Box>
                    <Button
                      variant="text"
                      onClick={() => handleOpenModal(author)}
                      sx={{ ml: 2, color: "primary.main", alignSelf: "center" }}
                    >
                      Ver Perfil
                    </Button>
                  </Box>
                </Box>
              ))}
            </Box>
          </Paper>

          <Modal
            aria-labelledby="author-cv-modal-title"
            aria-describedby="author-cv-modal-description"
            open={openModal}
            onClose={handleCloseModal}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
              backdrop: {
                timeout: 500,
              },
            }}
          >
            <Fade in={openModal}>
              <Box sx={modalStyle}>
                {selectedAuthor && (
                  <>
                    <Grid container>
                      <Grid
                        size={12}
                        sx={{
                          bgcolor: "primary.main",
                          p: 3,
                          color: "white",
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            textAlign: "center",
                          }}
                        >
                          <Avatar
                            alt={selectedAuthor.name}
                            src={selectedAuthor.avatar}
                            sx={{
                              width: 150,
                              height: 150,
                              mb: 2,
                              border: "4px solid white",
                            }}
                          />
                          <Typography
                            variant="h4"
                            component="h2"
                            sx={{ fontWeight: "bold" }}
                          >
                            {selectedAuthor.name}
                          </Typography>
                          <Typography variant="h6" sx={{ mb: 3 }}>
                            {selectedAuthor.cv.specialty}
                          </Typography>

                          <Divider
                            sx={{
                              bgcolor: "rgba(255,255,255,0.5)",
                              width: "100%",
                              my: 2,
                            }}
                          />

                          <Typography
                            variant="h6"
                            sx={{ alignSelf: "flex-start", mb: 1 }}
                          >
                            Contacto
                          </Typography>
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              mb: 1,
                              alignSelf: "flex-start",
                            }}
                          >
                            <EmailIcon sx={{ mr: 1 }} />
                            <Link
                              href={`mailto:${selectedAuthor.cv.contact.email}`}
                              color="inherit"
                              underline="hover"
                            >
                              {selectedAuthor.cv.contact.email}
                            </Link>
                          </Box>
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              alignSelf: "flex-start",
                            }}
                          >
                            <LinkedInIcon sx={{ mr: 1 }} />
                            <Link
                              href={`https://${selectedAuthor.cv.contact.linkedin}`}
                              target="_blank"
                              rel="noopener"
                              color="inherit"
                              underline="hover"
                            >
                              {selectedAuthor.cv.contact.linkedin}
                            </Link>
                          </Box>
                        </Box>
                      </Grid>

                      <Grid  size={12} sx={{ p: 3 }}>
                        <Box sx={{ mb: 3 }}>
                          <Typography
                            variant="h5"
                            sx={{
                              color: "primary.main",
                              borderBottom: 2,
                              borderColor: "primary.main",
                              pb: 1,
                              mb: 2,
                            }}
                          >
                            Educación
                          </Typography>
                          {selectedAuthor.cv.education.map((edu, index) => (
                            <Box key={index} sx={{ mb: 1.5 }}>
                              <Typography
                                variant="h6"
                                sx={{ fontWeight: "bold" }}
                              >
                                {edu.title}
                              </Typography>
                              <Typography
                                variant="subtitle1"
                                color="text.secondary"
                              >
                                {edu.institution} - {edu.year}
                              </Typography>
                            </Box>
                          ))}
                        </Box>

                        <Box sx={{ mb: 3 }}>
                          <Typography
                            variant="h5"
                            sx={{
                              color: "primary.main",
                              borderBottom: 2,
                              borderColor: "primary.main",
                              pb: 1,
                              mb: 2,
                            }}
                          >
                            Experiencia Profesional
                          </Typography>
                          {selectedAuthor.cv.experience.map((exp, index) => (
                            <Box key={index} sx={{ mb: 2 }}>
                              <Typography
                                variant="h6"
                                sx={{ fontWeight: "bold" }}
                              >
                                {exp.title} @ {exp.company}
                              </Typography>
                              <Typography
                                variant="caption"
                                color="text.secondary"
                                display="block"
                              >
                                {exp.period}
                              </Typography>
                              <Typography variant="body2">
                                {exp.description}
                              </Typography>
                            </Box>
                          ))}
                        </Box>

                        <Box>
                          <Typography
                            variant="h5"
                            sx={{
                              color: "primary.main",
                              borderBottom: 2,
                              borderColor: "primary.main",
                              pb: 1,
                              mb: 2,
                            }}
                          >
                            Publicaciones y Reconocimientos
                          </Typography>
                          {selectedAuthor.cv.publications.map((pub, index) => (
                            <Typography
                              key={index}
                              variant="body2"
                              sx={{ mb: 1 }}
                            >
                              • {pub}
                            </Typography>
                          ))}
                        </Box>
                      </Grid>
                    </Grid>
                  </>
                )}
              </Box>
            </Fade>
          </Modal>
        </Container>
      </ThemeProvider>
    </>
  );
}