import React, { useContext, useState } from 'react';
import './Home.scss';
import PostAddOutlinedIcon from '@mui/icons-material/PostAddOutlined';
import ModalPermitRequest from '../../Components/Modal/ModalPermitRequest/ModalPermitRequest';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { AuthContext } from '../../hooks/authContext';
import { useQuery } from '@tanstack/react-query';
import { makeRequest } from '../../makeRequest';
import moment from 'moment';

const Home = () => {
  const { currentUser } = useContext(AuthContext);

  const { isLoading, data } = useQuery({
    queryKey: ['users'],
    queryFn: () =>
      makeRequest
        .get(`/users/${currentUser.user.id}?populate=*`)
        .then((res) => {
          return res.data;
        }),
  });

  const getDepartments = useQuery({
    queryKey: ['departmentPersonels'],
    queryFn: () =>
      makeRequest
        .get(`/departmentpersonels/${currentUser.user.id}?populate=*`)
        .then((res) => {
          return res.data;
        }),
  });
  const departmentsName =
    getDepartments.data?.data?.attributes?.department?.data?.attributes
      ?.DepartmentName;

  // const permitCreatedDate = new Date(data?.permits[0]?.CreatedDate);
  // const permitStartDate = new Date(data?.permits[0]?.StartDate);
  // const permitEndDate = new Date(data?.permits[0]?.EndDate);
  // const permitDesc = data?.permit_statuses[0]?.Description;

  // console.log(moment(data?.permits[0].CreatedDate).format('L'));

  // console.log(
  //   data?.permits.map((x, index) => {
  //     return x.createdAt;
  //   })
  // );

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
        {isLoading ? (
          'loading'
        ) : (
          <>
            <div className="top">
              <div className="left">
                <h1>
                  {currentUser?.user?.FirstName +
                    ' ' +
                    currentUser?.user?.LastName}
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
                          userDetailModal(currentUser);
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
                    <td>{currentUser?.user?.TotalPermitCount}</td>
                  </tr>
                  <tr>
                    <th>Kalan İzinlerim</th>
                    <td>{currentUser?.user?.AllowedPermitCount}</td>
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
                  {data?.permits?.map((item, index) => (
                    <tr key={item.id}>
                      <td>
                        {currentUser?.user?.FirstName +
                          ' ' +
                          currentUser?.user?.LastName}
                      </td>
                      <td>{departmentsName}</td>

                      <td>
                        {moment(data?.permits[index]?.CreatedDate).format(
                          'DD/MM/YYYY'
                        )}
                      </td>

                      <td>{data?.permits[index]?.Type}</td>
                      <td>
                        {moment(data?.permits[index]?.StartDate).format(
                          'DD/MM/YYYY'
                        )}
                      </td>
                      <td>
                        {moment(data?.permits[index]?.EndDate).format(
                          'DD/MM/YYYY'
                        )}
                      </td>
                      <td>{data?.permits[index]?.Status}</td>
                      <td>{data?.permits[index]?.Description}</td>
                      <td>Nazım</td>
                    </tr>
                  ))}
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
