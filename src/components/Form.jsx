import Input from "./Input";

const Form = () => {
  return (
    <form
      action=""
      className="flex w-[400px] flex-col gap-8 rounded-xl bg-slate-900 p-6"
    >
      <div className="text-center text-2xl font-bold text-white">
        <h1>Cadastre-se!</h1>
      </div>
      <div className="flex flex-col gap-4">
        <Input name="nome" placeholder="Nome" type="text" />
        <Input name="idade" placeholder="Idade" type="number" />
        <Input name="email" placeholder="email@email.com" type="email" />
        <button
          type="button"
          className="rounded-lg bg-violet-700 p-2 font-bold text-white"
        >
          Cadastrar
        </button>
      </div>
    </form>
  );
};

export default Form;
