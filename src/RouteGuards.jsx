import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./useAuth.js";

function FullPageLoader() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        background: "#030615",
        color: "#9db4ff",
        fontFamily: "Segoe UI, Arial, sans-serif",
        letterSpacing: "0.04em",
      }}
    >
      Loading…
    </div>
  );
}

/** Only for logged-in users; everyone else is sent to the login page. */
export function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) return <FullPageLoader />;
  if (!user) return <Navigate to="/" replace state={{ from: location }} />;

  return children;
}

/** Login page: logged-in users skip it and go where they were heading. */
export function PublicOnlyRoute({ children }) {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) return <FullPageLoader />;
  if (user) {
    const from = location.state?.from;
    const target = from ? `${from.pathname}${from.search || ""}${from.hash || ""}` : "/career-vision";
    return <Navigate to={target} replace />;
  }

  return children;
}
