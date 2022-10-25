import { useContext } from "react";
import { AppContext } from "./App";
import { IoCloseSharp } from "react-icons/io";
const Preferences = () => {
  const {
    appState: { showPreferences },
    setAppState,
    preferences,
    setPreferences,
  } = useContext(AppContext)!;

  const hidePreferences = () => {
    setAppState((prevState) => ({
      ...prevState,
      showPreferences: false,
    }));
  };

  return (
    <>
      {showPreferences && (
        <>
          <div
            className='absolute top-0 flex items-center w-full h-full transition-opacity duration-200 bg-opacity-50 bg-slate-400'
            onClick={hidePreferences}
          ></div>
          <div className='absolute max-w-3xl prose justify-self-center place-self-center w-96 bg-slate-800 min-w-max'>
            <div className='flex justify-between'>
              <h3>Preferences</h3>
              {/* <button className='btn btn-sm'>
                <IoCloseSharp />
              </button> */}
            </div>
            {Object.entries(preferences).map(([field, value]) => (
              <PreferenceItem key={field} field={field} value={value} />
            ))}
          </div>
        </>
      )}
    </>
  );
};

interface PreferenceItemProps {
  field: string;
  value: any;
}
const PreferenceItem = (props: PreferenceItemProps) => {
  let inputType = "";
  switch (typeof props.value) {
    case "string":
      inputType = "text";
      break;

    case "number":
      inputType = "number";
      break;

    case "boolean":
      inputType = "checkbox";
      break;

    default:
      inputType = "text";
      break;
  }
  return (
    <>
      <div className='flex items-center justify-between m-1'>
        <label htmlFor={props.field}>{props.field}</label>
        <input
          id={props.field}
          type={inputType}
                  className='w-24 input input-sm max-w-max'
                  value={props.value}
        />
      </div>
    </>
  );
};

export default Preferences;
