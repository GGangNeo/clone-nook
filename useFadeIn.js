export const useFadeIn = (duration = 1, delay = 0) => {
  if (typeof duration !== 'number' || typeof delay !== 'number') {
    return;
  }
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      const { current } = element;
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      current.style.opacity = 1;
    }
  }, []);
  return { ref: element, style: { opacity: 0 } };
};

export function App() {
  const fadeIn = useFadeIn(5, 10);
  return <h1 {...fadeIn}>This will fade in.</h1>;
}
