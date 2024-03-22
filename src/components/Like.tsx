import { useState } from "react";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";

interface Props {
  onClick: () => void;
}

export const Like = ({ onClick }: Props) => {
  const [status, setStatus] = useState(false);

  const toggle = () => {
    setStatus(!status);
    onClick();
  }

  const fullHeart = <IoMdHeart color="ff6b81" size={30} onClick={toggle}/>;
  const emptyHeart = <IoMdHeartEmpty size={30} onClick={toggle}/>;

  return status ? fullHeart : emptyHeart;
};

