"use client";

import * as React from "react";
import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
  Grid,
  createTheme,
  ThemeProvider,
  Link,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Header from "../components/Header/header";

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

export default function ContactUsPage() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log({ name, email, message });
    alert("Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.");
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
      <Header />
      <ThemeProvider theme={theme}>
        <Container
          disableGutters
          className="bg-[url(/field/edificio.jpeg)] bg-cover bg-fixed bg-center w-full"
          sx={{  position: "relative", zIndex: 1 }}
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
                color: "primary.main",
                textShadow: "2px 2px 8px rgba(0,0,0,0.7)",
              }}
            >
              Contáctenos
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              gutterBottom
              align="center"
              sx={{ mb: 4 }}
            >
              ¿Tienes alguna pregunta o comentario? Rellena el formulario a
              continuación.
            </Typography>

            <Grid container spacing={4}>
              <Grid size={12}>
                <Typography variant="h5" component="h2" gutterBottom>
                  Información de Contacto
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <LocationOnIcon sx={{ mr: 2, color: "primary.main" }} />
                  <Typography>Santo Domingo, República Dominicana</Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <EmailIcon sx={{ mr: 2, color: "primary.main" }} />
                  <Link href="mailto:jose142578@gmail.com" color="inherit">
                    jose142578@gmail.com
                  </Link>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <PhoneIcon sx={{ mr: 2, color: "primary.main" }} />
                  <Typography>+1 (809) 123-4567</Typography>
                </Box>
              </Grid>
              <Grid size={12}>
                <Box component="form" onSubmit={handleSubmit} noValidate>
                  <TextField
                    label="Nombre"
                    fullWidth
                    required
                    margin="normal"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <TextField
                    label="Correo Electrónico"
                    type="email"
                    fullWidth
                    required
                    margin="normal"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <TextField
                    label="Mensaje"
                    multiline
                    rows={5}
                    fullWidth
                    required
                    margin="normal"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{ mt: 2, py: 1.5 }}
                  >
                    Enviar Mensaje
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Container>
      </ThemeProvider>
    </>
  );
}
