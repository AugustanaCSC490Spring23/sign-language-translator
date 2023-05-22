import { Container, Table } from 'react-bootstrap';
import styles from "./FlashcardsTable.module.css";

const FlashcardsTable = ({words, signPhotos}) => {
    return (
        <Container>
            <Table striped bordered responsive
                className={styles.table}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Word</th>
                        <th>Hand Sign</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    )
}

export default FlashcardsTable;