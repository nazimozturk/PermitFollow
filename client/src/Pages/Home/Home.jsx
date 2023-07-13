import React, { useContext, useEffect, useState } from "react";
import "./Home.scss";
import PostAddOutlinedIcon from "@mui/icons-material/PostAddOutlined";
import ModalPermitRequest from "../../Components/Modal/ModalPermitRequest/ModalPermitRequest";
import Modal from "react-bootstrap/Modal";
import { AuthContext } from "../../hooks/authContext";
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../makeRequest";
import moment from "moment";
import Pagination from "../../Components/Paginations/Pagination";

const Home = () => {
  const { currentUser } = useContext(AuthContext);

  const { isLoading, data } = useQuery({
    queryKey: ["users"],
    queryFn: () =>
      makeRequest
        .get(`/users/${currentUser.user.id}?populate=*`)
        .then((res) => {
          return res.data;
        }),
  });

  const getDepartments = useQuery({
    queryKey: ["department-personels"],
    queryFn: () =>
      makeRequest
        .get(`/department-personels/${currentUser.user.id}?populate=*`)
        .then((res) => {
          return res.data;
        }),
  });

  const departmentsName =
    getDepartments.data?.data?.attributes?.department?.data?.attributes
      ?.DepartmentName;

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [userInfo, setUserInfo] = useState({});

  const userDetailModal = (item) => {
    setUserInfo(item);
    handleShow(true);
  };

  const [currentPage, setCurrentPage] = useState(1);

  const [permit, setPermit] = useState([]);
  const getPermits = useQuery({
    queryKey: ["permits"],
    queryFn: () =>
      makeRequest
        .get(
          `/permits/${currentUser.user.id}?pagination[page]=${currentPage}&pagination[pageSize]=7&populate=*`
        )
        .then((res) => {
          let pertmitType = [];
          for (let i = 0; i < res.data.data.length; i++) {
            pertmitType.push(res.data.data[i]);
          }
          setPermit(pertmitType);
          return res.data;
        }),
  });

  useEffect(() => {
    if (getPermits.refetch) {
      getPermits.refetch({
        queryKey: ["permits"],
        queryFn: () =>
          makeRequest
            .get(
              `/permits/${currentUser.user.id}?pagination[page]=${currentPage}&pagination[pageSize]=7&populate=*`
            )
            .then((res) => {
              let pertmitType = [];
              for (let i = 0; i < res.data.data.length; i++) {
                pertmitType.push(res.data.data[i]);
              }
              setPermit(pertmitType);
              return res.data;
            }),
      });
    }
  }, [currentPage]);

  return (
    <>
      <div className="home">
        {isLoading ? (
          "loading"
        ) : (
          <>
            <div className="top">
              <div className="left">
                <h1>
                  {currentUser?.user?.FirstName +
                    " " +
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
                    <th style={{ borderRadius: "5px 0px 0px 5px" }}>#ID</th>
                    <th>İsim Soyisim</th>
                    <th>Departmanı</th>
                    <th>Talep Edilen Tarih</th>
                    <th>İzin Tipi </th>
                    <th>Çıkış Tarihi </th>
                    <th>Dönüş Tarihi </th>
                    <th>Durum</th>
                    <th>Açıklama</th>
                    <th style={{ borderRadius: "0px 5px 5px 0px" }}>
                      İşlemi Yapan
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {permit?.map((item, index) => (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>
                        {item.attributes?.users_permissions_user?.data
                          ?.attributes?.FirstName +
                          " " +
                          item.attributes?.users_permissions_user?.data
                            ?.attributes?.LastName}
                      </td>
                      <td>{departmentsName}</td>
                      <td>
                        {moment(permit[index]?.attributes?.CreatedDate).format(
                          "DD/MM/YYYY"
                        )}
                      </td>
                      <td>
                        {
                          permit[index]?.attributes?.permit_type?.data
                            ?.attributes?.PermitName
                        }
                      </td>
                      <td>
                        {moment(permit[index]?.attributes?.StartDate).format(
                          "DD/MM/YYYY"
                        )}
                      </td>
                      <td>
                        {moment(permit[index]?.attributes?.EndDate).format(
                          "DD/MM/YYYY"
                        )}
                      </td>
                      <td>
                        {
                          permit[index]?.attributes?.permit_status?.data
                            ?.attributes?.Description
                        }
                      </td>
                      <td>{permit[index]?.attributes?.Description}</td>
                      <td>Nazım</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="tfoot">
                <Pagination
                  totalCount={getPermits?.data?.meta?.pagination?.total || 0}
                  setCurrentPage={setCurrentPage}
                  pageCount={getPermits?.data?.meta?.pagination?.pageCount || 0}
                  pageSize={getPermits?.data?.meta?.pagination?.pageSize || 0}
                />
              </div>
            </div>
          </>
        )}
      </div>
      <Modal show={show} size="lg" onHide={handleClose} animation={true}>
        <Modal.Header closeButton>
          <Modal.Title>İzin Talep Formu</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ModalPermitRequest userInfo={[currentUser, getDepartments]} />
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
};

export default Home;
