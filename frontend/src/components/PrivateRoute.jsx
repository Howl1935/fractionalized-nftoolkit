import {Navigate, Outlet} from 'react-router-dom';
 import {useIsConnected} from '../hooks/useIsConnected'
import Spinner from './layout/spinner/Spinner';

const PrivateRoute = () => {
    const {loggedIn, checkingStatus} = useIsConnected();
    if(checkingStatus){
        return <Spinner />
    }
  return loggedIn ? <Outlet /> : <Navigate to='/' />
};

export default PrivateRoute;
