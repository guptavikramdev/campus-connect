import { Link } from 'react-router-dom';

import Grid from '@mui/material/Grid';

// project imports
import AuthWrapper from '../../components/auth/authentication/AuthWrapper';
import AuthCardWrapper from '../../components/auth/authentication/AuthCardWrapper';
import AuthLogin from '../../components/auth/authentication/auth-forms/AuthLogin';
import Logo from 'ui-component/Logo';

// ================================|| AUTH3 - LOGIN ||================================ //

const Login = () => {
  return (
    <AuthWrapper>
      <Grid container direction="column" justifyContent="flex-end" sx={{ minHeight: '100vh' }}>
        <Grid item xs={12}>
          <Grid container justifyContent="center" alignItems="center" sx={{ minHeight: 'calc(100vh - 68px)' }}>
            <Grid item sx={{ m: { xs: 1, sm: 3 }, mb: 0 }}>
              <AuthCardWrapper>
                <Grid container spacing={2} alignItems="center" justifyContent="center">
                  <Grid item sx={{ mb: 3 }}>
                    <Link to="#" aria-label="logo">
                      <Logo />
                    </Link>
                  </Grid>
                  <Grid item xs={12}>
                    <AuthLogin />
                  </Grid>
                </Grid>
              </AuthCardWrapper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </AuthWrapper>
  );
};

export default Login;
