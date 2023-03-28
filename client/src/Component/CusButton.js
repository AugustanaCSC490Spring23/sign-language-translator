import Button from "react-bootstrap/Button";
const CusButton = (props) => {
    const button =  <Button variant="custom" type = "submit">
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
      border-radius: ${props.radius}px
    }

 
    `}
      </style>

     {button}
    </>

    )
}

export default CusButton;