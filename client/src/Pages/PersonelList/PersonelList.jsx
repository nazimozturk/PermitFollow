import React, { useEffect, useState } from 'react';
import './PersonelList.scss';
import useFetch from '../../hooks/useFetch';

const PersonelList = () => {
  const { data, loading, error } = useFetch(`/personels`);

  return (
    <>
      <div className="personelList">
        {loading ? (
          'loading'
        ) : (
          <>
            <div className="header">
              <h1>Personel Listesi</h1>
            </div>
            <table>
              <thead>
                <tr>
                  <th>İsim</th>
                  <th>Soyisim</th>
                  <th>Departman</th>
                  <th>İşe Giriş Tarihi</th>
                  <th>İşten Çıkış Tarihi</th>
                  <th>Hak Edilen Yıllık İzin</th>
                  <th>Durum</th>
                </tr>
              </thead>
              <tbody>
                {data?.map((item) => (
                  <tr key={item.id}>
                    <td>{item.attributes.FirstName}</td>
                    <td>{item.attributes.LastName}</td>
                    <td>{item.attributes.Email}</td>
                    <td>{item.attributes.FirstName}</td>
                    <td>{item.attributes.FirstName}</td>
                    <td>{item.attributes.TotalPermitCount}</td>
                    <td>{item.attributes.ActiveStatus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}
      </div>
    </>
  );
};

export default PersonelList;
