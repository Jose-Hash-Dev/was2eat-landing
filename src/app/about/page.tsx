import { Box, Container, Typography, Grid, IconButton } from "@mui/material";
import Image from "next/image";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

export default function AboutPage() {
  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navigation />

      <Container maxWidth="md" sx={{ py: { xs: 4, md: 6 }, flex: 1 }}>
        {/* Hero Section */}
        <Box sx={{ textAlign: "center", mb: { xs: 6, md: 8 } }}>
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            sx={{
              fontFamily: "Kalam, cursive",
              fontWeight: 400,
              color: "#00BF63",
              fontSize: { xs: "2rem", md: "2.5rem" },
              mb: 2,
            }}
          >
            About Was2Eat
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "#00BF63",
              fontWeight: 400,
              lineHeight: 1.6,
              fontSize: { xs: "1rem", md: "1.1rem" },
              maxWidth: "800px",
              mx: "auto",
              mb: 6,
            }}
          >
            Empowering you to make informed, healthier food choices with every scan through
            cutting-edge AI technology and science-backed nutrition insights.
          </Typography>
        </Box>

        {/* About Was2Eat Section */}
        <Box sx={{ mb: 6, textAlign: "left", maxWidth: "900px", mx: "auto" }}>
          <Typography
            variant="body1"
            sx={{
              color: "#666",
              fontSize: { xs: "0.95rem", md: "1rem" },
              lineHeight: 1.6,
              mb: 4,
              textAlign: "center",
            }}
          >
            Was2Eat empowers you to make informed, healthier food choices with every scan through
            cutting-edge AI technology and science-backed nutrition insights. Our app provides
            instant nutrition analysis, health scores, and additive safety information to help you
            understand what&apos;s really in your food.
          </Typography>

          <Grid container spacing={4} sx={{ mb: 6 }}>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: "center" }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: "Kalam, cursive",
                    fontWeight: 400,
                    color: "#00BF63",
                    fontSize: { xs: "1.2rem", md: "1.3rem" },
                    mb: 1,
                  }}
                >
                  Our Mission
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#666",
                    fontSize: { xs: "0.9rem", md: "0.95rem" },
                    lineHeight: 1.5,
                  }}
                >
                  Transform complex food data into clear, actionable health guidance for better
                  eating habits.
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: "center" }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: "Kalam, cursive",
                    fontWeight: 400,
                    color: "#00BF63",
                    fontSize: { xs: "1.2rem", md: "1.3rem" },
                    mb: 1,
                  }}
                >
                  Technology
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#666",
                    fontSize: { xs: "0.9rem", md: "0.95rem" },
                    lineHeight: 1.5,
                  }}
                >
                  AI-powered analysis using EFSA data and OpenFoodFacts database for comprehensive
                  nutrition insights.
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: "center" }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: "Kalam, cursive",
                    fontWeight: 400,
                    color: "#00BF63",
                    fontSize: { xs: "1.2rem", md: "1.3rem" },
                    mb: 1,
                  }}
                >
                  Privacy
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#666",
                    fontSize: { xs: "0.9rem", md: "0.95rem" },
                    lineHeight: 1.5,
                  }}
                >
                  Your data is never sold or shared. GDPR compliant with full transparency and user
                  control.
                </Typography>
              </Box>
            </Grid>
          </Grid>

          {/* Additional 3 sections */}
          <Grid container spacing={4} sx={{ mb: 6 }}>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: "center" }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: "Kalam, cursive",
                    fontWeight: 400,
                    color: "#00BF63",
                    fontSize: { xs: "1.2rem", md: "1.3rem" },
                    mb: 1,
                  }}
                >
                  Health Tracking
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#666",
                    fontSize: { xs: "0.9rem", md: "0.95rem" },
                    lineHeight: 1.5,
                  }}
                >
                  Monitor your daily nutrition intake with advanced analytics and personalized goal
                  tracking for better health outcomes.
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: "center" }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: "Kalam, cursive",
                    fontWeight: 400,
                    color: "#00BF63",
                    fontSize: { xs: "1.2rem", md: "1.3rem" },
                    mb: 1,
                  }}
                >
                  Smart Comparison
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#666",
                    fontSize: { xs: "0.9rem", md: "0.95rem" },
                    lineHeight: 1.5,
                  }}
                >
                  Compare products side-by-side with detailed nutritional breakdowns to find the
                  healthiest options for your lifestyle.
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: "center" }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: "Kalam, cursive",
                    fontWeight: 400,
                    color: "#00BF63",
                    fontSize: { xs: "1.2rem", md: "1.3rem" },
                    mb: 1,
                  }}
                >
                  Global Database
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#666",
                    fontSize: { xs: "0.9rem", md: "0.95rem" },
                    lineHeight: 1.5,
                  }}
                >
                  Access millions of products from OpenFoodFacts, the world&apos;s largest
                  collaborative food database with verified information.
                </Typography>
              </Box>
            </Grid>
          </Grid>

          {/* Social Media Links */}
          <Box sx={{ textAlign: "center", mt: 6 }}>
            <Typography
              variant="h5"
              sx={{
                fontFamily: "Kalam, cursive",
                fontWeight: 400,
                color: "#00BF63",
                fontSize: { xs: "1.5rem", md: "1.7rem" },
                mb: 3,
              }}
            >
              Follow Us
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#666",
                fontSize: { xs: "0.95rem", md: "1rem" },
                lineHeight: 1.6,
                mb: 3,
              }}
            >
              Stay connected with Was2Eat for the latest updates, nutrition tips, and app features.
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center", gap: 3, mt: 2 }}>
              <IconButton
                href="https://www.linkedin.com/company/was2eat"
                target="_blank"
                sx={{ p: 0 }}
              >
                <Image
                  src="/images/social-media-icons/linkedin.png"
                  alt="LinkedIn"
                  width={40}
                  height={40}
                  style={{ width: "38px", height: "auto" }}
                />
              </IconButton>
              <IconButton href="https://www.instagram.com/was2eat" target="_blank" sx={{ p: 0 }}>
                <Image
                  src="/images/social-media-icons/instagram.png"
                  alt="Instagram"
                  width={40}
                  height={40}
                  style={{ width: "40px", height: "40px" }}
                />
              </IconButton>
              <IconButton href="https://www.tiktok.com/@was2eat" target="_blank" sx={{ p: 0 }}>
                <Image
                  src="/images/social-media-icons/tiktok.png"
                  alt="TikTok"
                  width={40}
                  height={40}
                  style={{ width: "40px", height: "40px" }}
                />
              </IconButton>
              <IconButton href="https://www.facebook.com/was2eat" target="_blank" sx={{ p: 0 }}>
                <Image
                  src="/images/social-media-icons/facebook.webp"
                  alt="Facebook"
                  width={40}
                  height={40}
                  style={{ width: "40px", height: "40px" }}
                />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Container>

      <Footer />
    </Box>
  );
}
