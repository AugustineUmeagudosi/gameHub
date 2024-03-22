// import ListGroup from "./components/ListGroup";

// export const App = () => {
//   let items = ["Lagos", "Abuja", "Anambra", "PortHarcourt", "Calabar"];

//   const handleSelectItem = (item: string) => {
//     console.log(item);
//   };

//   return (
//     <div>
//       <ListGroup
//         items={items}
//         heading="Cities"
//         onSelectItem={handleSelectItem}
//       />
//     </div>
//   );
// };

// export default App;

// import { Alert } from "./components/Alert";

// const App = () => {
//   return (
//     <div>
//       <Alert>
//         Hello <span>world!</span>
//       </Alert>
//     </div>
//   );
// };

// import { useState } from "react";
// import { Button } from "./components/Button";
// import { Alert } from "./components/Alert";

// const App = () => {
//   const [alert, setAlertVissibility] = useState(false);

//   return (
//     <div>
//       {alert && <Alert onClose={() => setAlertVissibility(false)}>CLicked</Alert>}
//       <Button onClick={() => setAlertVissibility(true)}>buttonName</Button>
//     </div>
//   );
// };
// export default App;

// import { Like } from "./components/Like";

// export const App = () => {
//   return <Like onClick={() => console.log('clicked!')}/>;
// };

// export default App;

// import { useState } from "react";
// import { NavBar } from "./components/NavBar";
// import { Cart } from "./components/Cart";

// export const App = () => {
//   const [cartItems, setCartItems] = useState(['Product1', 'Product2']);

//   return (
//     <div>
//       <NavBar cartItemsCount={cartItems.length} />
//       <Cart cartItems={cartItems} onClear={() => setCartItems([])}/>
//     </div>
//   );
// };

// export default App;

// import { useState } from "react";

// export const App = () => {
//   const [game, setGame] = useState({
//     id: 1,
//     player: {
//       name: "John",
//     },
//   });

//   const handleClick = () => {
//     setGame({ ...game, player: { ...game.player, name: 'Nick' } });
//   };

//   return (
//     <>
//       <div key={game.id}> {game.player.name}</div>
//       <button onClick={handleClick}> Add Nick</button>
//     </>
//   );
// };

// export default App;

// import { useState } from "react";

// export const App = () => {
//   const [pizza, setPizza] = useState({
//     name: "Spicy Pepperoni",
//     toppings: ["Mushroom"]
//   });

//   const handleClick = () => {
//     setPizza({ ...pizza, toppings: [...pizza.toppings, "Cheese"] });
//   };

//   return (
//     <>
//       <div> Pizza </div>
//       <ul>
//         {pizza.toppings.map(topping => <li key={topping}>{topping}</li>)}
//       </ul>
//       <button onClick={handleClick}> Add Cheese</button>
//     </>
//   );
// };

// export default App;

// import { useState } from "react";

// export const App = () => {
//   const [cart, setCart] = useState({
//     discount: 0.1,
//     items: [
//       { id: 1, title: "Prodouct 1", quantity: 1 },
//       { id: 2, title: "Prodouct 2", quantity: 3 },
//     ],
//   });

//   const handleClick = () => {
//     setCart({
//       ...cart,
//       items: cart.items.map((item) => {
//         return item.id === 1
//           ? { ...item, quantity: item.quantity + 1 }
//           : { ...item };
//       }),
//     });
//   };

//   return (
//     <>
//       <div> {cart.discount} </div>
//       <ul>
//         {cart.items.map((item) => (
//           <li key={item.id}>
//             Title: {item.title}, Quantity: {item.quantity}
//           </li>
//         ))}
//       </ul>
//       <button onClick={handleClick}> Set item 1 quantity to 2</button>
//     </>
//   );
// };

// export default App;

// import { ExpandableText } from "./components/ExpandableText";

// export const App = () => {
//   return (
//     <div>
//       <ExpandableText maxChars={10}>
//         Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius,
//         explicabo consectetur aliquid et veniam cum ex facere labore nisi unde
//         laborum voluptatum porro asperiores? Quam temporibus quia maiores saepe
//         nihil quidem, magni veniam ut ratione accusamus minima vitae voluptas
//         recusandae quaerat soluta cum eaque nisi explicabo a. Aspernatur
//         mollitia explicabo, quis unde laboriosam dolorum placeat cumque soluta
//         reiciendis inventore tempore fugit asperiores labore veniam eum
//         repellat, exercitationem excepturi illum reprehenderit rem. Voluptatem
//         est nemo, reiciendis, accusantium hic quas, vel nisi saepe in libero
//         modi excepturi quos nobis! Facere cumque vitae sit? Eaque natus incidunt
//         quidem ullam assumenda et modi eos.
//       </ExpandableText>
//     </div>
//   );
// };

// export default App;

// import { Form } from "./components/Form";

// export const App = () => {
//   return (
//     <Form />
//   );
// };

// export default App;

// import { MiniCrud } from "./components/MiniCrud";

// export const App = () => {
//   return <MiniCrud />;
// };

// export default App;

// import { useState } from "react";
// import { Form, FormData } from "./components/ExpenseTracker/Form";
// import { Table } from "./components/ExpenseTracker/Table";

// export const App = () => {
//   const [shoppingList, setShoppingList] = useState<FormData[] | undefined>();

//   return (
//     <>
//       <Form setShoppingList={setShoppingList} shoppingList={shoppingList}/>
//       <Table shoppingList={shoppingList} setShoppingList={setShoppingList}/>
//     </>
//   );
// };

// export default App;

// import { useState } from "react";
// import { ExpenseList } from "./expense-tracker/components/ExpenseList";
// import { ExpenseFilter } from "./expense-tracker/components/ExpenseFilter";
// import { ExpenseForm } from "./expense-tracker/components/ExpenseForm";

// export const App = () => {
//   const [selectedCategory, setSelectedCategory] = useState("");
//   const [expenses, setExpenses] = useState([
//     { id: 1, description: "Milk", category: "Groceries", amount: 10 }
//   ]);

//   const visibleExpenses = selectedCategory
//     ? expenses.filter((expense) => expense.category === selectedCategory)
//     : expenses;

//   return (
//     <>
//       <div className="mb-5">
//         <ExpenseForm onSubmit={expense => setExpenses([...expenses, {...expense, id: expenses.length + 1 } ])}/>
//       </div>

//       <div className="mb-3">
//         <ExpenseFilter
//           onSelectCategory={(category) => setSelectedCategory(category)}
//         />
//       </div>

//       <ExpenseList
//         expenses={visibleExpenses}
//         onDelete={(id) =>
//           setExpenses(expenses.filter((expense) => expense.id !== id))
//         }
//       />
//     </>
//   );
// };

// export default App;

// import { useState } from "react";
// import { ProductList } from "./components/ProductList";

// export const App = () => {
//   const [category, setCategory] = useState('');

//   return (
//     <>
//       <select className="form-select" onChange={(e) => setCategory(e.target.value)}>
//         <option value="">Select category</option>
//         <option value="Clothing">Clothing</option>
//         <option value="Household">Household</option>
//       </select>
//       <ProductList category={category}/>
//     </>
//   );
// };

// export default App;

import { useEffect, useState } from "react";
import axios, { AxiosError, CanceledError } from "axios";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}

export const App = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    // clean up method for cancelling the fetch request
    const controller = new AbortController();

    // const fetchData = async () => {
    //   try {
    //     const { data } = await axios.get<User[]>(
    //       "https://jsonplaceholder.typicode.com/users"
    //     );
    //     setUsers(data);
    //   } catch (error) {
    //     if (!(error instanceof CanceledError)) setError((error as AxiosError).message);
    //   }
    // };

    // fetchData();

    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users", {
        signal: controller.signal,
      })
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (!(err instanceof CanceledError)) setError(err.message);
        setLoading(false);
      });
    // .finally(() => setLoading(false));

    return () => controller.abort();
  }, []);

  const deleteUser = (user: User) => {
    const originalUsers = [...users];
    setUsers(users.filter(u => u.id !== user.id));

    axios.delete(`https://jsonplaceholder.typicode.com/users/${user.id}`)
      .catch(err => {
        setError(err.message);
        setUsers(originalUsers);
      })
  };

  return (
    <>
      {isLoading && <div className="spinner-border"></div>}
      {error && <p className="text-danger">{error}</p>}
      <ul className="list-group">
        {users.map((user) => (
          <li
            className="list-group-item d-flex justify-content-between"
            key={user.id}
          >
            {user.name}
            <button className="btn btn-outline-danger" onClick={() => deleteUser(user)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default App;

// import ImageDownloader from './components/ImageDownloader';

// function App() {
//   return (
//     <div>
//       <h1>Image Downloader</h1>
//       <ImageDownloader />
//     </div>
//   );
// }

// export default App;
