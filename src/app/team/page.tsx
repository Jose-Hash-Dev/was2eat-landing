import { Box, Container, Grid, Typography, Avatar, Divider } from "@mui/material";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

const teamMembers = [
  {
    name: "Naz Demirsoy",
    role: "Co-Founder | Frontend & AI Developer",
    description:
      "Naz is a Master's student in Applied Data Science at the University of Göttingen. Passionate about AI-driven innovation, she focuses on frontend development and AI model implementation for Was2Eat.",
    image: "/images/team/naz-demirsoy.jpeg",
  },
  {
    name: "Burak Colak",
    role: "Co-Founder | Backend & AI Engineer",
    description:
      "Burak is a Master's student in Applied Data Science at the University of Göttingen. He specializes in backend development, ensuring secure, scalable infrastructure while optimizing AI functionalities.",
    image: "/images/team/burak-colak.jpeg",
  },
  {
    name: "Yusif Hashimov",
    role: "Co-Founder | Frontend & AI Developer",
    description:
      "Yusif is a Master's student in Applied Data Science at the University of Göttingen. He is dedicated to frontend development and AI-powered features, enhancing the user experience at Was2Eat.",
    image: "/images/team/yusif-hashimov.png",
  },
];

export default function AboutPage() {
  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navigation />

      <Container maxWidth="lg" sx={{ py: 6, flex: 1, textAlign: "center" }}>
        <Typography variant="h3" color="#00bf63" gutterBottom>
          Team
        </Typography>

        <Typography
          variant="h6"
          color="text.secondary"
          sx={{ mb: 4, fontFamily: "'Pacifico', cursive", fontSize: "1.3rem" }}
        >
          Meet the team behind Was2Eat, dedicated to making food choices smarter and healthier.
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {teamMembers.map((member, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <Avatar
                src={member.image}
                alt={member.name}
                sx={{ width: 150, height: 150, margin: "0 auto", mb: 2 }}
              />
              <Typography color="#00bf63" variant="h5" fontWeight="bold">
                {member.name}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "'Pacifico', cursive",
                  fontSize: "1.1rem",
                }}
                variant="subtitle1"
                color="text.secondary"
              >
                {member.role}
              </Typography>
              <Typography variant="body1" sx={{ mt: 1 }}>
                {member.description}
              </Typography>
            </Grid>
          ))}
        </Grid>

        <Divider color="#00bf63" sx={{ my: 6 }} />
      </Container>

      <Footer />
    </Box>
  );
}
