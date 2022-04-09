import React from "react";
import { useNavigate } from 'react-router-dom';
import { NotFound } from "../../components/NotFound";


export const NotFoundPage = () => {
  const navigate = useNavigate()
  return (
        <NotFound buttonAction={()=> navigate("/")}>
        </NotFound>
  );
};