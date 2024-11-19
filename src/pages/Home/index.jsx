import Form from "../../components/Form";
import Users from "../../components/Users";

const Home = () => {
  return (
    <main className="flex h-full flex-col items-center justify-center gap-12 p-6">
      <Form />
      <Users />
    </main>
  );
};

export default Home;
