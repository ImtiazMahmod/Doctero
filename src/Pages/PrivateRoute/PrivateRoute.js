import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../Hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { isLoading, user } = useAuth();
    if (isLoading) {
        return <div style={{height: "70vh"}} className="d-flex align-items-center justify-content-center">
            <Spinner  animation="grow" variant="info" />
        </div>
    }
    return (
        <div>
            <Route
                {...rest}
                render={({ location }) =>
                    user?.email ? (
                    children
                    ) : (
    ///private route redirect
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
        </div>
    );
};

export default PrivateRoute;