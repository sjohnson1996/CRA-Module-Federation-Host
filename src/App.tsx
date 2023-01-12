// host/src/App.js
import React from "react";
// @ts-ignore
import ErrorBoundary from "./ErrorBoundary.tsx";
// @ts-ignore
const TrustedProfile = React.lazy(() => import('NextRemote/TrustedProfile'));
import { 
  Box,
  Skeleton,
  Typography 
} from "@mui/material";

export const App = () => {
  
  const CustomProfile = ({ loading, data }: any) => {
    return (
      <Box>
        {(loading) && (
          <Skeleton width="100%" height="100px" />
        )}
        {(data) && (
          <Box 
            style={{ 
              display: 'flex', 
              marginTop: '30px',
              justifyContent: 'space-around' 
            }}
          >
            {data.pros.map((pro: any) => (
              <Typography>
                {pro.name}
              </Typography>
            ))}
          </Box>
        )}
      </Box>
    );
  }

  return (
    <Box 
      style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        flexDirection: 'column' 
      }}
    >
      <Box style={{ marginBottom: '30px' }}>
        <Typography variant="h3" align="center">
          Meet your agents!
        </Typography>
      </Box>
      <Box>
        <ErrorBoundary>
          <TrustedProfile 
            // accountKey="5e887a62195cc5aef7e8ca5d"
            referralId="12345"
          >
            <CustomProfile />
          </TrustedProfile>
        </ErrorBoundary>
      </Box>
    </Box>
  );
}
export default App;
