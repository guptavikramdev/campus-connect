import PropTypes from 'prop-types';
import React from 'react';
// material-ui
import { styled, useTheme } from '@mui/material/styles';

import { Box, Divider, Button, Typography } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';

import EarningCard from 'ui-component/cards/Skeleton/EarningCard';

// styles
const CardWrapper = styled(MainCard)(({ bgColor }) => ({
  overflow: 'hidden',
  position: 'relative',
  borderTop: `2px solid ${bgColor}`,
  '&:after': {
    content: '""',
    position: 'absolute',
    width: 210,
    height: 210,
    background: `linear-gradient(210.04deg, ${bgColor} -50.94%, rgba(144, 202, 249, 0) 83.49%)`,
    borderRadius: '50%',
    top: 40,
    right: -150
  },
  '&:before': {
    content: '""',
    position: 'absolute',
    width: 210,
    height: 210,
    background: `linear-gradient(140.9deg, ${bgColor} -14.02%, rgba(144, 202, 249, 0) 70.50%)`,
    borderRadius: '50%',
    top: -120,
    right: -130
  }
}));

// ==============================|| DASHBOARD - TOTAL INCOME LIGHT CARD ||============================== //

const TotalIncomeLightCard = ({ isLoading, total, img, label, bgColor, color }) => {
  const theme = useTheme();
  return (
    <>
      {isLoading ? (
        <EarningCard />
      ) : (
        <CardWrapper border={false} content={false} shadow={3} bgColor={bgColor}>
          <Box sx={{ p: 2.25, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
            <Box>
              <img src={img} style={{ width: '70px' }} />
            </Box>

            <Box
              style={{
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <Divider sx={{ flexGrow: 1, width: '50px' }} orientation="horizontal" />
              <Button
                variant="outlined"
                sx={{
                  m: 2,
                  py: 0.5,
                  px: 2,
                  borderColor: `${theme.palette.grey[100]} !important`,
                  color: `${color}`,
                  backgroundColor: `${bgColor}`,
                  fontWeight: 500,
                  borderRadius: `25px`,
                  ':hover': {
                    color: `${color}`,
                    backgroundColor: `${bgColor}`
                  }
                }}
                disableRipple
              >
                {label}
              </Button>

              <Divider sx={{ flexGrow: 1, width: '50px' }} orientation="horizontal" />
            </Box>
            <Box>
              <Typography variant="h2">{total}</Typography>
            </Box>
          </Box>
        </CardWrapper>
      )}
    </>
  );
};

TotalIncomeLightCard.propTypes = {
  icon: PropTypes.object,
  label: PropTypes.string,
  total: PropTypes.number,
  isLoading: PropTypes.bool
};

export default TotalIncomeLightCard;
