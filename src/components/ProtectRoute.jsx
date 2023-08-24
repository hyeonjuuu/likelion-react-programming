function ProtectRoute({ children }) {
  const { isAuth } = useAuth();
  if (!isAuth) {
    return <Navigate to="/" />;
  }
}

ProtectRoute.propType = {
  children: element, //React.ReactElement(JSX)
};
