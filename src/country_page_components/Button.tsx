import { Button_Props } from "../interfaces";

const Button = ({ children, className, onClick }: Button_Props) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
