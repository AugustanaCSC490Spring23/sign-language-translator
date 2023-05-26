import Button from "react-bootstrap/Button";
const CusButton = (props) => {
  return (
    <>
      <style type="text/css">
        {`
    .btn-custom {
      background-color: ${props.bgcolor};
      color: ${props.color};
      width: ${props.width};
      font-weight: 720;
      font-family: "Nunito";
      letter-spacing: 0.1rem;
      border-radius: ${props.radius}px;
      outline: red;
      transition: background-color 0.2s;
      box-shadow: rgba(99,99,99,.2) 0 2px 8px 0;
    } 

    .btn-custom:hover, .btn-custom:focus {
      background: ${props.focus};
      color: ${props.color};
     
    }

    .btn-custom:active, .btn.active, .btn.show, .btn:first-child:active, :not(.btn-check)+.btn:active  {
      background: ${props.focus};
      color: ${props.color}
      opacity: 0.5;
      border: none;
      font-size: 1rem
    }
    `}
      </style>

      <Button
        name={props.title}
        variant="custom"
        type={props.type}
        onClick={props.onClick}
      >
        {props.title}
      </Button>
    </>
  );
};

export default CusButton;
