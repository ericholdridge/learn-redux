import Head from "next/head";
import TodoInput from "../components/TodoInput";
import TodoList from "../components/TodoList";

const HomePage = () => {
  return (
    <div className="wrap">
      <Head>
        <title>Learn Redux</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TodoInput />
      <TodoList />
    </div>
  );
};

export default HomePage;
