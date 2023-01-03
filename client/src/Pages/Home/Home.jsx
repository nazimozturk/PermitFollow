import React, { useState } from 'react';
import './Home.scss';
import PostAddOutlinedIcon from '@mui/icons-material/PostAddOutlined';
import ModalPermitRequest from '../../Components/Modal/ModalPermitRequest/ModalPermitRequest';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const d = new Date();
let text = d.toLocaleDateString();

const Home = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="home">
        <div className="top">
          <div className="left">
            <h1>Nazim OZTURK</h1>
          </div>
          <div className="right">
            <h2>Tarih: {text}</h2>
          </div>
        </div>
        <div className="center">
          <table>
            <thead>
              <tr>
                <th>İzin Talep</th>
                <td>
                  <button onClick={handleShow}>
                    <PostAddOutlinedIcon />
                  </button>
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Hak Edilen İzin</th>
                <td>95 Gün</td>
              </tr>
              <tr>
                <th>Kalan İzinlerim</th>
                <td>15 Gün</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="bottom">
          <table>
            <thead>
              <tr>
                <th>İsim Soyisim</th>
                <th>Departmanı</th>
                <th>Talep Edilen Tarih</th>
                <th>İzin Tipi </th>
                <th>Çıkış Tarihi </th>
                <th>Dönüş Tarihi </th>
                <th>Durum</th>
                <th>Açıklama</th>
                <th>Onaylayan</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Nazım ÖZTÜRK</td>
                <td>Yazılım / L1</td>
                <td>28-05-2022</td>
                <td>Yıllık İzin</td>
                <td>09-09-2022</td>
                <td>19-09-2022</td>
                <td>Onaylandı</td>
                <td>OK</td>
                <td>Nazım</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <Modal
        show={show}
        size="lg"
        centered
        onHide={handleClose}
        animation={true}
      >
        <Modal.Header closeButton>
          <Modal.Title>İzin Talep Formu</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ModalPermitRequest />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Kapat
          </Button>
          <Button variant="primary" onClick={handleClose}>
            İzin Talep Et
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Home;
