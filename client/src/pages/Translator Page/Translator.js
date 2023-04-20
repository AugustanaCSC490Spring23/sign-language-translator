import { useState, useEffect } from "react";
import { Container, Form, Row, Col, Image } from "react-bootstrap";
import CusButton from "../../Component/CusButton";
import style from "./Translator.module.css";
import axios from "axios";

const Translator = () => {
  const [sentence, setSentence] = useState("");
  const [imgArray, setImgArray] = useState([]);
  let imgList;

  useEffect(() => {
    // console.log(imgArray);
    imgList = [];
    //Runs only on the first render
    imgArray.map((item) => {
      console.log(item);
      // console.log(item);
      // item.map((value) => {
      //   let photo = value.signPhotos;

      //   imgList.push(photo);
      //   photo.map((link) => {

      //   });
      // });
    });
    // console.log(imgList[0]);
  }, [imgArray]);

  const onTranslate = (e) => {
    console.log(sentence);
    e.preventDefault();

    axios({
      method: "get",
      url: "/api/v1/items/sentence/" + sentence,
    }).then(function (response) {
      // console.log(response.data.data.item);
      // console.log(response.data.data.item);
      setImgArray(response.data.data.item);
      // setImgArray(response.data.data.item);
      // imgArray.map((item) => {
      //   item.signPhotos.map((link) => {

      //   });

      // });
      // console.log(imgArray);

      // console.log(response.data.data.item);
      // imgArray.map((item) => {
      //   console.log(item);
      //   if (item.length > 1) {
      //     item.map((value) => {
      //       console.log(value);
      //     });
      //   } else {
      //     console.log(item.meaningPhoto);
      //   }
      // });
    });
  };

  return (
    <Container fluid className={`px-5 ${style.container}`}>
      <h1 className={`mt-3 ${style.text}`}>
        Sign Language Translator
      </h1>
      <h5 className={`mb-4 ${style.instruction_text}`}>
        Instructions:
        <span style={{ fontWeight: "400" }}>
          &ensp;Input something to generate the sign language pictures
        </span>
      </h5>

      <Row
        style={{ flex: "1", height: "100%" }}
        className="h-70 mb-3"
      >
        <Form
          onSubmit={onTranslate}
          style={{ height: "100%", border: "1px solid cyan" }}
        >
          <Row
            className={`${style.form} mb-4 mx mx-3`}
            style={{ border: "1px solid black" }}
          >
            <Col md={{ span: 6 }} style={{ padding: "0 2px" }}>
              <Form.Control
                as="textarea"
                rows={18}
                placeholder="Input something..."
                name="input"
                className={`${style.input} `}
                value={sentence}
                onChange={(e) => {
                  setSentence((prev) => {
                    prev = e.target.value;
                    return prev;
                  });
                }}
              />
            </Col>

            <Col
              style={{
                padding: "0 2px",
                border: "2px solid red",
                background: "white",
                borderRadius: "5px",
                height: "inherent",
                flexFlow: "row wrap",
                overflow: "auto",
              }}
            >
              {/* {imgList.map(item => {
                return (
                  <Image
                  key={item[0][0]}
                  style={{
                    height: "50%",
                    width: "30%",
                    border: "1px solid black",
                  }}
                  src={item.}
                />
                )
              })} */}

              {/* {imgArray.length > 0 &&
                imgArray.map((item) => {
                  console.log(item);
                  if (item.length > 1) {

                  return (
                    <Image
                      key={item}
                      style={{
                        height: "50%",
                        width: "30%",
                        border: "1px solid black",
                      }}
                      src={item.signPhotos}
                    />
                  );
                  }
                })} */}
              {/* else {
                    console.log("o 2");
                    console.log(item);
                    item.signPhotos.map((link) => {
                      // console.log(link[1]);
                      return (
                        <Image
                          style={{
                            height: "50%",
                            width: "30%",
                            border: "1px solid black",
                          }}
                          src={link[1]}
                        />
                      );
                    });
                  } */}
              {/* {imgArray.map((item) => {
                console.log("o day ne");
                return <img src={item} />;
              })} */}
              {/* <Image
                style={{
                  height: "50%",
                  width: "30%",
                  border: "1px solid black",
                }}
                src="https://res.cloudinary.com/dfb7mq7zb/image/upload/v1677129379/signlanguage/grandma_afvcxm.png"
              /> */}
            </Col>
          </Row>
          <Row>
            <Col md={{ span: 4, offset: 4 }}>
              <CusButton
                title="Translate"
                color="white"
                bgcolor="#3e1408"
                type="submit"
                focus="#3e1408"
                weight="750"
              />
            </Col>
          </Row>
        </Form>
      </Row>
    </Container>
  );
};

export default Translator;
