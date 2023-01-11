import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './Home.scss';
import PostAddOutlinedIcon from '@mui/icons-material/PostAddOutlined';
import ModalPermitRequest from '../../Components/Modal/ModalPermitRequest/ModalPermitRequest';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import useFetch from '../../hooks/useFetch';

const Home = () => {
  const id = useParams().id;

  const { data, loading, error } = useFetch(`/personels/1?populate=*&`);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [userInfo, setUserInfo] = useState({});

  const userDetailModal = (item) => {
    setUserInfo(item);
    handleShow(true);
  };

  return (
    <>
      <div className="home">
        {loading ? (
          'loading'
        ) : (
          <>
            <div className="top">
              <div className="left">
                <h1>
                  {data?.attributes?.FirstName +
                    ' ' +
                    data?.attributes?.LastName}
                </h1>
              </div>
              <div className="right">
                <h2>Tarih: {new Date().toLocaleDateString()}</h2>
              </div>
            </div>
            <div className="center">
              <table>
                <thead>
                  <tr>
                    <th>İzin Talep</th>
                    <td>
                      <button
                        onClick={() => {
                          userDetailModal(data);
                        }}
                      >
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
                    <td>
                      aaa
                      {/* {
                        data.attributes.department_manager.data?.attributes
                          .DepartmentId
                      } */}
                    </td>
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
          </>
        )}
      </div>

      <Modal show={show} size="lg" onHide={handleClose} animation={true}>
        <Modal.Header closeButton>
          <Modal.Title>İzin Talep Formu</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ModalPermitRequest userInfo={userInfo} />
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
