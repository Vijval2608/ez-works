function Function(props) {
    return (
        <div className="function">
            <div>
                <div className="func-header">
                    <img src={props.logo} alt="logo" />
                    <h4>{props.heading}</h4>
                </div>
                <p>Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet</p>
            </div>
        </div>
    )
}

export default Function;
