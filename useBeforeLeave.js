/**
 *
 * @param {*} onBefore
 * @returns
 * mouse is outside of the browser, hook fired
 */
export const useBeforeLeave = (onBefore) => {
  if (!onBefore && typeof onBefore !== 'function') {
    return;
  }
  const handle = (event) => {
    const { clientY } = event;
    if (clientY <= 0) {
      onBefore();
    }
  };
  useEffect(() => {
    document.addEventListener('mouseleave', handle);
    return () => document.removeEventListener('mouseleave', handle);
  }, []);
};

function App() {
  const beforeLeave = () => console.log('User is leaving...');
  useBeforeLeave(beforeLeave);
  return <h1>Hello Nooks</h1>;
}
