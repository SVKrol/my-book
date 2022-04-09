import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import s from "./styles.module.css";
import { useForm } from "react-hook-form";
import api from "../../utils/Api";


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function UpdateModal({ setPosts }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });

  function onSubmit(newPost) {
    console.log("Отредактировать", newPost);
    setOpen(false);
  }

  return (
    <div className={s.updatePost_div}>
      <Button onClick={handleOpen}>Редактировать пост</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
            <h3>Мой пост</h3>
            <input
              type="text"
              {...register("title")}
              placeholder="Название"
            />
            <input
              type="text"
              {...register("image")}
              placeholder="Ссылка на картинку"
            />
            {/* <input 
                type="text"
                {...register('tags')}
                placeholder="Теги"
             /> */}
            <textarea
              type="text"
              {...register("text")}
              placeholder="Текст"
            />
            <button>Изменить пост</button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
