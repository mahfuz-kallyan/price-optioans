import PropTypes from "prop-types";
import Feature from "./Feature";

const PriceOption = ({option}) => {
    const {name, price, features} = option;
    return (
        <div className="bg-blue-300 rounded-lg p-4">
           <h2>
            <span className="text-7xl">{price}</span>
            <span className="text-3xl">/mon</span>
           </h2>
           <h4 className="text-3xl">{name}</h4>
           {
            features.map((feature, index) => <Feature
            key={index} feature={feature}></Feature>)
           }
        </div>
    );
};

PriceOption.propTypes ={
    option: PropTypes.object.isRequired
}
export default PriceOption;