import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axiosIns, { development } from "../Helper/Helper";
export const Init = (setLoading) => {
    setLoading(true)
    return async dispatch => {
        const token = localStorage.getItem("access");
        const premium = localStorage.getItem("premium");
        dispatch({
            type: 'LOGIN',
            payload: {
                access: token,
                premium: premium
            }
        })
        setTimeout(() => {
            setLoading(false)
        }, 5000)
    }
}

// Auth Part

export const LoginAction = (data, navigate, setLoading) => {
    setLoading(true);
    return async dispatch => {
        await axios.post(development + 'login/', data)
            .then(res => {
                if (res.status === 200) {
                    console.log(res.data)
                    localStorage.setItem("access", res.data.access);
                    localStorage.setItem("premium", res.data.premium);
                    dispatch({
                        type: 'LOGIN',
                        payload: {
                            access: res.data.access,
                            premium: res.data.premium
                        }
                    })
                    navigate("/")
                }
                setLoading(false);

            })
            .catch(err => {
                toast.error(err?.response?.data?.msg, {
                    position: "top-center",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                setLoading(false);

            })
    }
}

export const RegisterAction = (data, navigate, setLoading) => {
    setLoading(true)
    return async dispatch => {
        await axios.post(development + 'register/', data)
            .then(res => {
                if (res.status === 201) {
                    navigate('/otp', {
                        state: data.email
                    })
                }
                setLoading(false)
            })
            .catch(err => {
                toast.error(err?.response?.data?.msg, {
                    position: "top-center",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                setLoading(false)
            })
    }
}

export const VerifyAction = (data, navigate, setLoading) => {
    setLoading(true)
    return async dispatch => {
        await axios.post(development + 'verify/', data)
            .then(res => {
                if (res.status === 200) {
                    toast.success("OTP verified Successfully", {
                        position: "top-center",
                        autoClose: 1000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                    setTimeout(() => {
                        navigate('/login')
                        setLoading(false)
                    }, 3000)
                }
            })
            .catch(err => {
                toast.error(err?.response?.data?.msg, {
                    position: "top-center",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                setLoading(false)
            })
    }
}

export const ForgotAction = (data, navigate, setLoading) => {
    setLoading(true)
    return async dispatch => {
        await axios.post(development + 'forgot-password/', data)
            .then(res => {
                if (res.status === 200) {
                    toast.success("Email Sent Successfully", {
                        position: "top-center",
                        autoClose: 1000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                    setTimeout(() => {
                        navigate('/login')
                        setLoading(false)
                    }, 3000)
                }
            })
            .catch(err => {
                toast.error(err?.response?.data?.msg, {
                    position: "top-center",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                setLoading(false)
            })
    }
}

export const ResetAction = (data, navigate, setLoading, uid, token) => {
    setLoading(true)
    return async dispatch => {
        await axios.post(development + `reset-password/${uid}/${token}/`, data)
            .then(res => {
                if (res.status === 200) {
                    toast.success("Password Updated Successfully", {
                        position: "top-center",
                        autoClose: 1000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                    setTimeout(() => {
                        navigate('/login')
                        setLoading(false)
                    }, 3000)
                }
            })
            .catch(err => {
                toast.error(err?.response?.data?.msg, {
                    position: "top-center",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                setLoading(false)
            })
    }
}

// Auth Part Done

// Home section
export const GetProfileAction = (setLoading) => {
    setLoading(true);
    return async dispatch => {
        await axiosIns.get(development + 'myprofile/')
            .then(res => {
                if (res.status === 200) {
                    dispatch({
                        type: 'PROFILE',
                        payload: {
                            profile: res.data,
                            cards: res.data.cards
                        }
                    })
                }
                setLoading(false);

            })
            .catch(err => {
                toast.error(err?.response?.data?.msg, {
                    position: "top-center",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                setLoading(false);

            })
    }
}

export const GetCardAction = (setLoading, uid, token, name) => {
    setLoading(true);
    return async dispatch => {
        await axios.get(development + `share/${uid}/${token}/${name}/`)
            .then(res => {
                if (res.status === 200) {
                    dispatch({
                        type: 'CARD',
                        payload: res.data
                    })
                }
                setLoading(false);

            })
            .catch(err => {
                toast.error(err?.response?.data?.msg, {
                    position: "top-center",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                setLoading(false);

            })
    }
}



export const AddCardAction = (data, setLoading) => {
    const formData = new FormData();
    formData.append("name", data?.name)
    formData.append("title", data?.title)
    formData.append("template", data?.template)
    formData.append("headline", data?.headline)
    formData.append("mobile_no", data?.mobile_no)
    formData.append("photo", data?.photo)
    formData.append("email", data?.email)
    formData.append("website", data?.website)
    formData.append("company", data?.company)
    formData.append("company_description", data?.company_description)
    formData.append("facebook", data?.facebook)
    formData.append("instagram", data?.instagram)
    formData.append("linkedin", data?.linkedin)
    formData.append("twitter", data?.twitter)
    setLoading(true);
    return async dispatch => {
        await axiosIns.post(development + 'addcard/', formData)
            .then(res => {
                if (res.status === 201) {
                    toast.success("Card Added Sucessfulyy", {
                        position: "top-center",
                        autoClose: 1000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                }
                setLoading(false);
            })
            .catch(err => {
                console.log(err)
                toast.error(err?.response?.data?.msg, {
                    position: "top-center",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                setLoading(false);
            })
    }
}

export const LogoutAction = (navigate) => {
    return async dispatch => {
        localStorage.clear();
        navigate("/login");
        dispatch({
            type: 'LOGOUT',
            payload: null
        })
    }
}
