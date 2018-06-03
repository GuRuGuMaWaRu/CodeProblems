// Instructions:
//  1.  Modify the _printKeys function so that every second property
//      of the variable "obj" is printed in the render function.

// Expected output:
//  ['property2', 'property4']

class TestComponent extends React.PureComponent {
  // Amend this function
  _printKeys = obj => {
    // Add your code here and modify the return
    // statement
    return Object.keys(obj).filter((item, i) => i % 2 !== 0);
  };

  render() {
    const obj = {
      property1: "hello",
      property2: true,
      property3: "foo",
      property4: false,
      property5: null
    };

    return <div>{JSON.stringify(this._printKeys(obj), null, 4)}</div>;
  }
}

ReactDOM.render(<TestComponent />, document.getElementById("app"));
