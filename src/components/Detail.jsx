function Detail(props) {
  console.log(props);
  return (
    <>
      <p>{props.phone}</p>
      <p>{props.email}</p>
    </>
  );
}

export default Detail;
