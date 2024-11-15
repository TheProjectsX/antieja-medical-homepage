import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

// React Router
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import Home from "./routes/Home.jsx";

// Router
const router = createBrowserRouter(
    [
        {
            path: "/*",
            element: <App />,
            children: [
                {
                    path: "*",
                    element: <Home />,
                },
            ],
        },
    ],
    {
        future: {
            v7_relativeSplatPath: true,
        },
    }
);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
