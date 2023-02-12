const names = ["Androo", "Johny"];
function App({firstName}) {
    return (
        React.createElement("p", {name: "testujemy", key:1},  firstName[0] +" be good!")
    );
}
ReactDOM.render(App({firstName: names}), document.getElementById("App"));

