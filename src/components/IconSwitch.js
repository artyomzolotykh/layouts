const IconSwitch = ({icon, onSwitch}) => {
  return (
    <div className="IconSwitch">
      <span className="material-icons" onClick={onSwitch}>{icon}</span>
    </div>
  );
}

export default IconSwitch;