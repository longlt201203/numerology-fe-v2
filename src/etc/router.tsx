import RootLayout from "@layouts/RootLayout";
import NumerologyComparingPage from "@pages/NumerologyComparingPage";
import NumerologyReadingPage from "@pages/NumerologyReadingPage";
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
            }
        ]
    }
]);

export default router;