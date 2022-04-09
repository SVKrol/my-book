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

export default function CreateModal({ setPosts }) {
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
    api.addPost(newPost).then(() => {
      api.getPostsList().then((newPosts) => {
        setPosts(newPosts);
      });
    });
    setOpen(false);
  }

  return (
    <div className={s.addPost_div}>
      <Button onClick={handleOpen}>Разместить пост</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
            <h3>Новый пост</h3>
            <input
              type="text"
              {...register("title", {
                required: "Заполнить обязательно*",
              })}
              placeholder="Название"
            />
            <div>
              {errors?.title && (
                <p className={s.errorMessage}>{errors?.title?.message}</p>
              )}
            </div>
            <input
              type="text"
              {...register("image")}
              placeholder="Ссылка на картинку"
            />
            {<input 
                type="text"
                {...register('tags')}
                placeholder="Теги"
             />}
            <textarea
              type="text"
              {...register("text", {
                pattern: {
                  required: "Место для текста осталось пустым",
                },
              })}
              placeholder="Текст"
            />
            {errors?.text && (
              <p className={s.errorMessage}>{errors?.text?.message}</p>
            )}
            <button>Опубликовать</button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
