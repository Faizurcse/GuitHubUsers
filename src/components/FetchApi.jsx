import React, { useEffect, useState } from "react";
import { Box, Grid, Typography, Rating } from "@mui/material";

function FetchApi() {
  const [fetchData, setFetchData] = useState([]);
  const ratings = 4.5;
  const articleCount = 100;

  async function getData() {
    const res = await fetch("https://api.github.com/users");
    setFetchData(await res.json());
    console.log(fetchData);
  }

  // function  getData(){
  //     fetch('https://api.github.com/users').then((res)=>res.json()
  // ).then((j)=>console.log(j))
  // }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Box>
        <Typography variant="h3" color='red' textAlign='center' margin='20px' ><u><i>List of GitHub Users</i></u></Typography>
        <Grid container justifyContent="center" spacing={2}>
          {fetchData.map((data) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              sx={{
                margin: "10px",
                border: "1px solid #ccc",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                textAlign: "center",
                padding: "20px",
                backgroundColor: "#fff",
              }}
            >
              <Typography variant="h5" gutterBottom color='blue'>
                {data.login}
              </Typography>
              <Typography variant="body1">
                his code fetches user data from the GitHub API, parses the
                response as JSON, and then prints the login names of the first 5
                users to the console. You can adjust the slice method to
                retrieve more or fewer users as needed.
              </Typography>
              <img
                alt="Example"
                src={data.avatar_url}
                style={{
                  maxWidth: "70%",
                  marginTop: "20px",
                  borderRadius: "8px",
                }}
              />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "20px",
                }}
              >
                <Typography variant="subtitle1">Ratings: {ratings}</Typography>
                <Typography variant="subtitle1">
                  Articles: {articleCount}
                </Typography>
              </Box>

              <Rating
                name="read-only"
                value={ratings}
                precision={0.5}
                readOnly
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}

export default FetchApi;
