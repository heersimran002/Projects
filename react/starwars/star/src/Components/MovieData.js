import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { blue } from "@mui/material/colors";
function MovieData() {
  const [movies, SetMovies] = useState();
  //get data from api

  useEffect(() => {
    fetch("https://swapi.dev/api/films")
      .then((rest) => rest.json())
      .then((data) => {
        SetMovies(data.results);
      });
  }, []);

  return (
    <Box
      display="grid"
      gap={4}
      margin={5}
      sx={{ bgcolor: blue[200] }}
      gridTemplateColumns={"repeat(3, minmax(0, 1fr))"}
    >
      {movies?.map((m) => {
        return (
          <Card sx={{ maxWidth: 345 }} padding={5}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {m.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {m.opening_crawl}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        );
      })}
    </Box>
  );
}

export default MovieData;
