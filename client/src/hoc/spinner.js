import React from "react";
import Spinner from "../components/Spinner/Spinner";

const withSpinner = Component => ({ isLoading, classSpinner, ...props }) =>
  !isLoading ? <Spinner className={classSpinner} /> : <Component {...props} />;

export default withSpinner;
