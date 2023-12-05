import { Typography, Grid, Paper, styled, Box } from "@mui/material";

export const Home = () => {
  return (
    <>
      <Typography variant="h1">Home</Typography>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Paper>
              <Typography variant="h2">Noficiations</Typography>
            </Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper
              sx={{
                p: 2,
              }}
            >
              <Typography variant="h2" textAlign={"center"}>
                Open Service Cases
              </Typography>
              <Typography
                fontSize={"6rem"}
                fontWeight={500}
                textAlign={"center"}
              >
                3
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper
              sx={{
                p: 2,
              }}
            >
              <Typography variant="h2" textAlign={"center"}>
                Open Parts Cases
              </Typography>
              <Typography
                fontSize={"6rem"}
                fontWeight={500}
                textAlign={"center"}
              >
                1
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper
              sx={{
                p: 2,
              }}
            >
              <Typography variant="h2" textAlign={"center"}>
                Open Orders
              </Typography>
              <Typography
                fontSize={"6rem"}
                fontWeight={500}
                textAlign={"center"}
              >
                2
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
