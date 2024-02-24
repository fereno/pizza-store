import React from "react";
import { Link, useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const LinkButton = ({ children, to }) => {
  const navigate = useNavigate();
  const className = "text-sm text-blue-500 hover:text-blue-600 hover:underline";

  if (to === "-1")
    return (
      <Link className={className} to={() => navigate(-1)}>
        {children}
      </Link>
    );
  return (
    <Link className={className} to={to}>
      {children}
    </Link>
  );
};

export default LinkButton;
