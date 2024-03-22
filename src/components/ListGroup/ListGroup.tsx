import { useState } from "react";
import styles from "./ListGroup.module.css";
import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

interface ListItemProps {
  active: Boolean;
}

const ListItem = styled.li<ListItemProps>`
  padding: 5px 0;
  background: ${(props) => (props.active ? "blue" : "none")};
`;

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

export const ListGroup = ({ items, heading, onSelectItem }: Props) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  // return (
  //   <>
  //     <h1>{heading}</h1>
  //     {!items.length && <p>No items found</p>} {/* // check for empty state */}
  //     <ul className={[styles.listGroup, styles.container].join(' ')}> {/* using multiple classes in vanilla css */}
  //       {items.map((item, index) => (
  //         <li
  //           className={
  //             selectedIndex === index
  //               ? "list-group-item active"
  //               : "list-group-item"
  //           }
  //           key={index}
  //           onClick={() => {
  //             setSelectedIndex(index);
  //             onSelectItem(item);
  //           }}
  //         >
  //           {item}
  //         </li>
  //       ))}
  //     </ul>
  //   </>
  // );

  return (
    <>
      <h1>{heading}</h1>
      {!items.length && <p>No items found</p>} {/* // check for empty state */}
      <List>
        {" "}
        {/* using multiple classes in vanilla css */}
        {items.map((item, index) => (
          <ListItem
            active={index === selectedIndex}
            key={index}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </ListItem>
        ))}
      </List>
    </>
  );
};
