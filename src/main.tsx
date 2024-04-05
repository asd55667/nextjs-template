import React, { Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "@/styles/globals.css";

const ArchivePage = lazy(() => import("@/pages/Archive"));
const CategoryPage = lazy(() => import("@/pages/Category"));
const PostPage = lazy(() => import("@/pages/Post"));

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Suspense fallback={<div>loading</div>}>
          <Routes>
            <Route
              path="/archive/:year/:month/:page"
              element={<ArchivePage />}
            />
            <Route
              path="/category/:category/:page"
              element={<CategoryPage />}
            />
            <Route path="/post/:id" element={<PostPage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </React.StrictMode>
  );
}

createRoot(document.getElementById("root")!).render(<App />);
