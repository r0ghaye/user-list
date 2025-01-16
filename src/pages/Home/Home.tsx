import classes from "./Home.module.scss";

function Home() {
  return (
    <div className={`${classes["home"]} ${classes.container}`}>
      <p>Please click on the 'Users' button to go to the users page 😊</p>
    </div>
  );
}

export default Home;
