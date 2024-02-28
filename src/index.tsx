

import { createRoot ,  } from "react-dom/client";
import { StrictMode } from 'react';
import App from "./App";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { apiPosts } from "./features/api/apiPosts";


const root = createRoot(document.getElementById("root") as Element);

root.render(
    <StrictMode>
      <ApiProvider api={apiPosts}>
      <App />
      </ApiProvider>
    </StrictMode>
  );