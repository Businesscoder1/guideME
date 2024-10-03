// import loginImg from "../assets/Images/login.webp"
import Template from "../Components/core/Auth/Template"

function Login() {
  return (
    <Template
      title="Welcome Back !"
      description1="Log in to access your personalized dashboard and continue your journey."
      description2="Guidance to choose  your career."
      // image={loginImg}
      formType="login"
    />
  )
}

export default Login
