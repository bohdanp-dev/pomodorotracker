import MainPage from "./pages/MainPage";
import './App.css';
import {ThemeProvider} from "./context/ThemeContext";

function App() {
    return (
        <ThemeProvider>
            <MainPage />
        </ThemeProvider>
    );
}

export default App;