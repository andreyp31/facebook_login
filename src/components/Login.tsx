import { Grid } from '@mui/material';
import React from 'react';
import { FacebookLoginButton } from 'react-social-login-buttons';

import { LoginSocialFacebook } from 'reactjs-social-login';
import { Profile } from '../utils/constants';



interface Props {
    setProfile: React.Dispatch<React.SetStateAction<Profile | null | undefined>>,
    profile?: Profile | null | undefined
}

const Login: React.FC<Props> = ({ setProfile, profile }) => {

    return (
        <div style={{ marginTop: '80px' }}>
            <Grid container className='loginForm' direction={'column'} rowSpacing={1}>

                {/* Get facebook button if profile is not empty , else don`t show the button*/}
                {!profile ? (
                    <Grid item>
                        <LoginSocialFacebook
                            language='eng'
                            //Id of my facebook test app
                            appId='731171239027882'
                            onResolve={(response) => {
                                //Setting the received data into state
                                setProfile(response.data as Profile);
                            }}
                            onReject={(error) => {
                                console.log(error);
                            }}
                        >
                            <FacebookLoginButton />
                        </LoginSocialFacebook>
                    </Grid>
                ) :
                    (
                        ''
                    )}
            </Grid >
        </div >
    )
}

export default Login