const Car = (props) => {
    const {make,model,year,color,money} =props;
    return (
        <div className="car-details">
            <h2>Car Information</h2>
            <ul>
                <li>
                    <strong>Make:</strong>{make}
                </li>
                <li>
                    <strong>Model:</strong>{model}
                </li>
                <li>
                    <strong>Year:</strong>{year}
                </li>
                <li>
                    <strong>Color:</strong>{color}
                </li>
                <li>
                    <strong>Money:</strong>{money}
                </li>
            </ul>    
        </div>
    );
};

export default Car;