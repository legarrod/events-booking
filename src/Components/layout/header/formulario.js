import React from 'react';
import styles from './header.module.scss';
import { Form, Container, Button, Icon } from "semantic-ui-react";
import { useFormik } from "formik";
import * as Yup from "yup";



export default function HeaderForm(){
    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(newSchame()),
    
        onSubmit: async  (formValue) => {
           try {
             console.log(formValue);
          } catch (error) {
            console.log(error);
          }
        },
      });
    return (
        <Container>
          <Form className={styles.formulario} onSubmit={formik.handleSubmit}>
            <div className={styles.formulario__campo}>
            <label>Donde</label>
            <Form.Input
            name="ciudad"
            placeholder="Donde es el evento"
            value={formik.values.ciudad}
            onChange={formik.handleChange}
            error={formik.errors.ciudad}
            />
            </div>
            <div className={styles.formulario__campo}>
             <label>Entrada</label>
            <Form.Input
            name="fechaInicio"
            type="date"
            placeholder="Fecha de innicio"
            value={formik.values.fechaInicio}
            onChange={formik.handleChange}
            error={formik.errors.fechaInicio}
            />
            </div>
              <div className={styles.formulario__campo}>
            <label>Salida</label>
            <Form.Input
                name="fechaFin"
                type="date"
                placeholder="Fecha de salida"
                value={formik.values.fechaFin}
                onChange={formik.handleChange}
                error={formik.errors.fechaFin}
            />
            </div>
              <div className={styles.formulario__campo}>
              <label>cuantos</label>
            <Form.Input
            name="invitados"
            placeholder="Invitados"
            value={formik.values.invitados}
            onChange={formik.handleChange}
            error={formik.errors.invitados}
            className={styles.formulario__input}
            />
            </div>
            <div className={styles.formulario__campo}>
              <div  className={styles.formulario__submit}>
                <Icon  name='search' />
              </div>
            </div>
           
        </Form>
        </Container>
    )
}
function initialValues() {
    return {
        ciudad: "",
        fechaInicio: "",
        fechaFin: "",
        invitados: ""
    };
  }
  
  function newSchame() {
    return {
        ciudad: Yup.string().required("El nombre del producto es obligatorio"),
        fechaInicio: Yup.string().required("El precio del producto es obligatorio"),
        fechaFin: Yup.string().required("La categoria del producto es obligatoria"),
        invitados: Yup.string().required(
          "la descripcion del producto es obligatoria")
    };
  }