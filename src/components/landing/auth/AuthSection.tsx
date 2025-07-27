import RegisterForm from "./registerForm/RegisterForm";
const AuthSection = () => {
  return (
    <section id="form" className="section-container">
      <h3 className="font-bold">Welcome</h3>
      <h2 className="text-fluid-h2">Get Started</h2>
      <p className="w-80 text-sm md:w-100 md:text-base text-center">
        Join our community of happy pet owners today!
      </p>
      <RegisterForm />
    </section>
  );
};
export default AuthSection;
