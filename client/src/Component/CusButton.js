import Button from "react-bootstrap/Button";
const CusButton = (props) => {
    const button =  <Button variant="custom" >
    {props.title}
  </Button>
    return (
        <>
      <style type="text/css">
        {`
    .btn-custom {
      background-color: ${props.color};
      width: 100%;
      border-radius: ${props.radius}px;

    }
    `}
      </style>

     {button}
    </>

    )
}

export default CusButton;