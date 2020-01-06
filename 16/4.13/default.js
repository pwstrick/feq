class Btn extends React.Component {
  render() {
    return <button ref="myBtn">提交</button>;
  }
}

class Container extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.StrictMode>
        <Btn />
      </React.StrictMode>
    );
  }
}


ReactDOM.render(
  <Container />,
  document.getElementById("container")
);
