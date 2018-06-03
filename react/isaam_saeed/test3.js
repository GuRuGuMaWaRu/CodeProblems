// Instructions:
//  1.  Modify this component to print out the result
//      of _mockAsyncFetch

// Expected output:
//  <div>hello</div>

class TestComponent extends React.Component {
  // Hint: you could use this to help store the
  // result of _mockAsyncFetch
  constructor(props) {
    super(props);

    // Add your code here
    this.state = {
      fetchResult: "loading..."
    };
  }

  // Expand this function to use/store the result of
  // _mockAsyncFetch to print in the render function
  componentDidMount() {
    this._mockAsyncFetch().then(response =>
      this.setState({ fetchResult: response })
    );
  }

  // Do not modify - this is a mocked async function
  _mockAsyncFetch = () => {
    return new Promise(resolve => {
      setTimeout(() => resolve("hello"), 1000);
    });
  };

  render() {
    return <div>{this.state.fetchResult}</div>;
  }
}

ReactDOM.render(<TestComponent />, document.getElementById("app"));
