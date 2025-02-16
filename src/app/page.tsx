import { Box, Container, Grid, Typography, Card, CardContent } from "@mui/material";
import Image from "next/image";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import DownloadButtons from "@/components/DownloadButtons";

export default function HomePage() {
  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navigation />

      <Container maxWidth="lg" sx={{ py: 0, flex: 1 }}>
        <Grid container spacing={4} alignItems="center" sx={{ mt: 0, mb: 4 }}>
          <Grid item xs={12} md={6}>
            <Typography color="#00bf63" variant="h4" component="h1" gutterBottom>
              Scan. Ask AI. Eat Smarter.
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{
                fontFamily: "'Pacifico', cursive",
                fontSize: "1.3rem",
              }}
            >
              At <span style={{ color: "#00BF63", fontWeight: "bold" }}>Was2Eat</span>, we’re on a
              mission to transform how the world interacts with food. We empower consumers and
              businesses to make smarter, healthier, and more ethical decisions by turning complex
              food data into actionable insights.
            </Typography>

            <DownloadButtons />
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
          >
            <Box
              sx={{
                position: "relative",
                maxWidth: "100%",
                maxHeight: "90vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden",
              }}
            >
              <Image
                src="/images/logo-transparent-without-text.png"
                alt="App screenshot"
                width={500}
                height={500}
                style={{
                  objectFit: "contain",
                  maxWidth: "80%",
                  height: "auto",
                  display: "block",
                  margin: "auto",
                }}
              />
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ textAlign: "center", mt: 20, mb: 4 }}>
          <Typography color="#00bf63" variant="h3" gutterBottom>
            Why Was2Eat?
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ mb: 4, fontFamily: "'Pacifico', cursive" }}
          >
            Designed with your needs in mind
          </Typography>
          <Grid container spacing={4}>
            {[
              {
                title: "Healthier Recommendations",
                content:
                  "Get AI-powered suggestions for healthier product alternatives based on your scans.",
              },
              {
                title: "Ask AI Chatbot",
                content:
                  "Instantly ask our AI chatbot for detailed insights about products and ingredients.",
              },
              {
                title: "Track Your Health Data",
                content:
                  "Monitor your weekly and monthly consumption trends to improve your diet choices.",
              },
            ].map((feature, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card sx={{ height: "100%", boxShadow: 3, borderRadius: 10 }}>
                  <CardContent sx={{ p: 4 }}>
                    <Typography variant="h5" gutterBottom>
                      {feature.title}
                    </Typography>
                    <Typography color="text.secondary">{feature.content}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>

      <Footer />
    </Box>
  );
}
