import { Box, Button, Card } from '@mui/material';
import React from 'react';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import SkillChartComponent from './SkillChartComponent';

export type Props = {
  data: any;
};

export default function SkillCard({ data }: Props) {
  return (
    <Box sx={{ position: 'relative', p: 2 }}>
      <Card
        sx={{
          left: '50%',
          transform: 'translate(-50%)',
          borderRadius: '50%',
          elevation: 3,
          height: '25rem',
          width: '25rem',
          position: 'absolute',
        }}>
      </Card>

      <Box sx={{ pt: 4 }}>
        <SkillChartComponent
          data={data.chart.data}
          strokeColor={data.chart.strokeColor}
          fillColor={data.chart.fillColor}
        />
        <Box sx={{ zIndex: 100, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          <Button
            href={`/skills/${data.label}`}
            endIcon={<OpenInFullIcon />}
          >
            {data.title}
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
