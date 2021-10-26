import logo from './logo.svg';
import './App.css';
import TableDashboard from "./components/data-table";
import EventHeader from "./components/event-header";


function App() {

    return (
        <div className="App">
            <header className="App-header">
                <EventHeader/>
            </header>
            <TableDashboard />
        </div>
    );
}

export default App;
