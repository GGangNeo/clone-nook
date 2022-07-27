export const useNetwork = (onChange) => {
  const [status, setStatus] = useState(navigator.onLine || true);
  const handleChange = () => {
    if (onChange && typeof onChange === 'function') {
      onChange(navigator.onLine);
    }
    setStatus(navigator.onLine);
  };
  useEffect(() => {
    window.addEventListener('online', handleChange);
    window.addEventListener('offline', handleChange);
    () => {
      window.removeEventListener('online', handleChange);
      window.removeEventListener('offline', handleChange);
    };
  }, []);
  return status;
};

function App() {
  const onNetworkChange = (isOnline) =>
    console.log(isOnline ? 'We are back online' : 'We just got offline');
  const isOnline = useNetwork(onNetworkChange);
  return <h1>{isOnline ? 'We are online' : 'We are offline'}</h1>;
}
