export const getAllTodos = async () => {
  const res = await fetch(`/tasks`, { cache: "no-store" });
  const todos = await res.json();
  return todos;
};


export default function Home() {
  return (
    <main>
      <h1>Demo</h1>
    </main>
  );
}
