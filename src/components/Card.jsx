import Avatar from "./Avatar";
import Detail from "./Detail";

function Card(props) {
  const data = props.person;

  const { email, name, image, phone } = data;
  return (
    <div>
      <h2>{name}</h2>
      <Avatar image={image} name={name} />
      <div className="bottom">
        <Detail phone={phone} />
        <Detail email={email} />
      </div>
      {/*    <p>{phone}</p>
      <p>{email}</p> */}
    </div>
  );
}

export default Card;
