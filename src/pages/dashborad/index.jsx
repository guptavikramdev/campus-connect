import { useEffect, useState } from 'react';

// material-ui
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';
// project imports
import TotalIncomeLightCard from '../../components/dashboard/TotalIncomeLightCard';

import { gridSpacing } from 'store/constant';
import student from 'assets/images/icons/student.png';
import calender from 'assets/images/icons/calendar.png';
import expenses from 'assets/images/icons/expenses.png';
import fees from 'assets/images/icons/fees.png';
import totalStaff from 'assets/images/icons/total-staff.png';
import staff from 'assets/images/icons/staff-c.png';
const Dashboard = () => {
  const [isLoading, setLoading] = useState(true);
  const theme = useTheme();
  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item lg={3} md={6} sm={6} xs={12}>
            <TotalIncomeLightCard
              {...{
                isLoading: isLoading,
                total: 203,
                label: 'Student',
                img: student,
                bgColor: theme.palette.secondary.dark,
                color: theme.palette.primary.light
              }}
            />
          </Grid>
          <Grid item lg={3} md={6} sm={6} xs={12}>
            <TotalIncomeLightCard
              {...{
                isLoading: isLoading,
                total: 850,
                label: 'Student Presence',
                img: calender,
                bgColor: theme.palette.error.dark,
                color: theme.palette.primary.light
              }}
            />
          </Grid>
          <Grid item lg={3} md={6} sm={6} xs={12}>
            <TotalIncomeLightCard
              {...{
                isLoading: isLoading,
                total: '100000',
                label: 'Monthly Fees',
                img: fees,
                bgColor: theme.palette.success.dark,
                color: theme.palette.primary.light
              }}
            />
          </Grid>
          <Grid item lg={3} md={6} sm={6} xs={12}>
            <TotalIncomeLightCard
              {...{
                isLoading: isLoading,
                total: '100000 / 50000',
                label: 'Income / Expense',
                img: expenses,
                bgColor: theme.palette.primary.dark,
                color: theme.palette.primary.light
              }}
            />
          </Grid>
          <Grid item lg={3} md={6} sm={6} xs={12}>
            <TotalIncomeLightCard
              {...{
                isLoading: isLoading,
                total: 120,
                label: 'Staff',
                img: totalStaff,
                bgColor: theme.palette.grey[900],
                color: theme.palette.primary.light
              }}
            />
          </Grid>
          <Grid item lg={3} md={6} sm={6} xs={12}>
            <TotalIncomeLightCard
              {...{
                isLoading: isLoading,
                total: 450,
                label: 'Staff Presence',
                img: staff,
                bgColor: theme.palette.warning.dark,
                color: theme.palette.grey[900]
              }}
            />
          </Grid>
          {/* <Grid item lg={4} md={12} sm={12} xs={12}>
            <Grid container spacing={gridSpacing}>
              <Grid item sm={6} xs={12} md={6} lg={12}>
                <TotalIncomeDarkCard isLoading={isLoading} />
              </Grid>
              <Grid item sm={6} xs={12} md={6} lg={12}>
                <TotalIncomeLightCard
                  {...{
                    isLoading: isLoading,
                    total: 203,
                    label: 'Total Income',
                    icon: <StorefrontTwoToneIcon fontSize="inherit" />
                  }}
                />
              </Grid>
            </Grid>
          </Grid> */}
        </Grid>
      </Grid>
      {/* <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12} md={8}>
            <TotalGrowthBarChart isLoading={isLoading} />
          </Grid>
          <Grid item xs={12} md={4}>
            <PopularCard isLoading={isLoading} />
          </Grid>
        </Grid>
      </Grid> */}
    </Grid>
  );
};

export default Dashboard;
