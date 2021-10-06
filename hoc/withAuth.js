const withAuth = (WrappedComponent) => {
    return (props) => {
      if (typeof window !== "undefined") {
        const accessToken = localStorage.getItem("token");
  
        if (!accessToken) {
          window.location = "/";
          return null;
        }
        return <WrappedComponent {...props} />;
      }
      return null;
    };
  };
  
  export default withAuth;
  