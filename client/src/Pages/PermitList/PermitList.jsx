import React from 'react';
import './PermitList.scss';

const PermitList = () => {
  return (
    <>
      <div className="permitList">
        <div className="header">
          <h1>izin Listesi</h1>
        </div>
        <table>
          <thead>
            <tr>
              <th>İsim Soyisim</th>
              <th>Departmanı</th>
              <th>Talep Edilen Tarih</th>
              <th>İzin Tipi </th>
              <th>Çıkış Tarihi </th>
              <th>Dönüş Tarihi </th>
              <th>Kalan İzin </th>
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
              <td>10 Gün</td>
              <td>Onaylandı</td>
              <td>OK</td>
              <td>Nazım</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default PermitList;
