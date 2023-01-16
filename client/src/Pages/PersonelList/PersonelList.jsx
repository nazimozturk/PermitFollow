import React from 'react';
import './PersonelList.scss';
import { makeRequest } from '../../makeRequest';
import { useQuery } from '@tanstack/react-query';

const PersonelList = () => {
  const { isLoading, data } = useQuery({
    queryKey: ['/users'],
    queryFn: () =>
      makeRequest.get('/users?populate=*').then((res) => {
        return res.data;
      }),
  });

  return (
    <>
      <div className="personelList">
        {isLoading ? (
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
                    <td>{item.FirstName}</td>
                    <td>{item.LastName}</td>
                    <td>{item.department_manager?.DepartmentId}</td>
                    {/* <td>{item.}</td>
                    <td>{item.}</td>
                    <td>{item.}</td>
                    <td>{item.}</td> */}
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
