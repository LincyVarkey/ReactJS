const heading = React.createElement("h1", { id: "heading"}, "Hello World");
const childparent = React.createElement("div", {id: "childparent"}, heading)
const parent = React.createElement("div", {id: "parent"}, childparent)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);