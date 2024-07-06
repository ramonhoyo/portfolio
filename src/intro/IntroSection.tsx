import ContactBox from "@/contact/ContactBox";
import { Container, Grid, Paper, Typography } from "@mui/material";

export default function IntroSection() {
  return (
    <Container component={Paper} sx={{ p: 2, my: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle1">
                Hi there! I&apos;m Ramón Hoyo, a software developer passionate about writing IT solutions that create an impact on users. For me, crafting great solutions is just a side effect of loving what you do and working very hard and consistently to get to the top of your area of expertise. I know I&apos;m still far from there, but I&apos;m working every day to make this happen.

                <br />
                <br />
                My skills as a professional not only encompass my skill when writing code, but is reflected in its style, design and implementation, evaluating its performance in both CPU and memory, in the same way I make effective use of SOLID principles to create IT solutions that:

                <br />
                <br />
                - Last over time.<br />
                - Are scalable.<br />
                - Maintainable by other developers.<br />
              </Typography>

              <br />

              <Typography variant="h6">Ramón Hoyo</Typography>
              <Typography variant="caption">Software Developer</Typography>
            </Grid>

            <Grid item xs={12} md={6} sx={{ alignItems: 'center', justifyContent: 'center', display: 'flex', }}>
              <ContactBox size="large" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
