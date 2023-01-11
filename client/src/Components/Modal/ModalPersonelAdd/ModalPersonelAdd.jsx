import React from 'react';
import '../ModalPersonelAdd/ModalPersonelAdd.scss';

const ModalPersonelAdd = () => {
  return (
    <>
      <table className="modalTable">
        <thead>
          <tr>
            <th className="right">Bilgiler</th>
            <th>Doldurulmasi Gereken Alanlar</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="right">İsim</td>
            <td>
              <input type="text" placeholder="İsim" name="" id="" />
            </td>
          </tr>
          <tr>
            <td className="right">Soyisim</td>
            <td>
              <input type="text" placeholder="Soyisim" name="" id="" />
            </td>
          </tr>
          <tr>
            <td className="right">Şifre</td>
            <td>
              <input type="password" placeholder="Şifre" name="" id="" />
            </td>
          </tr>
          <tr>
            <td className="right">Şifre Tekrar</td>
            <td>
              <input type="password" placeholder="Şifre Tekrar" name="" id="" />
            </td>
          </tr>
          <tr>
            <td className="right">Departman</td>
            <td>
              <select className="select" id="format">
                <option disabled>izin Tipini Seçiniz</option>
                <option value="1">L1 / YAZILIM DESTEK UZMANI</option>
                <option value="2">L2 / YAZILIM UZMANI</option>
              </select>
            </td>
          </tr>
          <tr>
            <td className="right">İşe Giriş Tarihi</td>
            <td>
              <input type="date" name="" id="" />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default ModalPersonelAdd;
