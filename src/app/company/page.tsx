import { Box, Container, Grid, Typography, Avatar, IconButton, Tooltip } from "@mui/material";
import Image from "next/image";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const teamMembers = [
  {
    name: "Naz Demirsoy",
    role: "Co-Founder | Frontend & AI Developer",
    description:
      "Naz is a Master's student in Applied Data Science at the University of Göttingen. Passionate about AI-driven innovation, she focuses on frontend development and AI model implementation for Was2Eat.",
    image: "/images/team/naz-demirsoy.jpeg",
    linkedin: "https://www.linkedin.com/in/nazdemirsoy",
    github: "https://github.com/nazdemirsoyy",
  },
  {
    name: "Burak Colak",
    role: "Co-Founder | Backend & AI Engineer",
    description:
      "Burak is a Master's student in Applied Data Science at the University of Göttingen. He specializes in backend development, ensuring secure, scalable infrastructure while optimizing AI functionalities.",
    image: "/images/team/burak-colak.jpeg",
    linkedin: "https://www.linkedin.com/in/burakcolak/",
    github: "https://github.com/colakburak",
  },
  {
    name: "Yusif Hashimov",
    role: "Co-Founder | Frontend & AI Developer",
    description:
      "Yusif is a Master's student in Applied Data Science at the University of Göttingen. He is dedicated to frontend development and AI-powered features, enhancing the user experience at Was2Eat.",
    image: "/images/team/yusif-hashimov.png",
    linkedin: "https://www.linkedin.com/in/yusif-hashimov/",
    github: "https://github.com/Jose-Hash-Dev",
  },
];

export default function CompanyPage() {
  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navigation />

      <Container maxWidth="md" sx={{ py: { xs: 4, md: 6 }, flex: 1 }}>
        {/* Team Section - Moved to top */}
        <Box sx={{ textAlign: "center", mb: { xs: 6, md: 8 } }}>
          <Typography
            variant="h3"
            component="h2"
            gutterBottom
            sx={{
              fontFamily: "Kalam, cursive",
              fontWeight: 400,
              color: "#00BF63",
              fontSize: { xs: "1.7rem", md: "2rem" },
              mb: 2,
            }}
          >
            Our Team
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "#7f8c8d",
              fontWeight: 400,
              lineHeight: 1.6,
              fontSize: { xs: "1rem", md: "1.1rem" },
              maxWidth: "700px",
              mx: "auto",
            }}
          >
            Meet the passionate team behind Was2Eat, dedicated to making food choices smarter and
            healthier through innovative AI technology.
          </Typography>
        </Box>

        {/* Team Members */}
        <Grid container spacing={4} justifyContent="center" sx={{ mb: 8 }}>
          {teamMembers.map((member, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box sx={{ textAlign: "center", height: "100%" }}>
                <Box
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    mb: 2,
                  }}
                >
                  <Avatar
                    src={member.image}
                    alt={member.name}
                    sx={{
                      width: { xs: 120, md: 150 },
                      height: { xs: 120, md: 150 },
                      boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
                      border: "3px solid #00BF63",
                    }}
                  />
                </Box>
                <Typography
                  variant="h5"
                  sx={{
                    fontFamily: "Kalam, cursive",
                    fontWeight: 400,
                    color: "#00BF63",
                    fontSize: { xs: "1.3rem", md: "1.5rem" },
                    mb: 1,
                  }}
                >
                  {member.name}
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{
                    color: "#666",
                    fontSize: { xs: "0.9rem", md: "1rem" },
                    fontWeight: 500,
                    mb: 2,
                  }}
                >
                  {member.role}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#666",
                    fontSize: { xs: "0.85rem", md: "0.9rem" },
                    lineHeight: 1.5,
                    mb: 2,
                  }}
                >
                  {member.description}
                </Typography>

                <Box sx={{ display: "flex", justifyContent: "center", gap: 1, mt: 2 }}>
                  <Tooltip title="LinkedIn">
                    <IconButton
                      href={member.linkedin}
                      target="_blank"
                      sx={{
                        color: "#0077B5",
                        "&:hover": {
                          transform: "scale(1.1)",
                          transition: "transform 0.2s ease",
                        },
                      }}
                    >
                      <LinkedInIcon sx={{ fontSize: { xs: 28, md: 32 } }} />
                    </IconButton>
                  </Tooltip>

                  <Tooltip title="GitHub">
                    <IconButton
                      href={member.github}
                      target="_blank"
                      sx={{
                        color: "#333",
                        "&:hover": {
                          transform: "scale(1.1)",
                          transition: "transform 0.2s ease",
                        },
                      }}
                    >
                      <GitHubIcon sx={{ fontSize: { xs: 28, md: 32 } }} />
                    </IconButton>
                  </Tooltip>
                </Box>

                {/* Divider below each team member (except the last one) */}
                <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
                  <Box
                    sx={{
                      width: "80%",
                      height: "1px",
                      background:
                        index < teamMembers.length - 1
                          ? "linear-gradient(90deg, transparent 0%, #e0e0e0 20%, #e0e0e0 80%, transparent 100%)"
                          : "transparent",
                    }}
                  />
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* About Was2Eat Section */}
        <Box sx={{ textAlign: "center", mb: { xs: 6, md: 8 } }}>
          <Typography
            variant="h3"
            component="h2"
            gutterBottom
            sx={{
              fontFamily: "Kalam, cursive",
              fontWeight: 400,
              color: "#00BF63",
              fontSize: { xs: "1.7rem", md: "2rem" },
              mb: 2,
            }}
          >
            About Was2Eat
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "#7f8c8d",
              fontWeight: 400,
              lineHeight: 1.6,
              fontSize: { xs: "1rem", md: "1.1rem" },
              maxWidth: "800px",
              mx: "auto",
              mb: 4,
            }}
          >
            Empowering you to make informed, healthier food choices with every scan through
            cutting-edge AI technology and science-backed nutrition insights.
          </Typography>
        </Box>

        {/* About Content - Using translation.json data */}
        <Box sx={{ mb: 6, textAlign: "left", maxWidth: "1200px", mx: "auto" }}>
          <Grid container spacing={4}>
            {/* Left Column */}
            <Grid item xs={12} md={6}>
              {/* Our Mission */}
              <Box sx={{ mb: 5 }}>
                <Typography
                  variant="h5"
                  sx={{
                    fontFamily: "Kalam, cursive",
                    fontWeight: 400,
                    color: "#2c3e50",
                    fontSize: { xs: "1.4rem", md: "1.5rem" },
                    mb: 2,
                    textAlign: "center",
                  }}
                >
                  Our Mission
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                  <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
                    <Box sx={{ flexShrink: 0, mt: 0.5 }}>
                      <Image
                        src="/images/logo.png"
                        alt="Was2Eat Logo"
                        width={16}
                        height={16}
                        style={{
                          width: "16px",
                          height: "16px",
                        }}
                      />
                    </Box>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#666",
                        fontSize: { xs: "0.9rem", md: "0.95rem" },
                        lineHeight: 1.6,
                      }}
                    >
                      Empower you to make informed, healthier food choices with every scan.
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
                    <Box sx={{ flexShrink: 0, mt: 0.5 }}>
                      <Image
                        src="/images/logo.png"
                        alt="Was2Eat Logo"
                        width={16}
                        height={16}
                        style={{
                          width: "16px",
                          height: "16px",
                        }}
                      />
                    </Box>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#666",
                        fontSize: { xs: "0.9rem", md: "0.95rem" },
                        lineHeight: 1.6,
                      }}
                    >
                      Provide instant, science-backed nutrition insights through cutting-edge AI
                      technology.
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
                    <Box sx={{ flexShrink: 0, mt: 0.5 }}>
                      <Image
                        src="/images/logo.png"
                        alt="Was2Eat Logo"
                        width={16}
                        height={16}
                        style={{
                          width: "16px",
                          height: "16px",
                        }}
                      />
                    </Box>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#666",
                        fontSize: { xs: "0.9rem", md: "0.95rem" },
                        lineHeight: 1.6,
                      }}
                    >
                      Transform complex food data into clear, actionable health guidance.
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
                    <Box sx={{ flexShrink: 0, mt: 0.5 }}>
                      <Image
                        src="/images/logo.png"
                        alt="Was2Eat Logo"
                        width={16}
                        height={16}
                        style={{
                          width: "16px",
                          height: "16px",
                        }}
                      />
                    </Box>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#666",
                        fontSize: { xs: "0.9rem", md: "0.95rem" },
                        lineHeight: 1.6,
                      }}
                    >
                      Promote better eating habits through comprehensive product analysis and health
                      tracking.
                    </Typography>
                  </Box>
                </Box>
              </Box>

              {/* How Was2Eat Works */}
              <Box sx={{ mb: 5 }}>
                <Typography
                  variant="h5"
                  sx={{
                    fontFamily: "Kalam, cursive",
                    fontWeight: 400,
                    color: "#2c3e50",
                    fontSize: { xs: "1.4rem", md: "1.5rem" },
                    mb: 2,
                    textAlign: "center",
                  }}
                >
                  How Was2Eat Works
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                  <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
                    <Box sx={{ flexShrink: 0, mt: 0.5 }}>
                      <Image
                        src="/images/logo.png"
                        alt="Was2Eat Logo"
                        width={16}
                        height={16}
                        style={{
                          width: "16px",
                          height: "16px",
                        }}
                      />
                    </Box>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#666",
                        fontSize: { xs: "0.9rem", md: "0.95rem" },
                        lineHeight: 1.6,
                      }}
                    >
                      Scan any food barcode to instantly access comprehensive nutrition analysis
                      from our OpenFoodFacts database.
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
                    <Box sx={{ flexShrink: 0, mt: 0.5 }}>
                      <Image
                        src="/images/logo.png"
                        alt="Was2Eat Logo"
                        width={16}
                        height={16}
                        style={{
                          width: "16px",
                          height: "16px",
                        }}
                      />
                    </Box>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#666",
                        fontSize: { xs: "0.9rem", md: "0.95rem" },
                        lineHeight: 1.6,
                      }}
                    >
                      Get dual scoring with official Nutri-Score (A-E rating) plus our proprietary
                      AI-enhanced Health Score (0-100).
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
                    <Box sx={{ flexShrink: 0, mt: 0.5 }}>
                      <Image
                        src="/images/logo.png"
                        alt="Was2Eat Logo"
                        width={16}
                        height={16}
                        style={{
                          width: "16px",
                          height: "16px",
                        }}
                      />
                    </Box>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#666",
                        fontSize: { xs: "0.9rem", md: "0.95rem" },
                        lineHeight: 1.6,
                      }}
                    >
                      Receive detailed additive safety analysis using official EFSA data combined
                      with AI assessment.
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
                    <Box sx={{ flexShrink: 0, mt: 0.5 }}>
                      <Image
                        src="/images/logo.png"
                        alt="Was2Eat Logo"
                        width={16}
                        height={16}
                        style={{
                          width: "16px",
                          height: "16px",
                        }}
                      />
                    </Box>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#666",
                        fontSize: { xs: "0.9rem", md: "0.95rem" },
                        lineHeight: 1.6,
                      }}
                    >
                      Compare products side-by-side to find healthier alternatives that match your
                      dietary preferences.
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
                    <Box sx={{ flexShrink: 0, mt: 0.5 }}>
                      <Image
                        src="/images/logo.png"
                        alt="Was2Eat Logo"
                        width={16}
                        height={16}
                        style={{
                          width: "16px",
                          height: "16px",
                        }}
                      />
                    </Box>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#666",
                        fontSize: { xs: "0.9rem", md: "0.95rem" },
                        lineHeight: 1.6,
                      }}
                    >
                      Track your daily nutrition intake with our advanced Health Tracker and see
                      your progress over time.
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
                    <Box sx={{ flexShrink: 0, mt: 0.5 }}>
                      <Image
                        src="/images/logo.png"
                        alt="Was2Eat Logo"
                        width={16}
                        height={16}
                        style={{
                          width: "16px",
                          height: "16px",
                        }}
                      />
                    </Box>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#666",
                        fontSize: { xs: "0.9rem", md: "0.95rem" },
                        lineHeight: 1.6,
                      }}
                    >
                      Build shopping baskets and save products to favorites for easy reference and
                      better meal planning.
                    </Typography>
                  </Box>
                </Box>
              </Box>

              {/* Your Privacy Matters */}
              <Box sx={{ mb: 5 }}>
                <Typography
                  variant="h5"
                  sx={{
                    fontFamily: "Kalam, cursive",
                    fontWeight: 400,
                    color: "#2c3e50",
                    fontSize: { xs: "1.4rem", md: "1.5rem" },
                    mb: 2,
                    textAlign: "center",
                  }}
                >
                  Your Privacy Matters
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                  <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
                    <Box sx={{ flexShrink: 0, mt: 0.5 }}>
                      <Image
                        src="/images/logo.png"
                        alt="Was2Eat Logo"
                        width={16}
                        height={16}
                        style={{
                          width: "16px",
                          height: "16px",
                        }}
                      />
                    </Box>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#666",
                        fontSize: { xs: "0.9rem", md: "0.95rem" },
                        lineHeight: 1.6,
                      }}
                    >
                      Your data is never sold, shared, or used for advertising purposes.
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
                    <Box sx={{ flexShrink: 0, mt: 0.5 }}>
                      <Image
                        src="/images/logo.png"
                        alt="Was2Eat Logo"
                        width={16}
                        height={16}
                        style={{
                          width: "16px",
                          height: "16px",
                        }}
                      />
                    </Box>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#666",
                        fontSize: { xs: "0.9rem", md: "0.95rem" },
                        lineHeight: 1.6,
                      }}
                    >
                      Account creation is optional - you can use core scanning features without
                      signing up.
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
                    <Box sx={{ flexShrink: 0, mt: 0.5 }}>
                      <Image
                        src="/images/logo.png"
                        alt="Was2Eat Logo"
                        width={16}
                        height={16}
                        style={{
                          width: "16px",
                          height: "16px",
                        }}
                      />
                    </Box>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#666",
                        fontSize: { xs: "0.9rem", md: "0.95rem" },
                        lineHeight: 1.6,
                      }}
                    >
                      Complete control over your data with easy deletion options in account
                      settings.
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
                    <Box sx={{ flexShrink: 0, mt: 0.5 }}>
                      <Image
                        src="/images/logo.png"
                        alt="Was2Eat Logo"
                        width={16}
                        height={16}
                        style={{
                          width: "16px",
                          height: "16px",
                        }}
                      />
                    </Box>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#666",
                        fontSize: { xs: "0.9rem", md: "0.95rem" },
                        lineHeight: 1.6,
                      }}
                    >
                      Health tracking data is stored securely and only accessible to you.
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
                    <Box sx={{ flexShrink: 0, mt: 0.5 }}>
                      <Image
                        src="/images/logo.png"
                        alt="Was2Eat Logo"
                        width={16}
                        height={16}
                        style={{
                          width: "16px",
                          height: "16px",
                        }}
                      />
                    </Box>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#666",
                        fontSize: { xs: "0.9rem", md: "0.95rem" },
                        lineHeight: 1.6,
                      }}
                    >
                      No tracking of personal eating habits or dietary patterns without explicit
                      consent.
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
                    <Box sx={{ flexShrink: 0, mt: 0.5 }}>
                      <Image
                        src="/images/logo.png"
                        alt="Was2Eat Logo"
                        width={16}
                        height={16}
                        style={{
                          width: "16px",
                          height: "16px",
                        }}
                      />
                    </Box>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#666",
                        fontSize: { xs: "0.9rem", md: "0.95rem" },
                        lineHeight: 1.6,
                      }}
                    >
                      GDPR compliant with full transparency about data collection and use.
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>

            {/* Right Column */}
            <Grid item xs={12} md={6}>
              {/* Powered by AI */}
              <Box sx={{ mb: 5 }}>
                <Typography
                  variant="h5"
                  sx={{
                    fontFamily: "Kalam, cursive",
                    fontWeight: 400,
                    color: "#2c3e50",
                    fontSize: { xs: "1.4rem", md: "1.5rem" },
                    mb: 2,
                    textAlign: "center",
                  }}
                >
                  Powered by AI
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                  <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
                    <Box sx={{ flexShrink: 0, mt: 0.5 }}>
                      <Image
                        src="/images/logo.png"
                        alt="Was2Eat Logo"
                        width={16}
                        height={16}
                        style={{
                          width: "16px",
                          height: "16px",
                        }}
                      />
                    </Box>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#666",
                        fontSize: { xs: "0.9rem", md: "0.95rem" },
                        lineHeight: 1.6,
                      }}
                    >
                      Advanced machine learning algorithms analyze additive interactions and health
                      impacts.
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
                    <Box sx={{ flexShrink: 0, mt: 0.5 }}>
                      <Image
                        src="/images/logo.png"
                        alt="Was2Eat Logo"
                        width={16}
                        height={16}
                        style={{
                          width: "16px",
                          height: "16px",
                        }}
                      />
                    </Box>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#666",
                        fontSize: { xs: "0.9rem", md: "0.95rem" },
                        lineHeight: 1.6,
                      }}
                    >
                      Proprietary health scoring system combining nutrition, additives, and
                      processing levels.
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
                    <Box sx={{ flexShrink: 0, mt: 0.5 }}>
                      <Image
                        src="/images/logo.png"
                        alt="Was2Eat Logo"
                        width={16}
                        height={16}
                        style={{
                          width: "16px",
                          height: "16px",
                        }}
                      />
                    </Box>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#666",
                        fontSize: { xs: "0.9rem", md: "0.95rem" },
                        lineHeight: 1.6,
                      }}
                    >
                      Natural language processing converts complex regulatory data into
                      easy-to-understand summaries.
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
                    <Box sx={{ flexShrink: 0, mt: 0.5 }}>
                      <Image
                        src="/images/logo.png"
                        alt="Was2Eat Logo"
                        width={16}
                        height={16}
                        style={{
                          width: "16px",
                          height: "16px",
                        }}
                      />
                    </Box>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#666",
                        fontSize: { xs: "0.9rem", md: "0.95rem" },
                        lineHeight: 1.6,
                      }}
                    >
                      Continuous learning from global food safety databases improves accuracy over
                      time.
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
                    <Box sx={{ flexShrink: 0, mt: 0.5 }}>
                      <Image
                        src="/images/logo.png"
                        alt="Was2Eat Logo"
                        width={16}
                        height={16}
                        style={{
                          width: "16px",
                          height: "16px",
                        }}
                      />
                    </Box>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#666",
                        fontSize: { xs: "0.9rem", md: "0.95rem" },
                        lineHeight: 1.6,
                      }}
                    >
                      Transparent AI labeling ensures you always know when content is AI-enhanced
                      vs. official data.
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
                    <Box sx={{ flexShrink: 0, mt: 0.5 }}>
                      <Image
                        src="/images/logo.png"
                        alt="Was2Eat Logo"
                        width={16}
                        height={16}
                        style={{
                          width: "16px",
                          height: "16px",
                        }}
                      />
                    </Box>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#666",
                        fontSize: { xs: "0.9rem", md: "0.95rem" },
                        lineHeight: 1.6,
                      }}
                    >
                      Real-time nutrition calculations and personalized health recommendations.
                    </Typography>
                  </Box>
                </Box>
              </Box>

              {/* Data Sources & Accuracy */}
              <Box sx={{ mb: 5 }}>
                <Typography
                  variant="h5"
                  sx={{
                    fontFamily: "Kalam, cursive",
                    fontWeight: 400,
                    color: "#2c3e50",
                    fontSize: { xs: "1.4rem", md: "1.5rem" },
                    mb: 2,
                    textAlign: "center",
                  }}
                >
                  Data Sources & Accuracy
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                  <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
                    <Box sx={{ flexShrink: 0, mt: 0.5 }}>
                      <Image
                        src="/images/logo.png"
                        alt="Was2Eat Logo"
                        width={16}
                        height={16}
                        style={{
                          width: "16px",
                          height: "16px",
                        }}
                      />
                    </Box>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#666",
                        fontSize: { xs: "0.9rem", md: "0.95rem" },
                        lineHeight: 1.6,
                      }}
                    >
                      Product information sourced from OpenFoodFacts, the world&apos;s largest
                      collaborative food database.
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
                    <Box sx={{ flexShrink: 0, mt: 0.5 }}>
                      <Image
                        src="/images/logo.png"
                        alt="Was2Eat Logo"
                        width={16}
                        height={16}
                        style={{
                          width: "16px",
                          height: "16px",
                        }}
                      />
                    </Box>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#666",
                        fontSize: { xs: "0.9rem", md: "0.95rem" },
                        lineHeight: 1.6,
                      }}
                    >
                      Additive safety data directly from EFSA (European Food Safety Authority)
                      official assessments.
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
                    <Box sx={{ flexShrink: 0, mt: 0.5 }}>
                      <Image
                        src="/images/logo.png"
                        alt="Was2Eat Logo"
                        width={16}
                        height={16}
                        style={{
                          width: "16px",
                          height: "16px",
                        }}
                      />
                    </Box>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#666",
                        fontSize: { xs: "0.9rem", md: "0.95rem" },
                        lineHeight: 1.6,
                      }}
                    >
                      AI enhancement fills gaps in official data using established regulatory
                      patterns and scientific literature.
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
                    <Box sx={{ flexShrink: 0, mt: 0.5 }}>
                      <Image
                        src="/images/logo.png"
                        alt="Was2Eat Logo"
                        width={16}
                        height={16}
                        style={{
                          width: "16px",
                          height: "16px",
                        }}
                      />
                    </Box>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#666",
                        fontSize: { xs: "0.9rem", md: "0.95rem" },
                        lineHeight: 1.6,
                      }}
                    >
                      All AI-generated content is clearly labeled and distinguished from official
                      regulatory data.
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
                    <Box sx={{ flexShrink: 0, mt: 0.5 }}>
                      <Image
                        src="/images/logo.png"
                        alt="Was2Eat Logo"
                        width={16}
                        height={16}
                        style={{
                          width: "16px",
                          height: "16px",
                        }}
                      />
                    </Box>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#666",
                        fontSize: { xs: "0.9rem", md: "0.95rem" },
                        lineHeight: 1.6,
                      }}
                    >
                      Regular database updates ensure you get the most current product information
                      available.
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
                    <Box sx={{ flexShrink: 0, mt: 0.5 }}>
                      <Image
                        src="/images/logo.png"
                        alt="Was2Eat Logo"
                        width={16}
                        height={16}
                        style={{
                          width: "16px",
                          height: "16px",
                        }}
                      />
                    </Box>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#666",
                        fontSize: { xs: "0.9rem", md: "0.95rem" },
                        lineHeight: 1.6,
                      }}
                    >
                      Continuous algorithm improvements based on user feedback and new scientific
                      research.
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* Social Media Section */}
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
          <Box sx={{ display: "flex", justifyContent: "center", gap: 3, mt: 2, mb: 4 }}>
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
      </Container>

      <Footer />
    </Box>
  );
}
