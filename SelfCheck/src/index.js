
export default function App({data}) {
    return (<p name={"testujemy"} key={1}> {data} + "Johny be good!"</p>);
}
ReactDOM.render(<App data={"Andrzej"}/>, document.getElementById("App"));

