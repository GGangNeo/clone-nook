export const usePreventLeave = () => {
  const listener = (event) => {
    event.preventDefault();
    // 반드시 넣어줘야 동작함
    event.returnValue = '';
  };
  const enablePrevent = () => window.addEventListener('beforeunload', listener);
  const disablePrevent = () =>
    window.removeEventListener('beforeunload', listener);
  return { enablePrevent, disablePrevent };
};

export function App() {
  const { enablePrevent, disablePrevent } = usePreventLeave();
  return (
    <div className="App">
      <button onClick={enablePrevent}>Protect </button>
      <button onClick={disablePrevent}>Unprotect</button>
    </div>
  );
}
