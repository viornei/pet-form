import RegisterForm from "./registerForm/RegisterForm";
const AuthSection = () => {
  return (
    <section
      id="form"
      className="bg-primary-pink-100 flex h-auto min-h-screen w-full snap-center flex-col items-center justify-center gap-3 py-25 md:h-screen"
    >
      <h3 className="font-bold">Welcome</h3>
      <h2 className="text-5xl">Get Started</h2>
      <p className="w-80 text-sm md:w-100 md:text-base">
        Join our community of happy pet owners today!
      </p>
      <RegisterForm />
    </section>
  );
};
export default AuthSection;
