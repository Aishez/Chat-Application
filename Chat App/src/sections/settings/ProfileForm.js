import { useCallback, useState } from "react";
import * as Yup from "yup";
import { Link as RouterLink } from "react-router-dom";
// form
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// @mui
import { Link, Stack, Alert, IconButton, InputAdornment, Button } from "@mui/material";
// import { LoadingButton } from "@mui/lab";
// components
import FormProvider, { RHFTextField } from "../../components/hook-form";
import { Eye, EyeSlash } from "phosphor-react";
// import { LoginUser } from "../../redux/slices/auth";
import { useDispatch, useSelector } from "react-redux";


const ProfileForm = () => {
    const dispatch = useDispatch();
    const [file, setFile] = useState();
    const { user } = useSelector((state) => state.app);

    const ProfileSchema = Yup.object().shape({
        firstName: Yup.string().required("Name is required"),
        about: Yup.string().required("About is required"),
        avatarUrl: Yup.string().required("Avatar is required").nullable(true),
    });

    const defaultValues = {
        // firstName: user?.firstName,
        // about: user?.about,
        // avatar: `https://${S3_BUCKET_NAME}.s3.${AWS_S3_REGION}.amazonaws.com/${user?.avatar}`,

        name: "",
        about: "",
    };

    const methods = useForm({
        resolver: yupResolver(ProfileSchema),
        defaultValues,
    });

    const {
        reset,
        watch,
        control,
        setValue,
        setError,
        handleSubmit,
        formState: { errors, isSubmitting, isSubmitSuccessful },
    } = methods;


    const values = watch();

    const onSubmit = async (data) => {
        try {
            //   Send API request
            console.log("DATA", data);
            // dispatch(
            //     UpdateUserProfile({
            //         firstName: data?.firstName,
            //         about: data?.about,
            //         avatar: file,
            //     })
            // );
        } catch (error) {
            console.error(error);
            reset();
            setError("afterSubmit", {
                ...error,
                message: error.message,
            })
        }
    };

    const handleDrop = useCallback(
        (acceptedFiles) => {
            const file = acceptedFiles[0];

            setFile(file);

            const newFile = Object.assign(file, {
                preview: URL.createObjectURL(file),
            });

            if (file) {
                setValue("avatarUrl", newFile, { shouldValidate: true });
            }
        },
        [setValue]
    );

    return (
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={3}>
                {/* <RHFUploadAvatar name="avatar" maxSize={3145728} onDrop={handleDrop} /> */}

                <RHFTextField
                    name="firstName"
                    label="First Name"
                    helperText={"This name is visible to your contacts"}
                />
                <RHFTextField multiline rows={4} maxRows={5} name="about" label="About" />

                <Stack direction={"row"} justifyContent="end">
                    <Button
                        color="primary"
                        size="large"
                        type="submit"
                        variant="outlined"
                    // loading={isSubmitSuccessful || isSubmitting}
                    >
                        Save
                    </Button>
                </Stack>
            </Stack>
        </FormProvider>
    );
};

export default ProfileForm;
