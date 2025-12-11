"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import Slide from "@mui/material/Slide";
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

interface Figure {
  url: string;
  title: string;
  note: string;
}

const articleSteps = [
  {
    label: "Resumen",
    content: `Este estudio contempla la identificación de la vulnerabilidad estructural de las edificaciones ubicadas en el ensanche Quisqueya. Se usará el software survey123 para realizar la evaluación visual rápida EVR, que nos permitirá guardar la información de cada estructura evaluada. La EVR también contempla los riesgos estructurales y no estructurales. La EVR se clasifica por zona sísmica: moderada o elevada sismicidad.
Los riesgos estructurales son las debilidades observadas en elementos resistentes a cargas sísmicas por ejemplo muros y columnas que conectan a otros elementos resistente o fundaciones. Estos elementos deben presentar dimensiones y cantidades de acero (en caso de que se visualice) y configuración estructural permitido por el reglamento de construcción. 
Los riesgos no estructurales son objetos de uso en las edificaciones. Los riesgos no estructurales contemplan las probabilidades de que equipos colgantes u otro elemento que a través de la inercia ocasionada por un evento sísmico pueda herir o dañar la salud de los ocupantes.
En la EVR se registran el grado de severidad de las irregularidades verticales y horizontales. Estas irregularidades se penalizan según su estructura, suelo y año de la construcción.
Si los parámetros SL1 igual o menor a 0.3 entonces se requerirá una evaluación n nivel 2.  Esta evaluación se hará en coordinación con un profesional especializado.
`,
    figures: [
      {
        url: "/field/edificio.jpeg",
        title: "Vista aérea del área de estudio.",
        note: "Fuente: Google Maps, 2023.",
      },
      {
        url: "/field/edificio.jpeg",
        title: "Ejemplo de edificación con irregularidades verticales.",
        note: "Fotografía tomada por el equipo de investigación.",
      },
    ],
  },
  {
    label: "Introducción",
    content: `La Rep. Dominicana se encuentra en una zona de alta actividad sísmica debido a la interacción que existe entre las placas del caribe y norteamericana.  La vulnerabilidad de las edificaciones urbanas representa un reto para la seguridad ciudadana. En este artículo se analizaron un grupo de edificación localizadas en el Ensanche Quisqueya, en la ciudad de Santo Domingo, con el fin de determinar su nivel de exposición y resistencia frente a un evento sísmico.
Los resultados de este análisis permitirán identificar las principales fallas, debilidades constructivas y realizar recomendaciones orientadas a mejorar la seguridad ante un evento sísmico, con el fin de reducir riesgo y mitigar la pérdida de vidas humanas. 
Las edificaciones del ensanche Quisqueya están diversificadas donde se puede visualizar torres modernas diseñadas con el presente código sísmico y edificaciones con más de 40 años de construidas y algunas adiciones agregadas. Aquellas Edificaciones diseñadas con el código sísmico anterior (Pre-Código) se ejecutaron sin previos estudios de suelo y sin supervisión técnica que aseguren las buenas prácticas.
`,
    figures: [
      {
        url: "/field/edificio.jpeg",
        title: "Mapa de zonificación sísmica de la República Dominicana.",
        note: "Adaptado del Ministerio de Obras Públicas y Comunicaciones (MOPC), 2011.",
      },
      {
        url: "/field/edificio.jpeg",
        title: "Comparativa de diseño estructural pre y post-código sísmico.",
        note: "Elaboración propia.",
      },
    ],
  },
  {
    label: "Contexto Geográfico",
    content: `El aumento poblacional del Ensanche Quisqueya no se entiende solo como un fenómeno demográfico, sino como resultado de su posición estratégica dentro del Distrito Nacional. Al estar en el corazón de Santo Domingo, su crecimiento refleja la tendencia de la ciudad hacia la concentración urbana y la densificación vertical, lo que genera tanto oportunidades (dinamismo económico, acceso a servicios) como retos (congestión vehicular, presión sobre infraestructura).
    El ensanche Quisqueya, distrito nacional, Esta zona se caracteriza por suelo tipo D (suelo rígido), con presencia de licuación y deslizamientos potenciales. La región esta influenciada por fallas geológicas como la Enriquillo-Plantain 
Garden y la septentrional, que históricamente han generado sismo de gran magnitud.  
`,
    figures: [
      {
        url: "/field/edificio.jpeg",
        title: "Mapa geológico de la zona de estudio.",
        note: "Fuente: Servicio Geológico Nacional.",
      },
      {
        url: "/field/edificio.jpeg",
        title: "Falla de Enriquillo-Plantain Garden.",
        note: "Fuente: Mann, P., et al. (2002).",
      },
    ],
  },
  {
    label: "Planteamiento del Problema",
    content: `La isla la española está localizada en un contexto geodinámico un poco complejo, debido a la interacción que existe entre las placas litosféricas norteamericanas y del caribe. El desplazamiento relativo (este-Oeste) que ocurre entre ambas placas hace que se genere una actividad sísmica constante, siendo esto unos de los procesos naturales más relevante que afectan nuestro país. Aunque se conocen las principales estructuras tectónicas y su relación con el movimiento, el estudio detallado de la sismicidad en el país continúa limitado por la escasez de datos históricos.
Los registros sísmicos disponibles solo abarcan los últimos 500 años, iniciando esta con la llagada de los colonizadores españoles, siendo este período significativamente menor en comparación con otras regiones del mundo. Esta limitación dificulta tener una caracterización más precisa del comportamiento sísmico local y por tanto, la evaluación del riesgo real a la que se encuentran expuesta las edificaciones. 
En el caso particular del área de estudio, según las indicaciones del Reglamento análisis y Diseño de estructura (R-001), dicha zona se clasifica como Zona 1, correspondiente a un nivel de alta sismicidad. Lo que implica aceleraciones significativas del terreno, lo que incrementa el nivel de amenaza para las edificaciones existentes. 
Aunque se conocen las normativas, muchas de las edificaciones del gran Santo Domingo, específicamente en los sectores urbanos como lo es el Ensanche Quisqueya, la misma fueron construida antes de la promulgación del reglamento sísmico vigente. Lo que quiere decir, que muchas de estas edificaciones no cumplen con los criterios de diseños Sismo-resistente, lo que hace que se genere incertidumbre de su capacidad antes un evento sísmico severo. 
Por lo cual, surge la necesidad de Evaluar rigurosamente la vulnerabilidad sísmica de las edificaciones del área, con el fin de determinar su nivel real de exposición al riesgo y definir medidas que permitan reducir pérdidas humanas. Lo que solo mediante estudios técnicos como este es posible establecer un diagnóstico que oriente acciones preventivas efectivas para la seguridad de la población. 
`,
    figures: [
      {
        url: "/field/edificio.jpeg",
        title: "Registro histórico de sismicidad.",
        note: "Fuente: Instituto Sismológico Universitario.",
      },
      {
        url: "/field/edificio.jpeg",
        title: "Edificación construida antes de la normativa vigente.",
        note: "Fotografía tomada por el equipo de investigación.",
      },
    ],
  },
  {
    label: "Justificación",
    content: `La evaluación de vulnerabilidad sísmica es esencial para garantizar la seguridad de las edificaciones habitacionales. Este estudio busca aportar evidencia técnica que permita la toma de decisiones en materia de reforzamiento estructural y políticas de prevención.
Diferentes catástrofes ocurridas por eventos sísmicos alrededor del mundo evidenciando la necesidad de reformar las construcciones a nivel nacional. La ubicación de la isla y sus diferentes fallas geológicas, constituyen una amenaza presente que crea la necesidad de reforzar las estructuras y crear nuevas que prevalezcan antes estos fenómenos.
`,
    figures: [
      {
        url: "/field/edificio.jpeg",
        title: "Daños estructurales en Haití (2010).",
        note: "Fuente: Associated Press.",
      },
      {
        url: "/field/edificio.jpeg",
        title: "Modelo de reforzamiento estructural.",
        note: "Elaboración propia.",
      },
    ],
  },
  {
    label: "Antecedentes",
    content: `Estudios previos en Santo Domingo, han demostrado que edificaciones construidas antes de la normativa sísmica de 2011 presentan mayor vulnerabilidad.
La metodología FEMA P-154 ha sido aplicada en diversos países del Caribe para identificar riesgos estructurales en edificaciones urbanas.

 La Oficina Nacional de Evaluación Sísmica e Infraestructura 
ONESVIE ha desarrollado proyectos similares en sectores habitacionales y educativos.
`,
    figures: [
      {
        url: "/field/edificio.jpeg",
        title: "Portada del manual FEMA P-154.",
        note: "Fuente: Federal Emergency Management Agency.",
      },
      {
        url: "/field/edificio.jpeg",
        title: "Proyectos de evaluación de ONESVIE.",
        note: "Fuente: Oficina Nacional de Evaluación Sísmica y Vulnerabilidad.",
      },
    ],
  },
  {
    label: "Objetivos",
    content: `General: Evaluar la vulnerabilidad sísmica de una manzana del ensanche Quisqueya mediante la metodología FEMA P-154.
Específicos:
- Identificar irregularidades estructurales y no estructurales.
- Determinar el puntaje final de riesgo sísmico.
- Proponer medidas de mitigación y reforzamiento.
`,
    figures: [
      {
        url: "/field/edificio.jpeg",
        title: "Diagrama de flujo de la metodología.",
        note: "Elaboración propia.",
      },
      {
        url: "/field/edificio.jpeg",
        title: "Ejemplo de formulario de evaluación.",
        note: "Adaptado de FEMA P-154.",
      },
    ],
  },
  {
    label: "Materiales y Métodos",
    content: `Esta sección describe en detalle cómo se realizó la investigación. Se especifica el diseño del estudio, la población y muestra, los instrumentos de recolección de datos, y los procedimientos y técnicas de análisis utilizados. La descripción debe ser lo suficientemente clara para que otros investigadores puedan replicar el estudio.`,
    figures: [
      {
        url: "/field/edificio.jpeg",
        title: "Software Survey123 en uso.",
        note: "Captura de pantalla del equipo de campo.",
      },
      {
        url: "/field/edificio.jpeg",
        title: "Análisis de datos en software estadístico.",
        note: "Elaboración propia.",
      },
    ],
  },
  {
    label: "Resultados",
    content: `
     Puntaje Final Nivel 1 (SL1): 0.3, inferior al valor límite.

    Irregularidades detectadas:
  - Vertical: elementos no coincidentes entre niveles.
  - Horizontal: diafragmas abiertos.
  - Adiciones: construcción en madera en el último nivel con jacuzzi (2022).
  - Riesgos adicionales: martilleo, efecto de columna corta, riesgo de caída de parapetos.
Discusión:
El puntaje obtenido evidencia una alta vulnerabilidad. La combinación de construcción pre-código (1983) y modificaciones posteriores sin reforzamiento estructural incrementa el riesgo. Comparado con edificaciones similares evaluadas en Santo Domingo, el Residencial Doña Carmen se encuentra en un nivel crítico que requiere intervención inmediata.

`,
    figures: [
      {
        url: "/field/edificio.jpeg",
        title: "Gráfico de puntajes de vulnerabilidad.",
        note: "Resultados del análisis de 50 edificaciones.",
      },
      {
        url: "/field/edificio.jpeg",
        title: "Identificación de columna corta en estructura.",
        note: "Fotografía tomada por el equipo de investigación.",
      },
    ],
  },
  {
    label: "Conclusiones",
    content: `La edificación presenta alta vulnerabilidad sísmica con un puntaje SL1 = 0.3.
Se requiere una evaluación estructural detallada para definir medidas de reforzamiento.
Recomendaciones:
 Reforzar elementos verticales y horizontales.
 Sustituir adiciones en madera por materiales normativos.
Implementar medidas de mitigación para parapetos y elementos no estructurales.
 Promover capacitaciones en construcción sismo-resistente en el sector habitacional.
`,
    figures: [
      {
        url: "/field/edificio.jpeg",
        title: "Propuesta de reforzamiento con muros de cortante.",
        note: "Elaboración propia.",
      },
      {
        url: "/field/edificio.jpeg",
        title: "Certificado de capacitación en construcción sismo-resistente.",
        note: "Modelo propuesto.",
      },
    ],
  },
  {
    label: "Referencias Bibliográficas",
    content: `
FEMA P-154. (2018). *Rapid Visual Screening of Buildings for Potential Seismic Hazards*. Federal Emergency Management Agency.

Mann, P., Calais, E., et al. (2002). Seismic Hazard in the Caribbean Region. *Journal of Geophysical Research*, 107(B9).

Ministerio de Obras Públicas y Comunicaciones. (2011). *Normativa Sísmica Nacional*. República Dominicana.

Oficina Nacional de Evaluación Sísmica y Vulnerabilidad de Infraestructura y Edificaciones (ONESVIE). (2023). *Informes Técnicos de Evaluación Sísmica en Santo Domingo*.
`,
    figures: [],
  },
];

const authors: Author[] = [
  {
    name: "Dra. Elena Ríos",
    bio: "Maestrante en Ciencias Ambientales con especialización en hidrología y gestión de recursos hídricos. Su investigación se centra en el impacto del cambio climático en los ecosistemas de agua dulce.",
    avatar: "/images/authors/elena-rios.jpg", // Placeholder path
    cv: {
      specialty: "Especialista en Hidrología y Recursos Hídricos",
      contact: {
        email: "elena.rios@example.com",
        linkedin: "linkedin.com/in/elenarios",
      },
      education: [
        {
          title: "Doctorado en Geociencias",
          institution: "Universidad de la Tierra",
          year: "2015",
        },
        {
          title: "Máster en Gestión Ambiental",
          institution: "Instituto Global de Sostenibilidad",
          year: "2011",
        },
      ],
      experience: [
        {
          title: "Consultora Senior",
          company: "PNUD",
          period: "2016 - Presente",
          description:
            "Lidero proyectos de resiliencia hídrica en comunidades vulnerables.",
        },
        {
          title: "Investigadora Asociada",
          company: "Centro de Estudios Climáticos",
          period: "2011 - 2015",
          description:
            "Investigación sobre el impacto del cambio climático en ecosistemas de agua dulce.",
        },
      ],
      publications: [
        '"Impacto del Cambio Climático en los Ecosistemas de Agua Dulce", Journal of Hydrology, 2020.',
        '"Modelos Predictivos de Escasez Hídrica", Nature Climate Change, 2018.',
      ],
    },
  },
  {
    name: "Dr. Carlos Vega",
    bio: "Profesor titular de Geografía y asesor de la investigación. Experto en sistemas de información geográfica (SIG) aplicados a estudios de sostenibilidad y planificación territorial.",
    avatar: "/images/authors/carlos-vega.jpg", // Placeholder path
    cv: {
      specialty: "Experto en SIG y Planificación Territorial",
      contact: {
        email: "carlos.vega@example.com",
        linkedin: "linkedin.com/in/carlosvega",
      },
      education: [
        {
          title: "PhD en Geografía Humana",
          institution: "Universidad Internacional",
          year: "2005",
        },
      ],
      experience: [
        {
          title: "Director de Laboratorio",
          company: "Laboratorio de Geoinformática Aplicada",
          period: "2010 - Presente",
          description:
            "Dirección de investigaciones sobre desarrollo urbano sostenible usando SIG.",
        },
        {
          title: "Profesor Titular",
          company: "Departamento de Geografía",
          period: "2006 - Presente",
          description:
            "Docencia e investigación en geografía y tecnologías geoespaciales.",
        },
      ],
      publications: [
        '"Cartografía Digital para el Desarrollo Urbano Sostenible" (Libro), 2019.',
        "Premio Nacional de Ciencia y Tecnología, 2018.",
      ],
    },
  },
  {
    name: "Ing. Sofía Moreno",
    bio: "Ingeniera Civil con especialización en ingeniería sísmica. Su trabajo se enfoca en la evaluación de vulnerabilidad y el diseño de reforzamiento para estructuras existentes.",
    avatar: "/images/authors/carlos-vega.jpg", // Placeholder path
    cv: {
      specialty: "Ingeniera Sísmica",
      contact: {
        email: "sofia.moreno@example.com",
        linkedin: "linkedin.com/in/sofiamoreno",
      },
      education: [
        {
          title: "Maestría en Ingeniería Estructural",
          institution: "Universidad Politécnica",
          year: "2018",
        },
        {
          title: "Grado en Ingeniería Civil",
          institution: "Universidad Nacional",
          year: "2016",
        },
      ],
      experience: [
        {
          title: "Ingeniera de Proyectos",
          company: "Estructuras Seguras S.A.",
          period: "2019 - Presente",
          description:
            "Diseño y evaluación de reforzamiento estructural para edificaciones existentes.",
        },
        {
          title: "Voluntaria",
          company: "Ingenieros Sin Fronteras",
          period: "2018 - Presente",
          description: "Inspección post-sismo en la región del Caribe.",
        },
      ],
      publications: [
        "Certificación en metodologías FEMA para evaluación de riesgos.",
        "Participación en la inspección de más de 200 edificaciones post-sismo.",
      ],
    },
  },
];

const initialComments: {
  author: string;
  text: string;
  date?: string;
}[] = [
  {
    author: "Ana Morales",
    text: "Excelente análisis. Sería interesante ver una comparación con la Región Y, que presenta desafíos similares.",
    date: "2024-05-15",
  },
  {
    author: "Javier Torres",
    text: "La metodología está muy bien descrita, facilita la comprensión de los resultados. ¡Gran trabajo!",
    date: "2024-05-16",
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

const ApaFigure = ({ figure, number }: { figure: Figure; number: number }) => (
  <Box sx={{ my: 2, textAlign: "left" }}>
    <Typography variant="caption" component="p" sx={{ fontWeight: "bold" }}>
      Figura {number}
    </Typography>
    <Typography
      variant="caption"
      component="p"
      sx={{ fontStyle: "italic", mb: 1 }}
    >
      {figure.title}
    </Typography>
    <Box
      component="img"
      src={figure.url}
      alt={figure.title}
      sx={{
        width: "100%",
        height: "auto",
        borderRadius: "4px",
        border: "1px solid rgba(255,255,255,0.2)",
      }}
    />
    <Typography
      variant="caption"
      component="p"
      sx={{ mt: 1, fontSize: "0.7rem" }}
    >
      <Box component="span" sx={{ fontStyle: "italic" }}>
        Nota.
      </Box>{" "}
      {figure.note}
    </Typography>
  </Box>
);

export default function InvestigationArticlePage() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const [comments, setComments] = React.useState(initialComments);
  const [newComment, setNewComment] = React.useState("");

  const handleCommentSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (newComment.trim()) {
      setComments([
        ...comments,
        {
          author: "Lector Anónimo",
          text: newComment,
          date: new Date().toISOString().split("T")[0],
        },
      ]);
      setNewComment("");
    }
  };

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
    <ThemeProvider theme={theme}>
      <Container
        maxWidth="xl"
        sx={{ my: 0, position: "relative", zIndex: 1 }}
        className="bg-[url(/field/edificio.jpeg)] bg-cover bg-fixed bg-center bg-no-repeat"
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
            EVALUACION SISMICA Y VULNERABILIDAD DE LAS EDIFICACIONES EN EL
            ENSANCHE QUISQUEYA, SANTO DOMINGO, REP. DOM.
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            gutterBottom
            align="center"
            sx={{ mb: 4 }}
          >
            Un estudio de caso sobre la vulnerabilidad estructural en zonas
            urbanas de Santo Domingo.
          </Typography>

          <Divider
            sx={{ my: 4, borderColor: "primary.main", borderWidth: "1px" }}
          />

          <Box>
            <Typography variant="h5" component="h2" gutterBottom>
              Autores
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
                    Leer más
                  </Button>
                </Box>
              </Box>
            ))}
          </Box>

          <Divider
            sx={{ my: 4, borderColor: "primary.main", borderWidth: "1px" }}
          />

          <Box>
            <Stepper activeStep={activeStep} orientation="vertical">
              {(() => {
                let figureCounter = 0;
                return articleSteps.map((step, index) => {
                  const stepFigures = step.figures || [];
                  const figuresToRender = stepFigures.map((fig) => ({
                    ...fig,
                    number: ++figureCounter,
                  }));

                  return (
                    <Step key={step.label}>
                      <StepLabel
                        optional={
                          index === articleSteps.length - 1 ? (
                            <Typography variant="caption">
                              Último paso
                            </Typography>
                          ) : null
                        }
                      >
                        <Typography
                          sx={{
                            fontSize: "28px",
                            fontWeight: "500",
                            color: "primary.main",
                          }}
                        >
                          {step.label}
                        </Typography>
                      </StepLabel>
                      <StepContent>
                        <Slide
                          direction="left"
                          in={activeStep === index}
                          timeout={1000}
                          mountOnEnter
                          unmountOnExit
                        >
                          <Box
                            sx={{
                              p: 2,
                              borderLeft: `2px solid ${theme.palette.primary.main}`,
                              ml: "12px",
                              pl: 3,
                            }}
                          >
                            <Typography
                              sx={{
                                whiteSpace: "pre-line",
                                fontSize: "1rem",
                                lineHeight: 1.75,
                                fontFamily: "serif",
                                mb: 4,
                                ...(step.label ===
                                  "Referencias Bibliográficas" && {
                                  textIndent: "-36px",
                                  paddingLeft: "36px",
                                }),
                              }}
                            >
                              {step.content}
                            </Typography>

                            {stepFigures.length > 0 && (
                              <Grid container spacing={4} sx={{ mt: 2 }}>
                                {figuresToRender.map((fig) => (
                                  <Grid size={6} key={fig.number}>
                                    <ApaFigure
                                      figure={fig}
                                      number={fig.number}
                                    />
                                  </Grid>
                                ))}
                              </Grid>
                            )}

                            <Box sx={{ mb: 2, mt: 2 }}>
                              <div>
                                <Button
                                  variant="contained"
                                  onClick={handleNext}
                                  sx={{ mt: 1, mr: 1 }}
                                >
                                  {index === articleSteps.length - 1
                                    ? "Finalizar"
                                    : "Siguiente"}
                                </Button>
                                <Button
                                  disabled={index === 0}
                                  onClick={handleBack}
                                  sx={{ mt: 1, mr: 1 }}
                                >
                                  Atrás
                                </Button>
                              </div>
                            </Box>
                          </Box>
                        </Slide>
                      </StepContent>
                    </Step>
                  );
                });
              })()}
            </Stepper>
            {activeStep === articleSteps.length && (
              <Paper
                square
                elevation={0}
                sx={{ p: 3, mt: 2, backgroundColor: "rgba(0,0,0,0.3)" }}
              >
                <Typography variant="h6" gutterBottom>
                  Ha completado la lectura del artículo.
                </Typography>
                <Typography>
                  Gracias por revisar el estudio. Puede volver al inicio para
                  leerlo de nuevo.
                </Typography>
                <Button onClick={handleReset} sx={{ mt: 2 }} variant="outlined">
                  Volver al inicio
                </Button>
              </Paper>
            )}
          </Box>

          <Divider
            sx={{ my: 5, borderColor: "primary.main", borderWidth: "1px" }}
          />

          <Box component="section">
            <Typography variant="h5" component="h2" gutterBottom>
              Discusión y Comentarios
            </Typography>
            <Box sx={{ my: 3 }}>
              {comments.map((comment, index) => (
                <Paper
                  key={index}
                  variant="outlined"
                  sx={{
                    p: 2,
                    mb: 2,
                    backgroundColor: "rgba(255,255,255,0.05)",
                  }}
                >
                  <Typography
                    variant="subtitle2"
                    component="p"
                    sx={{ fontWeight: "bold" }}
                  >
                    {comment.author}
                  </Typography>
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    display="block"
                    gutterBottom
                  >
                    {comment.date}
                  </Typography>
                  <Typography variant="body2">{comment.text}</Typography>
                </Paper>
              ))}
            </Box>
            <Box
              component="form"
              onSubmit={handleCommentSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <Typography variant="h6" component="h3" gutterBottom>
                Dejar un comentario
              </Typography>
              <TextField
                label="Escriba su comentario aquí"
                multiline
                rows={4}
                fullWidth
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                variant="outlined"
                margin="normal"
              />
              <Button type="submit" variant="contained" sx={{ mt: 1 }}>
                Publicar Comentario
              </Button>
            </Box>
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
                    {/* Left Column */}
                    <Grid
                      size={12}
                      sx={{ bgcolor: "primary.main", p: 3, color: "white" }}
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

                    {/* Right Column */}
                    <Grid size={12} sx={{ p: 3 }}>
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
  );
}
