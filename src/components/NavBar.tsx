import { AppBar, Avatar, Grid, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Profile } from '../utils/constants'


//Type designation of props
interface Props {
    profile: Profile | null | undefined,
}

const NavBar: React.FC<Props> = ({ profile }) => {

    return (
        <AppBar position='fixed' >
            <Toolbar>
                {/* If profile is empty / Initial state  */}
                {!profile ? (
                    <Grid sx={{ placeItems: 'center', justifyContent: 'flex-end' }} container  >
                        < Grid item xs={2}  >
                            <Typography >
                                {"User name"}
                            </Typography>

                        </Grid>
                        <Grid item xs={1}>
                            <Avatar alt="img" src={''} />
                        </Grid>
                    </Grid>

                ) : (
                    //Else get the data from the profile and fill the Navbar with it
                    <Grid sx={{ placeItems: 'center', justifyContent: 'flex-end' }} container  >
                        <Grid item xs={2}  >
                            <Typography >
                                {profile.name}
                            </Typography>
                        </Grid>
                        <Grid item xs={1}>
                            <Avatar alt={profile.name} src={profile.picture.data.url} />
                        </Grid>
                    </Grid>
                )}
            </Toolbar >
        </AppBar >

    )
}

export default NavBar