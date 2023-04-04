import Button from "react-bootstrap/Button";
const CusButton = (props) => {
    const button =  <Button variant="custom" type = {props.type} >
    {props.title}
  </Button>
    return (
        <>
      <style type="text/css">
        {`
    .btn-custom {
      background-color: ${props.bgcolor};
      color: ${props.color};
      width: 100%;
      font-weight: 720;
      font-family: "Nunito";
      letter-spacing: 0.1rem;
      border-radius: ${props.radius}px;
      outline: red
    } 

    .btn-custom:hover, .btn-custom:focus {
      font-size: 1.1rem;
      background: ${props.focus};
      opacity: 1.1;
    }

    .btn-custom:active, .btn.active, .btn.show, .btn:first-child:active, :not(.btn-check)+.btn:active  {
      background: ${props.focus};
      opacity: 0.5;
      border: none;
      font-size: 1rem
    }
    `}
      </style>

     {button}
    </>

    )
}

export default CusButton;