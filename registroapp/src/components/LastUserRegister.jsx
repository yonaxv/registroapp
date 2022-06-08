export default function LastUserRegister({ user }) {
  return (
    <div className="flex flex-col flex-wrap content-center justify-start w-2/4">
      <h1 className="pb-4 text-3xl font-bold">Ultima Persona Registrada</h1>
      <div className="card w-96 bg-neutral text-neutral-content">
        {user && (
        <div className="items-center text-center card-body">
        
          <h2 className="card-title">{user.name} {user.lastname}</h2>
          <p>{user.ci}</p>
          
        </div>
        )}
      </div>
    </div>
  );
}
