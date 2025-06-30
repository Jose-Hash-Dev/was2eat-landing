"use client";

import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import DownloadButtons from "@/components/DownloadButtons";
import { useState, useEffect } from "react";

export default function HomePage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [absoluteMousePosition, setAbsoluteMousePosition] = useState({ x: 0, y: 0 });
  const [currentProduct, setCurrentProduct] = useState("history-screen.png");
  const [lastScannedProduct, setLastScannedProduct] = useState<string | null>(null);
  const [isScanning, setIsScanning] = useState(false);

  // Product mapping
  const products = [
    { id: "8000500269169", name: "Nutella" },
    { id: "8000500242612", name: "Ferrero Rocher" },
    { id: "5056053303631", name: "Protein Bar" },
    { id: "3760049798609", name: "Organic Juice" },
    { id: "3017620422003", name: "Yogurt" },
    { id: "00253352", name: "Cereal" },
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
      setAbsoluteMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleProductHover = (productId: string) => {
    setCurrentProduct(`${productId}.png`);
    setLastScannedProduct(`${productId}.png`);
    setIsScanning(true);
    setTimeout(() => setIsScanning(false), 300);
  };

  const handleProductLeave = () => {
    setCurrentProduct(lastScannedProduct || "history-screen.png");
    setIsScanning(false);
  };

  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navigation />

      {/* Hero Section with Parallax Mouse Tracking */}
      <Box
        sx={{
          minHeight: "70vh",
          background: "linear-gradient(45deg, #ffffff 30%, #f0f8f0 90%)",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          pt: { xs: 2, md: 4 },
          pb: { xs: 4, md: 6 },
        }}
      >
        {/* Interactive Product Images */}
        {products.map((product, index) => {
          // Desktop positions - moved to black rectangle area
          const desktopPositions = [
            {
              top: "50%",
              left: "45%",
              transform: `translate(${mousePosition.x * 0.5}px, ${
                mousePosition.y * 0.3
              }px) rotate(15deg)`,
            },
            {
              top: "55%",
              left: "35%",
              transform: `translate(${mousePosition.x * 0.2}px, ${
                mousePosition.y * -0.2
              }px) rotate(-10deg)`,
            },
            {
              top: "65%",
              left: "30%",
              transform: `translate(${mousePosition.x * -0.3}px, ${mousePosition.y * 0.4}px)`,
            },
            {
              top: "50%",
              left: "30%",
              transform: `translate(${mousePosition.x * 0.4}px, ${
                mousePosition.y * -0.3
              }px) rotate(25deg)`,
            },
            {
              top: "70%",
              left: "45%",
              transform: `translate(${mousePosition.x * -0.1}px, ${
                mousePosition.y * 0.2
              }px) rotate(-5deg)`,
            },
            {
              top: "65%",
              left: "18%",
              transform: `translate(${mousePosition.x * 0.3}px, ${
                mousePosition.y * 0.5
              }px) rotate(35deg)`,
            },
          ];

          // Mobile positions - positioned in black rectangle area
          const mobilePositions = [
            { top: "20%", left: "8%", transform: "rotate(10deg)" },
            { top: "30%", left: "25%", transform: "rotate(-15deg)" },
            { top: "50%", left: "5%", transform: "rotate(5deg)" },
            { top: "65%", left: "20%", transform: "rotate(-10deg)" },
          ];

          const maxWidths = [120, 100, 90, 80, 70, 95];
          const mobileMaxWidths = [80, 70, 60, 50]; // Smaller for mobile
          const opacities = [0.7, 0.6, 0.8, 0.5, 0.4, 0.65];

          // Show only 4 products on mobile, all 6 on desktop
          const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
          if (isMobile && index >= 4) return null;

          const currentPositions = isMobile ? mobilePositions : desktopPositions;
          const currentMaxWidths = isMobile ? mobileMaxWidths : maxWidths;
          const currentIndex = isMobile ? Math.min(index, 3) : index;

          return (
            <Box
              key={product.id}
              sx={{
                position: "absolute",
                transition: "all 0.3s ease-out",
                cursor: "pointer",
                zIndex: 2,
                ...currentPositions[currentIndex],
                opacity: opacities[currentIndex],
                display: { xs: index < 4 ? "block" : "none", md: "block" },
                "&:hover": {
                  opacity: 1,
                  transform: `${currentPositions[currentIndex].transform} scale(1.1)`,
                  zIndex: 10,
                },
                // Touch interactions for mobile
                "&:active": {
                  opacity: 1,
                  transform: `${currentPositions[currentIndex].transform} scale(1.1)`,
                  zIndex: 10,
                },
              }}
              onMouseEnter={() => handleProductHover(product.id)}
              onMouseLeave={handleProductLeave}
              // Add touch events for mobile
              onTouchStart={() => handleProductHover(product.id)}
              onTouchEnd={handleProductLeave}
            >
              <Image
                src={`/images/scan-images/product-images/${product.id}.png`}
                alt={product.name}
                width={0}
                height={0}
                sizes="(max-width: 768px) 80px, 120px"
                style={{
                  width: "auto",
                  height: "auto",
                  maxWidth: `${currentMaxWidths[currentIndex]}px`,
                  maxHeight: `${currentMaxWidths[currentIndex]}px`,
                }}
              />
            </Box>
          );
        })}

        {/* Floating Scan Icon that follows mouse - Desktop only */}
        <Box
          sx={{
            position: "fixed",
            left: absoluteMousePosition.x - 15,
            top: absoluteMousePosition.y - 15,
            width: "30px",
            height: "30px",
            pointerEvents: "none",
            zIndex: 1000,
            transition: "all 0.1s ease-out",
            opacity: 0.8,
            display: { xs: "none", md: "block" }, // Hide on mobile
          }}
        >
          {/* Web-compatible Scan Icon */}
          <svg
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            style={{
              color: isScanning ? "#00bf63" : "#2c3e50",
              filter: isScanning
                ? "drop-shadow(0 2px 8px rgba(0,191,99,0.6))"
                : "drop-shadow(0 1px 3px rgba(0,0,0,0.3))",
              transform: isScanning ? "scale(1.3)" : "scale(1)",
              transition: "all 0.2s ease-out",
            }}
          >
            <path
              d="M4 7V6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4H8"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4 17V18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20H8"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16 4H18C18.5304 4 19.0391 4.21071 19.4142 4.58579C19.7893 4.96086 20 5.46957 20 6V7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16 20H18C18.5304 20 19.0391 19.7893 19.4142 19.4142C19.7893 19.0391 20 18.5304 20 18V17"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 12L12 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Box>

        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="flex-start">
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  mt: { xs: 2, md: 4 }, // Add top margin to align with image
                }}
              >
                <Typography
                  variant="h2"
                  component="h1"
                  gutterBottom
                  sx={{
                    fontFamily: "Kalam, cursive",
                    fontWeight: 400,
                    color: "#2c3e50",
                    fontSize: { xs: "1.7rem", md: "2rem" },
                  }}
                >
                  Scan. <span style={{ color: "#00bf63", fontWeight: "700" }}>Ask AI.</span> Eat
                  Smarter.
                </Typography>
                <Typography
                  sx={{
                    mb: 4,
                    color: "#7f8c8d",
                    fontWeight: 400,
                    lineHeight: 1.6,
                    fontSize: { xs: "1rem", md: "1.1rem" },
                  }}
                >
                  Discover what&apos;s really in your food with AI-powered analysis backed by
                  trusted scientific data.
                </Typography>
                <DownloadButtons />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  position: "relative",
                  transform: {
                    xs: isScanning ? "scale(1.02)" : "scale(1)", // Subtle scaling on mobile
                    md: `translate(${mousePosition.x * -0.01}px, ${mousePosition.y * 0.01}px) ${
                      isScanning ? "scale(1.05)" : "scale(1)"
                    }`,
                  },
                  transition: "all 0.3s ease-out",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                {/* Mascot 2 - positioned near the product image, presenting it */}
                <Box
                  sx={{
                    position: "absolute",
                    bottom: -40,
                    left: 280,
                    zIndex: 5,
                    display: { xs: "none", md: "block" }, // Hide on mobile for cleaner look
                  }}
                >
                  <Image
                    src="/images/mascot/1.png"
                    alt="Was2Eat Mascot"
                    width={360}
                    height={360}
                    style={{ width: "360px", height: "auto" }}
                  />
                </Box>
                {/* Mobile scanning indicator */}
                {isScanning && (
                  <Box
                    sx={{
                      position: "absolute",
                      top: -10,
                      right: -10,
                      width: "20px",
                      height: "20px",
                      backgroundColor: "#00bf63",
                      borderRadius: "50%",
                      display: { xs: "flex", md: "none" },
                      alignItems: "center",
                      justifyContent: "center",
                      zIndex: 10,
                      animation: "pulse 1s infinite",
                      "@keyframes pulse": {
                        "0%": { transform: "scale(1)", opacity: 1 },
                        "50%": { transform: "scale(1.2)", opacity: 0.7 },
                        "100%": { transform: "scale(1)", opacity: 1 },
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: "8px",
                        height: "8px",
                        backgroundColor: "white",
                        borderRadius: "50%",
                      }}
                    />
                  </Box>
                )}
                <Box
                  sx={{
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: "12px",
                    width: "240px",
                    minHeight: "240px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    src={
                      currentProduct === "history-screen.png"
                        ? `/images/${currentProduct}`
                        : `/images/scan-images/product-details-screen/${currentProduct}`
                    }
                    alt="Was2Eat App Product Details"
                    width={240}
                    height={0}
                    sizes="(max-width: 768px) 200px, 240px"
                    style={{
                      width: "240px",
                      height: "auto",

                      boxShadow: isScanning
                        ? "0 8px 24px rgba(0,191,99,0.25)"
                        : "0 8px 24px rgba(0,0,0,0.1)",
                      border: isScanning ? "1px solid #00bf63" : "1px solid transparent",
                      transition: "box-shadow 0.3s ease, border 0.3s ease",
                    }}
                  />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* App Features Section */}
      <Box
        sx={{
          py: { xs: 4, md: 6 },
        }}
      >
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1, mb: { xs: 6, md: 8 } }}>
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              sx={{
                fontFamily: "Kalam, cursive",
                fontWeight: 400,
                color: "#2c3e50",
                fontSize: { xs: "1.7rem", md: "2rem" },
              }}
            >
              Everything You Need to
              <span style={{ color: "#00bf63", display: "block" }}>Make Better Food Choices</span>
            </Typography>
          </Box>
        </Container>

        {/* Individual Feature Sections */}
        {[
          {
            title: "Analyze Every Product Instantly",
            description:
              "Scan any food barcode to instantly access comprehensive nutrition analysis from our OpenFoodFacts database. Get dual scoring with official Nutri-Score (A-E rating) plus our proprietary AI-enhanced Health Score (0-100). Receive detailed additive safety analysis using official EFSA data combined with AI assessment to understand exactly what's in your food and how it affects your health.",
            image: "kinder-analysis",
            imagePosition: "left",
          },
          {
            title: "Compare Products Side-by-Side",
            description:
              "Use our smart comparison mode to compare multiple products side-by-side and find healthier alternatives that match your dietary preferences. View visual charts with detailed nutritional breakdowns, health scores, and additive analysis to make informed choices. Sort products by health score, nutrients, or dietary preferences to discover the best options for your lifestyle.",
            image: "product-comparison",
            imagePosition: "right",
          },
          {
            title: "Monitor Your Daily Nutrition",
            description:
              "Track your daily nutrition intake by marking products as consumed and get comprehensive insights into your eating patterns. Set personalized nutrition goals and monitor your progress with daily, weekly, and monthly analytics. View detailed breakdowns of proteins, fats, carbohydrates, fiber, and energy content to understand your nutritional balance and make informed dietary decisions.",
            image: "health-tracker-section",
            imagePosition: "left",
          },
        ].map((feature, index) => (
          <Container
            maxWidth="lg"
            key={index}
            sx={{ position: "relative", zIndex: 1, mb: { xs: 4, md: 6 } }}
          >
            <Grid
              container
              spacing={4}
              alignItems="center"
              direction={feature.imagePosition === "left" ? "row-reverse" : "row"}
            >
              {/* Text Content */}
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    pr: feature.imagePosition === "right" ? { md: 4 } : 0,
                    pl: feature.imagePosition === "left" ? { md: 4 } : 0,
                  }}
                >
                  <Typography
                    variant="h6"
                    component="h3"
                    gutterBottom
                    sx={{
                      fontFamily: "Kalam, cursive",
                      fontWeight: 400,
                      color: "#00BF63",
                      fontSize: { xs: "1.5rem", md: "1.7rem" },
                      lineHeight: 1.3,
                      mb: 1.5,
                    }}
                  >
                    {feature.title}
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{
                      color: "#666",
                      fontSize: { xs: "0.9rem", md: "1rem" },
                      lineHeight: 1.6,
                      mb: 3,
                    }}
                  >
                    {feature.description}
                  </Typography>
                </Box>
              </Grid>

              {/* Feature Image */}
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    position: "relative",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {feature.image === "health-tracker-section" ? (
                    // Health Tracker Section Image
                    <Box
                      sx={{
                        position: "relative",
                        transform: `translate(${
                          mousePosition.x * (feature.imagePosition === "left" ? -0.02 : 0.02)
                        }px, ${mousePosition.y * 0.01}px)`,
                        transition: "transform 0.3s ease-out",
                      }}
                    >
                      <Image
                        src="/images/features-section/health-tracker-section.png"
                        alt="Health Tracker Section"
                        width={300}
                        height={200}
                        style={{
                          width: "400px",
                          height: "auto",
                          maxWidth: "350px",
                        }}
                      />
                    </Box>
                  ) : feature.image === "product-comparison" ? (
                    // Product Comparison Layout with VS
                    <Box
                      sx={{
                        position: "relative",
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                        transform: `translate(${
                          mousePosition.x * (feature.imagePosition === "left" ? -0.02 : 0.02)
                        }px, ${mousePosition.y * 0.01}px)`,
                        transition: "transform 0.3s ease-out",
                      }}
                    >
                      {/* First Product */}
                      <Box
                        sx={{
                          position: "relative",
                        }}
                      >
                        <Image
                          src="/images/scan-images/product-images/8000500242612.png"
                          alt="Product 1"
                          width={120}
                          height={120}
                          style={{
                            width: "auto",
                            height: "auto",
                            maxWidth: "120px",
                          }}
                        />
                      </Box>

                      {/* VS Text */}
                      <Box
                        sx={{
                          background: "rgba(0, 191, 99, 0.1)",
                          border: "2px solid #00bf63",
                          borderRadius: "50%",
                          width: "50px",
                          height: "50px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        <Typography
                          variant="body2"
                          sx={{
                            fontFamily: "Kalam, cursive",
                            fontWeight: 700,
                            color: "#00bf63",
                            fontSize: "1rem",
                          }}
                        >
                          VS
                        </Typography>
                      </Box>

                      {/* Second Product */}
                      <Box
                        sx={{
                          position: "relative",
                        }}
                      >
                        <Image
                          src="/images/scan-images/product-images/3017620422003.png"
                          alt="Product 2"
                          width={120}
                          height={120}
                          style={{
                            width: "auto",
                            height: "auto",
                            maxWidth: "120px",
                          }}
                        />
                      </Box>
                    </Box>
                  ) : feature.image.includes("analysis") || feature.image.includes("kinder") ? (
                    // Special Product Analysis Layout
                    <Box
                      sx={{
                        position: "relative",
                        transform: `translate(${
                          mousePosition.x * (feature.imagePosition === "left" ? -0.02 : 0.02)
                        }px, ${mousePosition.y * 0.01}px)`,
                        transition: "transform 0.3s ease-out",
                      }}
                    >
                      {/* Main Product Image */}
                      <Box
                        sx={{
                          position: "relative",
                        }}
                      >
                        <Image
                          src="/images/scan-images/product-images/8000500242612.png"
                          alt={`${feature.title} Product Analysis`}
                          width={180}
                          height={180}
                          style={{
                            width: "auto",
                            height: "auto",
                            maxWidth: "180px",
                          }}
                        />
                      </Box>

                      {/* Health Score Badge - Different scores for variety */}
                      <Box
                        sx={{
                          position: "absolute",
                          top: -15,
                          right: -10,
                          background: "rgba(255, 255, 255, 0.95)",
                          backdropFilter: "blur(10px)",
                          borderRadius: "20px",
                          px: 2.5,
                          py: 1,
                          border: "2px solid #ff6b35",
                          boxShadow: "0 4px 16px rgba(255, 107, 53, 0.3)",
                          transform: `translate(${mousePosition.x * -0.02}px, ${
                            mousePosition.y * -0.01
                          }px)`,
                          transition: "transform 0.3s ease-out",
                        }}
                      >
                        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                          <Box
                            sx={{
                              width: "10px",
                              height: "10px",
                              borderRadius: "50%",
                              background: "#ff6b35",
                            }}
                          />
                          <Typography
                            variant="body2"
                            sx={{
                              color: "#ff6b35",
                              fontWeight: "bold",
                              fontSize: "0.8rem",
                            }}
                          >
                            Bad - 21/100
                          </Typography>
                        </Box>
                      </Box>

                      {/* Analysis Details - First badge */}
                      <Box
                        sx={{
                          position: "absolute",
                          top: 20,
                          right: -40,
                          background: "rgba(255, 255, 255, 0.95)",
                          backdropFilter: "blur(10px)",
                          borderRadius: "12px",
                          px: 2,
                          py: 1,
                          border: "1px solid rgba(0, 0, 0, 0.1)",
                          boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)",
                          transform: `translate(${mousePosition.x * 0.01}px, ${
                            mousePosition.y * 0.02
                          }px)`,
                          transition: "transform 0.3s ease-out",
                        }}
                      >
                        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                          <Box
                            sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
                          >
                            <Image
                              src="/images/icons/additiveIcon.png"
                              alt="Additive Icon"
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
                              fontSize: "0.75rem",
                              fontWeight: 600,
                            }}
                          >
                            6 additives
                          </Typography>
                        </Box>
                      </Box>

                      {/* Analysis Details - Second badge */}
                      <Box
                        sx={{
                          position: "absolute",
                          bottom: 20,
                          right: -35,
                          background: "rgba(255, 255, 255, 0.95)",
                          backdropFilter: "blur(10px)",
                          borderRadius: "12px",
                          px: 2,
                          py: 1,
                          border: "1px solid rgba(0, 0, 0, 0.1)",
                          boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)",
                          transform: `translate(${mousePosition.x * -0.01}px, ${
                            mousePosition.y * 0.01
                          }px)`,
                          transition: "transform 0.3s ease-out",
                        }}
                      >
                        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                          <Box
                            sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
                          >
                            <Image
                              src="/images/icons/sugarIcon.png"
                              alt="Sugar Icon"
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
                              fontSize: "0.75rem",
                              fontWeight: 600,
                            }}
                          >
                            Too sweet
                          </Typography>
                        </Box>
                      </Box>

                      {/* Analysis Details - Third badge */}
                      <Box
                        sx={{
                          position: "absolute",
                          bottom: -10,
                          right: -25,
                          background: "rgba(255, 255, 255, 0.95)",
                          backdropFilter: "blur(10px)",
                          borderRadius: "12px",
                          px: 2,
                          py: 1,
                          border: "1px solid rgba(0, 0, 0, 0.1)",
                          boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)",
                          transform: `translate(${mousePosition.x * 0.02}px, ${
                            mousePosition.y * -0.01
                          }px)`,
                          transition: "transform 0.3s ease-out",
                        }}
                      >
                        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                          <Box
                            sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
                          >
                            <Image
                              src="/images/icons/caloriesIcon.png"
                              alt="Calories Icon"
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
                              fontSize: "0.75rem",
                              fontWeight: 600,
                            }}
                          >
                            Too caloric
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  ) : (
                    // Regular Feature Image
                    <Box
                      sx={{
                        position: "relative",
                        transform: `translate(${
                          mousePosition.x * (feature.imagePosition === "left" ? -0.02 : 0.02)
                        }px, ${mousePosition.y * 0.01}px)`,
                        transition: "transform 0.3s ease-out",
                      }}
                    >
                      <Image
                        src={`/images/scan-images/product-details-screen/${feature.image}`}
                        alt={`${feature.title} Screen`}
                        width={140}
                        height={140}
                        style={{
                          width: "auto",
                          height: "auto",
                          maxWidth: "140px",
                          borderRadius: "16px",
                          boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                        }}
                      />
                    </Box>
                  )}
                </Box>
              </Grid>
            </Grid>
          </Container>
        ))}
      </Box>

      {/* Data Sources & AI Section */}
      <Box
        sx={{
          py: { xs: 4, md: 6 },
          background: "linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)",
        }}
      >
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              sx={{
                fontFamily: "Kalam, cursive",
                fontWeight: 400,
                color: "#2c3e50",
                fontSize: { xs: "1.7rem", md: "2rem" },
              }}
            >
              Built on
              <span style={{ color: "#00bf63", display: "block" }}>Trusted Science</span>
            </Typography>
          </Box>

          <Grid container spacing={8} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box sx={{ pr: { md: 4 } }}>
                {/* EFSA Compliance */}
                <Box sx={{ mb: 4, display: "flex", alignItems: "flex-start", gap: 2 }}>
                  <Box sx={{ flexShrink: 0, mt: 0.5 }}>
                    <Image
                      src="/images/logo.png"
                      alt="Was2Eat Logo"
                      width={24}
                      height={24}
                      style={{
                        width: "24px",
                        height: "24px",
                      }}
                    />
                  </Box>
                  <Box>
                    <Typography
                      variant="h6"
                      component="h3"
                      gutterBottom
                      sx={{
                        fontFamily: "Kalam, cursive",
                        fontWeight: 400,
                        color: "#00BF63",
                        fontSize: { xs: "1.3rem", md: "1.5rem" },
                        lineHeight: 1.3,
                        mb: 1.5,
                      }}
                    >
                      EFSA Compliance
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: "#666",
                        fontSize: { xs: "0.9rem", md: "1rem" },
                        lineHeight: 1.6,
                      }}
                    >
                      All additive safety evaluations are based on European Food Safety Authority
                      guidelines and official regulatory assessments.
                    </Typography>
                  </Box>
                </Box>

                {/* OpenFoodFacts Integration */}
                <Box sx={{ mb: 4, display: "flex", alignItems: "flex-start", gap: 2 }}>
                  <Box sx={{ flexShrink: 0, mt: 0.5 }}>
                    <Image
                      src="/images/logo.png"
                      alt="Was2Eat Logo"
                      width={24}
                      height={24}
                      style={{
                        width: "24px",
                        height: "24px",
                      }}
                    />
                  </Box>
                  <Box>
                    <Typography
                      variant="h6"
                      component="h3"
                      gutterBottom
                      sx={{
                        fontFamily: "Kalam, cursive",
                        fontWeight: 400,
                        color: "#00BF63",
                        fontSize: { xs: "1.3rem", md: "1.5rem" },
                        lineHeight: 1.3,
                        mb: 1.5,
                      }}
                    >
                      OpenFoodFacts Integration
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: "#666",
                        fontSize: { xs: "0.9rem", md: "1rem" },
                        lineHeight: 1.6,
                      }}
                    >
                      Product data sourced from the world&apos;s largest collaborative food database
                      with millions of verified products.
                    </Typography>
                  </Box>
                </Box>

                {/* Transparent AI Technology */}
                <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
                  <Box sx={{ flexShrink: 0, mt: 0.5 }}>
                    <Image
                      src="/images/logo.png"
                      alt="Was2Eat Logo"
                      width={24}
                      height={24}
                      style={{
                        width: "24px",
                        height: "24px",
                      }}
                    />
                  </Box>
                  <Box>
                    <Typography
                      variant="h6"
                      component="h3"
                      gutterBottom
                      sx={{
                        fontFamily: "Kalam, cursive",
                        fontWeight: 400,
                        color: "#00BF63",
                        fontSize: { xs: "1.3rem", md: "1.5rem" },
                        lineHeight: 1.3,
                        mb: 1.5,
                      }}
                    >
                      Transparent AI Technology
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: "#666",
                        fontSize: { xs: "0.9rem", md: "1rem" },
                        lineHeight: 1.6,
                      }}
                    >
                      Our machine learning algorithms enhance official data while maintaining
                      complete transparency. All AI-generated insights are clearly labeled and
                      distinguished from regulatory information.
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  position: "relative",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    maxWidth: "400px",
                    transform: `translate(${mousePosition.x * 0.02}px, ${
                      mousePosition.y * 0.01
                    }px)`,
                    transition: "transform 0.3s ease-out",
                  }}
                >
                  {/* Simple AI Section */}
                  <Box>
                    <Typography
                      variant="h6"
                      component="h3"
                      gutterBottom
                      sx={{
                        fontFamily: "Kalam, cursive",
                        fontWeight: 400,
                        color: "#00BF63",
                        fontSize: { xs: "1.3rem", md: "1.5rem" },
                        textAlign: "center",
                        mb: 2,
                      }}
                    >
                      How Our AI Works
                    </Typography>

                    <Typography
                      variant="body1"
                      sx={{
                        color: "#666",
                        fontSize: { xs: "0.9rem", md: "1rem" },
                        lineHeight: 1.6,
                        textAlign: "center",
                        mb: 3,
                      }}
                    >
                      Advanced machine learning algorithms analyze nutrition patterns, additive
                      interactions, and processing levels.
                    </Typography>

                    {/* Feature points */}
                    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                      {[
                        "Official regulatory data integration",
                        "AI-enhanced nutritional insights",
                        "Complete transparency in recommendations",
                      ].map((feature, index) => (
                        <Box
                          key={index}
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 2,
                          }}
                        >
                          <Box sx={{ flexShrink: 0 }}>
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
                              color: "#333",
                              fontSize: "0.85rem",
                              fontWeight: 600,
                            }}
                          >
                            {feature}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
}
