const AboutSection = () => {
  return (
    <section
      id="faq"
      className=" bg-primary-pink-100 w-full  gap-16  py-25 px-12"
    >
      <div className="flex items-center flex-col gap-20  w-full mx-auto">
        <h2 className="text-5xl mb-8 mt-2 text-center">About us</h2>
        <div className="max-w-160  w-full mx-auto flex flex-col gap-6">
          <p> Text about us</p>
          <div>gallery</div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
