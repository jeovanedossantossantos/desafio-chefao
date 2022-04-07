import Rotas from "./Routes";
import ContextProvider from "./hooks/context";

function App() {
  return (
    <>
      <ContextProvider>
        <Rotas />
      </ContextProvider>
    </>
  );
}

export default App;
