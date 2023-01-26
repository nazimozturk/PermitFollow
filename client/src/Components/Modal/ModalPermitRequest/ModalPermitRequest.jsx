import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { makeRequest } from "../../../makeRequest";
import "../ModalPermitRequest/ModalPermitRequest.scss";
import Button from "react-bootstrap/Button";

const ModalPermitRequest = ({ userInfo }) => {
  const getPermitType = useQuery({
    queryKey: ["permit-types"],
    queryFn: () =>
      makeRequest.get(`/permit-types`).then((res) => {
        return res.data;
      }),
  });

  const [inputs, setInputs] = useState({});

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const [err, setErr] = useState(null);
  const handleClick = async (e) => {
    e.preventDefault();

    try {
      await makeRequest.post(`/permits?populate=*`, {
        data: {
          PersonelId: userInfo[0].user.id,
          Description: inputs.Description,
          StartDate: inputs.StartDate,
          EndDate: inputs.EndDate,
          File: {
            data: null,
          },
          users_permissions_user: {
            id: userInfo[0].user.id,
          },
          permit_type: {
            id: inputs.permitType,
          },
          permit_status: {
            id: 2,
          },
        },
      });
    } catch (err) {
      setErr(err.response.data);
    }
  };

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
              <span>
                {userInfo[0]?.user?.FirstName +
                  " " +
                  userInfo[0]?.user?.LastName}
              </span>
            </td>
          </tr>
          <tr>
            <td className="right">Departman</td>
            <td>
              <span>
                {
                  userInfo[1]?.data?.data?.attributes?.department?.data
                    ?.attributes?.DepartmentName
                }
              </span>
            </td>
          </tr>
          <tr>
            <td className="right">İzin Talep tarihi</td>
            <td>
              <span>{new Date().toLocaleDateString()}</span>
            </td>
          </tr>
          <tr>
            <td className="right">İzin Tipi</td>
            <td>
              <select
                className="select"
                id="format"
                name="permitType"
                onChange={handleChange}
                defaultValue={"DEFAULT"}
              >
                <option disabled value="DEFAULT">
                  izin Tipini Seçiniz
                </option>
                {getPermitType?.data?.data.map((item, index) => (
                  <option value={item.id} key={item.id}>
                    {item.attributes.PermitName}
                  </option>
                ))}
              </select>
            </td>
          </tr>
          <tr>
            <td className="right">İzne Çıkış</td>
            <td>
              <input
                type="date"
                className="select"
                name="StartDate"
                onChange={handleChange}
              />
            </td>
          </tr>
          <tr>
            <td className="right">İzin Dönüs</td>
            <td>
              <input
                type="date"
                className="select"
                name="EndDate"
                onChange={handleChange}
              />
            </td>
          </tr>
          <tr>
            <td className="right">Açıklama</td>
            <td>
              <textarea
                name="Description"
                rows="7"
                placeholder="İzin Sebebi"
                onChange={handleChange}
              ></textarea>
            </td>
          </tr>
          <tr>
            <td className="right">İzin Talep Dosyası</td>
            <td className="fileUpload">
              <input type="file" className="dosya" />
              <button className="upload">Yükle</button>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <Button
                style={{ float: "right", marginLeft: "10px" }}
                variant="primary"
                onClick={handleClick}
              >
                İzin Talep Et
              </Button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default ModalPermitRequest;
