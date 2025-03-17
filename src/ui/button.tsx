interface ButtonProps {
  name: string;
  onButtonClick: () => void;
  isdisabled: boolean;
}

const ButtonComponent = ({ name, onButtonClick, isdisabled }: ButtonProps) => {
  // console.log("isdisabled: ", isdisabled);

  return (
    // <div
    //   className={`text-white bg-blue-500 p-16 h-[82px] w-auto cursor-pointer hover:bg-red-400`}
    // >
      <button className=" bg-blue-500 h-[30px] w-[40px]" disabled={isdisabled} type="button" onClick={onButtonClick}>
        {name}
      </button>
    // </div>
  );
};

export default ButtonComponent;
