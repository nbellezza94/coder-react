import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

const FormularioFormik = () => {
    const { handleSubmit, handleChange, errors } = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
            repetPassword: "",
        },
        onSubmit: (data) => {
            console.log(data);
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .required("Este campo es obligatorio"),
            email: Yup.string()
                .email("El email debe contener @")
                .required("Este campo es obligatorio"),
            password: Yup.string()
                .required("Este campo es obligatorio")
                .matches(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,15}$/, {
                    message: "La contraseña debe tener un numero etc etc etc",
                }),
        }),
        validateOnChange: false,
    });
    console.log(errors);

    return (
        <div style={{ padding: "40px" }}>
            <form onSubmit={handleSubmit}>
                <TextField
                    type="text"
                    label="Nombre"
                    variant="outlined"
                    error={errors.name ? true : false}
                    name="name"
                    onChange={handleChange}
                    helperText={errors.name}
                />
                <TextField
                    type="text"
                    label="Email"
                    variant="outlined"
                    error={errors.email ? true : false}
                    name="email"
                    onChange={handleChange}
                    helperText={errors.email}
                />
                <TextField
                    type="text"
                    label="Pass"
                    variant="outlined"
                    error={errors.password ? true : false}
                    name="password"
                    onChange={handleChange}
                    helperText={errors.password}
                />
                <Button type="submit" variant="contained">
                    Enviar
                </Button>
            </form>
        </div>
    );
};

export default FormularioFormik;