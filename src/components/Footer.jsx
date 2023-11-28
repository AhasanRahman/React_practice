const Footer = () => {


  const city = ["Dhaka", "Tokyo", "London", "japan",'China'];
  return (
    <div>
      <p>all rights Reserved by..</p>
      <ol>

        {city.map((item, i) => {

          return <li key={i.toString()}>{item}</li>;

        })}
      </ol>
    </div>

  );

};

export default Footer;
