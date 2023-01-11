import React, { useState } from 'react';

const ModalPersonnelOperations = ({ userInfo }) => {
  console.log(userInfo);

  return (
    <>
      <div className="personelOperation">
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
                <input
                  type="text"
                  placeholder="İsim"
                  name=""
                  id=""
                  value={userInfo?.attributes?.FirstName}
                />
              </td>
            </tr>
            <tr>
              <td className="right">Soyisim</td>
              <td>
                <input
                  type="text"
                  placeholder="İsim"
                  name=""
                  id=""
                  value={userInfo?.attributes?.LastName}
                />
              </td>
            </tr>
            <tr>
              <td className="right">Departman</td>
              <td>
                <span>
                  <select className="select" id="format">
                    <option disabled>izin Tipini Seçiniz</option>
                    <option value="1">Yıllık izni</option>
                    <option value="2">Mazeret izni</option>
                    <option value="3">Evlilik izni</option>
                    <option value="4">Taşınma izni</option>
                  </select>
                </span>
              </td>
            </tr>
            <tr>
              <td className="right">İşe Giriş tarihi</td>
              <td>
                <span>{new Date().toLocaleDateString()}</span>
              </td>
            </tr>
            <tr>
              <td className="right">Durum</td>
              <td>
                <select className="select" id="format">
                  <option disabled selected>
                    Durum
                  </option>
                  <option value="1">Aktif Yap</option>
                  <option value="2">Pasif Yap</option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ModalPersonnelOperations;
