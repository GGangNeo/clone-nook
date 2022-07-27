function App() {
  const [count, setCounter] = useState(0);
  const increase = () => setCounter(count + 1);
  const decrease = () => setCounter(count - 1);
  return (
    <div className="App">
      <h1>Hello {count}</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={increase}> Increase </button>
      <button onClick={decrease}> Decrease</button>
    </div>
  );
}
// Class
class AppClass extends React.Component {
  state = {
    item: 1,
  };
  render() {
    const { item } = this.state;
    return (
      <div className="App">
        <h1>Hello {item}</h1>
        <h2>Start editing to see some magic happen!</h2>
        <button onClick={this.increase}> Increase </button>
        <button onClick={this.decrease}> Decrease</button>
      </div>
    );
  }
  increase = () => {
    this.setState((state) => {
      return {
        item: state.item + 1,
      };
    });
  };

  decrease = () => {
    this.setState((state) => {
      return {
        item: state.item - 1,
      };
    });
  };
}
