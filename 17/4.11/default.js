const Btn = React.lazy(() => import('./btn'));

// class Btn extends React.Component {
  // constructor(props) {
	// super();
	// console.log(this.props);	//undefined
  // }
  // render() {
    // return <button>{this.props.name}</button>;
  // }
// }

ReactDOM.render(
    <Btn name="strick" />,
    document.getElementById("container")
);

