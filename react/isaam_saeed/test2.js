// Instructions:
//  1.  Print the variable "hello" as a list of <li>'s with the following
//      requirements:
//        - The list items should be sorted alphabetically (A-Z)
//        - Print only the first 3 characters of each item in the
//          list
//        - Print all characters in uppercase

// Expected output:
// <ul>
//   <li>APP</li>
//   <li>BAN<li>
//   <li>CAR</li>
//   <li>PEA</li>
// </ul>

class TestComponent extends React.PureComponent {
  render() {
    const hello = ["Pear", "Apple", "Carrot", "Banana"];
    const helloList = hello
      .sort()
      .map(item => <li key={item}>{item.toUpperCase().slice(0, 3)}</li>);

    return <ul>{helloList}</ul>;
  }
}

ReactDOM.render(<TestComponent />, document.getElementById("app"));
