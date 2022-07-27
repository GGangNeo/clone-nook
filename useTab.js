const content = [
  { tab: 'section 1', content: 'Content of Section 1.' },
  { tab: 'section 2', content: 'Content of Section 2.' },
];

export const useTabs = (tab, allTabs) => {
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }
  const [currentIndex, setCurrentIndex] = useState(tab);
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex,
  };
};

export default function App() {
  const { currentItem, changeItem } = useTabs(0, content);
  return (
    <div className="App">
      <h1>Hello</h1>
      {content.map((section) => (
        <button onClick={() => changeItem(currentIndex)}>{section.tab} </button>
      ))}
      <div>{currentItem.content}</div>
    </div>
  );
}
