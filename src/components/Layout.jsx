import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Loader from "./Loader";

const Layout = (Component) => {
    const LayoutWithRouter = (props) => {
        const location = useLocation();
        const navigate = useNavigate();
        const params = useParams();

        const { isLoaded } = props;

        if (isLoaded === false) {
            return <Loader />;
        }

        return <Component {...props} router={{ location, navigate, params }} />;
    };

    return LayoutWithRouter;
};

export default Layout;
