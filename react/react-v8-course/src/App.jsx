import { createRoot } from "react-dom/client";
import SearchParams from "./SearchParam";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Queryclient, QueryclientProvider } from '@tanstack/react-query';
import Details from "./Details";

const queryClient = new Queryclient({
    defaltOptions: {
        queries: {
            stateTime: Infinity,
            cacheTime: Infinity,
        }
    }
})

const App = () => {
    return (
        <BrowserRouter>
            <QueryclientProvider client={queryClient}>
                <header>
                <Link to="/">Adopt me!</Link>
                </header>
                <Routes>
                    <Route path="/details/:id" element={<Details />} />
                    <Route path="/" element={<SearchParams />} />
                </Routes>
            </QueryclientProvider>
        </BrowserRouter>
    )
}

const container = document.getElementById('root')
const root = createRoot(container)
root.render(<App />)
