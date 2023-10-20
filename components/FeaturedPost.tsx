import { Box, Container, Link, Grid, Typography } from "@mui/material";

import Image from "next/image";

export default function FeaturedPost(props: {
  title: string;
  category: string;
  slug: string;
  excerpt: string;
  srcImg: string;
  altText: string;
  copyrightPhoto: string;
}) {
  return (
    <Link href={`${props.category}/${props.slug}`}>
      <Container
        fixed
        sx={{
          marginY: 1,
          paddingY: 2,
          //border: "1px solid rgba(0,0,0,0.2)",
          borderRadius: 1,
        }}
      >
        <Grid
          container
          sx={{
            gap: 1,
            flexWrap: {
              sm: "wrap",
              md: "noWrap",
              lg: "noWrap",
              xl: "noWrap",
            },
          }}
        >
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                marginY: 1,
                justifyContent: {
                  xs: "center",
                  sm: "center",
                  md: "start",
                  lg: "start",
                },
              }}
            >
              <Typography
                sx={{
                  backgroundColor: "primary.main",
                  textAlign: "center",
                  padding: 1,
                  width: 90,
                  color: "white",
                  textTransform: "uppercase",
                }}
              >
                {props.category}
              </Typography>
            </Box>
            <Typography
              variant="h1"
              sx={{
                textAlign: {
                  xs: "center",
                  sm: "center",
                  md: "start",
                  lg: "start",
                },
                lineHeight: 1,
                marginBottom: 2,
              }}
            >
              {props.title}
            </Typography>

            <Typography
              sx={{
                fontSize: "2em",
                lineHeight: 1.2,
                textAlign: {
                  xs: "center",
                  sm: "center",
                  md: "start",
                  lg: "start",
                },
              }}
            >
              {props.excerpt.replace(/<\/?[^>]+(>|$)/g, "")}
            </Typography>
          </Grid>

          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            sx={{
              justifyContent: "center",
              textAlign: {
                xs: "center",
                sm: "center",
                md: "end",
                lg: "end",
              },
            }}
          >
            <div style={{ position: "relative" }}>
              <Image
                src={props.srcImg}
                alt={props.altText}
                width={300}
                height={300}
                style={{
                  objectFit: "contain",
                  alignItems: "center",
                  width: "100%",
                  height: "100%",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  zIndex: 1,
                  color: "white",
                  backgroundColor: "grey",
                }}
              >
                {props.copyrightPhoto}
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </Link>
  );
}
