import RootLayout from "@layouts/RootLayout";
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
                
            }
        ]
    }
]);

export default router;