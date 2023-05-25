import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Link } from "react-router-dom";
const CusBreadcrumb = (props) => {
  return (
    <>
      <style type="text/css">
        {`
  .breadcrumb-item a {
    color: black;
    text-decoration: none

  }
    .breadcrumb-item :hover, .breadcrumb-item :focus {
      color: green
    }

    .breadcrumb-item:active, .breadcrumb-item:visited, .breadcrumb:active, .breadcrumb.show, .breadcrumb:first-child:active, {
      font-weight: 800
    }

    `}
      </style>

      <Breadcrumb className={props.className}>
        {props.link.map((value) => {
          let active = false;

          if (value[2] + 1 === props.link.length) {
            active = true;
          }

          return (
            <Breadcrumb.Item active={active} key={value[2]}>
              <Link to={value[0]}>{value[1]}</Link>
            </Breadcrumb.Item>
          );
        })}
      </Breadcrumb>
    </>
  );
};

export default CusBreadcrumb;
