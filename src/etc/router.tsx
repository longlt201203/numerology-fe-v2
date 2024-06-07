import RootLayout from "@layouts/RootLayout";
import AboutPage from "@pages/AboutPage";
import NumerologyComparingPage from "@pages/NumerologyComparingPage";
import NumerologyReadingPage from "@pages/NumerologyReadingPage";
import NumerologyYearlyPage from "@pages/NumerologyYearlyPage";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout/>,
        children: [
            {
                path: "",
                element: <NumerologyReadingPage/>
            },
            {
                path: "compare",
                element: <NumerologyComparingPage/>
            },
            {
                path: "calculate-year",
                element: <NumerologyYearlyPage/>
            },
            {
                path: "about",
                element: <AboutPage/>
            }
        ]
    }
]);

export default router;