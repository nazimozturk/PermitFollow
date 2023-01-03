import React, { useEffect, useState } from 'react';
import './Admin.scss';
import { Badge } from '@mui/material';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';

import EmailIcon from '@mui/icons-material/Email';
import ModalPersonnelOperations from '../../Components/Modal/ModalPersonnelOperations/ModalPersonnelOperations';
const Admin = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [isActive, setIsActive] = useState({
    id: '',
  });
  useEffect(() => {}, [isActive]);
  const hideShowDiv = (e) => {
    setIsActive({
      id: e.target.id,
    });
  };

  return (
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
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
              >
                <EmailIcon color="primary" className="badgeColor" />
              </Badge>
            </button>
          </div>
        </div>
        <div
          className={
            isActive.id === 'personelManager'
              ? `center`
              : 'personelManager d-none'
          }
        >
          <table>
            <thead>
              <tr>
                <th className="header" colSpan={6}>
                  Personel İşlemleri
                </th>
                <th className="personelAdd">
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
              <tr>
                <td>Nazım ÖZTÜRK</td>
                <td>Yazılım / L1</td>
                <td>01.01.2023</td>
                <td>Devam Ediyor</td>
                <td>Stajyer</td>
                <td>Aktif</td>
                <td>
                  <div className="icon">
                    <ManageAccountsIcon
                      className="icons"
                      onClick={handleShow}
                    />
                    <PersonRemoveIcon className="icons" />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div
          className={
            isActive.id === 'onayBekleyen' ? `bottom` : 'onayBekleyen d-none'
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
                      <ThumbDownAltOutlinedIcon onClick={handleShow} />
                      &nbsp; İptal Et
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <Modal show={show} size="lg" onHide={handleClose} animation={true}>
        <Modal.Header closeButton>
          <Modal.Title>Kullanıcı Güncelle</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ModalPersonnelOperations />
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

export default Admin;
