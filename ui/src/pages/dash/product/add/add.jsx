import { Modal,Button ,Form} from "react-bootstrap";
import "./add.css"
const Add = ({show,handleClose}) => {
    return ( 
        <Modal show={show} onHide={handleClose} size="lg" id="add">
        <Modal.Header closeButton>
          <Modal.Title>Add product</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Product title</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Price</Form.Label>
                <Form.Control type="tel" placeholder="Price" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Image</Form.Label>
                <Form.Control type="tel" placeholder="Price" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" placeholder="Description" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Category</Form.Label>
                <Form.Select>
                <option></option>
                </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Sub Category</Form.Label>
                <Form.Select>
                <option></option>
                </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Product type</Form.Label>
                <Form.Select>
                <option></option>
                </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Brand</Form.Label>
                <Form.Select>
                <option></option>
                </Form.Select>
            </Form.Group>
            </Form>















        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save product
          </Button>
        </Modal.Footer>
      </Modal>
     );
}
 
export default Add;