// Faculty.js

import React, { useState } from 'react';
import { Container, Form, Button, Table, Modal, Image } from 'react-bootstrap';

const FacultyList = () => {
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    contact: '',
    email: '',
    picture: null, // Use null instead of empty string for file
    intro: ''
  });

  const [facultyList, setFacultyList] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === 'picture') {
      // Update formData with selected file
      setFormData({
        ...formData,
        picture: files[0] // Get the first file from the array of selected files
      });
    } else {
      // Update other form data fields
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      // Update existing faculty entry
      const updatedList = [...facultyList];
      updatedList[editIndex] = formData;
      setFacultyList(updatedList);
      setEditIndex(null);
    } else {
      // Add new faculty entry
      setFacultyList([...facultyList, formData]);
    }
    // Clear form data after submission
    setFormData({
      name: '',
      subject: '',
      contact: '',
      email: '',
      picture: null, // Reset picture to null after submission
      intro: ''
    });
  };

  const handleEdit = (index) => {
    const facultyToEdit = facultyList[index];
    setFormData(facultyToEdit);
    setEditIndex(index);
    setShowModal(true);
  };

  const handleDelete = (index) => {
    const updatedList = [...facultyList];
    updatedList.splice(index, 1);
    setFacultyList(updatedList);
  };

  return (
    <Container style={{marginTop:'100px'}}>
      <h2 className="mt-4 mb-3" >Faculty Details</h2>
      <Form onSubmit={handleSubmit}>
        {/* Form Inputs */}
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="subject">
          <Form.Label>Special Subject</Form.Label>
          <Form.Control
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="contact">
          <Form.Label>Contact Number</Form.Label>
          <Form.Control
            type="text"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="picture">
          <Form.Label>Profile Picture</Form.Label>
          <Form.Control
            type="file"
            name="picture"
            onChange={handleChange}
            accept="image/*" // Accept only image files
          />
        </Form.Group>
        <Form.Group controlId="intro">
          <Form.Label>Introduction</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="intro"
            value={formData.intro}
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          {editIndex !== null ? 'Update' : 'Submit'}
        </Button>
      </Form>

      {/* Faculty List Table */}
      <Table striped bordered hover className="mt-4">
        <thead>
          <tr>
            <th>Name</th>
            <th>Special Subject</th>
            <th>Contact</th>
            <th>Email</th>
            <th>Profile Picture</th>
            <th>Introduction</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {facultyList.map((faculty, index) => (
            <tr key={index}>
              <td>{faculty.name}</td>
              <td>{faculty.subject}</td>
              <td>{faculty.contact}</td>
              <td>{faculty.email}</td>
              <td>
                {faculty.picture && (
                  <Image
                    src={URL.createObjectURL(faculty.picture)}
                    alt={faculty.name}
                    thumbnail
                  />
                )}
              </td>
              <td>{faculty.intro}</td>
              <td>
                <Button variant="info" onClick={() => handleEdit(index)}>
                  Edit
                </Button>{' '}
                <Button variant="danger" onClick={() => handleDelete(index)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Edit Faculty Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Faculty Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            {/* Edit Form Inputs */}
            <Button variant="primary" type="submit">
              Update
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default FacultyList;
