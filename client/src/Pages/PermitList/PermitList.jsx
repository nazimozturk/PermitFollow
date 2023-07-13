import { useQuery } from "@tanstack/react-query";
import moment from "moment";
import React from "react";
import { makeRequest } from "../../makeRequest";
import "./PermitList.scss";

const PermitList = () => {
  const { isLoading, data } = useQuery({
    queryKey: ["users"],
    queryFn: () =>
      makeRequest.get(`/permits?populate=*`).then((res) => {
        return res.data;
      }),
  });

  console.log(data);

  return (
    <>
      <div className="permitList">
        {isLoading ? (
          "loading"
        ) : (
          <>
            <div className="header">
              <h1>izin Listesi</h1>
            </div>
            <table>
              <thead>
                <tr>
                  <th>#ID</th>
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
                {data?.data?.map((item, index) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>
                      {item?.attributes?.users_permissions_user?.data
                        ?.attributes?.FirstName +
                        " " +
                        item?.attributes?.users_permissions_user?.data
                          ?.attributes?.LastName}
                    </td>
                    <td>Yazılım / L1</td>
                    <td>
                      {moment(item?.attributes?.createdAt).format("DD/MM/YYYY")}
                    </td>
                    <td>
                      {
                        item?.attributes?.permit_type?.data.attributes
                          ?.PermitName
                      }
                    </td>
                    <td>
                      {moment(item?.attributes?.StartDate).format("DD/MM/YYYY")}
                    </td>
                    <td>
                      {moment(item?.attributes?.EndDate).format("DD/MM/YYYY")}
                    </td>
                    <td>10 Gün</td>
                    <td>
                      {
                        item?.attributes?.permit_status?.data.attributes
                          ?.Description
                      }
                    </td>
                    <td>{item?.attributes?.Description}</td>
                    <td>
                      {
                        item?.attributes?.permit_status?.data.attributes
                          ?.Sequence
                      }
                    </td>
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

export default PermitList;
