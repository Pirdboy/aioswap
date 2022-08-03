import React, {useEffect} from "react";
import Layout from "./components/layout";

const App = () => {
    useEffect(() => {
        document.title = "aioswap";
    }, []);
    return (
        <Layout />
    )
};

export default App;