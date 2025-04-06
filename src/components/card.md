   <Grid container spacing={3} alignItems="stretch">
          {features.map((item, index) => (
            <Grid item xs={12} sm={4} md={4} key={index}>
              <Box
                sx={{
                  textAlign: 'center',
                  boxShadow: 3,
                  borderRadius: 2,
                  overflow: 'hidden',
                  backgroundColor: theme.palette.background.paper,
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.02)',
                  },
                }}
              >
                <Box
                  component="img"
                  src={item.image}
                  alt={item.text || `Feature ${index + 1}`}
                  sx={{
                    width: '100%',
                    height: 200,
                    objectFit: 'contain',
                    backgroundColor: '#111',
                  }}
                />
                <Box
                  sx={{
                    p: 2,
                    flexGrow: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {item.text && (
                    <Typography
                      variant="subtitle1"
                      fontWeight={600}
                      color="text.primary"
                    >
                      {item.text}
                    </Typography>
                  )}
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>