import { log } from "./data";
import { Timeline } from "./Timeline";

export default function App() {
  return (
    <div className="App">
      <Timeline log={log} />
    </div>
  );
}
