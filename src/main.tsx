import React, { Suspense, lazy, useEffect } from "react";
import { createRoot } from "react-dom/client";
import Count from "./Count";
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";

const ArchivePage = lazy(() => import("@/components/Archive"));

function App() {
  const { pathname } = location;
  const params = { slug: pathname.split("/").slice(2) };

  console.log(pathname, params);

  return (
    <React.StrictMode>
      <BrowserRouter>
        <Suspense fallback={<div>loading</div>}>
          <Routes>
            <Route index element={<Count />} />
            {/* <Route
              path="/archive/:year/:month/:page"
              element={<ArchivePage params={params} />}
            /> */}
            {/* <Route path="/*" element={<Navigate to="/" />} /> */}
          </Routes>
        </Suspense>
      </BrowserRouter>
    </React.StrictMode>
  );
}

function Link({
  href,
  className,
  children,
}: {
  href: string;
  className: string;
  children: string;
}) {
  return (
    <NavLink to={href} className={className}>
      {children}
    </NavLink>
  );
}

createRoot(document.getElementById("root")!).render(<App />);
