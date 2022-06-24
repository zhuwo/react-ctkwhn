import * as React from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import useInterval from './useInterval';

export default function LinearIndeterminate() {
  const [progress, setProgress] = React.useState(0);

  useInterval(() => {
    const diff = Math.random() * 10;
    setProgress(progress + diff);
  }, 100);
  return (
    <LinearProgress
      variant="determinate"
      style={{ width: '50%', backgroundcolor: '#090' }}
      value={progress}
      color="info"
    />
  );
}
