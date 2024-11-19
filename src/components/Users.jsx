import Trash from "../assets/trash.svg";

const Users = () => {
  const users = [
    {
      id: 1,
      name: "Fulano de Tal",
      age: 18,
      email: "fulanotal@outlook.com",
    },
    {
      id: 2,
      name: "Cicrano de Qual",
      age: 23,
      email: "cicranoqual@outlook.com",
    },
  ];
  return (
    <div className="flex w-[400px] flex-col gap-4">
      {users.map((user) => (
        <div
          key={user.id}
          className="flex items-center justify-between rounded-xl bg-slate-900 p-6"
        >
          <div className="flex flex-col gap-2">
            <p className="text-base text-slate-400">
              <span className="font-bold text-white">Nome:</span> {user.name}
            </p>
            <p className="text-base text-slate-400">
              <span className="font-bold text-white">Idade:</span> {user.age}
            </p>
            <p className="text-base text-slate-400">
              <span className="font-bold text-white">Email:</span> {user.name}
            </p>
          </div>
          <button>
            <img src={Trash} alt="Apagar usuário" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default Users;
