import { Typography } from "@mui/material";

export default function In({ variant, children }: any) {
  return <Typography variant={variant || "h4"} color='primary' sx={{ display: 'contents' }}>{children}</Typography>
}

