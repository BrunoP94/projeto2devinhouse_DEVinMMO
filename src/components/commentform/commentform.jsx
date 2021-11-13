import React, { useEffect } from "react";
import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { NameEmailCard, StyleErrorMessage, CommentCard, SubmitButton } from "./commentform.style";
import { useCommentList, CheckLocalStorage } from "../../context";

export function CommentForm( props ) {  

   let {comments, CheckLocalStorage } = useCommentList(); 

    useEffect(()=>(
        CheckLocalStorage(props.pageid)
        
    ),[])
    
      return (
        <>
        <Formik 
        validationSchema={Yup.object().shape({
            name: Yup.string().required("Nome é obrigatório"),
            email: Yup.string().email("Insira um e-maill válido").required("Insira um e-maill válido"),
            comment: Yup.string().required("Comentário é obrigatório")
        })}
        initialValues ={{
            name:"",
            email:"",
            comment:"",
        }}
        onSubmit={(values, {resetForm})=>{
            resetForm()
            CheckLocalStorage (props.pageid)
            }}>
            {(formProps)=>{
                const {errors} = formProps;
                return(
                   
            <Form>
                <NameEmailCard>
                    <div>
                <Field className="nameField" name="name" type="text" placeholder="Nome" />
                <StyleErrorMessage>{errors.name}</StyleErrorMessage>
                    </div>
                    <div>
                <Field className="emailField" name="email" type="text" placeholder="nome@dominio.com" />
                <StyleErrorMessage>{errors.email}</StyleErrorMessage>
                    </div>
                </NameEmailCard>
                <CommentCard>
                <Field className="commField" name ="comment" type="textarea" placeholder="Comentario"/>
                <StyleErrorMessage>{errors.comment}</StyleErrorMessage>
                </CommentCard>
                <SubmitButton type="submit">Enviar</SubmitButton>
            </Form>
        )}}
        </Formik>

        </>
      );
     
    }
