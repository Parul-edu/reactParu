
{/* <div id='parent'>
    <div id='child'>
        <h1>
        <h2></h2>
        </h1>
        
    </div>
     <div id='child2'>
        <h1>
        <h2></h2>
        </h1>
        
    </div>
</div> */}

const parent = React.createElement(
    "div", {id: "parent"},
   [ React.createElement(
        "div", {id: "child"},
        [
        React.createElement(
            "div", {id: "h1"},"i am an h1 tag"
        ), React.createElement(
            "div", {id: "h2"},"i am an h2 tag"
        )
        ]
    ),
    React.createElement(
        "div", {id: "child2"},
        [
        React.createElement(
            "div", {id: "h1"},"i am an h1 tag"
        ), React.createElement(
            "div", {id: "h2"},"i am an h2 tag"
        )
        ]
    )]
)



console.log(parent); //object

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent)