import Card from "./components/Card";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Note from "./components/Note";
import data from "./ui/data";

const person = data.map((i) => i);

function App() {
  return (
    <>
      <Header />
      <Note />
      <div>
        <Card person={data[0]} />
        <Card person={data[1]} />
        <Card person={data[2]} />
      </div>
      <Footer />
    </>
  );
}

export default App;
// email={email} name={name} phone={phone} image={image}
