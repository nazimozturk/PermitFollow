import React, { useEffect, useState } from "react";
import "./Admin.scss";
import { Badge } from "@mui/material";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import EmailIcon from "@mui/icons-material/Email";
import ModalPersonnelOperations from "../../Components/Modal/ModalPersonnelOperations/ModalPersonnelOperations";
import ModalPersonelAdd from "../../Components/Modal/ModalPersonelAdd/ModalPersonelAdd";
import { makeRequest } from "../../makeRequest";
import { useQuery } from "@tanstack/react-query";
const Admin = () => {
  const {
    isLoading,
    data: { data = [] },
  } = useQuery({
    queryKey: ["users"],
    queryFn: () =>
      makeRequest.get(`/users?populate=*`).then((res) => {
        return res;
      }),
  });

  const [userInfo, setUserInfo] = useState({});
  const userDetailModal = (item) => {
    setUserInfo(item);
    setLgShow(true);
  };

  const [smShow, setSmShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);

  const handleCloseSm = () => setSmShow(false);
  const handleCloseLg = () => setLgShow(false);

  const [isActive, setIsActive] = useState({
    id: "",
  });
  useEffect(() => {}, [isActive]);
  const hideShowDiv = (e) => {
    setIsActive({
      id: e.target.id,
    });
  };

  return (
    <>
      {isLoading ? (
        "loading"
      ) : (
        <>
          <div className="admin">
            <div className="top" id="personel">
              <div className="wrapper">
                <button
                  className="personelButton"
                  id="personelManager"
                  onClick={(e) => {
                    hideShowDiv(e);
                  }}
                >
                  <PersonAddIcon className="icon" />
                  Personel İşlemleri
                </button>
                <button
                  className="permitCheck"
                  id="onayBekleyen"
                  onClick={(e) => {
                    hideShowDiv(e);
                  }}
                >
                  Onay Beklenen
                  <Badge
                    badgeContent={4}
                    color="primary"
                    className="badgeColor"
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "right",
                    }}
                  >
                    <EmailIcon color="primary" className="badgeColor" />
                  </Badge>
                </button>
              </div>
            </div>
            <div
              className={
                isActive.id === "personelManager"
                  ? `center`
                  : "personelManager d-none"
              }
            >
              <table>
                <thead>
                  <tr>
                    <th className="header" colSpan={6}>
                      Personel Yönetim
                    </th>
                    <th className="personelAdd" onClick={() => setSmShow(true)}>
                      <button>
                        <PersonAddIcon /> Personel Ekleme
                      </button>
                    </th>
                  </tr>
                  <tr>
                    <td></td>
                  </tr>
                  <tr>
                    <th>İsim Soyisim</th>
                    <th>Departmanı</th>
                    <th>İşe Giriş Tarihi</th>
                    <th>İşe Çıkış Tarihi</th>
                    <th>Çalışan Statü</th>
                    <th>Durum</th>
                    <th>İşlemler</th>
                  </tr>
                </thead>
                <tbody>
                  {data?.map((item) => (
                    <tr key={item.id}>
                      <td>{item?.FirstName + " " + item?.LastName}</td>
                      <td>
                        {
                          item?.attributes?.department_manager.data?.attributes
                            ?.DepartmentId
                        }
                      </td>
                      <td>{item?.attributes?.Email}</td>
                      <td>{item?.attributes?.FirstName}</td>
                      <td>{item?.attributes?.TotalPermitCount}</td>
                      <td>{item?.attributes?.ActiveStatus}</td>
                      <td>
                        <div className="icon">
                          <ManageAccountsIcon
                            className="icons"
                            onClick={() => {
                              userDetailModal(item);
                            }}
                          />
                          <PersonRemoveIcon className="icons" />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div
              className={
                isActive.id === "onayBekleyen"
                  ? `bottom`
                  : "onayBekleyen d-none"
              }
            >
              <table>
                <thead>
                  <tr>
                    <th className="header" colSpan={7}>
                      Onay Bekleyen
                    </th>
                  </tr>
                  <tr>
                    <td></td>
                  </tr>
                  <tr>
                    <th>İsim Soyisim</th>
                    <th>Departmanı</th>
                    <th>İşe Giriş Tarihi</th>
                    <th>İşe Çıkış Tarihi</th>
                    <th>Çalışan Statü</th>
                    <th>Durum</th>
                    <th>İşlemler</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Nazım ÖZTÜRK</td>
                    <td>Yazılım / L1</td>
                    <td>01.01.2023</td>
                    <td>Devam Ediyor</td>
                    <td>Stajyer</td>
                    <td>Aktif</td>
                    <td>
                      <div className="icon">
                        <button className="green">
                          <ThumbUpAltOutlinedIcon />
                          &nbsp; Onayla
                        </button>
                        <button className="red">
                          <ThumbDownAltOutlinedIcon />
                          &nbsp; İptal Et
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <Modal
            size="lg"
            show={smShow}
            onHide={() => setSmShow(false)}
            aria-labelledby="example-modal-sizes-title-sm"
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-modal-sizes-title-sm">
                Personel Ekle
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <ModalPersonelAdd />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseSm}>
                Kapat
              </Button>
              <Button variant="primary" onClick={handleCloseSm}>
                Personel Ekle
              </Button>
            </Modal.Footer>
          </Modal>

          <Modal
            size="lg"
            show={lgShow}
            onHide={() => setLgShow(false)}
            aria-labelledby="example-modal-sizes-title-lg"
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-modal-sizes-title-lg">
                Personel Yönetim
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <ModalPersonnelOperations userInfo={userInfo} />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseLg}>
                Kapat
              </Button>
              <Button variant="primary" onClick={handleCloseLg}>
                Değişikliği Kaydet
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      )}
    </>
  );
};

export default Admin;
