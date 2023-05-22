import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const ProtectedRoute = () => {
  const {isUserSignedIn} = useSelector((state)=>state.auth)
    let location = useLocation();
  
    if (!isUserSignedIn) {
      // Redirect them to the /login page, but save the current location they were
      // trying to go to when they were redirected. This allows us to send them
      // along to that page after they login, which is a nicer user experience
      // than dropping them off on the home page.
      return <Navigate to="/auth" state={{ from: location }} />;
    }
  
    return <Outlet />;
};

export default ProtectedRoute;