import ContactBox from "@/contact/ContactBox";
import { Box, Button, Container, Grid, Paper, Typography } from "@mui/material";
import { Sacramento } from 'next/font/google';

const sacramento = Sacramento({
  weight: '400',
  subsets: ['latin'],
  display: 'swap'
});

function In({ children }: any) {
  return <Typography variant="h5" color='primary' sx={{ display: 'contents' }}>{children}</Typography>
}

export default function IntroSection() {
  return (
    <Container component={Paper} sx={{ p: 2, my: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={12} md={6}>
              <Typography variant="h3" color="primary">
                Fullstack Developer
              </Typography>
              <br />
              <Typography variant="h5">
                <In>Hey!</In> I&apos;m Ramón Hoyo, a software developer with <In>over 7 years</In> of experience creating IT solutions that
                really make a difference for users. I believe that building <In>awesome solutions</In> comes from loving what you do
                and putting in the hard work to stay <In>competitive in a growing field</In>. I know I’ve got more to learn,
                but I’m dedicated to <In>improving every day!</In>
              </Typography>

              <br />
              <br />
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography color='primary' variant="h4" sx={{ ...sacramento.style }}>
                  Ramón Hoyo
                </Typography>

                <Button variant="outlined" color='secondary'>Meet more about me</Button>
              </Box>
            </Grid>

            <Grid item xs={12} md={6} sx={{ alignItems: 'center', justifyContent: 'center', mt: 2, display: 'flex', }}>
              <ContactBox size="large" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
