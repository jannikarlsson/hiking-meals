import Form from './components/Form';
import Plan from './components/Plan';
import { PlanProvider } from './contexts/PlanContext';

function App() {
  return (
    <PlanProvider>
      <div>
        <Form />
        <Plan />
      </div>
    </PlanProvider>
  );
}

export default App;
