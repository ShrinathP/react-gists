import ToggleComponent from "./components/ToggleComponent";
import BooleanComponent from "./components/BooleanComponent";
import CounterComponent from "./components/CounterComponent";
import TimeoutComponent from "./components/TimeoutComponent";
import TimeoutComponent2 from "./components/TimeoutComponent2";
import useFetch from "./hooks/01_UseFetch";
import useFetchCommon from "./hooks/01_UseFetch2_common";
// import useToggle from "./hooks/UseToggle2_reducer";
import useToggle from "./hooks/02_UseToggle";
import DebounceComponent from "./components/DebounceComponent";
import ArrayComponent from "./components/ArrayComponent";
import UpdateEffectComponent from "./components/UpdateEffectComponent";

function App() {
  const getRestoAPI = "https://swapi.dev/api/people/1";

  const { isLoading, apiData, serverError } = useFetch(getRestoAPI);
  const [value, toggleValue] = useToggle(false);
  
  /*
  const responseObj = useFetchCommon(
    "GET",
    getRestoAPI,
    {}
  );
  */

  
  // console.log('Loading Data');
  // console.log(apiData);
  // console.log('Loading Data2');s
  return (
    <>
    <div>
      <h2>API Data</h2>
      {isLoading && <span>Loading...</span>}
      {!isLoading && serverError ? (
        <span> Error in fetching data...</span>
      ) : (
        <span>{apiData && JSON.stringify(apiData)}</span>
      )}
    </div>

    <h2>=======</h2>
    <ToggleComponent/>
    <h2>=======</h2>
    <BooleanComponent/>
    <h2>=======</h2>
    <CounterComponent/>
    <h2>=======</h2>
    <TimeoutComponent/>
    <h2>=======</h2>
    <TimeoutComponent2/>
    <h2>=======</h2>
    <DebounceComponent/>
    <h2>=======</h2>
    <ArrayComponent/>
    <h2>=======</h2>
    <UpdateEffectComponent/>
    </>
  );
}

export default App;
