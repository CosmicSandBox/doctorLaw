import { createBrowserRouter } from "react-router-dom";
import ForOutlet from "./pages/ForOutlet";
import MainPage from "./pages/MainPage/MainPage";
import ContractAnalyze from './pages/ContractAnalyze/ContractAnalyze';

export default createBrowserRouter([
    {
        path: "/",
        element: <ForOutlet/>,
        children: [
            {
                path: "",
                element: <MainPage />
            },
            {
                path: "analyze",
                element: <ContractAnalyze />
            }
        ]
    }
]);