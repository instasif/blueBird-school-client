
import AboutSchool from "./AboutSchool/AboutSchool";
import EmailForm from "./EamilForm/EmailForm";
import Gallery from "./Gallery/Gallery";
import HeadTecher from "./HeadTeacher/HeadTecher";
import Hero from "./Hero/Hero";
import Stats from "./Stats/Stats";
import SuccessfulStudens from "./SuccessfulStudents/SuccessfulStudens";

const Home = () => {
  return (
    <div className="mx-5">
      <Hero />
      <AboutSchool />
      <HeadTecher />
      <Stats />
      <Gallery />
      <SuccessfulStudens />
      <EmailForm />
    </div>
  );
};

export default Home;
