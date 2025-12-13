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
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import Link from "@mui/material/Link";
import Header from "../Header/header";

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
    figures: [],
  },
  {
    label: "Introducción",
    content: `La Rep. Dominicana se encuentra en una zona de alta actividad sísmica debido a la interacción que existe entre las placas del caribe y norteamericana.  La vulnerabilidad de las edificaciones urbanas representa un reto para la seguridad ciudadana. En este artículo se analizaron un grupo de edificación localizadas en el Ensanche Quisqueya, en la ciudad de Santo Domingo, con el fin de determinar su nivel de exposición y resistencia frente a un evento sísmico.
Los resultados de este análisis permitirán identificar las principales fallas, debilidades constructivas y realizar recomendaciones orientadas a mejorar la seguridad ante un evento sísmico, con el fin de reducir riesgo y mitigar la pérdida de vidas humanas. 
Las edificaciones del ensanche Quisqueya están diversificadas donde se puede visualizar torres modernas diseñadas con el presente código sísmico y edificaciones con más de 40 años de construidas y algunas adiciones agregadas. Aquellas Edificaciones diseñadas con el código sísmico anterior (Pre-Código) se ejecutaron sin previos estudios de suelo y sin supervisión técnica que aseguren las buenas prácticas.
`,
    figures: [
      {
        url: "/field/mapa-sismico.png",
        title: "Mapa Actividad Sismica República Dominicana.",
        note: "(Mapa de actividad sísmica Rep. Dom) tomado de https://www.dlubal.com/",
      },
    ],
  },
  {
    label: "Contexto Geográfico",
    content: `El mapa geológico de la República Dominicana es una herramienta cartográfica esencial que ilustra la compleja y diversa composición del subsuelo del país, destacando su evolución tectónica y su ubicación estratégica en el margen norte del Caribe.
La estructura del mapa refleja la intensa actividad tectónica del país, incluyendo la presencia de numerosas fallas activas, como la Falla Septentrional y la Zona de Falla de Enriquillo-Plantain Garden, que atraviesan la isla. La naturaleza del mapa es crucial para la exploración de recursos naturales, la planificación territorial y la gestión de riesgos geológicos.

El ensanche Quisqueya, distrito nacional, Esta zona se caracteriza por suelo tipo D (suelo rígido), con presencia de licuación y deslizamientos potenciales. La región esta influenciada por fallas geológicas como la Enriquillo-Plantain 
Garden y la septentrional, que históricamente han generado sismo de gran magnitud.  
El aumento poblacional del Ensanche Quisqueya no se entiende solo como un fenómeno demográfico, sino como resultado de su posición estratégica dentro del Distrito Nacional. Al estar en el corazón de Santo Domingo, su crecimiento refleja la tendencia de la ciudad hacia la concentración urbana y la densificación vertical, lo que genera tanto oportunidades (dinamismo económico, acceso a servicios) como retos (congestión vehicular, presión sobre infraestructura).

`,
    figures: [
      {
        url: "/field/mapa-geologico.png",
        title: "Mapa geológico de la zona de estudio.",
        note: "(Mapa geológico de Rep. Dom) fuente: https://www.sgn.gob.do/index.php/geologia-y-tematicos/info-geologia",
      },
      {
        url: "/field/densidad poblacional 1980.png",
        title: "Densidad Poblacional 1980",
        note: "La ilustración muestra una vista aérea del año 1980, donde se puede observar la densidad poblacional  (Google Earth)",
      },
      {
        url: "/field/densidad poblacional 2025.png",
        title: "Densidad Poblacional 2025",
        note: "La ilustración muestra una vista aérea del año 2025, donde se puede observar la densidad poblacional  (Google Earth)",
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
    figures: [],
  },
  {
    label: "Justificación",
    content: `La evaluación de vulnerabilidad sísmica es esencial para garantizar la seguridad de las edificaciones habitacionales. Este estudio busca aportar evidencia técnica que permita la toma de decisiones en materia de reforzamiento estructural y políticas de prevención.
Diferentes catástrofes ocurridas por eventos sísmicos alrededor del mundo evidenciando la necesidad de reformar las construcciones a nivel nacional. La ubicación de la isla y sus diferentes fallas geológicas, constituyen una amenaza presente que crea la necesidad de reforzar las estructuras y crear nuevas que prevalezcan antes estos fenómenos.
`,
    figures: [],
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
        url: "/field/foto-onesvie.png",
        title: "Reunion del Director de ONESVIE con equipo de campo.",
        note: "Equipo de evaluación Sísmica y Vulnerabilidad de Infraestructura y Edificaciones (Onesvie), Fuente: https://onesvie.gob.do/",
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
    figures: [],
  },
  {
    label: "Materiales y Métodos",
    content: `Esta sección describe en detalle cómo se realizó la investigación. Se especifica el diseño del estudio, la población y muestra, los instrumentos de recolección de datos, y los procedimientos y técnicas de análisis utilizados. La descripción debe ser lo suficientemente clara para que otros investigadores puedan replicar el estudio.`,
    figures: [
      {
        url: "/field/form-level-1.png",
        title: "Formularios para evaluación visual rápida EVR nivel 1",
        note: "Formulario evaluación de edificación antes eventos sísmico  (manual Fema P154) nivel 1",
      },
      {
        url: "/field/form-level-2.png",
        title: "Formularios para evaluacion visual rápida EVR nivel 2",
        note: "Formulario evaluación de edificación antes eventos sísmico  (manual Fema P154) nivel 2",
      },
      {
        url: "/field/survey123.png",
        title: "Survey123 App",
        note: "La Aplicación Survey123, Permite a los usuarios crear, compartir y analizar encuestas desde dispositivos web o móviles, incluso sin conexión a internet.) (https://www.esri.es)",
      },
      {
        url: "/field/drone.png",
        title: "Drone",
        note: "Equipo para recopilación de imágenes aéreas de alta resolución. (DJI Mavic 2 Pro)",
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
        url: "/field/estadistica-segun-uso.png",
        title: "Clasificacion y porcentajes de edificaciones según uso.",
        note: "Resultados del análisis de 6 edificaciones. fuente: elaboración propia.",
      },
      {
        url: "/field/estadistica-nivel-1-femap154.png",
        title: "Estadística puntualización nivel 1 FEMA P-154.",
        note: "Resultados del análisis de 6 edificaciones. fuente: elaboración propia.",
      },
      {
        url: "/field/indice-fema-p154.png",
        title: "Indice de vulnerabilidad sísmica según FEMA P-154.",
        note: "Resultados del indice de vulnerabilidad sísmica según FEMA P-154. fuente: elaboración propia.",
      },
      {
        url: "/field/puntuacion-de-edificaciones.png",
        title: "Puntuacion Final de edificaciones evaluadas.",
        note: " Resultados del análisis de 6 edificaciones. fuente: elaboración propia.",
      },
    ],
  },
  {
    label: "Conclusiones",
    content: `El puntaje de la edificación que presenta alta vulnerabilidad sísmica con un puntaje SL1 = 0.3.
Se requiere una evaluación estructural detallada para definir medidas de reforzamiento.
Recomendaciones:
 Reforzar elementos verticales y horizontales.
 Sustituir adiciones en madera por materiales normativos.
Implementar medidas de mitigación para parapetos y elementos no estructurales.
 Promover capacitaciones en construcción sismo-resistente en el sector habitacional.’
A nivel general mas del 90 % de las edificaciones evaluadas requieren una evaluación detallada por un ingeniero estructuralista debido a la mala gestión urbana y la falta de cumplimiento de construcción. Se recomienda concientizar sobre las instalaciones de elementos no estructurales. Se encontraron aires acondicionados instalados en ubicaciones riesgosas tales como zona donde pasan peatonales.

`,
    figures: [],
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
    bio: "Maestrante en Ingenieria en Geotecnia y Cimentaciones.Ingeniero Inspector de Obras con amplia experiencia en supervisión de proyectos.",
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
  <Box sx={{ my: 1, width: "100%", justifyItems: "center" }}>
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
        display: "block",
        width: "50%",
        minWidth: "200px",
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
  const stepperRef = React.useRef<HTMLDivElement>(null);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    stepperRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    stepperRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleReset = () => {
    setActiveStep(0);
    stepperRef.current?.scrollIntoView({ behavior: "smooth" });
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

  return (
    <>
      <Header />
      <ThemeProvider theme={theme}>
        <Container
          maxWidth="xl"
          sx={{ my: 0, position: "relative", zIndex: 1 }}
          className="bg-[url(/field/edificio.jpeg)] bg-cover bg-fixed bg-center"
          disableGutters
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
                  </Box>
                </Box>
              ))}
            </Box>

            <Divider
              sx={{ my: 4, borderColor: "primary.main", borderWidth: "1px" }}
            />

            <Box component="section" sx={{ textAlign: "center", my: 4 }}>
              <Typography variant="h5" component="h2" gutterBottom>
                Video Explicativo
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                Vea un resumen en video de este artículo de investigación.
              </Typography>
              <Button
                variant="contained"
                color="primary"
                startIcon={<PlayCircleOutlineIcon />}
                href="https://1drv.ms/v/c/d9beab85bd96af20/IQBcSW3prc4IToS9EyrEOgRgAVwDkHTmCB-aTXmzdxfwPSE?e=b3w4sk" // TODO: Reemplazar con el link real del video
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver Video
              </Button>
            </Box>

            <Divider
              sx={{ my: 4, borderColor: "primary.main", borderWidth: "1px" }}
            />

            <Box ref={stepperRef}>
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
                                  textAlign: "justify",
                                  textJustify: "inter-word",
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
                                    <Grid size={12} key={fig.number}>
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
                  <Button
                    onClick={handleReset}
                    sx={{ mt: 2 }}
                    variant="outlined"
                  >
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
        </Container>
      </ThemeProvider>
    </>
  );
}
