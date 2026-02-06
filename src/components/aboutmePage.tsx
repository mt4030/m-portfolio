import prof from '../../public/img/profile.jpg'

const About = () => {
  return (
    <section id="about" className=" p-6 mt-12 text-gray-900 text-center my-20 ">

      <div className=" mb-8">
        <h1 className="text-3xl font-bold  ">About Me</h1>
        <p className=" mt-2">A little bit about who I am, my skills, and my journey.</p>
      </div>

   
      <div className="flex justify-center items-center flex-col sm:flex-row gap-8 lg:px-100">
        <div className="w-32 h-32 md:w-150 md:h-50 rounded-full overflow-hidden">
          <img
            src={prof}
            alt="Profile Picture"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-center sm:text-left">
          <h2 className="text-2xl font-semibold ">Hi, I'm Mohsen</h2>
          <p className=" mt-4">
            I'm a passionate web developer with a knack for creating clean, user-friendly applications. My journey started with a love for solving problems and has evolved into a career where I get to build digital experiences that matter. I specialize in front-end technologies and enjoy working on projects that challenge my creativity.
          </p>
        </div>
      </div>

   
    </section>
  )
}

export default About
