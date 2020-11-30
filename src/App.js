//LISTS AND KEYS

//ARRAY LIST
const listCustomer = [
  {
    id: 1,
    name: "Fernando Xavier",
    skils: ["React", "Node", "CSS", "Webpack"],
  },
  {
    id: 2,
    name: "Graziele Xavier",
    skils: ["Contabilidade", "Adm", "Fiscal", "Web"],
  },
  {
    id: 3,
    name: "Eduarda Xavier",
    skils: ["Ingles", "Frances", "Gales", "Espanhol"],
  },
  {
    id: 4,
    name: "Lucas Xavier",
    skils: ["Amongus", "FreeFire", "Android", "Youtube"],
  },
];

const App = () => {
  //ARROW FUNCTION
  // CHAVES DEVEM SER UNICAS ENTRE ELEMENTOS IRMAOS - key={`customer-${customer.id}` (evita problema de chave duplicada)
  const renderCustomers = (customer, index) => {
    return (
      // CHAVE PAI
      <div key={`customer-${customer.id}`}>
        <li>{customer.name}</li>
        {customer.skils.map(renderSkills)}
      </div>
    );
  };

  const renderSkills = (skill, index) => {
    return (
      // CHAVE FILHO
      <div style={{ paddingLeft: "30px" }} key={`skill-${index}`}>
        <li>{skill}</li>
      </div>
    );
  };

  return (
    <div>
      <p>Click Midia Digital</p>
      <p>Bem vindos Pessoal!</p>

      <div>
        <ul>{listCustomer.map(renderCustomers)}</ul>
      </div>
    </div>
  );
};

export default App;
