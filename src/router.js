import { createBrowserRouter } from "react-router-dom";
import ForOutlet from "./pages/ForOutlet";
import MainPage from "./pages/MainPage/MainPage";

import ContractAnalyze from './pages/ContractAnalyze/ContractAnalyze';
import ChoiceType from './pages/ContractAnalyze/ProcessContainer/ChoiceType';
import ProgressBar from './pages/ContractAnalyze/ProcessContainer/ProgressBar';

import ContractResults from './pages/ContractResults/ContractResults';
import SelectResults from './pages/ContractResults/SelectResults/SelectResults';
import ShowResult from './pages/ContractResults/ShowResult/ShowResult';

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
                element: <ContractAnalyze />,
                children: [
                    {
                        path: "",
                        element: <ChoiceType />
                    },
                    {
                        path: "result",
                        element: <ProgressBar />
                    }
                ]
            },
            {
                path: "results",
                element: <ContractResults />,
                children: [
                    {
                        path: "",
                        element: <SelectResults />
                    },
                    {
                        path: "file/:dataIndex",
                        element: <ShowResult />
                    },
                ]
            }
        ]
    }
]);