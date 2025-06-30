import React from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

interface TrustedScienceItem {
  title: string;
  description: string;
  icon: string;
}

interface TrustedScienceSlidesProps {
  items: TrustedScienceItem[];
}

const TrustedScienceSlider: React.FC<TrustedScienceSlidesProps> = ({ items }) => {
  return (
    <Box sx={{ px: 2 }}>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={15}
        slidesPerView={1.2}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        speed={1000}
        pagination={{
          clickable: true,
          bulletClass: "swiper-pagination-bullet",
          bulletActiveClass: "swiper-pagination-bullet-active",
        }}
        style={{
          paddingBottom: "40px",
          overflow: "visible",
        }}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <Card
              sx={{
                borderRadius: "16px",
                boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
                overflow: "hidden",
                background: "linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)",
                border: "1px solid rgba(0,0,0,0.05)",
                maxWidth: "280px",
                margin: "0 auto",
                height: "280px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Icon Section */}
              <Box
                sx={{
                  p: 3,
                  pb: 2,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "80px",
                }}
              >
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={48}
                  height={48}
                  style={{
                    width: "48px",
                    height: "48px",
                  }}
                />
              </Box>

              {/* Content Section */}
              <CardContent
                sx={{
                  p: 2.5,
                  pt: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  flex: 1,
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
                    fontSize: "1.2rem",
                    lineHeight: 1.3,
                    mb: 1.5,
                    textAlign: "center",
                  }}
                >
                  {item.title}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    color: "#666",
                    fontSize: "0.85rem",
                    lineHeight: 1.5,
                    textAlign: "center",
                    flex: 1,
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {item.description}
                </Typography>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Swiper Styles */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          background: #ccc !important;
          opacity: 1 !important;
          width: 8px !important;
          height: 8px !important;
          transition: all 0.3s ease !important;
        }
        .swiper-pagination-bullet-active {
          background: #00bf63 !important;
          width: 20px !important;
          border-radius: 4px !important;
        }
        .swiper-pagination {
          bottom: 8px !important;
        }
        .swiper-slide {
          transition: transform 0.3s ease !important;
        }
      `}</style>
    </Box>
  );
};

export default TrustedScienceSlider;
