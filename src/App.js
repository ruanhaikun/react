import React, { Component } from "react"

// import React from "react"
// const Component = React.Component                  ==  import React, { Component } from "react"

class App extends Component {
    render() {
        return (
            <ul className="haha">
                <li>{false ? '1111' : '22222'}</li>
                <li>1111</li>
                <li>1111</li>
                <li>1111</li>
            </ul>
        );

    }
}


export default App;