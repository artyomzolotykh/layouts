import PropTypes from "prop-types";

const IconSwitch = ({icon, onSwitch}) => {
  return (
    <div className="IconSwitch">
      <span className="material-icons" onClick={onSwitch}>{icon}</span>
    </div>
  );
};

IconSwitch.propTypes = {
  icon: PropTypes.string.isRequired,
  onSwitch: PropTypes.func.isRequired,
};

IconSwitch.defaultProps = {
  icon: "view_list",
};

export default IconSwitch;