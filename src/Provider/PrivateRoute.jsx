import React, { useContext, useEffect, useRef } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router';

import Loading from '../Component/Loading';
import toast from 'react-hot-toast';

const PrivateRoute = ({ children }) => {

  const hasShownToast = useRef(false);

  const { loading, user } = useContext(AuthContext)
  const location = useLocation()
  const [shouldRedirect, setShouldRedirect] = React.useState(false);

  useEffect(() => {
    if (!loading && !user && !hasShownToast.current) {
      toast.error('Please log in to access this page');
      hasShownToast.current = true;
      setShouldRedirect(true);
    }
  }, [loading, user, location]);

  console.log('from user', loading, user);

  if (loading) {
    return <Loading></Loading>
  }

  if (user?.email) {
    return children;
  }

  if (shouldRedirect) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return null;
};

export default PrivateRoute;