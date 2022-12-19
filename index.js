
window.onload =() =>{
    const rootElement = document.getElementById("root");
    // rootElement.innerHTML = "Hello from spa"; // this will replace what is inside div in our html page
    // const button = document.createElement("button");
    // button.innerHTML = "Click me for current date";
    // button.addEventListener("click", () => {
    //     button.innerHTML = new Date().toString();
    // });

    // rootElement.appendChild(button);

    // const ints = [1, 2, 3, 4, 6,8,9];
    // ints.forEach(i => {
    //     let li = document.createElement("li");
    //     li.innerHTML = i;
    //     rootElement.appendChild(li);
    // });

    //Create new react virtual dom root,  and pass rootelement from our physical dom
    const root = React.createRoot(rootElement);
   // const root = ReactDOM..rootElement;
    //from here on, all our interactions will be with the react virtual dom called root and not the physical dom of the web browser
    const ints = [1,2,3];
    const childElements = [];
    childElements.push(React.createElement("li", {key: ints[0]}, ints[0])
    );
    childElements.push(React.createElement("li", {key: ints[1]}, ints[1])
    );
    childElements.push(React.createElement("li", {key: ints[2]}, ints[2])
    );

    root.render(childElements);
};