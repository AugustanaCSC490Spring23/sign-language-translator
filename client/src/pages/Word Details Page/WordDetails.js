import {
  Container,
  Row,
  Col,
  Image,
  Button,
  Modal,
  Form,
  Dropdown,
} from "react-bootstrap";
import CusButton from "../../Component/CusButton";
import CusBreadcrumb from "../../Component/CusBreadrumb";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  getWordByText,
  getNextWordOrPreviousByFirstLetter,
  getWordsByTopic,
} from "../../services/itemsService";
import {
  addFlashcards,
  addCollection,
} from "../../services/flashcardsService";
import style from "./WordDetails.module.css";
import { updateUser } from "../../services/authService";

const WordDetails = () => {
  const param = useParams();
  const navigate = useNavigate();
  const [wordDetail, setWordDetail] = useState({
    title: "",
    url: "",
    _id: "",
    topic: "",
  });
  const [signPhotos, setSignPhotos] = useState([]);
  const [item, setItem] = useState({
    currentItem: "",
    nextItem: "",
    previousItem: "",
  });

  const [relatedWords, setRelatedWords] = useState({
    data: {},
    render: false,
  });

  const [collections, setCollections] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const [selectedCollection, setSelectedCollection] = useState("");
  const [newCollectionTitle, setNewCollectionTitle] = useState("");
  const [newCollectionDescription, setNewCollectionDescription] =
    useState("");
  const [createNewCollection, setCreateNewCollection] =
    useState(false);

  const handleCollectionChange = (e) => {
    setSelectedCollection(e.target.value);
  };

  const handleNewCollectionTitleChange = (e) => {
    setNewCollectionTitle(e.target.value);
  };

  const handleNewCollectionDescriptionChange = (e) => {
    setNewCollectionDescription(e.target.value);
  };

  const handleAddToFlashcards = () => {
    setShowModal(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (createNewCollection) {
      // Add to a new collection
      addCollection(newCollectionTitle, newCollectionDescription, [
        wordDetail._id,
      ]);
    } else {
      // Add flashcards to an existing collection
      addFlashcards([wordDetail._id], selectedCollection);
    }

    updateUser();

    // Close the modal
    setShowModal(false);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const handleToggleCreateNewCollection = () => {
    setCreateNewCollection(!createNewCollection);
  };

  //fetching data and set current word
  useEffect(() => {
    const fetchData = async () => {
      const word = param.text;

      try {
        const res = await getWordByText(word);
        const itemData = res.data.data.item;

        setWordDetail({
          title: itemData.text.toUpperCase(),
          url: itemData.meaningPhoto,
          _id: itemData._id,
          topic: itemData.topic,
        });
        setItem((prevItem) => ({
          ...prevItem,
          currentItem: itemData,
        }));

        setSignPhotos(itemData.signPhotos);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();

    setCollections(
      JSON.parse(localStorage.getItem("user"))?.flashcardsCollections,
    );

    return () => {
      setWordDetail({
        title: "",
        url: "",
        _id: "",
        topic: "",
      });
      setItem({ ...item, currentItem: "" });
      setSignPhotos([]);
    };
  }, [param]);

  //fetching previous and next words
  useEffect(() => {
    if (wordDetail._id !== "") {
      const fetchNextAndPreviousItems = async () => {
        try {
          const res = await getNextWordOrPreviousByFirstLetter(
            wordDetail._id,
          );
          const data = res.data.data;

          setItem((prevItem) => ({
            ...prevItem,
            nextItem: data.nextItem,
            previousItem: data.previousItem,
          }));
        } catch (error) {
          console.log(error);
        }
      };

      fetchNextAndPreviousItems();
    }
    return () => {
      setItem({
        ...item,
        nextItem: "",
        previousItem: "",
      });
    };
  }, [wordDetail._id]);

  //fetch data to get the related words by topic
  useEffect(() => {
    const fetchTopic = async () => {
      try {
        const res = await getWordsByTopic(wordDetail.topic);

        setRelatedWords({
          data: res.data,
          render: true,
        });
      } catch (e) {
        console.log(e);
      }
    };
    fetchTopic();
    return () => {
      setRelatedWords({ data: {}, render: false });
    };
  }, [param]);

  //display related items
  const relatedItems = (length, items) => {
    let col = [];
    // console.log("run");
    for (let i = 0; i < 4; i++) {
      if (length < 4 && i >= length) {
        col.push(<Col></Col>);
        continue;
      }

      col.push(
        <Col
          onClick={(e) => {
            navigate(
              `../learning/dictionary/${items[i].firstLetter}/${items[i].text}`,
            );
          }}
        >
          <Image fluid src={items[i].meaningPhoto} />
        </Col>,
      );
    }

    return col;
  };

  //not working because navigate will reload the page, which cause the function to run into a loop
  const navigateRoute = (item) => {
    navigate(
      `../learning/dictionary/${item.firstLetter}/${item.text}`,
    );
  };

  return (
    <Container fluid className={`px-5 mb-4 ${style.container}`}>
      <CusBreadcrumb
        className={`mb-3 ${style.breadcrumb}`}
        link={[
          ["/", "HOME", 0],
          ["/learning/dictionary", "DICTIONARY", 1],
          ["", wordDetail.title, 2],
        ]}
      />

      {collections && (
        <Modal show={showModal} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>Add to Flashcards</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleFormSubmit}>
              <Container>
                <Row>
                  <Col>
                    <Form.Group controlId="flashcardsCollection">
                      <Form.Label>Choose a Collection</Form.Label>
                      <Form.Control
                        as="select"
                        value={selectedCollection}
                        onChange={handleCollectionChange}
                        disabled={createNewCollection}
                      >
                        <option value="">
                          -- Select Collection --
                        </option>
                        {collections.map((collection) => (
                          <option
                            key={collection.slug}
                            value={collection.slug}
                          >
                            {collection.title}
                          </option>
                        ))}
                      </Form.Control>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="createNewCollection">
                      <Form.Check
                        type="checkbox"
                        label="Create New Collection"
                        checked={createNewCollection}
                        onChange={handleToggleCreateNewCollection}
                      />
                    </Form.Group>
                    <Form.Group controlId="newCollectionTitle">
                      <Form.Label>New Collection Title</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter title"
                        value={newCollectionTitle}
                        onChange={handleNewCollectionTitleChange}
                        disabled={!createNewCollection}
                      />
                    </Form.Group>
                    <Form.Group controlId="newCollectionDescription">
                      <Form.Label>
                        New Collection Description
                      </Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Enter description"
                        value={newCollectionDescription}
                        onChange={
                          handleNewCollectionDescriptionChange
                        }
                        disabled={!createNewCollection}
                      />
                    </Form.Group>
                  </Col>
                </Row>
              </Container>
              <Button variant="primary" type="submit">
                Add
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      )}

      <Row className={style.content}>
        <Row>
          <Col
            className={`d-block d-md-none text-center mt-3 ${style.text}`}
            xs={{ order: 2 }}
          >
            {wordDetail.title}
          </Col>

          <Col
            xl={{ span: 1, order: 1 }}
            className={`d-none d-xl-block mb-3  mr-3 ${style.previousButton}`}
          >
            {item.previousItem && (
              <CusButton
                title="Previous"
                key="previous"
                bgcolor="#8b4208"
                color="white"
                focus="#3e1408"
                onClick={(e) => {
                  navigate(
                    `../learning/dictionary/${item.previousItem.firstLetter}/${item.previousItem.text}`,
                  );
                }}
              />
            )}
          </Col>

          <Col
            xs={{ order: 3 }}
            xl={{ span: 4, order: 1 }}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              // border: "1px solid red",
            }}
            className={`mt-xs-1 mt-md-2 ${style.instruction}`}
          >
            <Row
              className="d-none d-xl-flex mb-2"
              // style={{ border: "1px solid black" }}
            >
              <Col
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  // border: "1px solid black",
                }}
              >
                <h1 className={style.text}>{wordDetail.title}</h1>
              </Col>

              <Col className={style.title_image_column}>
                <Image
                  fluid
                  className={style.title_image}
                  src={wordDetail.url}
                />
              </Col>
            </Row>
            <Row className="mt-3 mb-sm-4">
              The sign we use for bus looks like the motion of turning
              a big steering wheel back and forth, with your fists
              making the circular steering-wheel motion on either side
              of your torso. It is like you are driving a bus.
            </Row>
            <Col
              xl={{ span: 1, order: 4 }}
              className="d-none d-xl-block"
            ></Col>
            {collections && (
              <CusButton
                title="Add to Flashcards"
                key="next"
                bgcolor="#8b4208"
                color="white"
                focus="#3e1408"
                onClick={handleAddToFlashcards}
              />
            )}
          </Col>

          <Col
            xs={{ order: 1 }}
            xl={{ span: 5, order: 2 }}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Row>
              {signPhotos.map((value) => {
                return (
                  <Col className={style.col_image}>
                    <Image
                      roundedCircle
                      fluid
                      src={value[1]}
                      className={style.image}
                    />
                  </Col>
                );
              })}
            </Row>
          </Col>
          <Col
            xl={{ span: 1, order: 4 }}
            className="d-none d-xl-block"
          >
            {item.nextItem && (
              <CusButton
                title="Next"
                key="next"
                bgcolor="#8b4208"
                color="white"
                focus="#3e1408"
                onClick={(e) => {
                  navigate(
                    `../learning/dictionary/${item.nextItem.firstLetter}/${item.nextItem.text}`,
                  );
                }}
              />
            )}
          </Col>
        </Row>

        <Row>
          <Col className={`${style.text} mt-5`}>Related Words</Col>
          <Row className={style.item}>
            {relatedWords.render &&
              relatedItems(
                relatedWords.data.count,
                relatedWords.data.data.items,
              )}
          </Row>
        </Row>
      </Row>
    </Container>
  );
};

export default WordDetails;
