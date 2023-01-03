import React from 'react';
import '../ModalPermitRequest/Modal.scss';

const d = new Date();
let text = d.toLocaleDateString();

const ModalPermitRequest = () => {
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
            <td className="right">İsim Soyisim</td>
            <td>
              <span>NAZIM ÖZTÜRK</span>
            </td>
          </tr>
          <tr>
            <td className="right">Departman</td>
            <td>
              <span>l1 destek</span>
            </td>
          </tr>
          <tr>
            <td className="right">İzin Talep tarihi</td>
            <td>
              <span>{text}</span>
            </td>
          </tr>
          <tr>
            <td className="right">İzin Tipi</td>
            <td>
              <select className="select" id="format">
                <option selected disabled>
                  izin Tipini Seçiniz
                </option>
                <option value="1">Yıllık izni</option>
                <option value="2">Mazeret izni</option>
                <option value="3">Evlilik izni</option>
                <option value="4">Taşınma izni</option>
              </select>
            </td>
          </tr>
          <tr>
            <td className="right">İzne Çıkış</td>
            <td>
              <input type="date" className="select" />
            </td>
          </tr>
          <tr>
            <td className="right">İzin Dönüs</td>
            <td>
              <input type="date" className="select" />
            </td>
          </tr>
          <tr>
            <td className="right">Açıklama</td>
            <td>
              <textarea name="" rows="7" placeholder="İzin Sebebi"></textarea>
            </td>
          </tr>
          <tr>
            <td className="right">İzin Talep Dosyası</td>
            <td className="fileUpload">
              <input type="file" className="dosya" />
              <button className="upload">Yükle</button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default ModalPermitRequest;
