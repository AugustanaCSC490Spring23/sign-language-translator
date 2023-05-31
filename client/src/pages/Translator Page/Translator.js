import { useState, useEffect } from "react";
import {
  Container,
  Form,
  Row,
  Col,
  Image,
  Button,
} from "react-bootstrap";
import CusButton from "../../Component/CusButton";
import style from "./Translator.module.css";
import { getSentence } from "../../services/itemsService";

const Translator = () => {
  const [sentence, setSentence] = useState("");
  const [imgArray, setImgArray] = useState([]);
  const [imgList, setImgList] = useState([]);
  const [id, setId] = useState(0);
  useEffect(() => {
    imgArray.map((item) => {
      if (Array.isArray(item)) {
        //lists of individual letters not in the database
        item.map((img) => {
          img.signPhotos.map((photo) => {
            setImgList((prev) => {
              return [...prev, photo];
            });
            setId((prev) => {
              photo.push(prev + 1);
              return prev + 1;
            });
          });
        });
      } else {
        // word or phrase in DB
        // setImgList((prev) => [...prev, ...item.signPhotos]);
        item.signPhotos.map((photo) => {
          setImgList((prev) => {
            return [...prev, photo];
          });
          setId((prev) => {
            photo.push(prev + 1);
            return prev + 1;
          });
        });
      }
    });

    return () => {
      setImgList([]);
      setId(0);
    };
  }, [imgArray]);

  const onTranslate = (e) => {
    e.preventDefault();
    if (!sentence) {
      setImgArray([]);
      return;
    }
    getSentence({ sentence: sentence }).then(function (response) {
      setImgArray(response.data.data.item);
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

      <Row className="mb-3">
        <Form onSubmit={onTranslate} style={{ padding: "0px 8rem" }}>
          <Row className={`${style.form} mb-4`}>
            <Col
              lg={{ span: 6 }}
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Col className={style.inputCol}>
                <Form.Control
                  placeholder="Input something..."
                  name="input"
                  className={`mb-3 ${style.input} `}
                  value={sentence}
                  onChange={(e) => {
                    setSentence((prev) => {
                      prev = e.target.value;
                      return prev;
                    });
                  }}
                />
                <CusButton
                  width="60%"
                  id="testing"
                  bgcolor="#8b4208"
                  title="TRANSLATE"
                  color="white"
                  type="submit"
                  focus="#3e1408"
                  weight="750"
                />
              </Col>
            </Col>

            <Col className={style.translationSec}>
              {imgList.map((item) => {
                return (
                  <Col className={style.img}>
                    <Image fluid src={item[1]} key={item[2]} />
                  </Col>
                );
              })}
            </Col>
          </Row>
        </Form>
      </Row>
    </Container>
  );
};

export default Translator;
