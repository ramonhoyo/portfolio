import { Grid, Paper, Typography } from "@mui/material";
import Image from "next/image";

export default function IntroSection() {
  return (
    <Paper sx={{ p: 2, my: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h3">About Me</Typography>
        </Grid>


        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle1">
                I am a very focused software developer, with extensive experience in the design, creation and implementation of software solutions that address real user needs.
                <br />
                <br />
                My skills as a professional not only encompass my skill when writing code, but is reflected in its style, design and implementation, evaluating its performance in both CPU and memory, in the same way I make effective use of SOLID principles to create IT solutions that:

                <br />
                <br />
                - Last over time.<br />
                - Are scalable.<br />
                - Maintainable by other developers.<br />
              </Typography>


              <Typography variant="subtitle1">Ramón Hoyo</Typography>
              <Typography variant="subtitle2">Software Developer</Typography>
            </Grid>

            <Grid item xs={12} md={6} sx={{ alignItems: 'center', justifyContent: 'center', display: 'flex', }}>
              <Image
                style={{ borderRadius: "50%", objectFit: "cover" }}
                src="/rahoyo-img-no-bg.png" alt="Ramón hoyo picture" width={400} height={400}></Image>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}
