import React, { useContext, useState } from "react";
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
          `/permits?pagination[page]=${currentPage}&pagination[pageSize]=7&populate=*`
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
                    <th>??zin Talep</th>
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
                    <th>Hak Edilen ??zin</th>
                    <td>{currentUser?.user?.TotalPermitCount}</td>
                  </tr>
                  <tr>
                    <th>Kalan ??zinlerim</th>
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
                    <th>??sim Soyisim</th>
                    <th>Departman??</th>
                    <th>Talep Edilen Tarih</th>
                    <th>??zin Tipi </th>
                    <th>????k???? Tarihi </th>
                    <th>D??n???? Tarihi </th>
                    <th>Durum</th>
                    <th>A????klama</th>
                    <th style={{ borderRadius: "0px 5px 5px 0px" }}>
                      Onaylayan
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {permit?.map((item, index) => (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>
                        {currentUser?.user?.FirstName +
                          " " +
                          currentUser?.user?.LastName}
                      </td>
                      <td>{departmentsName}</td>
                      <td>
                        {moment(data?.permits[index]?.CreatedDate).format(
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
                        {moment(data?.permits[index]?.StartDate).format(
                          "DD/MM/YYYY"
                        )}
                      </td>
                      <td>
                        {moment(data?.permits[index]?.EndDate).format(
                          "DD/MM/YYYY"
                        )}
                      </td>
                      <td>
                        {data?.permit_statuses[index]?.Status === 1
                          ? "Onayland??"
                          : data?.permit_statuses[index]?.Status === 0
                          ? "Onay Bekliyor"
                          : "Reddedildi"}
                      </td>
                      <td>{data?.permits[index]?.Description}</td>
                      <td>Naz??m</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="tfoot">
                <Pagination
                  totalCount={getPermits?.data?.meta?.pagination.total}
                  setCurrentPage={setCurrentPage}
                  pageCount={getPermits?.data?.meta?.pagination.pageCount}
                  pageSize={getPermits?.data?.meta?.pagination.pageSize}
                />
              </div>
            </div>
          </>
        )}
      </div>

      <Modal show={show} size="lg" onHide={handleClose} animation={true}>
        <Modal.Header closeButton>
          <Modal.Title>??zin Talep Formu</Modal.Title>
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
