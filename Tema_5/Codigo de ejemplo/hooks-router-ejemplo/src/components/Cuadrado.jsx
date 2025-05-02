import React from "react";
import {useLocation, useParams, useSearchParams} from "react-router-dom";

export const Cuadrado = () => {

  //Obtener la ubicación actual
  const location = useLocation();
  console.log(location);

  //Obtener los path params
  const { id } = useParams();

  //Obtener los query params "artesanal"
  const queryParams = new URLSearchParams(location.search);
  const paramValue = queryParams.get("param");
  console.log(paramValue);

    //Obtener los query params con hook
  const queryParamsMap = useSearchParams();

  return <div className="cuadrado">Cuadrado {id} y query params: {queryParamsMap}</div>;
};
