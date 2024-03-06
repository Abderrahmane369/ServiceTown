import { FcGoogle } from "react-icons/fc";

const styles = {
    navbar: {
        background: "white",
        padding: "10px",
        alignItems: "center",
        px: "113px",
        borderBottom: "1px solid",
        borderColor: "gray.200"
    },
    form: {
        box1: {
            p: "30px",
            mx: "auto",
            my: "7%",
            w: "512px",
            bg: "white",
            border: "1px solid",
            borderRadius: "5px",
            borderColor: "gray.200"
        },
        heading: {
            as: "h1",
            mb: "33",
            textAlign: "center",
            fontSize: "30px"
        },
        input: {
            fontSize: "15px",
            size: "lg",
            w: "446px",
            borderColor: "gray.400",
            focusBorderColor: "black"
        },
        button_google: {
            size: "lg",
            variant: "outline",
            w: "100%",
            leftIcon: <FcGoogle size="20px" />
        }
    }
};

export default styles;
